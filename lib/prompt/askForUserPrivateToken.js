"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = askForUserPrivateToken;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

var _enquirer = _interopRequireDefault(require("enquirer"));

var _chalkPipe = _interopRequireDefault(require("chalk-pipe"));

/* @flow */
function askForUserPrivateToken(_x) {
  return _askForUserPrivateToken.apply(this, arguments);
}

function _askForUserPrivateToken() {
  _askForUserPrivateToken = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(issues) {
    var enquirer, questions, userPrivateToken;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            enquirer = new _enquirer.default();
            enquirer.register("input", require("prompt-input"));
            console.log("It seems it is your first connection.");
            console.log("We need your gitlab ".concat((0, _chalkPipe.default)("#FF0000")("private token")));
            console.log("More help here: ".concat((0, _chalkPipe.default)("#0000FF")("https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html")));
            questions = [{
              type: "input",
              name: "userPrivateToken",
              message: "Private token:"
            }];
            _context.t0 = _fp.get;
            _context.next = 9;
            return enquirer.ask(questions);

          case 9:
            _context.t1 = _context.sent;
            userPrivateToken = (0, _context.t0)("userPrivateToken", _context.t1);
            console.log("");
            return _context.abrupt("return", userPrivateToken);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _askForUserPrivateToken.apply(this, arguments);
}