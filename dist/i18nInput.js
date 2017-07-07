(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InitMember2 = require("./InitMember");

var _InitMember3 = _interopRequireDefault(_InitMember2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sbrandt on 05.07.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CodeTranslator = function (_InitMember) {
    _inherits(CodeTranslator, _InitMember);

    _createClass(CodeTranslator, [{
        key: "initMember",
        value: function initMember() {
            this.i18nCodes = {
                "af": "fa_AF",
                "al": "al_AL",
                "dz": "ar_DZ",
                "as": "en_AS",
                "ad": "ad_AD",
                "ao": "pt_AO",
                "ai": "en_AI",
                "aq": "aq_AQ",
                "ag": "an_AG",
                "ar": "as_AR",
                "am": "am_AM",
                "aw": "nl_AW",
                "au": "en_AU",
                "at": "de_AT",
                "az": "az_AZ",
                "bs": "en_BS",
                "bh": "ar_BH",
                "bd": "bn_BD",
                "bb": "en_BB",
                "by": "by_BY",
                "be": "bl_BE",
                "bz": "en_BZ",
                "bj": "fr_BJ",
                "bm": "en_BM",
                "bt": "bt_BT",
                "bo": "es_BO",
                "ba": "hr_BA",
                "bw": "en_BW",
                "bv": "bv_BV",
                "br": "pt_BR",
                "io": "en_IO",
                "vg": "en_VG",
                "bn": "ms_BN",
                "bg": "tr_BG",
                "bf": "fr_BF",
                "bi": "fr_BI",
                "kh": "kh_KH",
                "cm": "en_CM",
                "ca": "en_CA",
                "cv": "ct_CV",
                "bq": "bq_BQ",
                "ky": "en_KY",
                "cf": "fr_CF",
                "td": "fr_TD",
                "cl": "es_CL",
                "cn": "zh_CN",
                "cx": "cx_CX",
                "cc": "ms_CC",
                "co": "es_CO",
                "km": "fr_KM",
                "cg": "fr_CG",
                "cd": "fr_CD",
                "ck": "en_CK",
                "cr": "es_CR",
                "hr": "hr_HR",
                "cu": "es_CU",
                "cw": "cw_CW",
                "cy": "el_CY",
                "cz": "cz_CZ",
                "ci": "fr_CI",
                "dk": "da_DK",
                "dj": "fr_DJ",
                "dm": "en_DM",
                "do": "es_DO",
                "ec": "es_EC",
                "eg": "ar_EG",
                "sv": "es_SV",
                "gq": "es_GQ",
                "er": "aa_ER",
                "ee": "ee_EE",
                "et": "en_ET",
                "fk": "en_FK",
                "fo": "da_FO",
                "fj": "en_FJ",
                "fi": "fo_FI",
                "fr": "fr_FR",
                "gf": "fr_GF",
                "pf": "fr_PF",
                "tf": "tf_TF",
                "ga": "fr_GA",
                "gm": "en_GM",
                "ge": "ge_GE",
                "de": "de_DE",
                "gh": "en_GH",
                "gi": "en_GI",
                "gr": "el_GR",
                "gl": "da_GL",
                "gd": "en_GD",
                "gp": "fr_GP",
                "gu": "em_GU",
                "gt": "es_GT",
                "gg": "gg_GG",
                "gn": "fr_GN",
                "gw": "pt_GW",
                "gy": "en_GY",
                "ht": "fr_HT",
                "hm": "hm_HM",
                "hn": "es_HN",
                "hk": "zh_HK",
                "hu": "hu_HU",
                "is": "is_IS",
                "in": "en_IN",
                "id": "id_ID",
                "ir": "fa_IR",
                "iq": "ar_IQ",
                "ie": "en_IE",
                "im": "im_IM",
                "il": "il_IL",
                "it": "it_IT",
                "jm": "jm_JM",
                "jp": "jp_JP",
                "je": "je_JE",
                "jo": "ar_JO",
                "kz": "kz_KZ",
                "ke": "ke_KE",
                "ki": "ki_KI",
                "kw": "kw_KW",
                "kg": "kg_KG",
                "la": "la_LA",
                "lv": "lv_LV",
                "lb": "lb_LB",
                "ls": "ls_LS",
                "lr": "lr_LR",
                "ly": "ly_LY",
                "li": "li_LI",
                "lt": "lt_LT",
                "lu": "lu_LU",
                "mo": "mo_MO",
                "mk": "mk_MK",
                "mg": "mg_MG",
                "mw": "mw_MW",
                "my": "my_MY",
                "mv": "mv_MV",
                "ml": "ml_ML",
                "mt": "mt_MT",
                "mh": "mh_MH",
                "mq": "mq_MQ",
                "mr": "mr_MR",
                "mu": "mu_MU",
                "yt": "yt_YT",
                "mx": "mx_MX",
                "fm": "fm_FM",
                "md": "md_MD",
                "mc": "mc_MC",
                "mn": "mn_MN",
                "me": "me_ME",
                "ms": "ms_MS",
                "ma": "ma_MA",
                "mz": "mz_MZ",
                "mm": "mm_MM",
                "na": "na_NA",
                "nr": "nr_NR",
                "np": "np_NP",
                "nl": "nl_NL",
                "nc": "nc_NC",
                "nz": "nz_NZ",
                "ni": "ni_NI",
                "ne": "ne_NE",
                "ng": "ng_NG",
                "nu": "nu_NU",
                "nf": "nf_NF",
                "kp": "kp_KP",
                "mp": "mp_MP",
                "no": "no_NO",
                "om": "om_OM",
                "pk": "pk_PK",
                "pw": "pw_PW",
                "ps": "ar_PS",
                "pa": "es_PA",
                "pg": "en_PG",
                "py": "es_PY",
                "pe": "es_PE",
                "ph": "en_PH",
                "pn": "pn_PN",
                "pl": "pl_PL",
                "pt": "pt_PT",
                "pr": "en_PR",
                "qa": "ar_QA",
                "ro": "ro_RO",
                "ru": "ru_RU",
                "rw": "rw_RW",
                "re": "fe_RE",
                "ws": "ws_WS",
                "sm": "it_SM",
                "sa": "ar_SA",
                "sn": "fr_SN",
                "rs": "rs_RS",
                "sc": "en_SC",
                "sl": "en_SL",
                "sg": "sg_SG",
                "sx": "sx_SX",
                "sk": "sk_SK",
                "si": "si_SI",
                "sb": "en_SB",
                "so": "so_SO",
                "za": "za_ZA",
                "gs": "gs_GS",
                "kr": "ko_KR",
                "ss": "ss_SS",
                "es": "es_ES",
                "lk": "lk_LK",
                "bl": "bl_BL",
                "sh": "en_SH",
                "kn": "en_KN",
                "lc": "en_LC",
                "mf": "mf_MF",
                "pm": "fr_PM",
                "vc": "en_VC",
                "sd": "ar_SD",
                "sr": "nl_SR",
                "sj": "sj_SJ",
                "sz": "en_SZ",
                "se": "sv_SE",
                "ch": "de_CH",
                "sy": "ar_SY",
                "st": "pt_ST",
                "tw": "zh_TW",
                "tj": "tj_TJ",
                "tz": "sw_TZ",
                "th": "th_TH",
                "tl": "tl_TL",
                "tg": "tr_TG",
                "tk": "tk_TK",
                "to": "to_TO",
                "tt": "en_TT",
                "tn": "ar_TN",
                "tr": "tr_TR",
                "tm": "tm_TM",
                "tc": "en_TC",
                "tv": "tv_TV",
                "um": "en_UM",
                "vi": "en_VI",
                "gb": "en_GB",
                "us": "en_US",
                "ug": "en_UG",
                "ua": "ru_UA",
                "ae": "ar_AE",
                "uy": "rd_UY",
                "uz": "uz_UZ",
                "vu": "vu_VU",
                "va": "va_VA",
                "ve": "es_VE",
                "vn": "vn_VN",
                "wf": "wf_WF",
                "eh": "eh_EH",
                "ye": "ar_YE",
                "zm": "en_ZM",
                "zw": "em_ZW",
                "ax": "sv_AX"
            };
        }
    }]);

    function CodeTranslator() {
        _classCallCheck(this, CodeTranslator);

        var _this = _possibleConstructorReturn(this, (CodeTranslator.__proto__ || Object.getPrototypeOf(CodeTranslator)).call(this));

        _this.i18nCodes.findKeyByValue = function (value) {
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    if (this[prop] === value) {
                        return prop;
                    }
                }
            }
            return null;
        };

        _this.i18nCodes.getAllProps = function () {
            var res = [];
            for (var prop in this) {
                if (this.hasOwnProperty(prop)) {
                    res.push(this[prop]);
                }
            }
            return res;
        };
        return _this;
    }

    _createClass(CodeTranslator, [{
        key: "translateShortToIso",
        value: function translateShortToIso(short) {
            var res = this.i18nCodes[short];
            if (res !== null && res !== undefined) {
                return res;
            } else {
                throw "Selected Element Seems not to be valid";
            }
        }
    }, {
        key: "translateIsoAssocArrayToShort",
        value: function translateIsoAssocArrayToShort(i18nArray) {
            if (!Array.isArray(i18nArray)) {
                throw "Input Parameter must be of Type Array";
            }

            var resultArray = [];
            i18nArray.each(this, function (key, value) {
                resultArray[this.translateShortToIso(key)] = value;
            });

            return resultArray;
        }
    }, {
        key: "translateIsoArrayToShort",
        value: function translateIsoArrayToShort(i18nArray) {
            if (!Array.isArray(i18nArray)) {
                throw "Input Parameter must be of Type Array";
            }

            var resultArray = [];
            for (var i = 0; i < i18nArray.length; i++) {
                resultArray.push(this.translateShortToIso(i18nArray[i]));
            }

            return resultArray;
        }
    }, {
        key: "translateIsoToShort",
        value: function translateIsoToShort(i18n) {
            var res = this.i18nCodes.findKeyByValue(i18n);
            if (res !== null && res !== undefined) {
                return res;
            } else {
                throw "Selected Language is not available '" + i18n + "'";
            }
        }
    }]);

    return CodeTranslator;
}(_InitMember3.default);

exports.default = CodeTranslator;

},{"./InitMember":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InitMember2 = require("./InitMember");

var _InitMember3 = _interopRequireDefault(_InitMember2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sbrandt on 05.07.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FlagsTool = function (_InitMember) {
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
        _classCallCheck(this, FlagsTool);

        var _this = _possibleConstructorReturn(this, (FlagsTool.__proto__ || Object.getPrototypeOf(FlagsTool)).call(this));

        _this.container = el;
        _this.main = loader;
        var string = String(el.attr('languages').replace(/'/g, "\""));
        var lng = $.parseJSON(string);

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
            this.flagger = $(this.container.children()[this.container.children().length - 1]);
            this.flagger.css({ "left": this.main.inputTool.input.outerWidth() - 24, 'margin-top': -(this.main.inputTool.input.outerHeight() + 24) / 2 });
            this.flagger.html('<span title="Language: ' + this.main.codeTranslator.translateShortToIso(this.languages[0]) + '" class="flag-icon flag-icon-' + this.languages[0] + '"></span>');
            this.loadFlags();
            var self = this;

            this.flagger.hover(function () {
                if (self.languages.length === 1) return;
                clearTimeout(self.flaggerLeaveAnimationTimeout);
                clearTimeout(self.flaggerCancelAnimationTimeout);
                if (!self.isAnimating) {
                    $(this).css({ "cursor": "pointer" });
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
            this.flaggerChooser.css({ "position": "absolute", "margin-top": "-2px", "display": "none", "padding": "2px", "background-color": "#FFFFFF",
                width: this.main.inputTool.input.outerWidth(),
                "border": "1px solid " + this.main.inputTool.input.css('border-color'), "z-index": 2 });
            var itemsPerRow = Math.floor((this.flaggerChooser.innerWidth() - this.flaggerChooser.css("padding") * 2) / (this.flagger.outerWidth() + 2));

            var _loop = function _loop(i) {
                if (i === _this2.currentFlag) {
                    return "continue";
                }
                _this2.flaggerChooser.append('<div style="float:right; display: none; padding:0 0 2px 2px;" ><span title="Language: ' + _this2.main.codeTranslator.translateShortToIso(_this2.languages[i]) + '" class="flag-icon flag-icon-' + _this2.languages[i] + '"></span></div>');

                // Select the Current Item
                var current = $(_this2.flaggerChooser.children()[_this2.flaggerChooser.children().length - 1]);
                current.hover(function () {
                    $(this).css({ "cursor": "pointer" });
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
}(_InitMember3.default);

exports.default = FlagsTool;

},{"./InitMember":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by sbrandt on 05.07.17.
 */
var InitMember = function () {
    _createClass(InitMember, [{
        key: "initMember",
        value: function initMember() {}
    }]);

    function InitMember() {
        _classCallCheck(this, InitMember);

        this.initMember();
    }

    return InitMember;
}();

exports.default = InitMember;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InitMember2 = require("./InitMember");

var _InitMember3 = _interopRequireDefault(_InitMember2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sbrandt on 05.07.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var InputTool = function (_InitMember) {
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
                    key = void 0;
                for (key in this) {
                    if (this.hasOwnProperty(key) && key !== "size" && key !== "each" && key !== "hasKey") size++;
                }
                return size;
            };

            this.inputvalues.each = function (ctx, callable) {
                var key = void 0;
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
        _classCallCheck(this, InputTool);

        var _this = _possibleConstructorReturn(this, (InputTool.__proto__ || Object.getPrototypeOf(InputTool)).call(this));

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
        _this.input.css({ "width": el.attr('width') < 35 ? 35 : el.attr('width'), "height": el.attr('height') < 12 ? 12 : el.attr('height') });
        el.css({ "width": _this.input.outerWidth(), "padding-bottom": "2px", "padding-top": "2px" });
        _this.addElementMethods();
        _this.initKeyLogging();
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

            var setValue = function setValue(lng, value) {
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

            this.container.init.prototype.allLocales = function () {
                return document.getElementById($(this).attr("id").replace('#', '')).allLocales();
            };

            this.container.init.prototype.registerFormIncompleteHandler = function (handler) {
                return document.getElementById($(this).attr("id").replace('#', '')).registerFormIncompleteHandler(handler);
            };
        }
    }]);

    return InputTool;
}(_InitMember3.default);

exports.default = InputTool;

},{"./InitMember":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _InitMember2 = require('./InitMember');

var _InitMember3 = _interopRequireDefault(_InitMember2);

var _FlagsTool = require('./FlagsTool');

var _FlagsTool2 = _interopRequireDefault(_FlagsTool);

var _InputTool = require('./InputTool');

var _InputTool2 = _interopRequireDefault(_InputTool);

var _CodeTranslator = require('./CodeTranslator');

var _CodeTranslator2 = _interopRequireDefault(_CodeTranslator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by sbrandt on 05.07.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MainController = function (_InitMember) {
    _inherits(MainController, _InitMember);

    _createClass(MainController, [{
        key: 'initMember',
        value: function initMember() {
            this.flagsTool = null;
            this.container = null;
            this.inputTool = null;
            this.codeTranslator = null;

            this.failHandler = null;
        }
    }]);

    function MainController(container) {
        _classCallCheck(this, MainController);

        var _this = _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this));

        _this.container = $("#" + container);
        _this.initCodeTranslator();
        _this.initInputTool();
        _this.initFlagsTool();
        _this.registerSubmitHandler();
        _this.inputTool.changedInputView();
        return _this;
    }

    _createClass(MainController, [{
        key: 'initInputTool',
        value: function initInputTool() {
            this.inputTool = new _InputTool2.default(this.container, this);
        }
    }, {
        key: 'initFlagsTool',
        value: function initFlagsTool() {
            this.flagsTool = new _FlagsTool2.default(this.container, this);
        }
    }, {
        key: 'initCodeTranslator',
        value: function initCodeTranslator() {
            this.codeTranslator = new _CodeTranslator2.default(this.container, this);
        }
    }, {
        key: 'isi18nRegistered',
        value: function isi18nRegistered(i18n) {
            return this.flagsTool.languages.indexOf(i18n) !== -1;
        }
    }, {
        key: 'registerSubmitHandler',
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
                        self.inputTool.input.addClass('i18n-view-incomplete');

                        // Run an optional Fail Handler.
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
        key: 'findForm',
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
}(_InitMember3.default);

exports.default = MainController;

},{"./CodeTranslator":1,"./FlagsTool":2,"./InitMember":3,"./InputTool":4}],6:[function(require,module,exports){
'use strict';

var _MainController = require('./MainController');

var _MainController2 = _interopRequireDefault(_MainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function i18nInputView(container) {
  return new _MainController2.default(container);
} /**
   * Created by sbrandt on 05.07.17.
   */


window.i18nInputView = i18nInputView;

},{"./MainController":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9Db2RlVHJhbnNsYXRvci5qcyIsImpzL0ZsYWdzVG9vbC5qcyIsImpzL0luaXRNZW1iZXIuanMiLCJqcy9JbnB1dFRvb2wuanMiLCJqcy9NYWluQ29udHJvbGxlci5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUlNLGM7Ozs7O3FDQUVXO0FBQ1QsaUJBQUssU0FBTCxHQUFpQjtBQUNiLHNCQUFLLE9BRFE7QUFFYixzQkFBSyxPQUZRO0FBR2Isc0JBQUssT0FIUTtBQUliLHNCQUFLLE9BSlE7QUFLYixzQkFBSyxPQUxRO0FBTWIsc0JBQUssT0FOUTtBQU9iLHNCQUFLLE9BUFE7QUFRYixzQkFBSyxPQVJRO0FBU2Isc0JBQUssT0FUUTtBQVViLHNCQUFLLE9BVlE7QUFXYixzQkFBSyxPQVhRO0FBWWIsc0JBQUssT0FaUTtBQWFiLHNCQUFLLE9BYlE7QUFjYixzQkFBSyxPQWRRO0FBZWIsc0JBQUssT0FmUTtBQWdCYixzQkFBSyxPQWhCUTtBQWlCYixzQkFBSyxPQWpCUTtBQWtCYixzQkFBSyxPQWxCUTtBQW1CYixzQkFBSyxPQW5CUTtBQW9CYixzQkFBSyxPQXBCUTtBQXFCYixzQkFBSyxPQXJCUTtBQXNCYixzQkFBSyxPQXRCUTtBQXVCYixzQkFBSyxPQXZCUTtBQXdCYixzQkFBSyxPQXhCUTtBQXlCYixzQkFBSyxPQXpCUTtBQTBCYixzQkFBSyxPQTFCUTtBQTJCYixzQkFBSyxPQTNCUTtBQTRCYixzQkFBSyxPQTVCUTtBQTZCYixzQkFBSyxPQTdCUTtBQThCYixzQkFBSyxPQTlCUTtBQStCYixzQkFBSyxPQS9CUTtBQWdDYixzQkFBSyxPQWhDUTtBQWlDYixzQkFBSyxPQWpDUTtBQWtDYixzQkFBSyxPQWxDUTtBQW1DYixzQkFBSyxPQW5DUTtBQW9DYixzQkFBSyxPQXBDUTtBQXFDYixzQkFBSyxPQXJDUTtBQXNDYixzQkFBSyxPQXRDUTtBQXVDYixzQkFBSyxPQXZDUTtBQXdDYixzQkFBSyxPQXhDUTtBQXlDYixzQkFBSyxPQXpDUTtBQTBDYixzQkFBSyxPQTFDUTtBQTJDYixzQkFBSyxPQTNDUTtBQTRDYixzQkFBSyxPQTVDUTtBQTZDYixzQkFBSyxPQTdDUTtBQThDYixzQkFBSyxPQTlDUTtBQStDYixzQkFBSyxPQS9DUTtBQWdEYixzQkFBSyxPQWhEUTtBQWlEYixzQkFBSyxPQWpEUTtBQWtEYixzQkFBSyxPQWxEUTtBQW1EYixzQkFBSyxPQW5EUTtBQW9EYixzQkFBSyxPQXBEUTtBQXFEYixzQkFBSyxPQXJEUTtBQXNEYixzQkFBSyxPQXREUTtBQXVEYixzQkFBSyxPQXZEUTtBQXdEYixzQkFBSyxPQXhEUTtBQXlEYixzQkFBSyxPQXpEUTtBQTBEYixzQkFBSyxPQTFEUTtBQTJEYixzQkFBSyxPQTNEUTtBQTREYixzQkFBSyxPQTVEUTtBQTZEYixzQkFBSyxPQTdEUTtBQThEYixzQkFBSyxPQTlEUTtBQStEYixzQkFBSyxPQS9EUTtBQWdFYixzQkFBSyxPQWhFUTtBQWlFYixzQkFBSyxPQWpFUTtBQWtFYixzQkFBSyxPQWxFUTtBQW1FYixzQkFBSyxPQW5FUTtBQW9FYixzQkFBSyxPQXBFUTtBQXFFYixzQkFBSyxPQXJFUTtBQXNFYixzQkFBSyxPQXRFUTtBQXVFYixzQkFBSyxPQXZFUTtBQXdFYixzQkFBSyxPQXhFUTtBQXlFYixzQkFBSyxPQXpFUTtBQTBFYixzQkFBSyxPQTFFUTtBQTJFYixzQkFBSyxPQTNFUTtBQTRFYixzQkFBSyxPQTVFUTtBQTZFYixzQkFBSyxPQTdFUTtBQThFYixzQkFBSyxPQTlFUTtBQStFYixzQkFBSyxPQS9FUTtBQWdGYixzQkFBSyxPQWhGUTtBQWlGYixzQkFBSyxPQWpGUTtBQWtGYixzQkFBSyxPQWxGUTtBQW1GYixzQkFBSyxPQW5GUTtBQW9GYixzQkFBSyxPQXBGUTtBQXFGYixzQkFBSyxPQXJGUTtBQXNGYixzQkFBSyxPQXRGUTtBQXVGYixzQkFBSyxPQXZGUTtBQXdGYixzQkFBSyxPQXhGUTtBQXlGYixzQkFBSyxPQXpGUTtBQTBGYixzQkFBSyxPQTFGUTtBQTJGYixzQkFBSyxPQTNGUTtBQTRGYixzQkFBSyxPQTVGUTtBQTZGYixzQkFBSyxPQTdGUTtBQThGYixzQkFBSyxPQTlGUTtBQStGYixzQkFBSyxPQS9GUTtBQWdHYixzQkFBSyxPQWhHUTtBQWlHYixzQkFBSyxPQWpHUTtBQWtHYixzQkFBSyxPQWxHUTtBQW1HYixzQkFBSyxPQW5HUTtBQW9HYixzQkFBSyxPQXBHUTtBQXFHYixzQkFBSyxPQXJHUTtBQXNHYixzQkFBSyxPQXRHUTtBQXVHYixzQkFBSyxPQXZHUTtBQXdHYixzQkFBSyxPQXhHUTtBQXlHYixzQkFBSyxPQXpHUTtBQTBHYixzQkFBSyxPQTFHUTtBQTJHYixzQkFBSyxPQTNHUTtBQTRHYixzQkFBSyxPQTVHUTtBQTZHYixzQkFBSyxPQTdHUTtBQThHYixzQkFBSyxPQTlHUTtBQStHYixzQkFBSyxPQS9HUTtBQWdIYixzQkFBSyxPQWhIUTtBQWlIYixzQkFBSyxPQWpIUTtBQWtIYixzQkFBSyxPQWxIUTtBQW1IYixzQkFBSyxPQW5IUTtBQW9IYixzQkFBSyxPQXBIUTtBQXFIYixzQkFBSyxPQXJIUTtBQXNIYixzQkFBSyxPQXRIUTtBQXVIYixzQkFBSyxPQXZIUTtBQXdIYixzQkFBSyxPQXhIUTtBQXlIYixzQkFBSyxPQXpIUTtBQTBIYixzQkFBSyxPQTFIUTtBQTJIYixzQkFBSyxPQTNIUTtBQTRIYixzQkFBSyxPQTVIUTtBQTZIYixzQkFBSyxPQTdIUTtBQThIYixzQkFBSyxPQTlIUTtBQStIYixzQkFBSyxPQS9IUTtBQWdJYixzQkFBSyxPQWhJUTtBQWlJYixzQkFBSyxPQWpJUTtBQWtJYixzQkFBSyxPQWxJUTtBQW1JYixzQkFBSyxPQW5JUTtBQW9JYixzQkFBSyxPQXBJUTtBQXFJYixzQkFBSyxPQXJJUTtBQXNJYixzQkFBSyxPQXRJUTtBQXVJYixzQkFBSyxPQXZJUTtBQXdJYixzQkFBSyxPQXhJUTtBQXlJYixzQkFBSyxPQXpJUTtBQTBJYixzQkFBSyxPQTFJUTtBQTJJYixzQkFBSyxPQTNJUTtBQTRJYixzQkFBSyxPQTVJUTtBQTZJYixzQkFBSyxPQTdJUTtBQThJYixzQkFBSyxPQTlJUTtBQStJYixzQkFBSyxPQS9JUTtBQWdKYixzQkFBSyxPQWhKUTtBQWlKYixzQkFBSyxPQWpKUTtBQWtKYixzQkFBSyxPQWxKUTtBQW1KYixzQkFBSyxPQW5KUTtBQW9KYixzQkFBSyxPQXBKUTtBQXFKYixzQkFBSyxPQXJKUTtBQXNKYixzQkFBSyxPQXRKUTtBQXVKYixzQkFBSyxPQXZKUTtBQXdKYixzQkFBSyxPQXhKUTtBQXlKYixzQkFBSyxPQXpKUTtBQTBKYixzQkFBSyxPQTFKUTtBQTJKYixzQkFBSyxPQTNKUTtBQTRKYixzQkFBSyxPQTVKUTtBQTZKYixzQkFBSyxPQTdKUTtBQThKYixzQkFBSyxPQTlKUTtBQStKYixzQkFBSyxPQS9KUTtBQWdLYixzQkFBSyxPQWhLUTtBQWlLYixzQkFBSyxPQWpLUTtBQWtLYixzQkFBSyxPQWxLUTtBQW1LYixzQkFBSyxPQW5LUTtBQW9LYixzQkFBSyxPQXBLUTtBQXFLYixzQkFBSyxPQXJLUTtBQXNLYixzQkFBSyxPQXRLUTtBQXVLYixzQkFBSyxPQXZLUTtBQXdLYixzQkFBSyxPQXhLUTtBQXlLYixzQkFBSyxPQXpLUTtBQTBLYixzQkFBSyxPQTFLUTtBQTJLYixzQkFBSyxPQTNLUTtBQTRLYixzQkFBSyxPQTVLUTtBQTZLYixzQkFBSyxPQTdLUTtBQThLYixzQkFBSyxPQTlLUTtBQStLYixzQkFBSyxPQS9LUTtBQWdMYixzQkFBSyxPQWhMUTtBQWlMYixzQkFBSyxPQWpMUTtBQWtMYixzQkFBSyxPQWxMUTtBQW1MYixzQkFBSyxPQW5MUTtBQW9MYixzQkFBSyxPQXBMUTtBQXFMYixzQkFBSyxPQXJMUTtBQXNMYixzQkFBSyxPQXRMUTtBQXVMYixzQkFBSyxPQXZMUTtBQXdMYixzQkFBSyxPQXhMUTtBQXlMYixzQkFBSyxPQXpMUTtBQTBMYixzQkFBSyxPQTFMUTtBQTJMYixzQkFBSyxPQTNMUTtBQTRMYixzQkFBSyxPQTVMUTtBQTZMYixzQkFBSyxPQTdMUTtBQThMYixzQkFBSyxPQTlMUTtBQStMYixzQkFBSyxPQS9MUTtBQWdNYixzQkFBSyxPQWhNUTtBQWlNYixzQkFBSyxPQWpNUTtBQWtNYixzQkFBSyxPQWxNUTtBQW1NYixzQkFBSyxPQW5NUTtBQW9NYixzQkFBSyxPQXBNUTtBQXFNYixzQkFBSyxPQXJNUTtBQXNNYixzQkFBSyxPQXRNUTtBQXVNYixzQkFBSyxPQXZNUTtBQXdNYixzQkFBSyxPQXhNUTtBQXlNYixzQkFBSyxPQXpNUTtBQTBNYixzQkFBSyxPQTFNUTtBQTJNYixzQkFBSyxPQTNNUTtBQTRNYixzQkFBSyxPQTVNUTtBQTZNYixzQkFBSyxPQTdNUTtBQThNYixzQkFBSyxPQTlNUTtBQStNYixzQkFBSyxPQS9NUTtBQWdOYixzQkFBSyxPQWhOUTtBQWlOYixzQkFBSyxPQWpOUTtBQWtOYixzQkFBSyxPQWxOUTtBQW1OYixzQkFBSyxPQW5OUTtBQW9OYixzQkFBSyxPQXBOUTtBQXFOYixzQkFBSyxPQXJOUTtBQXNOYixzQkFBSyxPQXROUTtBQXVOYixzQkFBSyxPQXZOUTtBQXdOYixzQkFBSyxPQXhOUTtBQXlOYixzQkFBSyxPQXpOUTtBQTBOYixzQkFBSyxPQTFOUTtBQTJOYixzQkFBSyxPQTNOUTtBQTROYixzQkFBSyxPQTVOUTtBQTZOYixzQkFBSyxPQTdOUTtBQThOYixzQkFBSyxPQTlOUTtBQStOYixzQkFBSyxPQS9OUTtBQWdPYixzQkFBSyxPQWhPUTtBQWlPYixzQkFBSyxPQWpPUTtBQWtPYixzQkFBSyxPQWxPUTtBQW1PYixzQkFBSyxPQW5PUTtBQW9PYixzQkFBSyxPQXBPUTtBQXFPYixzQkFBSyxPQXJPUTtBQXNPYixzQkFBSyxPQXRPUTtBQXVPYixzQkFBSyxPQXZPUTtBQXdPYixzQkFBSyxPQXhPUTtBQXlPYixzQkFBSyxPQXpPUTtBQTBPYixzQkFBSyxPQTFPUTtBQTJPYixzQkFBSyxPQTNPUTtBQTRPYixzQkFBSyxPQTVPUTtBQTZP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QUFHLE1BQUgsT0FBZ0IsSUFBN0MsSUFBcUQsR0FBRyxNQUFILEdBQVksSUFBWixDQUFpQixVQUFqQixNQUFpQyxNQUExRixFQUFrRztBQUM5Rix1QkFBTyxJQUFQO0FBQ0g7QUFDRCxnQkFBSSxHQUFHLE1BQUgsR0FBWSxJQUFaLENBQWlCLFVBQWpCLE1BQWlDLE1BQXJDLEVBQTZDO0FBQ3pDLHVCQUFPLEdBQUcsTUFBSCxFQUFQO0FBQ0gsYUFGRCxNQUVNO0FBQ0YsdUJBQU8sS0FBSyxRQUFMLENBQWMsR0FBRyxNQUFILEVBQWQsQ0FBUDtBQUNIO0FBQ0o7Ozs7OztrQkFHVSxjOzs7OztBQzlGZjs7Ozs7O0FBRUEsU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDO0FBQzlCLFNBQU8sNkJBQW1CLFNBQW5CLENBQVA7QUFDSCxDLENBUEQ7Ozs7O0FBU0EsT0FBTyxhQUFQLEdBQXVCLGFBQXZCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBzYnJhbmR0IG9uIDA1LjA3LjE3LlxuICovXG5pbXBvcnQgSW5pdE1lbWJlciBmcm9tIFwiLi9Jbml0TWVtYmVyXCI7XG5jbGFzcyBDb2RlVHJhbnNsYXRvciBleHRlbmRzIEluaXRNZW1iZXIge1xuXG4gICAgaW5pdE1lbWJlcigpIHtcbiAgICAgICAgdGhpcy5pMThuQ29kZXMgPSB7XG4gICAgICAgICAgICBcImFmXCI6XCJmYV9BRlwiLFxuICAgICAgICAgICAgXCJhbFwiOlwiYWxfQUxcIixcbiAgICAgICAgICAgIFwiZHpcIjpcImFyX0RaXCIsXG4gICAgICAgICAgICBcImFzXCI6XCJlbl9BU1wiLFxuICAgICAgICAgICAgXCJhZFwiOlwiYWRfQURcIixcbiAgICAgICAgICAgIFwiYW9cIjpcInB0X0FPXCIsXG4gICAgICAgICAgICBcImFpXCI6XCJlbl9BSVwiLFxuICAgICAgICAgICAgXCJhcVwiOlwiYXFfQVFcIixcbiAgICAgICAgICAgIFwiYWdcIjpcImFuX0FHXCIsXG4gICAgICAgICAgICBcImFyXCI6XCJhc19BUlwiLFxuICAgICAgICAgICAgXCJhbVwiOlwiYW1fQU1cIixcbiAgICAgICAgICAgIFwiYXdcIjpcIm5sX0FXXCIsXG4gICAgICAgICAgICBcImF1XCI6XCJlbl9BVVwiLFxuICAgICAgICAgICAgXCJhdFwiOlwiZGVfQVRcIixcbiAgICAgICAgICAgIFwiYXpcIjpcImF6X0FaXCIsXG4gICAgICAgICAgICBcImJzXCI6XCJlbl9CU1wiLFxuICAgICAgICAgICAgXCJiaFwiOlwiYXJfQkhcIixcbiAgICAgICAgICAgIFwiYmRcIjpcImJuX0JEXCIsXG4gICAgICAgICAgICBcImJiXCI6XCJlbl9CQlwiLFxuICAgICAgICAgICAgXCJieVwiOlwiYnlfQllcIixcbiAgICAgICAgICAgIFwiYmVcIjpcImJsX0JFXCIsXG4gICAgICAgICAgICBcImJ6XCI6XCJlbl9CWlwiLFxuICAgICAgICAgICAgXCJialwiOlwiZnJfQkpcIixcbiAgICAgICAgICAgIFwiYm1cIjpcImVuX0JNXCIsXG4gICAgICAgICAgICBcImJ0XCI6XCJidF9CVFwiLFxuICAgICAgICAgICAgXCJib1wiOlwiZXNfQk9cIixcbiAgICAgICAgICAgIFwiYmFcIjpcImhyX0JBXCIsXG4gICAgICAgICAgICBcImJ3XCI6XCJlbl9CV1wiLFxuICAgICAgICAgICAgXCJidlwiOlwiYnZfQlZcIixcbiAgICAgICAgICAgIFwiYnJcIjpcInB0X0JSXCIsXG4gICAgICAgICAgICBcImlvXCI6XCJlbl9JT1wiLFxuICAgICAgICAgICAgXCJ2Z1wiOlwiZW5fVkdcIixcbiAgICAgICAgICAgIFwiYm5cIjpcIm1zX0JOXCIsXG4gICAgICAgICAgICBcImJnXCI6XCJ0cl9CR1wiLFxuICAgICAgICAgICAgXCJiZlwiOlwiZnJfQkZcIixcbiAgICAgICAgICAgIFwiYmlcIjpcImZyX0JJXCIsXG4gICAgICAgICAgICBcImtoXCI6XCJraF9LSFwiLFxuICAgICAgICAgICAgXCJjbVwiOlwiZW5fQ01cIixcbiAgICAgICAgICAgIFwiY2FcIjpcImVuX0NBXCIsXG4gICAgICAgICAgICBcImN2XCI6XCJjdF9DVlwiLFxuICAgICAgICAgICAgXCJicVwiOlwiYnFfQlFcIixcbiAgICAgICAgICAgIFwia3lcIjpcImVuX0tZXCIsXG4gICAgICAgICAgICBcImNmXCI6XCJmcl9DRlwiLFxuICAgICAgICAgICAgXCJ0ZFwiOlwiZnJfVERcIixcbiAgICAgICAgICAgIFwiY2xcIjpcImVzX0NMXCIsXG4gICAgICAgICAgICBcImNuXCI6XCJ6aF9DTlwiLFxuICAgICAgICAgICAgXCJjeFwiOlwiY3hfQ1hcIixcbiAgICAgICAgICAgIFwiY2NcIjpcIm1zX0NDXCIsXG4gICAgICAgICAgICBcImNvXCI6XCJlc19DT1wiLFxuICAgICAgICAgICAgXCJrbVwiOlwiZnJfS01cIixcbiAgICAgICAgICAgIFwiY2dcIjpcImZyX0NHXCIsXG4gICAgICAgICAgICBcImNkXCI6XCJmcl9DRFwiLFxuICAgICAgICAgICAgXCJja1wiOlwiZW5fQ0tcIixcbiAgICAgICAgICAgIFwiY3JcIjpcImVzX0NSXCIsXG4gICAgICAgICAgICBcImhyXCI6XCJocl9IUlwiLFxuICAgICAgICAgICAgXCJjdVwiOlwiZXNfQ1VcIixcbiAgICAgICAgICAgIFwiY3dcIjpcImN3X0NXXCIsXG4gICAgICAgICAgICBcImN5XCI6XCJlbF9DWVwiLFxuICAgICAgICAgICAgXCJjelwiOlwiY3pfQ1pcIixcbiAgICAgICAgICAgIFwiY2lcIjpcImZyX0NJXCIsXG4gICAgICAgICAgICBcImRrXCI6XCJkYV9ES1wiLFxuICAgICAgICAgICAgXCJkalwiOlwiZnJfREpcIixcbiAgICAgICAgICAgIFwiZG1cIjpcImVuX0RNXCIsXG4gICAgICAgICAgICBcImRvXCI6XCJlc19ET1wiLFxuICAgICAgICAgICAgXCJlY1wiOlwiZXNfRUNcIixcbiAgICAgICAgICAgIFwiZWdcIjpcImFyX0VHXCIsXG4gICAgICAgICAgICBcInN2XCI6XCJlc19TVlwiLFxuICAgICAgICAgICAgXCJncVwiOlwiZXNfR1FcIixcbiAgICAgICAgICAgIFwiZXJcIjpcImFhX0VSXCIsXG4gICAgICAgICAgICBcImVlXCI6XCJlZV9FRVwiLFxuICAgICAgICAgICAgXCJldFwiOlwiZW5fRVRcIixcbiAgICAgICAgICAgIFwiZmtcIjpcImVuX0ZLXCIsXG4gICAgICAgICAgICBcImZvXCI6XCJkYV9GT1wiLFxuICAgICAgICAgICAgXCJmalwiOlwiZW5fRkpcIixcbiAgICAgICAgICAgIFwiZmlcIjpcImZvX0ZJXCIsXG4gICAgICAgICAgICBcImZyXCI6XCJmcl9GUlwiLFxuICAgICAgICAgICAgXCJnZlwiOlwiZnJfR0ZcIixcbiAgICAgICAgICAgIFwicGZcIjpcImZyX1BGXCIsXG4gICAgICAgICAgICBcInRmXCI6XCJ0Zl9URlwiLFxuICAgICAgICAgICAgXCJnYVwiOlwiZnJfR0FcIixcbiAgICAgICAgICAgIFwiZ21cIjpcImVuX0dNXCIsXG4gICAgICAgICAgICBcImdlXCI6XCJnZV9HRVwiLFxuICAgICAgICAgICAgXCJkZVwiOlwiZGVfREVcIixcbiAgICAgICAgICAgIFwiZ2hcIjpcImVuX0dIXCIsXG4gICAgICAgICAgICBcImdpXCI6XCJlbl9HSVwiLFxuICAgICAgICAgICAgXCJnclwiOlwiZWxfR1JcIixcbiAgICAgICAgICAgIFwiZ2xcIjpcImRhX0dMXCIsXG4gICAgICAgICAgICBcImdkXCI6XCJlbl9HRFwiLFxuICAgICAgICAgICAgXCJncFwiOlwiZnJfR1BcIixcbiAgICAgICAgICAgIFwiZ3VcIjpcImVtX0dVXCIsXG4gICAgICAgICAgICBcImd0XCI6XCJlc19HVFwiLFxuICAgICAgICAgICAgXCJnZ1wiOlwiZ2dfR0dcIixcbiAgICAgICAgICAgIFwiZ25cIjpcImZyX0dOXCIsXG4gICAgICAgICAgICBcImd3XCI6XCJwdF9HV1wiLFxuICAgICAgICAgICAgXCJneVwiOlwiZW5fR1lcIixcbiAgICAgICAgICAgIFwiaHRcIjpcImZyX0hUXCIsXG4gICAgICAgICAgICBcImhtXCI6XCJobV9ITVwiLFxuICAgICAgICAgICAgXCJoblwiOlwiZXNfSE5cIixcbiAgICAgICAgICAgIFwiaGtcIjpcInpoX0hLXCIsXG4gICAgICAgICAgICBcImh1XCI6XCJodV9IVVwiLFxuICAgICAgICAgICAgXCJpc1wiOlwiaXNfSVNcIixcbiAgICAgICAgICAgIFwiaW5cIjpcImVuX0lOXCIsXG4gICAgICAgICAgICBcImlkXCI6XCJpZF9JRFwiLFxuICAgICAgICAgICAgXCJpclwiOlwiZmFfSVJcIixcbiAgICAgICAgICAgIFwiaXFcIjpcImFyX0lRXCIsXG4gICAgICAgICAgICBcImllXCI6XCJlbl9JRVwiLFxuICAgICAgICAgICAgXCJpbVwiOlwiaW1fSU1cIixcbiAgICAgICAgICAgIFwiaWxcIjpcImlsX0lMXCIsXG4gICAgICAgICAgICBcIml0XCI6XCJpdF9JVFwiLFxuICAgICAgICAgICAgXCJqbVwiOlwiam1fSk1cIixcbiAgICAgICAgICAgIFwianBcIjpcImpwX0pQXCIsXG4gICAgICAgICAgICBcImplXCI6XCJqZV9KRVwiLFxuICAgICAgICAgICAgXCJqb1wiOlwiYXJfSk9cIixcbiAgICAgICAgICAgIFwia3pcIjpcImt6X0taXCIsXG4gICAgICAgICAgICBcImtlXCI6XCJrZV9LRVwiLFxuICAgICAgICAgICAgXCJraVwiOlwia2lfS0lcIixcbiAgICAgICAgICAgIFwia3dcIjpcImt3X0tXXCIsXG4gICAgICAgICAgICBcImtnXCI6XCJrZ19LR1wiLFxuICAgICAgICAgICAgXCJsYVwiOlwibGFfTEFcIixcbiAgICAgICAgICAgIFwibHZcIjpcImx2X0xWXCIsXG4gICAgICAgICAgICBcImxiXCI6XCJsYl9MQlwiLFxuICAgICAgICAgICAgXCJsc1wiOlwibHNfTFNcIixcbiAgICAgICAgICAgIFwibHJcIjpcImxyX0xSXCIsXG4gICAgICAgICAgICBcImx5XCI6XCJseV9MWVwiLFxuICAgICAgICAgICAgXCJsaVwiOlwibGlfTElcIixcbiAgICAgICAgICAgIFwibHRcIjpcImx0X0xUXCIsXG4gICAgICAgICAgICBcImx1XCI6XCJsdV9MVVwiLFxuICAgICAgICAgICAgXCJtb1wiOlwibW9fTU9cIixcbiAgICAgICAgICAgIFwibWtcIjpcIm1rX01LXCIsXG4gICAgICAgICAgICBcIm1nXCI6XCJtZ19NR1wiLFxuICAgICAgICAgICAgXCJtd1wiOlwibXdfTVdcIixcbiAgICAgICAgICAgIFwibXlcIjpcIm15X01ZXCIsXG4gICAgICAgICAgICBcIm12XCI6XCJtdl9NVlwiLFxuICAgICAgICAgICAgXCJtbFwiOlwibWxfTUxcIixcbiAgICAgICAgICAgIFwibXRcIjpcIm10X01UXCIsXG4gICAgICAgICAgICBcIm1oXCI6XCJtaF9NSFwiLFxuICAgICAgICAgICAgXCJtcVwiOlwibXFfTVFcIixcbiAgICAgICAgICAgIFwibXJcIjpcIm1yX01SXCIsXG4gICAgICAgICAgICBcIm11XCI6XCJtdV9NVVwiLFxuICAgICAgICAgICAgXCJ5dFwiOlwieXRfWVRcIixcbiAgICAgICAgICAgIFwibXhcIjpcIm14X01YXCIsXG4gICAgICAgICAgICBcImZtXCI6XCJmbV9GTVwiLFxuICAgICAgICAgICAgXCJtZFwiOlwibWRfTURcIixcbiAgICAgICAgICAgIFwibWNcIjpcIm1jX01DXCIsXG4gICAgICAgICAgICBcIm1uXCI6XCJtbl9NTlwiLFxuICAgICAgICAgICAgXCJtZVwiOlwibWVfTUVcIixcbiAgICAgICAgICAgIFwibXNcIjpcIm1zX01TXCIsXG4gICAgICAgICAgICBcIm1hXCI6XCJtYV9NQVwiLFxuICAgICAgICAgICAgXCJtelwiOlwibXpfTVpcIixcbiAgICAgICAgICAgIFwibW1cIjpcIm1tX01NXCIsXG4gICAgICAgICAgICBcIm5hXCI6XCJuYV9OQVwiLFxuICAgICAgICAgICAgXCJuclwiOlwibnJfTlJcIixcbiAgICAgICAgICAgIFwibnBcIjpcIm5wX05QXCIsXG4gICAgICAgICAgICBcIm5sXCI6XCJubF9OTFwiLFxuICAgICAgICAgICAgXCJuY1wiOlwibmNfTkNcIixcbiAgICAgICAgICAgIFwibnpcIjpcIm56X05aXCIsXG4gICAgICAgICAgICBcIm5pXCI6XCJuaV9OSVwiLFxuICAgICAgICAgICAgXCJuZVwiOlwibmVfTkVcIixcbiAgICAgICAgICAgIFwibmdcIjpcIm5nX05HXCIsXG4gICAgICAgICAgICBcIm51XCI6XCJudV9OVVwiLFxuICAgICAgICAgICAgXCJuZlwiOlwibmZfTkZcIixcbiAgICAgICAgICAgIFwia3BcIjpcImtwX0tQXCIsXG4gICAgICAgICAgICBcIm1wXCI6XCJtcF9NUFwiLFxuICAgICAgICAgICAgXCJub1wiOlwibm9fTk9cIixcbiAgICAgICAgICAgIFwib21cIjpcIm9tX09NXCIsXG4gICAgICAgICAgICBcInBrXCI6XCJwa19QS1wiLFxuICAgICAgICAgICAgXCJwd1wiOlwicHdfUFdcIixcbiAgICAgICAgICAgIFwicHNcIjpcImFyX1BTXCIsXG4gICAgICAgICAgICBcInBhXCI6XCJlc19QQVwiLFxuICAgICAgICAgICAgXCJwZ1wiOlwiZW5fUEdcIixcbiAgICAgICAgICAgIFwicHlcIjpcImVzX1BZXCIsXG4gICAgICAgICAgICBcInBlXCI6XCJlc19QRVwiLFxuICAgICAgICAgICAgXCJwaFwiOlwiZW5fUEhcIixcbiAgICAgICAgICAgIFwicG5cIjpcInBuX1BOXCIsXG4gICAgICAgICAgICBcInBsXCI6XCJwbF9QTFwiLFxuICAgICAgICAgICAgXCJwdFwiOlwicHRfUFRcIixcbiAgICAgICAgICAgIFwicHJcIjpcImVuX1BSXCIsXG4gICAgICAgICAgICBcInFhXCI6XCJhcl9RQVwiLFxuICAgICAgICAgICAgXCJyb1wiOlwicm9fUk9cIixcbiAgICAgICAgICAgIFwicnVcIjpcInJ1X1JVXCIsXG4gICAgICAgICAgICBcInJ3XCI6XCJyd19SV1wiLFxuICAgICAgICAgICAgXCJyZVwiOlwiZmVfUkVcIixcbiAgICAgICAgICAgIFwid3NcIjpcIndzX1dTXCIsXG4gICAgICAgICAgICBcInNtXCI6XCJpdF9TTVwiLFxuICAgICAgICAgICAgXCJzYVwiOlwiYXJfU0FcIixcbiAgICAgICAgICAgIFwic25cIjpcImZyX1NOXCIsXG4gICAgICAgICAgICBcInJzXCI6XCJyc19SU1wiLFxuICAgICAgICAgICAgXCJzY1wiOlwiZW5fU0NcIixcbiAgICAgICAgICAgIFwic2xcIjpcImVuX1NMXCIsXG4gICAgICAgICAgICBcInNnXCI6XCJzZ19TR1wiLFxuICAgICAgICAgICAgXCJzeFwiOlwic3hfU1hcIixcbiAgICAgICAgICAgIFwic2tcIjpcInNrX1NLXCIsXG4gICAgICAgICAgICBcInNpXCI6XCJzaV9TSVwiLFxuICAgICAgICAgICAgXCJzYlwiOlwiZW5fU0JcIixcbiAgICAgICAgICAgIFwic29cIjpcInNvX1NPXCIsXG4gICAgICAgICAgICBcInphXCI6XCJ6YV9aQVwiLFxuICAgICAgICAgICAgXCJnc1wiOlwiZ3NfR1NcIixcbiAgICAgICAgICAgIFwia3JcIjpcImtvX0tSXCIsXG4gICAgICAgICAgICBcInNzXCI6XCJzc19TU1wiLFxuICAgICAgICAgICAgXCJlc1wiOlwiZXNfRVNcIixcbiAgICAgICAgICAgIFwibGtcIjpcImxrX0xLXCIsXG4gICAgICAgICAgICBcImJsXCI6XCJibF9CTFwiLFxuICAgICAgICAgICAgXCJzaFwiOlwiZW5fU0hcIixcbiAgICAgICAgICAgIFwia25cIjpcImVuX0tOXCIsXG4gICAgICAgICAgICBcImxjXCI6XCJlbl9MQ1wiLFxuICAgICAgICAgICAgXCJtZlwiOlwibWZfTUZcIixcbiAgICAgICAgICAgIFwicG1cIjpcImZyX1BNXCIsXG4gICAgICAgICAgICBcInZjXCI6XCJlbl9WQ1wiLFxuICAgICAgICAgICAgXCJzZFwiOlwiYXJfU0RcIixcbiAgICAgICAgICAgIFwic3JcIjpcIm5sX1NSXCIsXG4gICAgICAgICAgICBcInNqXCI6XCJzal9TSlwiLFxuICAgICAgICAgICAgXCJzelwiOlwiZW5fU1pcIixcbiAgICAgICAgICAgIFwic2VcIjpcInN2X1NFXCIsXG4gICAgICAgICAgICBcImNoXCI6XCJkZV9DSFwiLFxuICAgICAgICAgICAgXCJzeVwiOlwiYXJfU1lcIixcbiAgICAgICAgICAgIFwic3RcIjpcInB0X1NUXCIsXG4gICAgICAgICAgICBcInR3XCI6XCJ6aF9UV1wiLFxuICAgICAgICAgICAgXCJ0alwiOlwidGpfVEpcIixcbiAgICAgICAgICAgIFwidHpcIjpcInN3X1RaXCIsXG4gICAgICAgICAgICBcInRoXCI6XCJ0aF9USFwiLFxuICAgICAgICAgICAgXCJ0bFwiOlwidGxfVExcIixcbiAgICAgICAgICAgIFwidGdcIjpcInRyX1RHXCIsXG4gICAgICAgICAgICBcInRrXCI6XCJ0a19US1wiLFxuICAgICAgICAgICAgXCJ0b1wiOlwidG9fVE9cIixcbiAgICAgICAgICAgIFwidHRcIjpcImVuX1RUXCIsXG4gICAgICAgICAgICBcInRuXCI6XCJhcl9UTlwiLFxuICAgICAgICAgICAgXCJ0clwiOlwidHJfVFJcIixcbiAgICAgICAgICAgIFwidG1cIjpcInRtX1RNXCIsXG4gICAgICAgICAgICBcInRjXCI6XCJlbl9UQ1wiLFxuICAgICAgICAgICAgXCJ0dlwiOlwidHZfVFZcIixcbiAgICAgICAgICAgIFwidW1cIjpcImVuX1VNXCIsXG4gICAgICAgICAgICBcInZpXCI6XCJlbl9WSVwiLFxuICAgICAgICAgICAgXCJnYlwiOlwiZW5fR0JcIixcbiAgICAgICAgICAgIFwidXNcIjpcImVuX1VTXCIsXG4gICAgICAgICAgICBcInVnXCI6XCJlbl9VR1wiLFxuICAgICAgICAgICAgXCJ1YVwiOlwicnVfVUFcIixcbiAgICAgICAgICAgIFwiYWVcIjpcImFyX0FFXCIsXG4gICAgICAgICAgICBcInV5XCI6XCJyZF9VWVwiLFxuICAgICAgICAgICAgXCJ1elwiOlwidXpfVVpcIixcbiAgICAgICAgICAgIFwidnVcIjpcInZ1X1ZVXCIsXG4gICAgICAgICAgICBcInZhXCI6XCJ2YV9WQVwiLFxuICAgICAgICAgICAgXCJ2ZVwiOlwiZXNfVkVcIixcbiAgICAgICAgICAgIFwidm5cIjpcInZuX1ZOXCIsXG4gICAgICAgICAgICBcIndmXCI6XCJ3Zl9XRlwiLFxuICAgICAgICAgICAgXCJlaFwiOlwiZWhfRUhcIixcbiAgICAgICAgICAgIFwieWVcIjpcImFyX1lFXCIsXG4gICAgICAgICAgICBcInptXCI6XCJlbl9aTVwiLFxuICAgICAgICAgICAgXCJ6d1wiOlwiZW1fWldcIixcbiAgICAgICAgICAgIFwiYXhcIjpcInN2X0FYXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaTE4bkNvZGVzLmZpbmRLZXlCeVZhbHVlID0gZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9wIGluIHRoaXMgKSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRoaXNbIHByb3AgXSA9PT0gdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5pMThuQ29kZXMuZ2V0QWxsUHJvcHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBpbiB0aGlzICkge1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHRoaXNbcHJvcF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJhbnNsYXRlU2hvcnRUb0lzbyhzaG9ydCkge1xuICAgICAgICBsZXQgcmVzID0gIHRoaXMuaTE4bkNvZGVzW3Nob3J0XTtcbiAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCAmJiByZXMgIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3coXCJTZWxlY3RlZCBFbGVtZW50IFNlZW1zIG5vdCB0byBiZSB2YWxpZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zbGF0ZUlzb0Fzc29jQXJyYXlUb1Nob3J0KGkxOG5BcnJheSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaTE4bkFycmF5KSkge1xuICAgICAgICAgICAgdGhyb3cgKFwiSW5wdXQgUGFyYW1ldGVyIG11c3QgYmUgb2YgVHlwZSBBcnJheVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICBpMThuQXJyYXkuZWFjaCh0aGlzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmVzdWx0QXJyYXlbdGhpcy50cmFuc2xhdGVTaG9ydFRvSXNvKGtleSldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRBcnJheTtcbiAgICB9XG5cblxuICAgIHRyYW5zbGF0ZUlzb0FycmF5VG9TaG9ydChpMThuQXJyYXkpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGkxOG5BcnJheSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIklucHV0IFBhcmFtZXRlciBtdXN0IGJlIG9mIFR5cGUgQXJyYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpMThuQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2godGhpcy50cmFuc2xhdGVTaG9ydFRvSXNvKGkxOG5BcnJheVtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdEFycmF5O1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZUlzb1RvU2hvcnQoaTE4bikge1xuICAgICAgICBsZXQgcmVzID0gdGhpcy5pMThuQ29kZXMuZmluZEtleUJ5VmFsdWUoaTE4bik7XG4gICAgICAgIGlmIChyZXMgIT09IG51bGwgJiYgcmVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiU2VsZWN0ZWQgTGFuZ3VhZ2UgaXMgbm90IGF2YWlsYWJsZSAnXCIgK2kxOG4rIFwiJ1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZVRyYW5zbGF0b3I7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHNicmFuZHQgb24gMDUuMDcuMTcuXG4gKi9cbmltcG9ydCBJbml0TWVtYmVyIGZyb20gJy4vSW5pdE1lbWJlcic7XG5jbGFzcyBGbGFnc1Rvb2wgZXh0ZW5kcyBJbml0TWVtYmVyIHtcblxuICAgIGluaXRNZW1iZXIoKSB7XG4gICAgICAgIHRoaXMuRkFERUlOX1NQRUVEID0gNDAwO1xuICAgICAgICB0aGlzLkZBREVJTl9ERUxBWSA9IDE1O1xuICAgICAgICB0aGlzLm1haW4gPSBudWxsO1xuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRGbGFnID0gMDtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlucHV0U3R5bGVDbGFzc2VzID0gXCJcIjtcbiAgICAgICAgdGhpcy5waWNrZXJDbGFzcyA9IFwiXCI7XG4gICAgICAgIHRoaXMuaG92ZXJBbmltYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGFnZ2VyTGVhdmVBbmltYXRpb25UaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2FuY2VsQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMucGxhY2VIb2xkZXJUeXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZWwsIGxvYWRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGVsO1xuICAgICAgICB0aGlzLm1haW4gPSBsb2FkZXI7XG4gICAgICAgIGxldCBzdHJpbmcgPSBTdHJpbmcoZWwuYXR0cignbGFuZ3VhZ2VzJykucmVwbGFjZSgvJy9nLCBcIlxcXCJcIikpO1xuICAgICAgICBsZXQgbG5nID0gJC5wYXJzZUpTT04oc3RyaW5nKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxuZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRMbmcgPSBsb2FkZXIuY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmdbaV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YoY3VycmVudExuZykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMucHVzaChjdXJyZW50TG5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTGFuZ3VhZ2VzIGNhbiBub3QgYmUgYWRkZWQgdHdpY2UuIFNlY29uZCAnXCIgKyBsbmdbaV0gKyBcIicgd2FzIGlnbm9yZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmF0dHIoJ2FuaW1hdGUnKSAhPT0gdW5kZWZpbmVkICYmIChlbC5hdHRyKCdhbmltYXRlJykgPT09IFwiZmFsc2VcIiB8fCBCb29sZWFuKGVsLmF0dHIoJ2FuaW1hdGUnKSkgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgdGhpcy5GQURFSU5fU1BFRUQgPSAwO1xuICAgICAgICAgICAgdGhpcy5GQURFSU5fREVMQVkgPSAwO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmxvYWRTdHlsZXMoKTtcbiAgICAgICAgdGhpcy5wYXJzZVBsYWNlaG9sZGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEZsYWdDb250cm9sbGVyKCk7XG4gICAgfVxuXG4gICAgcGFyc2VQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmF0dHIoJ3BsYWNlaG9sZGVyJykgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgICBsZXQgc3RyaW5nID0gU3RyaW5nKHRoaXMuY29udGFpbmVyLmF0dHIoJ3BsYWNlaG9sZGVyJykucmVwbGFjZSgvJy9nLCBcIlxcXCJcIikpO1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSAkLnBhcnNlSlNPTihzdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBsYWNlaG9sZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZUhvbGRlclR5cGUgPSBcImFycmF5XCI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gW107XG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIubGVuZ3RoIDwgdGhpcy5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3coXCJJZiBtdWx0aXBsZSBQbGFjZWhvbGRlcnMgYXJlIHByb3ZpZGVkLCBwbGVhc2UgcHJvdmlkZSBhIHBsYWNlaG9sZGVyIGZvciBldmVyeSBsYW5ndWFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFjZWhvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJbdGhpcy5sYW5ndWFnZXNbaV1dID0gcGxhY2Vob2xkZXJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyVHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkU3R5bGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cihcImV4cGFuZGVyLWNsYXNzXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHlsZUNsYXNzZXMgID0gdGhpcy5jb250YWluZXIuYXR0cihcImV4cGFuZGVyLWNsYXNzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmF0dHIoXCJwaWNrZXItY2xhc3NcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5waWNrZXJDbGFzcyA9IHRoaXMuY29udGFpbmVyLmF0dHIoXCJwaWNrZXItY2xhc3NcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmxhZ0NvbnRyb2xsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBpY2tlckNsYXNzICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdcIit0aGlzLnBpY2tlckNsYXNzK1wiJz48L2Rpdj5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdkZWZhdWx0LXBpY2tlcic+PC9kaXY+XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ2dlciA9ICQodGhpcy5jb250YWluZXIuY2hpbGRyZW4oKVt0aGlzLmNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgdGhpcy5mbGFnZ2VyLmNzcyh7XCJsZWZ0XCIgOiB0aGlzLm1haW4uaW5wdXRUb29sLmlucHV0Lm91dGVyV2lkdGgoKSAtIDI0LCAnbWFyZ2luLXRvcCc6IC0gKHRoaXMubWFpbi5pbnB1dFRvb2wuaW5wdXQub3V0ZXJIZWlnaHQoKSArIDI0KSAvIDJ9KTtcbiAgICAgICAgdGhpcy5mbGFnZ2VyLmh0bWwoJzxzcGFuIHRpdGxlPVwiTGFuZ3VhZ2U6ICcrIHRoaXMubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKHRoaXMubGFuZ3VhZ2VzWzBdKSArJ1wiIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi0nKyB0aGlzLmxhbmd1YWdlc1swXSArJ1wiPjwvc3Bhbj4nKTtcbiAgICAgICAgdGhpcy5sb2FkRmxhZ3MoKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICB0aGlzLmZsYWdnZXIuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChzZWxmLmxhbmd1YWdlcy5sZW5ndGggPT09IDEpIHJldHVybjtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmZsYWdnZXJMZWF2ZUFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuZmxhZ2dlckNhbmNlbEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgaWYgKCFzZWxmLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1wiY3Vyc29yXCI6IFwicG9pbnRlclwifSk7XG4gICAgICAgICAgICAgICAgc2VsZi5ob3ZlckFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5mYWRlSW4oKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5ob3ZlckFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZsYWdnZXIubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmZsYWdnZXJDYW5jZWxBbmltYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mYWRlT3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmYWRlSW4oKSB7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5zaG93KCk7XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuZmFkZUluKDUwKTtcbiAgICAgICAgbGV0IG91dGVydiA9IHRoaXMuZmxhZ2dlckNob29zZXIuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAkKHRoaXMpLmRlbGF5KHYgKiBzZWxmLkZBREVJTl9ERUxBWSkuZmFkZUluKHNlbGYuRkFERUlOX1NQRUVEKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuZGVsYXkob3V0ZXJ2ICogc2VsZi5GQURFSU5fREVMQVkpLnF1ZXVlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZhZGVPdXQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgb3V0ZXJ2ID0gdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICQodGhpcykuZGVsYXkodiAqIHNlbGYuRkFERUlOX0RFTEFZICogMykuZmFkZU91dChzZWxmLkZBREVJTl9TUEVFRCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZmxhZ2dlckNob29zZXIuZmFkZU91dCgnZmFzdCcpO1xuICAgICAgICAgICAgc2VsZi5mbGFnZ2VyQ2hvb3Nlci5oaWRlKCk7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgIH0sIChvdXRlcnYgLSAyKSAqIHNlbGYuRkFERUlOX0RFTEFZICogMyk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUN1cnJlbnQoaXRlbSkge1xuICAgICAgICB0aGlzLmZsYWdnZXIuaHRtbChpdGVtLmh0bWwoKSk7XG4gICAgICAgIHRoaXMubWFpbi5pbnB1dFRvb2wuY2hhbmdlZElucHV0VmlldygpO1xuICAgIH1cblxuICAgIGxvYWRGbGFncygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmlucHV0U3R5bGVDbGFzc2VzICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2IGNsYXNzPSdcIisgdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcyArIFwiJz48L2Rpdj5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mbGFnZ2VyQ2hvb3NlciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIgPSAkKHRoaXMuY29udGFpbmVyLmNoaWxkcmVuKClbdGhpcy5jb250YWluZXIuY2hpbGRyZW4oKS5sZW5ndGggLSAxXSk7XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuY3NzKHtcInBvc2l0aW9uXCIgOiBcImFic29sdXRlXCIsXCJtYXJnaW4tdG9wXCI6IFwiLTJweFwiLCBcImRpc3BsYXlcIjogXCJub25lXCIsIFwicGFkZGluZ1wiOiBcIjJweFwiLCBcImJhY2tncm91bmQtY29sb3JcIiA6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMubWFpbi5pbnB1dFRvb2wuaW5wdXQub3V0ZXJXaWR0aCgpLFxuICAgICAgICAgICAgXCJib3JkZXJcIiA6IFwiMXB4IHNvbGlkIFwiKyB0aGlzLm1haW4uaW5wdXRUb29sLmlucHV0LmNzcygnYm9yZGVyLWNvbG9yJyksIFwiei1pbmRleFwiOiAyfSk7XG4gICAgICAgIGxldCBpdGVtc1BlclJvdyA9IE1hdGguZmxvb3IoKHRoaXMuZmxhZ2dlckNob29zZXIuaW5uZXJXaWR0aCgpIC0gdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jc3MoXCJwYWRkaW5nXCIpICogMikgLyAodGhpcy5mbGFnZ2VyLm91dGVyV2lkdGgoKSArIDIpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudEZsYWcpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuYXBwZW5kKCc8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHQ7IGRpc3BsYXk6IG5vbmU7IHBhZGRpbmc6MCAwIDJweCAycHg7XCIgPjxzcGFuIHRpdGxlPVwiTGFuZ3VhZ2U6ICcrIHRoaXMubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKHRoaXMubGFuZ3VhZ2VzW2ldKSArJ1wiIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi0nKyB0aGlzLmxhbmd1YWdlc1tpXSArJ1wiPjwvc3Bhbj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgLy8gU2VsZWN0IHRoZSBDdXJyZW50IEl0ZW1cbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJCggdGhpcy5mbGFnZ2VyQ2hvb3NlciAuY2hpbGRyZW4oKVsgdGhpcy5mbGFnZ2VyQ2hvb3NlciAuY2hpbGRyZW4oKS5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICBjdXJyZW50LmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcImN1cnNvclwiIDogXCJwb2ludGVyXCJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50RmxhZyA9IGk7XG4gICAgICAgICAgICAgICAgc2VsZi5yZXBsYWNlQ3VycmVudCgkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzZWxmLmZhZGVPdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkRmxhZ3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaSAlIGl0ZW1zUGVyUm93ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5hcHBlbmQoXCI8ZGl2IHN0eWxlPSdjbGVhcjogYm90aDsnPjwvZGl2PlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLmFwcGVuZChcIjxkaXYgc3R5bGU9J2NsZWFyOiBib3RoOyc+PC9kaXY+XCIpO1xuXG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZmxhZ2dlckxlYXZlQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZmFkZU91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5mbGFnZ2VyQ2FuY2VsQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5mbGFnZ2VyTGVhdmVBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGFnc1Rvb2w7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHNicmFuZHQgb24gMDUuMDcuMTcuXG4gKi9cbmNsYXNzIEluaXRNZW1iZXIge1xuICAgIGluaXRNZW1iZXIoKSB7fVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRNZW1iZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRNZW1iZXI7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHNicmFuZHQgb24gMDUuMDcuMTcuXG4gKi9cbmltcG9ydCBJbml0TWVtYmVyIGZyb20gXCIuL0luaXRNZW1iZXJcIjtcbmNsYXNzIElucHV0VG9vbCBleHRlbmRzIEluaXRNZW1iZXIge1xuXG4gICAgaW5pdE1lbWJlcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1haW4gPSBudWxsO1xuICAgICAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmlucHV0U3R5bGVDbGFzc2VzID0gXCJcIjtcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcy5zaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IDAsIGtleTtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJzaXplXCJcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcImVhY2hcIlxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwiaGFzS2V5XCIpIHNpemUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaXplO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5wdXR2YWx1ZXMuZWFjaCA9IGZ1bmN0aW9uIChjdHgsIGNhbGxhYmxlKSB7XG4gICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwiZWFjaFwiXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJoYXNLZXlcIikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYWJsZS5hcHBseShjdHgsIFtrZXksIHRoaXNba2V5XV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcy5oYXNLZXkgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzICkge1xuICAgICAgICAgICAgICAgIGlmKCBrZXkgPT09IHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihlbCwgbG9hZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWw7XG5cbiAgICAgICAgaWYgKGVsLmF0dHIoXCJpbnB1dC1jbGFzc1wiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0U3R5bGVDbGFzc2VzICA9IGVsLmF0dHIoXCJpbnB1dC1jbGFzc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBlbC5hdHRyKFwicGxhY2Vob2xkZXJcIikgIT09IHVuZGVmaW5lZCA/IFwicGxhY2Vob2xkZXI9JydcIiA6IFwiXCI7XG4gICAgICAgIGxldCByb3dzID0gcGFyc2VJbnQoZWwuYXR0cigncm93cycpKTtcbiAgICAgICAgaWYgKHJvd3MgPT09IDEgfHwgIXJvd3MpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZChcIjxpbnB1dCBcIitwbGFjZWhvbGRlcitcIiBjbGFzcz0nXCIrdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcytcIicgdHlwZT0ndGV4dCcgLz5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5hcHBlbmQoXCI8dGV4dGFyZWEgXCIrcGxhY2Vob2xkZXIrXCIgY2xhc3M9J1wiK3RoaXMuaW5wdXRTdHlsZUNsYXNzZXMrXCInIHN0eWxlPSdsaW5lLWhlaWdodDogMTJweCcgdHlwZT0ndGV4dCcgcm93cz0nXCIrcm93cytcIic+PC90ZXh0YXJlYT5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0ID0gJChlbC5jaGlsZHJlbigpW2VsLmNoaWxkcmVuKCkubGVuZ3RoIC0gMV0pO1xuICAgICAgICB0aGlzLm1haW4gPSBsb2FkZXI7XG4gICAgICAgIHRoaXMuaW5wdXQuY3NzKHtcIndpZHRoXCIgOiBlbC5hdHRyKCd3aWR0aCcpIDwgMzUgPyAzNSA6IGVsLmF0dHIoJ3dpZHRoJyksIFwiaGVpZ2h0XCIgOiBlbC5hdHRyKCdoZWlnaHQnKSA8IDEyID8gMTIgOiBlbC5hdHRyKCdoZWlnaHQnKX0pO1xuICAgICAgICBlbC5jc3Moe1wid2lkdGhcIiA6IHRoaXMuaW5wdXQub3V0ZXJXaWR0aCgpLCBcInBhZGRpbmctYm90dG9tXCIgOiBcIjJweFwiLCBcInBhZGRpbmctdG9wXCIgOiBcIjJweFwifSk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudE1ldGhvZHMoKTtcbiAgICAgICAgdGhpcy5pbml0S2V5TG9nZ2luZygpO1xuICAgIH1cblxuXG4gICAgaW5pdEtleUxvZ2dpbmcoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlucHV0LmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSBzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tzZWxmLm1haW4uZmxhZ3NUb29sLmN1cnJlbnRGbGFnXTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbY3VycmVudExhbmd1YWdlXSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZWRJbnB1dFZpZXcoKSB7XG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1t0aGlzLm1haW4uZmxhZ3NUb29sLmN1cnJlbnRGbGFnXTtcbiAgICAgICAgaWYgKCB0aGlzLm1haW4uZmxhZ3NUb29sLnBsYWNlSG9sZGVyVHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5hdHRyKCdwbGFjZWhvbGRlcicsIHRoaXMubWFpbi5mbGFnc1Rvb2wucGxhY2Vob2xkZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLm1haW4uZmxhZ3NUb29sLnBsYWNlSG9sZGVyVHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgdGhpcy5tYWluLmZsYWdzVG9vbC5wbGFjZWhvbGRlcltjdXJyZW50TGFuZ3VhZ2VdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlucHV0LnZhbCh0aGlzLmlucHV0dmFsdWVzW2N1cnJlbnRMYW5ndWFnZV0pXG4gICAgfVxuXG4gICAgYWRkRWxlbWVudE1ldGhvZHMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHByaW50UmVzdWx0cyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dHZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaW5wdXR2YWx1ZXNbbGFuZ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmlucHV0dmFsdWVzW2xhbmddO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxmLmlucHV0dmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZUlzb0Fzc29jQXJyYXlUb1Nob3J0KHNlbGYuaW5wdXR2YWx1ZXMpOy8vO3NlbGYubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKGxhbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXNzaW5naTE4bigpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtaXNzaW5naTE4biA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IG1pc3NpbmcgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5pbnB1dHZhbHVlcy5oYXNLZXkoc2VsZi5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbaV0pIHx8IHNlbGYuaW5wdXR2YWx1ZXNbc2VsZi5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbaV1dID09PSB1bmRlZmluZWQgfHwgc2VsZi5pbnB1dHZhbHVlc1tzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tpXV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmcucHVzaChzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZUlzb0FycmF5VG9TaG9ydChtaXNzaW5nKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uKGxuZywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChsbmcgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mICBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG5nLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkJvdGggaW5wdXQgYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmdbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubWFpbi5pc2kxOG5SZWdpc3RlcmVkKHNob3J0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbc2hvcnRdID0gdmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiTGFuZ3VhZ2UgXCIgKyBsbmcgKyBcIiBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIHRoZSBWaWV3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRWl0aGVyIGJvdGgsIG9yIG5vbiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgQXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1haW4uaXNpMThuUmVnaXN0ZXJlZChzaG9ydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dHZhbHVlc1tzaG9ydF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkxhbmd1YWdlIFwiICsgbG5nICsgXCIgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCB0aGUgVmlld1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmNoYW5nZWRJbnB1dFZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZWkxOG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IuaTE4bkNvZGVzLmdldEFsbFByb3BzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJGb3JtSW5jb21wbGV0ZUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBIYW5kbGVyIG11c3QgYmUgb2YgdHlwZSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW4uZmFpbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uaTE4biA9IHByaW50UmVzdWx0cztcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uY29tcGxldGUgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLm1pc3NpbmcgPSBtaXNzaW5naTE4bjtcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uc2V0VmFsdWUgPSBzZXRWYWx1ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uYWxsTG9jYWxlcyA9IGF2YWlsYWJsZWkxOG47XG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gcmVnaXN0ZXJGb3JtSW5jb21wbGV0ZUhhbmRsZXI7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5pdC5wcm90b3R5cGUuaTE4biA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLmkxOG4odmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLmNvbXBsZXRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5pdC5wcm90b3R5cGUubWlzc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5taXNzaW5nKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5pdC5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAobG5nLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLnNldFZhbHVlKGxuZywgdmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLmFsbExvY2FsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuYWxsTG9jYWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5yZWdpc3RlckZvcm1JbmNvbXBsZXRlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VG9vbDsiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSAnLi9Jbml0TWVtYmVyJztcbmltcG9ydCBGbGFnc1Rvb2wgZnJvbSAnLi9GbGFnc1Rvb2wnO1xuaW1wb3J0IElucHV0VG9vbCBmcm9tIFwiLi9JbnB1dFRvb2xcIjtcbmltcG9ydCBDb2RlVHJhbnNsYXRvciBmcm9tIFwiLi9Db2RlVHJhbnNsYXRvclwiO1xuXG5jbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIEluaXRNZW1iZXIge1xuXG4gICAgaW5pdE1lbWJlcigpIHtcbiAgICAgICAgdGhpcy5mbGFnc1Rvb2wgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5wdXRUb29sID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2RlVHJhbnNsYXRvciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5mYWlsSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChcIiNcIiArIGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaW5pdENvZGVUcmFuc2xhdG9yKCk7XG4gICAgICAgIHRoaXMuaW5pdElucHV0VG9vbCgpO1xuICAgICAgICB0aGlzLmluaXRGbGFnc1Rvb2woKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclN1Ym1pdEhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5pbnB1dFRvb2wuY2hhbmdlZElucHV0VmlldygpO1xuICAgIH1cblxuICAgIGluaXRJbnB1dFRvb2woKSB7XG4gICAgICAgIHRoaXMuaW5wdXRUb29sID0gbmV3IElucHV0VG9vbCh0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdEZsYWdzVG9vbCgpIHtcbiAgICAgICAgdGhpcy5mbGFnc1Rvb2wgPSBuZXcgRmxhZ3NUb29sKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0Q29kZVRyYW5zbGF0b3IoKSB7XG4gICAgICAgIHRoaXMuY29kZVRyYW5zbGF0b3IgPSBuZXcgQ29kZVRyYW5zbGF0b3IodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIGlzaTE4blJlZ2lzdGVyZWQoaTE4bikge1xuICAgICAgICByZXR1cm4gdGhpcy5mbGFnc1Rvb2wubGFuZ3VhZ2VzLmluZGV4T2YoaTE4bikgIT09IC0xO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU3VibWl0SGFuZGxlcigpIHtcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmZpbmRGb3JtKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgaWYgKGZvcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgZm9ybS5zdWJtaXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGkxOG4gPSBzZWxmLmNvbnRhaW5lci5pMThuKCk7XG4gICAgICAgICAgICAgICAgaTE4bi5lYWNoID0gc2VsZi5pbnB1dFRvb2wuaW5wdXR2YWx1ZXMuZWFjaDtcbiAgICAgICAgICAgICAgICBpMThuLmVhY2godGhpcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZChcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J1wiK3NlbGYuY29udGFpbmVyLmF0dHIoJ2lkJykrXCJbXCIra2V5K1wiXScgdmFsdWU9J1wiK3ZhbHVlK1wiJz5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRBdHRyID0gc2VsZi5jb250YWluZXIuYXR0cihcInN1Ym1pdE9uTWlzc2luZ1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRPbk1pc3NpbmcgPSBzdWJtaXRBdHRyID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfHwgc3VibWl0QXR0ciA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICB8fCBTdHJpbmcoc3VibWl0QXR0cikgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHx8IFN0cmluZyhzdWJtaXRBdHRyKSA9PT0gXCJUcnVlXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBzZWxmLmNvbnRhaW5lci5jb21wbGV0ZSgpIHx8IHN1Ym1pdE9uTWlzc2luZztcblxuICAgICAgICAgICAgICAgIGlmICghcmVzICYmICFzdWJtaXRPbk1pc3NpbmcpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb2xvciB0aGUgVmlldy5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dFRvb2wuaW5wdXQuYWRkQ2xhc3MoJ2kxOG4tdmlldy1pbmNvbXBsZXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIGFuIG9wdGlvbmFsIEZhaWwgSGFuZGxlci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZmFpbEhhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mYWlsSGFuZGxlci5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dFRvb2wuaW5wdXQucmVtb3ZlQ2xhc3MoJ2kxOG4tdmlldy1pbmNvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEZvcm0oZWwpIHtcbiAgICAgICAgaWYgKGVsLnBhcmVudCgpID09PSB1bmRlZmluZWQgfHwgZWwucGFyZW50KCkgPT09IG51bGwgfHwgZWwucGFyZW50KCkucHJvcCgnbm9kZU5hbWUnKSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwucGFyZW50KCkucHJvcCgnbm9kZU5hbWUnKSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwucGFyZW50KCk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRGb3JtKGVsLnBhcmVudCgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHNicmFuZHQgb24gMDUuMDcuMTcuXG4gKi9cbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL01haW5Db250cm9sbGVyJztcblxuZnVuY3Rpb24gaTE4bklucHV0Vmlldyhjb250YWluZXIpIHtcbiAgICByZXR1cm4gbmV3IE1haW5Db250cm9sbGVyKGNvbnRhaW5lcik7XG59XG5cbndpbmRvdy5pMThuSW5wdXRWaWV3ID0gaTE4bklucHV0VmlldzsiXX0=
