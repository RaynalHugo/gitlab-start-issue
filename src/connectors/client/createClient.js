import axios from "axios";
import { isNil } from "lodash/fp";

export function createClient({ userPrivateToken, gitlabUrl }) {
	if (!isNil(userPrivateToken)) {
		return axios.create({
			baseURL: gitlabUrl,
			timeout: 10000,
			headers: { "Private-Token": userPrivateToken }
		});
	} else {
		throw new Error(
			"userPrivateToken is not definied in client `createClient`"
		);
	}
}

export const client = createClient({
	gitlabUrl: "https://gitlab.com/api/v4",
	userPrivateToken: "ddx1wWi8xo6ryc4XbBqj"
});
