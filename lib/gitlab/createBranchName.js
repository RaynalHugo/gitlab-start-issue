"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fp = require("lodash/fp");

var _chalkPipe = _interopRequireDefault(require("chalk-pipe"));

/* @flow */
function createBranchName(issue) {
  var issueId = (0, _fp.get)("iid", issue);
  var issueTitle = (0, _fp.get)("title", issue);
  var issueLabels = (0, _fp.get)("labels", issue);
  var typeLabel = (0, _fp.find)(function (label) {
    return (0, _fp.startsWith)("2", label);
  }, issueLabels);
  var issueType = (0, _fp.lowerCase)((0, _fp.last)((0, _fp.words)(typeLabel)));
  var branchName = "".concat(issueType, "/#").concat(issueId).concat((0, _fp.camelCase)((0, _fp.truncate)({
    length: 35
  }, issueTitle)));
  return branchName;
}

var _default = createBranchName;
exports.default = _default;