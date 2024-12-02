"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _FlagsTool = _interopRequireDefault(require("./FlagsTool"));

var _InputTool = _interopRequireDefault(require("./InputTool"));

var _CodeTranslator = _interopRequireDefault(require("./CodeTranslator"));

/**
 * Created by sbrandt on 05.07.17.
 */
var MainController = /*#__PURE__*/function () {
  function MainController(container, langKeys) {
    (0, _classCallCheck2["default"])(this, MainController);
    this.flagsTool = null;
    this.container = null;
    this.inputTool = null;
    this.codeTranslator = null;
    this.failHandler = null;
    this.langKeys = langKeys;
    this.container = $("#" + container);
    this.initCodeTranslator();
    this.initInputTool();
    this.initFlagsTool(langKeys);
    this.registerSubmitHandler();
    this.inputTool.changedInputView();
  }

  (0, _createClass2["default"])(MainController, [{
    key: "initInputTool",
    value: function initInputTool() {
      this.inputTool = new _InputTool["default"](this.container, this);
    }
  }, {
    key: "initFlagsTool",
    value: function initFlagsTool(langKeys) {
      this.flagsTool = new _FlagsTool["default"](this.container, this, langKeys);
    }
  }, {
    key: "initCodeTranslator",
    value: function initCodeTranslator() {
      this.codeTranslator = new _CodeTranslator["default"](this.container, this);
    }
  }, {
    key: "isi18nRegistered",
    value: function isi18nRegistered(i18n) {
      return this.flagsTool.languages.indexOf(i18n) !== -1;
    }
  }, {
    key: "registerSubmitHandler",
    value: function registerSubmitHandler() {
      var form = this.findForm(this.container);

      if (form !== null) {
        var self = this;
        form.submit(function () {
          var i18n = self.container.i18n();
          i18n.each = self.inputTool.inputvalues.each;
          i18n.each(this, function (key, value) {
            $(this).append("<input type='hidden' name='" + self.container.attr('id') + "[" + key + "]' value='" + value + "'>");
          });
          var submitAttr = self.container.attr("submitOnMissing");
          var submitOnMissing = submitAttr === undefined || submitAttr === null || String(submitAttr) === "true" || String(submitAttr) === "True";
          var res = self.container.complete() || submitOnMissing;

          if (!res && !submitOnMissing) {
            // Color the View.
            self.inputTool.input.addClass('i18n-view-incomplete'); // Run an optional Fail Handler.

            if (self.failHandler !== null) {
              setTimeout(function () {
                self.failHandler.call();
              }, 0);
            }
          } else {
            self.inputTool.input.removeClass('i18n-view-incomplete');
          }

          return res;
        });
      }
    }
  }, {
    key: "findForm",
    value: function findForm(el) {
      if (el.parent() === undefined || el.parent() === null || el.parent().prop('nodeName') === 'BODY') {
        return null;
      }

      if (el.parent().prop('nodeName') === 'FORM') {
        return el.parent();
      } else {
        return this.findForm(el.parent());
      }
    }
  }]);
  return MainController;
}();

var _default = MainController;
exports["default"] = _default;