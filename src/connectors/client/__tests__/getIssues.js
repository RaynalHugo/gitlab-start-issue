import { getIssues2 } from "../getIssues";
import { client } from "../createClient";

test("getIssues2", async () => {
	expect(
		await getIssues2(client, {
			projectId: 9112622,
			assigneeId: 3058287,
			milestoneTitle: "March 2019 Release"
		})
	).toMatchSnapshot();
});
