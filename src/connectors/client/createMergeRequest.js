import { get, isNil, replace, flow, compact, join, map } from "lodash/fp";

async function createMergeRequest(sourceBranchName) {
  const client = this.client;
  const store = this.store;
  if (isNil(client)) {
    throw new Error("no client in 'createMergeRequest'");
  } else if (isNil(store)) {
    throw new Error("no store in 'createMergeRequest'");
  } else {
    const projectId = await store.getItem("projectId");
    const mergeBranchTo = await store.getItem("mergeBranchTo");

    const user = await store.getItem("user");
    const assigneeId = get("id", user);

    const otherParameters = `remove_source_branch=true`;

    const title = `WIP: ${sourceBranchName}`;

    const parameters = join(
      "&",
      compact([
        `assignee_Id=${assigneeId}`,
        `source_branch=${sourceBranchName}`,
        `target_branch=${mergeBranchTo}`,
        `title=${title}`,
        otherParameters
      ])
    );

    // milestone_id
    // description

    const escapeWords = string =>
      join(
        "",
        map(
          flow([
            replace(" ", "%20"),
            replace(":", "%3A"),
            replace("/", "%2F"),
            replace("#", "%23")
          ]),
          string
        )
      );

    const url = `/projects/${projectId}/merge_requests?${escapeWords(
      parameters
    )}`;

    const mergeRequest = get("data", await client.post(url));

    return mergeRequest;
  }
}

export default createMergeRequest;
