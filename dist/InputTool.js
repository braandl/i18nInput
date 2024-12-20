"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _TextEditorTool = _interopRequireDefault(require("./TextEditorTool"));

/**
 * Created by sbrandt on 05.07.17.
 */
var InputTool = /*#__PURE__*/function () {
  function InputTool(el, loader) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, InputTool);
    this.container = null;
    this.main = null;
    this.input = null;
    this.inputvalues = {};
    this.inputStyleClasses = "";
    this.container = el;
    this.texteditor = null;

    if (el.attr("input-class") !== undefined) {
      this.inputStyleClasses = el.attr("input-class");
    }

    var placeholder = el.attr("placeholder") !== undefined ? "placeholder=''" : "";
    var rows = parseInt(el.attr('rows'));

    if (rows === 1 || !rows) {
      el.append("<input " + placeholder + " class='" + this.inputStyleClasses + "' type='text' style='padding-right: 36px;'/>");
      this.input = $(el.children()[el.children().length - 1]);
    } else {
      el.addClass("text-editor-wrapper");
      var rules = null;

      if (el.attr('rules') !== undefined) {
        rules = JSON.parse(el.attr('rules').replace(/\[/g, '{').replace(/\]/g, '}').replace(/'/g, '"'));
      }

      this.texteditor = new _TextEditorTool["default"]({
        placeholder: placeholder,
        inputStyleClass: this.inputStyleClasses,
        rows: rows,
        rules: rules
      });
      el.append(this.texteditor.render());
      this.input = $(this.texteditor.getTextarea()); // Add locale change listener to text editor

      this.texteditor.setOnChangeCallback(function (value) {
        var currentLanguage = _this.main.flagsTool.languages[_this.main.flagsTool.currentFlag];
        _this.inputvalues[currentLanguage] = value;
      });
    }

    this.main = loader;
    if (this.texteditor == null) this.input.css({
      "width": el.attr('width') < 35 ? 35 : el.attr('width'),
      "height": el.attr('height') < 12 ? 12 : el.attr('height')
    });
    el.css({
      "width": el.attr('width') < 35 ? 35 : el.attr('width'),
      "padding-bottom": "2px",
      "padding-top": "2px",
      "position": "relative"
    });
    this.addElementMethods();
    this.initKeyLogging();
    this.initInputChange();
  }

  (0, _createClass2["default"])(InputTool, [{
    key: "initKeyLogging",
    value: function initKeyLogging() {
      var _this2 = this;

      this.input.on('keyup', function () {
        var currentLanguage = _this2.main.flagsTool.languages[_this2.main.flagsTool.currentFlag];
        _this2.inputvalues[currentLanguage] = $(_this2.input).val();
      });
    }
  }, {
    key: "initInputChange",
    value: function initInputChange() {
      var _this3 = this;

      this.input.on('change', function () {
        var currentLanguage = _this3.main.flagsTool.languages[_this3.main.flagsTool.currentFlag];
        _this3.inputvalues[currentLanguage] = $(_this3.input).val();
      });
    }
  }, {
    key: "changedInputView",
    value: function changedInputView() {
      var _this$texteditor;

      var currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];

      if (this.main.flagsTool.placeHolderType === "string") {
        this.input.attr('placeholder', this.main.flagsTool.placeholder);
      } else if (this.main.flagsTool.placeHolderType === "array") {
        this.input.attr('placeholder', this.main.flagsTool.placeholder[currentLanguage]);
      }

      this.input.val(this.inputvalues[currentLanguage]);
      (_this$texteditor = this.texteditor) === null || _this$texteditor === void 0 ? void 0 : _this$texteditor.updatePreview();
    }
  }, {
    key: "addElementMethods",
    value: function addElementMethods() {
      var _this4 = this;

      var printResults = function printResults(lang) {
        if (_this4.inputvalues !== undefined && _this4.inputvalues[lang] !== undefined) {
          return _this4.inputvalues[lang];
        } else if (_this4.inputvalues !== undefined) {
          return _this4.main.codeTranslator.translateIsoAssocArrayToShort(_this4.inputvalues);
        } else {
          return "";
        }
      };

      var printResultsObject = function printResultsObject(lang) {
        if (_this4.inputvalues !== undefined && _this4.inputvalues[lang] !== undefined) {
          return _this4.inputvalues[lang];
        } else if (_this4.inputvalues !== undefined) {
          return _this4.main.codeTranslator.translateIsoAssocArrayToShortObject(_this4.inputvalues);
        } else {
          return "";
        }
      };

      var completed = function completed() {
        return missingi18n().length === 0;
      };

      var missingi18n = function missingi18n() {
        var missing = [];

        for (var i = 0; i < _this4.main.flagsTool.languages.length; i++) {
          if (!(_this4.main.flagsTool.languages[i] in _this4.inputvalues) || _this4.inputvalues[_this4.main.flagsTool.languages[i]] === undefined || _this4.inputvalues[_this4.main.flagsTool.languages[i]].length === 0) {
            missing.push(_this4.main.flagsTool.languages[i]);
          }
        }

        return _this4.main.codeTranslator.translateIsoArrayToShort(missing);
      };

      var setValueAuto = function setValueAuto(value) {
        if ((0, _typeof2["default"])(value) === 'object') {
          Object.keys(value).forEach(function (key) {
            setValue(key, value[key]);
          });
        } else {
          _this4.input.val(value);
        }
      };

      var setValue = function setValue(lng, value) {
        console.log(lng, value);

        if (lng instanceof Array) {
          if (value instanceof Array) {
            if (lng.length !== value.length) {
              throw "Both input arrays must have the same size";
            }

            for (var i = 0; i < lng.length; i++) {
              var _short = _this4.main.codeTranslator.translateIsoToShort(lng[i]);

              if (_this4.main.isi18nRegistered(_short)) {
                _this4.inputvalues[_short] = value[i];
              } else {
                throw "Language " + lng + " is not registered with the View";
              }
            }
          } else {
            throw "Either both, or non argument must be of type Array";
          }
        } else {
          var _short2 = _this4.main.codeTranslator.translateIsoToShort(lng);

          if (_this4.main.isi18nRegistered(_short2)) {
            _this4.inputvalues[_short2] = value;
          } else {
            throw "Language " + lng + " is not registered with the View";
          }
        }

        _this4.changedInputView();

        return true;
      };

      var availablei18n = function availablei18n() {
        return _this4.main.codeTranslator.getAllLongs();
      };

      var registerFormIncompleteHandler = function registerFormIncompleteHandler(handler) {
        if (typeof handler !== 'function') {
          console.warn('The Handler must be of type function');
          return false;
        }

        _this4.main.failHandler = handler;
        return true;
      };

      this.container[0].i18n = printResults;
      this.container[0].i18nObject = printResultsObject;
      this.container[0].complete = completed;
      this.container[0].missing = missingi18n;
      this.container[0].setValue = setValue;
      this.container[0].setValueAuto = setValueAuto;
      this.container[0].allLocales = availablei18n;
      this.container[0].registerFormIncompleteHandler = registerFormIncompleteHandler;

      this.container.init.prototype.i18n = function (value) {
        return document.getElementById($(this).attr("id").replace('#', '')).i18n(value);
      };

      this.container.init.prototype.i18nObject = function (value) {
        return document.getElementById($(this).attr("id").replace('#', '')).i18nObject(value);
      };

      this.container.init.prototype.complete = function () {
        return document.getElementById($(this).attr("id").replace('#', '')).complete();
      };

      this.container.init.prototype.missing = function () {
        return document.getElementById($(this).attr("id").replace('#', '')).missing();
      };

      this.container.init.prototype.setValue = function (lng, value) {
        return document.getElementById($(this).attr("id").replace('#', '')).setValue(lng, value);
      };

      this.container.init.prototype.setValueAuto = function (value) {
        console.log($(this));
        return document.getElementById($(this).attr("id").replace('#', '')).setValueAuto(value);
      };
      /*this.container.init.prototype.val = function (value) {
        if(value && $(this).attr("id")){
          if(typeof value === 'object'){
            return document.getElementById($(this).attr("id").replace('#', '')).setValueWithObject(value);
          }else {
            return document.getElementById($(this).attr("id").replace('#', '')).setValue(value);
          }
        }
      };*/


      this.container.init.prototype.allLocales = function () {
        return document.getElementById($(this).attr("id").replace('#', '')).allLocales();
      };

      this.container.init.prototype.registerFormIncompleteHandler = function (handler) {
        return document.getElementById($(this).attr("id").replace('#', '')).registerFormIncompleteHandler(handler);
      };
    }
  }]);
  return InputTool;
}();

var _default = InputTool;
exports["default"] = _default;