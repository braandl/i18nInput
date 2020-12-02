"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Created by sbrandt on 05.07.17.
 */
var InputTool = /*#__PURE__*/function () {
  function InputTool(el, loader) {
    _classCallCheck(this, InputTool);

    this.container = null;
    this.main = null;
    this.input = null;
    this.inputvalues = {};
    this.inputStyleClasses = "";
    this.container = el;

    if (el.attr("input-class") !== undefined) {
      this.inputStyleClasses = el.attr("input-class");
    }

    var placeholder = el.attr("placeholder") !== undefined ? "placeholder=''" : "";
    var rows = parseInt(el.attr('rows'));

    if (rows === 1 || !rows) {
      el.append("<input " + placeholder + " class='" + this.inputStyleClasses + "' type='text' />");
    } else {
      el.append("<textarea " + placeholder + " class='" + this.inputStyleClasses + "' style='line-height: 12px' type='text' rows='" + rows + "'></textarea>");
    }

    this.input = $(el.children()[el.children().length - 1]);
    this.main = loader;
    this.input.css({
      "width": el.attr('width') < 35 ? 35 : el.attr('width'),
      "height": el.attr('height') < 12 ? 12 : el.attr('height')
    });
    el.css({
      "width": this.input.outerWidth() < 35 ? 'auto' : this.input.outerWidth(),
      "padding-bottom": "2px",
      "padding-top": "2px",
      "position": "relative"
    });
    this.addElementMethods();
    this.initKeyLogging();
    this.initInputChange();
  }

  _createClass(InputTool, [{
    key: "initKeyLogging",
    value: function initKeyLogging() {
      var _this = this;

      this.input.on('keyup', function () {
        var currentLanguage = _this.main.flagsTool.languages[_this.main.flagsTool.currentFlag];
        _this.inputvalues[currentLanguage] = $(_this.input).val();
      });
    }
  }, {
    key: "initInputChange",
    value: function initInputChange() {
      var _this2 = this;

      this.input.on('change', function () {
        var currentLanguage = _this2.main.flagsTool.languages[_this2.main.flagsTool.currentFlag];
        _this2.inputvalues[currentLanguage] = $(_this2.input).val();
      });
    }
  }, {
    key: "changedInputView",
    value: function changedInputView() {
      var currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];

      if (this.main.flagsTool.placeHolderType === "string") {
        this.input.attr('placeholder', this.main.flagsTool.placeholder);
      } else if (this.main.flagsTool.placeHolderType === "array") {
        this.input.attr('placeholder', this.main.flagsTool.placeholder[currentLanguage]);
      }

      this.input.val(this.inputvalues[currentLanguage]);
    }
  }, {
    key: "addElementMethods",
    value: function addElementMethods() {
      var _this3 = this;

      var printResults = function printResults(lang) {
        if (_this3.inputvalues !== undefined && _this3.inputvalues[lang] !== undefined) {
          return _this3.inputvalues[lang];
        } else if (_this3.inputvalues !== undefined) {
          return _this3.main.codeTranslator.translateIsoAssocArrayToShort(_this3.inputvalues);
        } else {
          return "";
        }
      };

      var printResultsObject = function printResultsObject(lang) {
        if (_this3.inputvalues !== undefined && _this3.inputvalues[lang] !== undefined) {
          return _this3.inputvalues[lang];
        } else if (_this3.inputvalues !== undefined) {
          return _this3.main.codeTranslator.translateIsoAssocArrayToShortObject(_this3.inputvalues);
        } else {
          return "";
        }
      };

      var completed = function completed() {
        return missingi18n().length === 0;
      };

      var missingi18n = function missingi18n() {
        var missing = [];

        for (var i = 0; i < _this3.main.flagsTool.languages.length; i++) {
          if (!(_this3.main.flagsTool.languages[i] in _this3.inputvalues) || _this3.inputvalues[_this3.main.flagsTool.languages[i]] === undefined || _this3.inputvalues[_this3.main.flagsTool.languages[i]].length === 0) {
            missing.push(_this3.main.flagsTool.languages[i]);
          }
        }

        return _this3.main.codeTranslator.translateIsoArrayToShort(missing);
      };

      var setValueAuto = function setValueAuto(value) {
        if (_typeof(value) === 'object') {
          Object.keys(value).forEach(function (key) {
            setValue(key, value[key]);
          });
        } else {
          _this3.input.val(value);
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
              var _short = _this3.main.codeTranslator.translateIsoToShort(lng[i]);

              if (_this3.main.isi18nRegistered(_short)) {
                _this3.inputvalues[_short] = value[i];
              } else {
                throw "Language " + lng + " is not registered with the View";
              }
            }
          } else {
            throw "Either both, or non argument must be of type Array";
          }
        } else {
          var _short2 = _this3.main.codeTranslator.translateIsoToShort(lng);

          if (_this3.main.isi18nRegistered(_short2)) {
            _this3.inputvalues[_short2] = value;
          } else {
            throw "Language " + lng + " is not registered with the View";
          }
        }

        _this3.changedInputView();

        return true;
      };

      var availablei18n = function availablei18n() {
        return _this3.main.codeTranslator.i18nCodes.getAllProps();
      };

      var registerFormIncompleteHandler = function registerFormIncompleteHandler(handler) {
        if (typeof handler !== 'function') {
          console.warn('The Handler must be of type function');
          return false;
        }

        _this3.main.failHandler = handler;
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