"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

function createMergeRequest(_x) {
  return _createMergeRequest.apply(this, arguments);
}

function _createMergeRequest() {
  _createMergeRequest = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(sourceBranchName) {
    var client, store, projectId, mergeBranchTo, user, assigneeId, otherParameters, title, parameters, escapeWords, url, mergeRequest;
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

            throw new Error("no client in 'createMergeRequest'");

          case 6:
            if (!(0, _fp.isNil)(store)) {
              _context.next = 10;
              break;
            }

            throw new Error("no store in 'createMergeRequest'");

          case 10:
            _context.next = 12;
            return store.getItem("projectId");

          case 12:
            projectId = _context.sent;
            _context.next = 15;
            return store.getItem("mergeBranchTo");

          case 15:
            mergeBranchTo = _context.sent;
            _context.next = 18;
            return store.getItem("user");

          case 18:
            user = _context.sent;
            assigneeId = (0, _fp.get)("id", user);
            otherParameters = "remove_source_branch=true";
            title = "WIP: ".concat(sourceBranchName);
            parameters = (0, _fp.join)("&", (0, _fp.compact)(["assignee_Id=".concat(assigneeId), "source_branch=".concat(sourceBranchName), "target_branch=".concat(mergeBranchTo), "title=".concat(title), otherParameters])); // milestone_id
            // description

            escapeWords = function escapeWords(string) {
              return (0, _fp.join)("", (0, _fp.map)((0, _fp.flow)([(0, _fp.replace)(" ", "%20"), (0, _fp.replace)(":", "%3A"), (0, _fp.replace)("/", "%2F"), (0, _fp.replace)("#", "%23")]), string));
            };

            url = "/projects/".concat(projectId, "/merge_requests?").concat(escapeWords(parameters));
            _context.t0 = _fp.get;
            _context.next = 28;
            return client.post(url);

          case 28:
            _context.t1 = _context.sent;
            mergeRequest = (0, _context.t0)("data", _context.t1);
            return _context.abrupt("return", mergeRequest);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _createMergeRequest.apply(this, arguments);
}

var _default = createMergeRequest;
exports.default = _default;