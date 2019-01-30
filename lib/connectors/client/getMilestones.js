"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

function getMilestones() {
  return _getMilestones.apply(this, arguments);
}

function _getMilestones() {
  _getMilestones = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var client, store, projectId, milestones;
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

            throw new Error("no client in 'getMilestones'");

          case 6:
            if (!(0, _fp.isNil)(store)) {
              _context.next = 10;
              break;
            }

            throw new Error("no store in 'getMilestones'");

          case 10:
            _context.next = 12;
            return store.getItem("projectId");

          case 12:
            projectId = _context.sent;
            _context.t0 = _fp.get;
            _context.next = 16;
            return client.get("/projects/".concat(projectId, "/milestones"));

          case 16:
            _context.t1 = _context.sent;
            milestones = (0, _context.t0)("data", _context.t1);
            return _context.abrupt("return", milestones);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getMilestones.apply(this, arguments);
}

var _default = getMilestones;
exports.default = _default;