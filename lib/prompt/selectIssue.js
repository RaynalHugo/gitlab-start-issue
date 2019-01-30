"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectIssue;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

var _enquirer = _interopRequireDefault(require("enquirer"));

var _chalkPipe = _interopRequireDefault(require("chalk-pipe"));

/* @flow */
function stringifyIssue(issue) {
  var issueNumber = (0, _fp.get)("iid", issue);
  var issueTitle = (0, _fp.get)("title", issue);
  return "".concat((0, _chalkPipe.default)("#00FF00")("#".concat(issueNumber)), ": ").concat((0, _fp.truncate)({
    length: 70,
    omission: " ..."
  }, issueTitle));
}

function createOptionFromIssue(issue) {
  return {
    name: "".concat((0, _fp.get)("iid", issue)),
    value: stringifyIssue(issue),
    short: (0, _fp.get)("iid", issue)
  };
}

function selectIssue(_x) {
  return _selectIssue.apply(this, arguments);
}

function _selectIssue() {
  _selectIssue = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(issues) {
    var enquirer, questions;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            enquirer = new _enquirer.default();
            enquirer.register("list", require("prompt-list"));
            questions = [{
              type: "list",
              name: "issueId",
              message: "which ".concat((0, _chalkPipe.default)("#FF0000")("issue"), " ?"),
              choices: (0, _fp.map)(createOptionFromIssue, issues)
            }];
            _context.t0 = _fp.get;
            _context.next = 6;
            return enquirer.ask(questions);

          case 6:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)("issueId", _context.t1));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _selectIssue.apply(this, arguments);
}