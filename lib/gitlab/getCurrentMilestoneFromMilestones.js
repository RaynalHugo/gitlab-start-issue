"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fp = require("lodash/fp");

//
function getCurrentMilestoneFromMilestones(milestones) {
  var activeMilestones = (0, _fp.filter)(function (milestone) {
    return (0, _fp.get)("state", milestone) === "active";
  }, milestones);
  return (0, _fp.nth)(1, (0, _fp.sortBy)(["title"], activeMilestones));
}

var _default = getCurrentMilestoneFromMilestones;
exports.default = _default;