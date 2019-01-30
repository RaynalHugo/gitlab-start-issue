/* @flow  */

import { filter, get, sortBy, find, isNil } from "lodash/fp";

import initStore from "./connectors/store";
import readConfig from "./connectors/store/readConfig";

import Client from "./connectors/client";

import selectIssue from "./prompt/selectIssue";
import displayStartMessage from "./prompt/displayStartMessage";
import askForUserPrivateToken from "./prompt/askForUserPrivateToken";

import createBranchName from "./gitlab/createBranchName";
import getCurrentMilestoneFromMilestones from "./gitlab/getCurrentMilestoneFromMilestones";

async function main() {
	console.clear();
	displayStartMessage();

	const store = await initStore();
	await store.clear();
	await readConfig(store);

	let userPrivateToken = await store.getItem("userPrivateToken");

	if (isNil(userPrivateToken)) {
		// if (true) {
		userPrivateToken = await askForUserPrivateToken();
		await store.setItem("userPrivateToken", userPrivateToken);
	}

	const client = new Client();

	client.setStore(store);
	await client.init();

	let user = await store.getItem("user");
	if (isNil(user)) {
		await client.getUser();
	}

	const milestones = await client.getMilestones();
	console.log(milestones);

	await store.setItem(
		"milestone",
		getCurrentMilestoneFromMilestones(milestones)
	);

	const issues = await client.getIssues();

	const issueId = await selectIssue(sortBy(["iid"], issues));
	const issue = find(issue => get("iid", issue) === issueId, issues);
	const branchName = createBranchName(issue);

	if (!isNil(branchName)) {
		await client.createBranch(branchName);
		await client.createMergeRequest(branchName);
	}

	console.log(`created branch: ${branchName}`);

	// console.log(branchName);
}

main();
