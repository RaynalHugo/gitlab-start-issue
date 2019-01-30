import { createClient } from "../createClient";

test("createClient", () => {
	const client = createClient({
		gitlabUrl: "https://gitlab.com/api/v4",
		userPrivateToken: "ddx1wWi8xo6ryc4XbBqj"
	});
	expect(client).toMatchSnapshot();
});
