import axios from "axios";
import { isNil } from "lodash/fp";

async function init() {
  const store = this.store;

  if (isNil(store)) {
    throw new Error("no store in 'init'");
  } else {
    const userPrivateToken = await store.getItem("userPrivateToken");
    const gitlabUrl = await store.getItem("gitlabUrl");

    if (!isNil(userPrivateToken)) {
      this.client = axios.create({
        baseURL: gitlabUrl,
        timeout: 10000,
        headers: { "Private-Token": userPrivateToken }
      });
    } else {
      throw new Error("userPrivateToken is not definied in client `init`");
    }
  }
}

export default init;
