"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _config = _interopRequireDefault(require("../../../data/config.json"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var _fp = require("lodash/fp");

//
var mapUncapped = _fp.map.convert({
  cap: false
});

function readConfig(_x) {
  return _readConfig.apply(this, arguments);
}

function _readConfig() {
  _readConfig = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(store) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bluebird.default.all(mapUncapped(function (value, key) {
              if (!(0, _fp.isNil)(value)) {
                store.setItem(key, value);
              }
            }, _config.default));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _readConfig.apply(this, arguments);
}

var _default = readConfig;
exports.default = _default;