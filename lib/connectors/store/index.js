"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodePersist = _interopRequireDefault(require("node-persist"));

var STORE_PATH = "./storage";

function initStore() {
  return _initStore.apply(this, arguments);
}

function _initStore() {
  _initStore = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _nodePersist.default.init({
              dir: STORE_PATH
            });

          case 2:
            return _context.abrupt("return", _nodePersist.default);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _initStore.apply(this, arguments);
}

var _default = initStore;
exports.default = _default;