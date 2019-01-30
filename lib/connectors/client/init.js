"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _fp = require("lodash/fp");

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var store, userPrivateToken, gitlabUrl;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = this.store;

            if (!(0, _fp.isNil)(store)) {
              _context.next = 5;
              break;
            }

            throw new Error("no store in 'init'");

          case 5:
            _context.next = 7;
            return store.getItem("userPrivateToken");

          case 7:
            userPrivateToken = _context.sent;
            _context.next = 10;
            return store.getItem("gitlabUrl");

          case 10:
            gitlabUrl = _context.sent;

            if ((0, _fp.isNil)(userPrivateToken)) {
              _context.next = 15;
              break;
            }

            this.client = _axios.default.create({
              baseURL: gitlabUrl,
              timeout: 10000,
              headers: {
                "Private-Token": userPrivateToken
              }
            });
            _context.next = 16;
            break;

          case 15:
            throw new Error("userPrivateToken is not definied in client `init`");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _init.apply(this, arguments);
}

var _default = init;
exports.default = _default;