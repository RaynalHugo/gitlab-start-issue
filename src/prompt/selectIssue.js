/* @flow */

import { map, size, get, truncate } from "lodash/fp";
import Enquirer from "enquirer";
import chalkPipe from "chalk-pipe";

function stringifyIssue(issue) {
  const issueNumber = get("iid", issue);
  const issueTitle = get("title", issue);

  return `${chalkPipe("#00FF00")(`#${issueNumber}`)}: ${truncate(
    {
      length: 70,
      omission: " ..."
    },
    issueTitle
  )}`;
}

function createOptionFromIssue(issue) {
  return {
    name: `${get("iid", issue)}`,
    value: stringifyIssue(issue),
    short: get("iid", issue)
  };
}

export default async function selectIssue(issues) {
  const enquirer = new Enquirer();

  enquirer.register("list", require("prompt-list"));

  const questions = [
    {
      type: "list",
      name: "issueId",
      message: `which ${chalkPipe("#FF0000")("issue")} ?`,
      choices: map(createOptionFromIssue, issues)
    }
  ];

  return get("issueId", await enquirer.ask(questions));
}
