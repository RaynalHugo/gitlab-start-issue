import { get, isNil } from "lodash/fp";

async function getUser() {
	const client = this.client;
	const store = this.store;
	if (isNil(client)) {
		throw new Error("no client in 'getUser'");
	} else if (isNil(store)) {
		throw new Error("no store in 'getUser'");
	} else {
		const user = get("data", await client.get(`/user`));
		console.log(user);
		await store.setItem("user", user);
		return user;
	}
}

export default getUser;

async function getUser2(client) {
	return get("data", await client.get(`/user`));
}

export { getUser2 };
