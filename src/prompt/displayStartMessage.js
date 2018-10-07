/* @flow */

import chalkPipe from "chalk-pipe";

export default function displayStartMessage(issues) {
  console.log(``);
  console.log(chalkPipe()(`Welcome to the Start Issue utility`));
  console.log(``);
}
