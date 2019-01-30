import { get, isNil, join, replace, compact } from "lodash/fp";

async function getIssues() {
	const client = this.client;
	const store = this.store;
	if (isNil(client)) {
		throw new Error("no client in 'getIssues'");
	} else if (isNil(store)) {
		throw new Error("no store in 'getIssues'");
	} else {
		const projectId = await store.getItem("projectId");

		const user = await store.getItem("user");
		const assigneeId = get("id", user);
		const assigneeCondition = `assignee_id=${assigneeId}`;

		const milestone = await store.getItem("milestone");
		const milestoneTitle = get("title", milestone);
		const milestoneCondition = `milestone=${replace(
			" ",
			"%20",
			milestoneTitle
		)}`;

		const otherParameters = "per_page=100&state=opened";

		// TODO pagination

		const issues = get(
			"data",
			await client.get(
				`/projects/${projectId}/issues?${join(
					"&",
					compact([
						assigneeCondition,
						isNil(milestone) ? null : milestoneCondition,
						otherParameters
					])
				)}`
			)
		);

		return issues;
	}
}

export default getIssues;

async function getIssues2(client, { projectId, assigneeId, milestoneTitle }) {
	if (isNil(client)) {
		throw new Error("no client in 'getIssues'");
	} else {
		const assigneeCondition = `assignee_id=${assigneeId}`;

		const milestoneCondition = `milestone=${replace(
			" ",
			"%20",
			milestoneTitle
		)}`;

		const otherParameters = "per_page=100&state=opened";

		// TODO pagination

		return get(
			"data",
			await client.get(
				`/projects/${projectId}/issues?${join(
					"&",
					compact([
						assigneeCondition,
						isNil(milestoneTitle) ? null : milestoneCondition,
						otherParameters
					])
				)}`
			)
		);
	}
}

export { getIssues2 };
