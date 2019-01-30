"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = displayStartMessage;

var _chalkPipe = _interopRequireDefault(require("chalk-pipe"));

/* @flow */
function displayStartMessage(issues) {
  console.log("");
  console.log((0, _chalkPipe.default)()("Welcome to the Start Issue utility"));
  console.log("");
}