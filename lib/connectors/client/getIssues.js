"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

function getIssues() {
  return _getIssues.apply(this, arguments);
}

function _getIssues() {
  _getIssues = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var client, store, projectId, user, assigneeId, assigneeCondition, milestone, milestoneTitle, milestoneCondition, otherParameters, issues;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = this.client;
            store = this.store;

            if (!(0, _fp.isNil)(client)) {
              _context.next = 6;
              break;
            }

            throw new Error("no client in 'getIssues'");

          case 6:
            if (!(0, _fp.isNil)(store)) {
              _context.next = 10;
              break;
            }

            throw new Error("no store in 'getIssues'");

          case 10:
            _context.next = 12;
            return store.getItem("projectId");

          case 12:
            projectId = _context.sent;
            _context.next = 15;
            return store.getItem("user");

          case 15:
            user = _context.sent;
            assigneeId = (0, _fp.get)("id", user);
            assigneeCondition = "assignee_id=".concat(assigneeId);
            _context.next = 20;
            return store.getItem("milestone");

          case 20:
            milestone = _context.sent;
            milestoneTitle = (0, _fp.get)("title", milestone);
            milestoneCondition = "milestone=".concat((0, _fp.replace)(" ", "%20", milestoneTitle));
            otherParameters = "per_page=100&state=opened"; // TODO pagination

            _context.t0 = _fp.get;
            _context.next = 27;
            return client.get("/projects/".concat(projectId, "/issues?").concat((0, _fp.join)("&", (0, _fp.compact)([assigneeCondition, (0, _fp.isNil)(milestone) ? null : milestoneCondition, otherParameters]))));

          case 27:
            _context.t1 = _context.sent;
            issues = (0, _context.t0)("data", _context.t1);
            return _context.abrupt("return", issues);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getIssues.apply(this, arguments);
}

var _default = getIssues;
exports.default = _default;