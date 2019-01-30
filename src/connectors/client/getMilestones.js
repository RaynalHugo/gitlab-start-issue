import { get, isNil } from "lodash/fp";

async function getMilestones() {
	const client = this.client;
	const store = this.store;
	if (isNil(client)) {
		throw new Error("no client in 'getMilestones'");
	} else if (isNil(store)) {
		throw new Error("no store in 'getMilestones'");
	} else {
		const projectId = await store.getItem("projectId");
		const milestones = get(
			"data",
			await client.get(`/projects/${projectId}/milestones`)
		);
		return milestones;
	}
}

export default getMilestones;

async function getMilestones2(client, { projectId }) {
	const store = this.store;
	if (isNil(client)) {
		throw new Error("no client in 'getMilestones'");
	} else {
		return get(
			"data",
			await client.get(`/projects/${projectId}/milestones`)
		);
	}
}

export { getMilestones2 };
