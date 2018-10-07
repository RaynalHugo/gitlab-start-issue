/* @flow */

import {
  get,
  find,
  words,
  last,
  startsWith,
  lowerCase,
  camelCase,
  truncate
} from "lodash/fp";
import chalkPipe from "chalk-pipe";

function createBranchName(issue) {
  const issueId = get("iid", issue);
  const issueTitle = get("title", issue);
  const issueLabels = get("labels", issue);

  const typeLabel = find(label => startsWith("2", label), issueLabels);
  const issueType = lowerCase(last(words(typeLabel)));

  const branchName = `${issueType}/#${issueId}${camelCase(
    truncate({ length: 35 }, issueTitle)
  )}`;

  return branchName;
}

export default createBranchName;
