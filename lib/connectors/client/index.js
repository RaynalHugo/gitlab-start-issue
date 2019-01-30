"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _getIssues = _interopRequireDefault(require("./getIssues"));

var _getUser = _interopRequireDefault(require("./getUser"));

var _getMilestones = _interopRequireDefault(require("./getMilestones"));

var _createBranch = _interopRequireDefault(require("./createBranch"));

var _createMergeRequest = _interopRequireDefault(require("./createMergeRequest"));

var _init = _interopRequireDefault(require("./init"));

var client =
/*#__PURE__*/
function () {
  function client() {
    (0, _classCallCheck2.default)(this, client);
    this.setStore = this.setStore.bind(this);
    this.getUser = _getUser.default.bind(this);
    this.getIssues = _getIssues.default.bind(this);
    this.getMilestones = _getMilestones.default.bind(this);
    this.createBranch = _createBranch.default.bind(this);
    this.createMergeRequest = _createMergeRequest.default.bind(this);
    this.init = _init.default.bind(this);
  }

  (0, _createClass2.default)(client, [{
    key: "setStore",
    value: function setStore(store) {
      this.store = store;
    }
  }]);
  return client;
}();

var _default = client;
exports.default = _default;