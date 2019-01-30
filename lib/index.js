"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

var _store = _interopRequireDefault(require("./connectors/store"));

var _readConfig = _interopRequireDefault(require("./connectors/store/readConfig"));

var _client = _interopRequireDefault(require("./connectors/client"));

var _selectIssue = _interopRequireDefault(require("./prompt/selectIssue"));

var _displayStartMessage = _interopRequireDefault(require("./prompt/displayStartMessage"));

var _askForUserPrivateToken = _interopRequireDefault(require("./prompt/askForUserPrivateToken"));

var _createBranchName = _interopRequireDefault(require("./gitlab/createBranchName"));

var _getCurrentMilestoneFromMilestones = _interopRequireDefault(require("./gitlab/getCurrentMilestoneFromMilestones"));

/* @flow  */
function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var store, userPrivateToken, client, user, milestones, issues, issueId, issue, branchName;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.clear();
            (0, _displayStartMessage.default)();
            _context.next = 4;
            return (0, _store.default)();

          case 4:
            store = _context.sent;
            _context.next = 7;
            return store.clear();

          case 7:
            _context.next = 9;
            return (0, _readConfig.default)(store);

          case 9:
            _context.next = 11;
            return store.getItem("userPrivateToken");

          case 11:
            userPrivateToken = _context.sent;

            if (!(0, _fp.isNil)(userPrivateToken)) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return (0, _askForUserPrivateToken.default)();

          case 15:
            userPrivateToken = _context.sent;
            _context.next = 18;
            return store.setItem("userPrivateToken", userPrivateToken);

          case 18:
            client = new _client.default();
            client.setStore(store);
            _context.next = 22;
            return client.init();

          case 22:
            _context.next = 24;
            return store.getItem("user");

          case 24:
            user = _context.sent;

            if (!(0, _fp.isNil)(user)) {
              _context.next = 28;
              break;
            }

            _context.next = 28;
            return client.getUser();

          case 28:
            _context.next = 30;
            return client.getMilestones();

          case 30:
            milestones = _context.sent;
            console.log(milestones);
            _context.next = 34;
            return store.setItem("milestone", (0, _getCurrentMilestoneFromMilestones.default)(milestones));

          case 34:
            _context.next = 36;
            return client.getIssues();

          case 36:
            issues = _context.sent;
            _context.next = 39;
            return (0, _selectIssue.default)((0, _fp.sortBy)(["iid"], issues));

          case 39:
            issueId = _context.sent;
            issue = (0, _fp.find)(function (issue) {
              return (0, _fp.get)("iid", issue) === issueId;
            }, issues);
            branchName = (0, _createBranchName.default)(issue);

            if ((0, _fp.isNil)(branchName)) {
              _context.next = 47;
              break;
            }

            _context.next = 45;
            return client.createBranch(branchName);

          case 45:
            _context.next = 47;
            return client.createMergeRequest(branchName);

          case 47:
            console.log("created branch: ".concat(branchName)); // console.log(branchName);

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _main.apply(this, arguments);
}

main();