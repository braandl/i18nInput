"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MainController = _interopRequireDefault(require("./MainController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var i18nInputView = /*#__PURE__*/function () {
  function i18nInputView(langKeys) {
    _classCallCheck(this, i18nInputView);

    this.langKeys = langKeys;
  }

  _createClass(i18nInputView, [{
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