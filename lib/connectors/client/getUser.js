"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fp = require("lodash/fp");

function getUser() {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var client, store, user;
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

            throw new Error("no client in 'getUser'");

          case 6:
            if (!(0, _fp.isNil)(store)) {
              _context.next = 10;
              break;
            }

            throw new Error("no store in 'getUser'");

          case 10:
            _context.t0 = _fp.get;
            _context.next = 13;
            return client.get("/user");

          case 13:
            _context.t1 = _context.sent;
            user = (0, _context.t0)("data", _context.t1);
            _context.next = 17;
            return store.setItem("user", user);

          case 17:
            return _context.abrupt("return", user);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _getUser.apply(this, arguments);
}

var _default = getUser;
exports.default = _default;