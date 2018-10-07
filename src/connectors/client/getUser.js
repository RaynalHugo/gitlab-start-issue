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
    await store.setItem("user", user);
    return user;
  }
}

export default getUser;
