import store from "node-persist";

const STORE_PATH = "./storage";

async function initStore() {
  await store.init({
    dir: STORE_PATH
  });
  return store;
}

export default initStore;
