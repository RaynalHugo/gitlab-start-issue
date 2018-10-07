/* @flow */

import { get } from "lodash/fp";
import Enquirer from "enquirer";
import chalkPipe from "chalk-pipe";

export default async function askForUserPrivateToken(issues) {
  const enquirer = new Enquirer();

  enquirer.register("input", require("prompt-input"));

  console.log("It seems it is your first connection.");
  console.log(`We need your gitlab ${chalkPipe("#FF0000")("private token")}`);
  console.log(
    `More help here: ${chalkPipe("#0000FF")(
      "https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"
    )}`
  );
  const questions = [
    {
      type: "input",
      name: "userPrivateToken",
      message: "Private token:"
    }
  ];

  const userPrivateToken = get(
    "userPrivateToken",
    await enquirer.ask(questions)
  );

  console.log("");

  return userPrivateToken;
}
