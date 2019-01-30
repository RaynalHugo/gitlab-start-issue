import { getMilestones2 } from "../getMilestones";
import { client } from "../createClient";

test("getMilestones2", async () => {
	expect(
		await getMilestones2(client, { projectId: 9112622 })
	).toMatchSnapshot();
});
