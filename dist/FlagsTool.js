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

var FlagsTool =
/*#__PURE__*/
function (_InitMember) {
  _inherits(FlagsTool, _InitMember);

  _createClass(FlagsTool, [{
    key: "initMember",
    value: function initMember() {
      this.FADEIN_SPEED = 400;
      this.FADEIN_DELAY = 15;
      this.main = null;
      this.flaggerChooser = null;
      this.container = null;
      this.languages = [];
      this.currentFlag = 0;
      this.isAnimating = false;
      this.inputStyleClasses = "";
      this.pickerClass = "";
      this.hoverAnimationTimeout = null;
      this.flaggerLeaveAnimationTimeout = null;
      this.flaggerCancelAnimationTimeout = null;
      this.placeHolderType = "string";
      this.placeholder = "";
    }
  }]);

  function FlagsTool(el, loader) {
    var _this;

    _classCallCheck(this, FlagsTool);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlagsTool).call(this));
    _this.container = el;
    _this.main = loader;
    var lng = null;

    if (el.attr('languages') !== undefined && loader.langKeys === undefined) {
      var string = String(el.attr('languages').replace(/'/g, "\""));
      lng = $.parseJSON(string);
    } else {
      lng = loader.langKeys;
    }

    for (var i = 0; i < lng.length; i++) {
      var currentLng = loader.codeTranslator.translateIsoToShort(lng[i]);

      if (_this.languages.indexOf(currentLng) === -1) {
        _this.languages.push(currentLng);
      } else {
        console.warn("Languages can not be added twice. Second '" + lng[i] + "' was ignored.");
      }
    }

    if (el.attr('animate') !== undefined && (el.attr('animate') === "false" || Boolean(el.attr('animate')) === false)) {
      _this.FADEIN_SPEED = 0;
      _this.FADEIN_DELAY = 0;
    }

    _this.loadStyles();

    _this.parsePlaceholder();

    _this.initFlagController();

    return _this;
  }

  _createClass(FlagsTool, [{
    key: "parsePlaceholder",
    value: function parsePlaceholder() {
      if (this.container.attr('placeholder') === undefined) return;
      var string = String(this.container.attr('placeholder').replace(/'/g, "\""));
      var placeholder = "";

      try {
        placeholder = $.parseJSON(string);
      } catch (e) {
        placeholder = string;
      }

      if (Array.isArray(placeholder)) {
        this.placeHolderType = "array";
        this.placeholder = [];

        if (placeholder.length < this.languages.length) {
          throw "If multiple Placeholders are provided, please provide a placeholder for every language";
        }

        for (var i = 0; i < placeholder.length; i++) {
          this.placeholder[this.languages[i]] = placeholder[i];
        }
      } else {
        this.placeHolderType = "string";
        this.placeholder = placeholder;
      }
    }
  }, {
    key: "loadStyles",
    value: function loadStyles() {
      if (this.container.attr("expander-class") !== undefined) {
        this.inputStyleClasses = this.container.attr("expander-class");
      }

      if (this.container.attr("picker-class") !== undefined) {
        this.pickerClass = this.container.attr("picker-class");
      }
    }
  }, {
    key: "initFlagController",
    value: function initFlagController() {
      if (this.pickerClass !== "") {
        this.container.append("<div class='" + this.pickerClass + "'></div>");
      } else {
        this.container.append("<div class='default-picker'></div>");
      }

      this.flagger = $(this.container.children()[this.container.children().length - 1]); //this.flagger.css({"left" : this.main.inputTool.input.outerWidth() - 24, 'margin-top': - (this.main.inputTool.input.outerHeight() + 24) / 2});

      this.flagger.html('<span title="Language: ' + this.main.codeTranslator.translateShortToIso(this.languages[0]) + '" class="flag-icon flag-icon-' + this.languages[0] + '"></span>');
      this.loadFlags();
      var self = this;
      this.flagger.hover(function () {
        if (self.languages.length === 1) return;
        clearTimeout(self.flaggerLeaveAnimationTimeout);
        clearTimeout(self.flaggerCancelAnimationTimeout);

        if (!self.isAnimating) {
          $(this).css({
            "cursor": "pointer"
          });
          self.hoverAnimationTimeout = setTimeout(function () {
            self.fadeIn();
          }, 50);
        }
      }, function () {
        if (!self.isAnimating) {
          clearTimeout(self.hoverAnimationTimeout);
        }
      });
      this.flagger.mouseleave(function () {
        self.flaggerCancelAnimationTimeout = setTimeout(function () {
          self.fadeOut(function () {
            self.isAnimating = false;
          });
        }, 1000);
      });
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      this.isAnimating = true;
      var self = this;
      this.flaggerChooser.show();
      this.flaggerChooser.fadeIn(50);
      var outerv = this.flaggerChooser.children().length;
      this.flaggerChooser.children().each(function (v) {
        $(this).delay(v * self.FADEIN_DELAY).fadeIn(self.FADEIN_SPEED);
      });
      this.flaggerChooser.delay(outerv * self.FADEIN_DELAY).queue(function () {
        self.isAnimating = false;
      });
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(callback) {
      this.isAnimating = true;
      var self = this;
      var outerv = this.flaggerChooser.children().length;
      this.flaggerChooser.children().each(function (v) {
        $(this).delay(v * self.FADEIN_DELAY * 3).fadeOut(self.FADEIN_SPEED);
      });
      setTimeout(function () {
        self.flaggerChooser.fadeOut('fast');
        self.flaggerChooser.hide();
        callback.call();
      }, (outerv - 2) * self.FADEIN_DELAY * 3);
    }
  }, {
    key: "replaceCurrent",
    value: function replaceCurrent(item) {
      this.flagger.html(item.html());
      this.main.inputTool.changedInputView();
    }
  }, {
    key: "loadFlags",
    value: function loadFlags() {
      var _this2 = this;

      var self = this;

      if (this.inputStyleClasses !== "") {
        this.container.append("<div class='" + this.inputStyleClasses + "'></div>");
      } else {
        this.container.append("<div></div>");
      }

      if (this.flaggerChooser != null) {
        this.flaggerChooser.remove();
      }

      this.flaggerChooser = $(this.container.children()[this.container.children().length - 1]);
      this.flaggerChooser.css({
        "position": "absolute",
        "margin-top": "-2px",
        "display": "none",
        "padding": "2px",
        "background-color": "#FFFFFF",
        width: "100%",
        "border": "1px solid " + this.main.inputTool.input.css('border-color'),
        "z-index": 2
      });
      var itemsPerRow = Math.floor((this.flaggerChooser.innerWidth() - this.flaggerChooser.css("padding") * 2) / (this.flagger.outerWidth() + 2));

      var _loop = function _loop(i) {
        if (i === _this2.currentFlag) {
          return "continue";
        }

        _this2.flaggerChooser.append('<div style="float:right; display: none; padding:0 0 2px 2px;" ><span title="Language: ' + _this2.main.codeTranslator.translateShortToIso(_this2.languages[i]) + '" class="flag-icon flag-icon-' + _this2.languages[i] + '"></span></div>'); // Select the Current Item


        var current = $(_this2.flaggerChooser.children()[_this2.flaggerChooser.children().length - 1]);
        current.hover(function () {
          $(this).css({
            "cursor": "pointer"
          });
        });
        current.click(function () {
          self.currentFlag = i;
          self.replaceCurrent($(this));
          self.fadeOut(function () {
            self.isAnimating = false;
            self.loadFlags();
          });
        });

        if (i % itemsPerRow === 0) {
          _this2.flaggerChooser.append("<div style='clear: both;'></div>");
        }
      };

      for (var i = 0; i < this.languages.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }

      this.flaggerChooser.append("<div style='clear: both;'></div>");
      this.flaggerChooser.on('mouseleave', function () {
        self.flaggerLeaveAnimationTimeout = setTimeout(function () {
          self.fadeOut(function () {
            self.isAnimating = false;
          });
        }, 250);
      });
      this.flaggerChooser.on('mouseenter', function () {
        clearTimeout(self.flaggerCancelAnimationTimeout);
        clearTimeout(self.flaggerLeaveAnimationTimeout);
      });
    }
  }]);

  return FlagsTool;
}(_InitMember2.default);

var _default = FlagsTool;
exports.default = _default;