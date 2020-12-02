"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FlagsTool = _interopRequireDefault(require("./FlagsTool"));

var _InputTool = _interopRequireDefault(require("./InputTool"));

var _CodeTranslator = _interopRequireDefault(require("./CodeTranslator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainController = /*#__PURE__*/function () {
  function MainController(container, langKeys) {
    _classCallCheck(this, MainController);

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

  _createClass(MainController, [{
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