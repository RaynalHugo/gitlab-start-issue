import { getUser2 } from "../getUser";
import { client } from "../createClient";

test("getUser2", async () => {
	expect(await getUser2(client)).toMatchSnapshot();
});
