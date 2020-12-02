"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _MainController = _interopRequireDefault(require("./MainController"));

/**
 * Created by sbrandt on 05.07.17.
 */
var i18nInputView = /*#__PURE__*/function () {
  function i18nInputView(langKeys) {
    (0, _classCallCheck2["default"])(this, i18nInputView);
    this.langKeys = langKeys;
  }

  (0, _createClass2["default"])(i18nInputView, [{
    key: "i18nInputView",
    value: function i18nInputView(container) {
      return new _MainController["default"](container, this.langKeys);
    }
  }]);
  return i18nInputView;
}();

exports["default"] = i18nInputView;

window.i18n = function (container) {
  return new _MainController["default"](container);
};