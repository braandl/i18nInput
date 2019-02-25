"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InitMember2 = _interopRequireDefault(require("./InitMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputTool =
/*#__PURE__*/
function (_InitMember) {
  _inherits(InputTool, _InitMember);

  _createClass(InputTool, [{
    key: "initMember",
    value: function initMember() {
      this.container = null;
      this.main = null;
      this.input = null;
      this.inputvalues = [];
      this.inputStyleClasses = "";

      this.inputvalues.size = function () {
        var size = 0,
            key;

        for (key in this) {
          if (this.hasOwnProperty(key) && key !== "size" && key !== "each" && key !== "hasKey") size++;
        }

        return size;
      };

      this.inputvalues.each = function (ctx, callable) {
        var key;

        for (key in this) {
          if (this.hasOwnProperty(key) && key !== "size" && key !== "each" && key !== "hasKey") {
            callable.apply(ctx, [key, this[key]]);
          }
        }
      };

      this.inputvalues.hasKey = function (value) {
        for (var key in this) {
          if (key === value) {
            return true;
          }
        }

        return false;
      };
    }
  }]);

  function InputTool(el, loader) {
    var _this;

    _classCallCheck(this, InputTool);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputTool).call(this));
    _this.container = el;

    if (el.attr("input-class") !== undefined) {
      _this.inputStyleClasses = el.attr("input-class");
    }

    var placeholder = el.attr("placeholder") !== undefined ? "placeholder=''" : "";
    var rows = parseInt(el.attr('rows'));

    if (rows === 1 || !rows) {
      el.append("<input " + placeholder + " class='" + _this.inputStyleClasses + "' type='text' />");
    } else {
      el.append("<textarea " + placeholder + " class='" + _this.inputStyleClasses + "' style='line-height: 12px' type='text' rows='" + rows + "'></textarea>");
    }

    _this.input = $(el.children()[el.children().length - 1]);
    _this.main = loader;

    _this.input.css({
      "width": el.attr('width') < 35 ? 35 : el.attr('width'),
      "height": el.attr('height') < 12 ? 12 : el.attr('height')
    });

    el.css({
      "width": _this.input.outerWidth() < 35 ? 'auto' : _this.input.outerWidth(),
      "padding-bottom": "2px",
      "padding-top": "2px",
      "position": "relative"
    });

    _this.addElementMethods();

    _this.initKeyLogging();

    _this.initInputChange();

    return _this;
  }

  _createClass(InputTool, [{
    key: "initKeyLogging",
    value: function initKeyLogging() {
      var self = this;
      this.input.keyup(function () {
        var currentLanguage = self.main.flagsTool.languages[self.main.flagsTool.currentFlag];
        self.inputvalues[currentLanguage] = $(this).val();
      });
    }
  }, {
    key: "initInputChange",
    value: function initInputChange() {
      var self = this;
      this.input.change(function () {
        var currentLanguage = self.main.flagsTool.languages[self.main.flagsTool.currentFlag];
        self.inputvalues[currentLanguage] = $(this).val();
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
      var self = this;

      var printResults = function printResults(lang) {
        if (self.inputvalues !== undefined && self.inputvalues[lang] !== undefined) {
          return self.inputvalues[lang];
        } else if (self.inputvalues !== undefined) {
          return self.main.codeTranslator.translateIsoAssocArrayToShort(self.inputvalues); //;self.main.codeTranslator.translateShortToIso(lang);
        } else {
          return "";
        }
      };

      var completed = function completed() {
        return missingi18n().length === 0;
      };

      var missingi18n = function missingi18n() {
        var missing = [];

        for (var i = 0; i < self.main.flagsTool.languages.length; i++) {
          if (!self.inputvalues.hasKey(self.main.flagsTool.languages[i]) || self.inputvalues[self.main.flagsTool.languages[i]] === undefined || self.inputvalues[self.main.flagsTool.languages[i]].length === 0) {
            missing.push(self.main.flagsTool.languages[i]);
          }
        }

        return self.main.codeTranslator.translateIsoArrayToShort(missing);
      };

      var setValueAuto = function setValueAuto(value) {
        if (_typeof(value) === 'object') {
          Object.keys(value).forEach(function (key) {
            setValue(key, value[key]);
          });
        } else {
          self.input.val(value);
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
              var short = self.main.codeTranslator.translateIsoToShort(lng[i]);

              if (self.main.isi18nRegistered(short)) {
                self.inputvalues[short] = value[i];
              } else {
                throw "Language " + lng + " is not registered with the View";
              }
            }
          } else {
            throw "Either both, or non argument must be of type Array";
          }
        } else {
          var _short = self.main.codeTranslator.translateIsoToShort(lng);

          if (self.main.isi18nRegistered(_short)) {
            self.inputvalues[_short] = value;
          } else {
            throw "Language " + lng + " is not registered with the View";
          }
        }

        self.changedInputView();
        return true;
      };

      var availablei18n = function availablei18n() {
        return self.main.codeTranslator.i18nCodes.getAllProps();
      };

      var registerFormIncompleteHandler = function registerFormIncompleteHandler(handler) {
        if (typeof handler !== "function") {
          console.warn("The Handler must be of type function");
          return false;
        }

        self.main.failHandler = handler;
        return true;
      };

      this.container[0].i18n = printResults;
      this.container[0].complete = completed;
      this.container[0].missing = missingi18n;
      this.container[0].setValue = setValue;
      this.container[0].setValueAuto = setValueAuto;
      this.container[0].allLocales = availablei18n;
      this.container[0].registerFormIncompleteHandler = registerFormIncompleteHandler;

      this.container.init.prototype.i18n = function (value) {
        return document.getElementById($(this).attr("id").replace('#', '')).i18n(value);
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
}(_InitMember2.default);

var _default = InputTool;
exports.default = _default;