"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

function createBranch(_x) {
  return _createBranch.apply(this, arguments);
}

function _createBranch() {
  _createBranch = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(branchName) {
    var client, store, projectId, createBranchFrom, otherParameters, escapeWords, url, branch;
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

            throw new Error("no client in 'createBranch'");

          case 6:
            if (!(0, _fp.isNil)(store)) {
              _context.next = 10;
              break;
            }

            throw new Error("no store in 'createBranch'");

          case 10:
            _context.next = 12;
            return store.getItem("projectId");

          case 12:
            projectId = _context.sent;
            _context.next = 15;
            return store.getItem("createBranchFrom");

          case 15:
            createBranchFrom = _context.sent;
            otherParameters = "branch=".concat(branchName, "&ref=").concat(createBranchFrom);
            escapeWords = (0, _fp.flow)([(0, _fp.replace)("/", "%2F"), (0, _fp.replace)("#", "%23")]);
            url = "/projects/".concat(projectId, "/repository/branches?").concat(escapeWords(otherParameters));
            _context.t0 = _fp.get;
            _context.next = 22;
            return client.post(url);

          case 22:
            _context.t1 = _context.sent;
            branch = (0, _context.t0)("data", _context.t1);
            return _context.abrupt("return", branch);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createBranch.apply(this, arguments);
}

var _default = createBranch;
exports.default = _default;