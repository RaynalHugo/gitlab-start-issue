import { get, isNil, replace, flow } from "lodash/fp";

async function createBranch(branchName) {
  const client = this.client;
  const store = this.store;
  if (isNil(client)) {
    throw new Error("no client in 'createBranch'");
  } else if (isNil(store)) {
    throw new Error("no store in 'createBranch'");
  } else {
    const projectId = await store.getItem("projectId");
    const createBranchFrom = await store.getItem("createBranchFrom");

    const otherParameters = `branch=${branchName}&ref=${createBranchFrom}`;

    const escapeWords = flow([replace("/", "%2F"), replace("#", "%23")]);

    const url = `/projects/${projectId}/repository/branches?${escapeWords(
      otherParameters
    )}`;

    const branch = get("data", await client.post(url));

    return branch;
  }
}

export default createBranch;
