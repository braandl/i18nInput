(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        //let string = String(el.attr('languages').replace(/'/g, "\""));
        //let lng = $.parseJSON(string);
        var lng = loader.langKeys;

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
            //this.flagger.css({"left" : this.main.inputTool.input.outerWidth() - 24, 'margin-top': - (this.main.inputTool.input.outerHeight() + 24) / 2});
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
                width: "100%",
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
        el.css({ "width": _this.input.outerWidth() < 35 ? 'auto' : _this.input.outerWidth(), "padding-bottom": "2px", "padding-top": "2px", "position": "relative" });
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
                if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
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

    function MainController(container, langKeys) {
        _classCallCheck(this, MainController);

        var _this = _possibleConstructorReturn(this, (MainController.__proto__ || Object.getPrototypeOf(MainController)).call(this));

        _this.langKeys = langKeys;
        _this.container = $("#" + container);
        _this.initCodeTranslator();
        _this.initInputTool();
        _this.initFlagsTool(langKeys);
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
        value: function initFlagsTool(langKeys) {
            this.flagsTool = new _FlagsTool2.default(this.container, this, langKeys);
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by sbrandt on 05.07.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _MainController = require('./MainController');

var _MainController2 = _interopRequireDefault(_MainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var i18nInputView = function () {
  function i18nInputView(langKeys) {
    _classCallCheck(this, i18nInputView);

    this.langKeys = langKeys;
  }

  _createClass(i18nInputView, [{
    key: 'i18nInputView',
    value: function i18nInputView(container) {
      return new _MainController2.default(container, this.langKeys);
    }
  }]);

  return i18nInputView;
}();

exports.default = i18nInputView;

},{"./MainController":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9Db2RlVHJhbnNsYXRvci5qcyIsImpzL0ZsYWdzVG9vbC5qcyIsImpzL0luaXRNZW1iZXIuanMiLCJqcy9JbnB1dFRvb2wuanMiLCJqcy9NYWluQ29udHJvbGxlci5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUlNLGM7Ozs7O3FDQUVXO0FBQ1QsaUJBQUssU0FBTCxHQUFpQjtBQUNiLHNCQUFLLE9BRFE7QUFFYixzQkFBSyxPQUZRO0FBR2Isc0JBQUssT0FIUTtBQUliLHNCQUFLLE9BSlE7QUFLYixzQkFBSyxPQUxRO0FBTWIsc0JBQUssT0FOUTtBQU9iLHNCQUFLLE9BUFE7QUFRYixzQkFBSyxPQVJRO0FBU2Isc0JBQUssT0FUUTtBQVViLHNCQUFLLE9BVlE7QUFXYixzQkFBSyxPQVhRO0FBWWIsc0JBQUssT0FaUTtBQWFiLHNCQUFLLE9BYlE7QUFjYixzQkFBSyxPQWRRO0FBZWIsc0JBQUssT0FmUTtBQWdCYixzQkFBSyxPQWhCUTtBQWlCYixzQkFBSyxPQWpCUTtBQWtCYixzQkFBSyxPQWxCUTtBQW1CYixzQkFBSyxPQW5CUTtBQW9CYixzQkFBSyxPQXBCUTtBQXFCYixzQkFBSyxPQXJCUTtBQXNCYixzQkFBSyxPQXRCUTtBQXVCYixzQkFBSyxPQXZCUTtBQXdCYixzQkFBSyxPQXhCUTtBQXlCYixzQkFBSyxPQXpCUTtBQTBCYixzQkFBSyxPQTFCUTtBQTJCYixzQkFBSyxPQTNCUTtBQTRCYixzQkFBSyxPQTVCUTtBQTZCYixzQkFBSyxPQTdCUTtBQThCYixzQkFBSyxPQTlCUTtBQStCYixzQkFBSyxPQS9CUTtBQWdDYixzQkFBSyxPQWhDUTtBQWlDYixzQkFBSyxPQWpDUTtBQWtDYixzQkFBSyxPQWxDUTtBQW1DYixzQkFBSyxPQW5DUTtBQW9DYixzQkFBSyxPQXBDUTtBQXFDYixzQkFBSyxPQXJDUTtBQXNDYixzQkFBSyxPQXRDUTtBQXVDYixzQkFBSyxPQXZDUTtBQXdDYixzQkFBSyxPQXhDUTtBQXlDYixzQkFBSyxPQXpDUTtBQTBDYixzQkFBSyxPQTFDUTtBQTJDYixzQkFBSyxPQTNDUTtBQTRDYixzQkFBSyxPQTVDUTtBQTZDYixzQkFBSyxPQTdDUTtBQThDYixzQkFBSyxPQTlDUTtBQStDYixzQkFBSyxPQS9DUTtBQWdEYixzQkFBSyxPQWhEUTtBQWlEYixzQkFBSyxPQWpEUTtBQWtEYixzQkFBSyxPQWxEUTtBQW1EYixzQkFBSyxPQW5EUTtBQW9EYixzQkFBSyxPQXBEUTtBQXFEYixzQkFBSyxPQXJEUTtBQXNEYixzQkFBSyxPQXREUTtBQXVEYixzQkFBSyxPQXZEUTtBQXdEYixzQkFBSyxPQXhEUTtBQXlEYixzQkFBSyxPQXpEUTtBQTBEYixzQkFBSyxPQTFEUTtBQTJEYixzQkFBSyxPQTNEUTtBQTREYixzQkFBSyxPQTVEUTtBQTZEYixzQkFBSyxPQTdEUTtBQThEYixzQkFBSyxPQTlEUTtBQStEYixzQkFBSyxPQS9EUTtBQWdFYixzQkFBSyxPQWhFUTtBQWlFYixzQkFBSyxPQWpFUTtBQWtFYixzQkFBSyxPQWxFUTtBQW1FYixzQkFBSyxPQW5FUTtBQW9FYixzQkFBSyxPQXBFUTtBQXFFYixzQkFBSyxPQXJFUTtBQXNFYixzQkFBSyxPQXRFUTtBQXVFYixzQkFBSyxPQXZFUTtBQXdFYixzQkFBSyxPQXhFUTtBQXlFYixzQkFBSyxPQXpFUTtBQTBFYixzQkFBSyxPQTFFUTtBQTJFYixzQkFBSyxPQTNFUTtBQTRFYixzQkFBSyxPQTVFUTtBQTZFYixzQkFBSyxPQTdFUTtBQThFYixzQkFBSyxPQTlFUTtBQStFYixzQkFBSyxPQS9FUTtBQWdGYixzQkFBSyxPQWhGUTtBQWlGYixzQkFBSyxPQWpGUTtBQWtGYixzQkFBSyxPQWxGUTtBQW1GYixzQkFBSyxPQW5GUTtBQW9GYixzQkFBSyxPQXBGUTtBQXFGYixzQkFBSyxPQXJGUTtBQXNGYixzQkFBSyxPQXRGUTtBQXVGYixzQkFBSyxPQXZGUTtBQXdGYixzQkFBSyxPQXhGUTtBQXlGYixzQkFBSyxPQXpGUTtBQTBGYixzQkFBSyxPQTFGUTtBQTJGYixzQkFBSyxPQTNGUTtBQTRGYixzQkFBSyxPQTVGUTtBQTZGYixzQkFBSyxPQTdGUTtBQThGYixzQkFBSyxPQTlGUTtBQStGYixzQkFBSyxPQS9GUTtBQWdHYixzQkFBSyxPQWhHUTtBQWlHYixzQkFBSyxPQWpHUTtBQWtHYixzQkFBSyxPQWxHUTtBQW1HYixzQkFBSyxPQW5HUTtBQW9HYixzQkFBSyxPQXBHUTtBQXFHYixzQkFBSyxPQXJHUTtBQXNHYixzQkFBSyxPQXRHUTtBQXVHYixzQkFBSyxPQXZHUTtBQXdHYixzQkFBSyxPQXhHUTtBQXlHYixzQkFBSyxPQXpHUTtBQTBHYixzQkFBSyxPQTFHUTtBQTJHYixzQkFBSyxPQTNHUTtBQTRHYixzQkFBSyxPQTVHUTtBQTZHYixzQkFBSyxPQTdHUTtBQThHYixzQkFBSyxPQTlHUTtBQStHYixzQkFBSyxPQS9HUTtBQWdIYixzQkFBSyxPQWhIUTtBQWlIYixzQkFBSyxPQWpIUTtBQWtIYixzQkFBSyxPQWxIUTtBQW1IYixzQkFBSyxPQW5IUTtBQW9IYixzQkFBSyxPQXBIUTtBQXFIYixzQkFBSyxPQXJIUTtBQXNIYixzQkFBSyxPQXRIUTtBQXVIYixzQkFBSyxPQXZIUTtBQXdIYixzQkFBSyxPQXhIUTtBQXlIYixzQkFBSyxPQXpIUTtBQTBIYixzQkFBSyxPQTFIUTtBQTJIYixzQkFBSyxPQTNIUTtBQTRIYixzQkFBSyxPQTVIUTtBQTZIYixzQkFBSyxPQTdIUTtBQThIYixzQkFBSyxPQTlIUTtBQStIYixzQkFBSyxPQS9IUTtBQWdJYixzQkFBSyxPQWhJUTtBQWlJYixzQkFBSyxPQWpJUTtBQWtJYixzQkFBSyxPQWxJUTtBQW1JYixzQkFBSyxPQW5JUTtBQW9JYixzQkFBSyxPQXBJUTtBQXFJYixzQkFBSyxPQXJJUTtBQXNJYixzQkFBSyxPQXRJUTtBQXVJYixzQkFBSyxPQXZJUTtBQXdJYixzQkFBSyxPQXhJUTtBQXlJYixzQkFBSyxPQXpJUTtBQTBJYixzQkFBSyxPQTFJUTtBQTJJYixzQkFBSyxPQTNJUTtBQTRJYixzQkFBSyxPQTVJUTtBQTZJYixzQkFBSyxPQTdJUTtBQThJYixzQkFBSyxPQTlJUTtBQStJYixzQkFBSyxPQS9JUTtBQWdKYixzQkFBSyxPQWhKUTtBQWlKYixzQkFBSyxPQWpKUTtBQWtKYixzQkFBSyxPQWxKUTtBQW1KYixzQkFBSyxPQW5KUTtBQW9KYixzQkFBSyxPQXBKUTtBQXFKYixzQkFBSyxPQXJKUTtBQXNKYixzQkFBSyxPQXRKUTtBQXVKYixzQkFBSyxPQXZKUTtBQXdKYixzQkFBSyxPQXhKUTtBQXlKYixzQkFBSyxPQXpKUTtBQTBKYixzQkFBSyxPQTFKUTtBQTJKYixzQkFBSyxPQTNKUTtBQTRKYixzQkFBSyxPQTVKUTtBQTZKYixzQkFBSyxPQTdKUTtBQThKYixzQkFBSyxPQTlKUTtBQStKYixzQkFBSyxPQS9KUTtBQWdLYixzQkFBSyxPQWhLUTtBQWlLYixzQkFBSyxPQWpLUTtBQWtLYixzQkFBSyxPQWxLUTtBQW1LYixzQkFBSyxPQW5LUTtBQW9LYixzQkFBSyxPQXBLUTtBQXFLYixzQkFBSyxPQXJLUTtBQXNLYixzQkFBSyxPQXRLUTtBQXVLYixzQkFBSyxPQXZLUTtBQXdLYixzQkFBSyxPQXhLUTtBQXlLYixzQkFBSyxPQXpLUTtBQTBLYixzQkFBSyxPQTFLUTtBQTJLYixzQkFBSyxPQTNLUTtBQTRLYixzQkFBSyxPQTVLUTtBQTZLYixzQkFBSyxPQTdLUTtBQThLYixzQkFBSyxPQTlLUTtBQStLYixzQkFBSyxPQS9LUTtBQWdMYixzQkFBSyxPQWhMUTtBQWlMYixzQkFBSyxPQWpMUTtBQWtMYixzQkFBSyxPQWxMUTtBQW1MYixzQkFBSyxPQW5MUTtBQW9MYixzQkFBSyxPQXBMUTtBQXFMYixzQkFBSyxPQXJMUTtBQXNMYixzQkFBSyxPQXRMUTtBQXVMYixzQkFBSyxPQXZMUTtBQXdMYixzQkFBSyxPQXhMUTtBQXlMYixzQkFBSyxPQXpMUTtBQTBMYixzQkFBSyxPQTFMUTtBQTJMYixzQkFBSyxPQTNMUTtBQTRMYixzQkFBSyxPQTVMUTtBQTZMYixzQkFBSyxPQTdMUTtBQThMYixzQkFBSyxPQTlMUTtBQStMYixzQkFBSyxPQS9MUTtBQWdNYixzQkFBSyxPQWhNUTtBQWlNYixzQkFBSyxPQWpNUTtBQWtNYixzQkFBSyxPQWxNUTtBQW1NYixzQkFBSyxPQW5NUTtBQW9NYixzQkFBSyxPQXBNUTtBQXFNYixzQkFBSyxPQXJNUTtBQXNNYixzQkFBSyxPQXRNUTtBQXVNYixzQkFBSyxPQXZNUTtBQXdNYixzQkFBSyxPQXhNUTtBQXlNYixzQkFBSyxPQXpNUTtBQTBNYixzQkFBSyxPQTFNUTtBQTJNYixzQkFBSyxPQTNNUTtBQTRNYixzQkFBSyxPQTVNUTtBQTZNYixzQkFBSyxPQTdNUTtBQThNYixzQkFBSyxPQTlNUTtBQStNYixzQkFBSyxPQS9NUTtBQWdOYixzQkFBSyxPQWhOUTtBQWlOYixzQkFBSyxPQWpOUTtBQWtOYixzQkFBSyxPQWxOUTtBQW1OYixzQkFBSyxPQW5OUTtBQW9OYixzQkFBSyxPQXBOUTtBQXFOYixzQkFBSyxPQXJOUTtBQXNOYixzQkFBSyxPQXROUTtBQXVOYixzQkFBSyxPQXZOUTtBQXdOYixzQkFBSyxPQXhOUTtBQXlOYixzQkFBSyxPQXpOUTtBQTBOYixzQkFBSyxPQTFOUTtBQTJOYixzQkFBSyxPQTNOUTtBQTROYixzQkFBSyxPQTVOUTtBQTZOYixzQkFBSyxPQTdOUTtBQThOYixzQkFBSyxPQTlOUTtBQStOYixzQkFBSyxPQS9OUTtBQWdPYixzQkFBSyxPQWhPUTtBQWlPYixzQkFBSyxPQWpPUTtBQWtPYixzQkFBSyxPQWxPUTtBQW1PYixzQkFBSyxPQW5PUTtBQW9PYixzQkFBSyxPQXBPUTtBQXFPYixzQkFBSyxPQXJPUTtBQXNPYixzQkFBSyxPQXRPUTtBQXVPYixzQkFBSyxPQXZPUTtBQXdPYixzQkFBSyxPQXhPUTtBQXlPYixzQkFBSyxPQXpPUTtBQTBPYixzQkFBSyxPQTFPUTtBQTJPYixzQkFBSyxPQTNPUTtBQTRPYixzQkFBSyxPQTVPUTtBQTZP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QWlDLE1BQXJDLEVBQTZDO0FBQ3pDLHVCQUFPLEdBQUcsTUFBSCxFQUFQO0FBQ0gsYUFGRCxNQUVNO0FBQ0YsdUJBQU8sS0FBSyxRQUFMLENBQWMsR0FBRyxNQUFILEVBQWQsQ0FBUDtBQUNIO0FBQ0o7Ozs7RUF2RndCLG9COztrQkEwRmQsYzs7Ozs7Ozs7O3FqQkNsR2Y7Ozs7O0FBR0E7Ozs7Ozs7O0lBRU0sYTtBQUVKLHlCQUFZLFFBQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWEsUyxFQUFXO0FBQ3ZCLGFBQU8sSUFBSSx3QkFBSixDQUFtQixTQUFuQixFQUE4QixLQUFLLFFBQW5DLENBQVA7QUFDRDs7Ozs7O2tCQUVZLGEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSBcIi4vSW5pdE1lbWJlclwiO1xuY2xhc3MgQ29kZVRyYW5zbGF0b3IgZXh0ZW5kcyBJbml0TWVtYmVyIHtcblxuICAgIGluaXRNZW1iZXIoKSB7XG4gICAgICAgIHRoaXMuaTE4bkNvZGVzID0ge1xuICAgICAgICAgICAgXCJhZlwiOlwiZmFfQUZcIixcbiAgICAgICAgICAgIFwiYWxcIjpcImFsX0FMXCIsXG4gICAgICAgICAgICBcImR6XCI6XCJhcl9EWlwiLFxuICAgICAgICAgICAgXCJhc1wiOlwiZW5fQVNcIixcbiAgICAgICAgICAgIFwiYWRcIjpcImFkX0FEXCIsXG4gICAgICAgICAgICBcImFvXCI6XCJwdF9BT1wiLFxuICAgICAgICAgICAgXCJhaVwiOlwiZW5fQUlcIixcbiAgICAgICAgICAgIFwiYXFcIjpcImFxX0FRXCIsXG4gICAgICAgICAgICBcImFnXCI6XCJhbl9BR1wiLFxuICAgICAgICAgICAgXCJhclwiOlwiYXNfQVJcIixcbiAgICAgICAgICAgIFwiYW1cIjpcImFtX0FNXCIsXG4gICAgICAgICAgICBcImF3XCI6XCJubF9BV1wiLFxuICAgICAgICAgICAgXCJhdVwiOlwiZW5fQVVcIixcbiAgICAgICAgICAgIFwiYXRcIjpcImRlX0FUXCIsXG4gICAgICAgICAgICBcImF6XCI6XCJhel9BWlwiLFxuICAgICAgICAgICAgXCJic1wiOlwiZW5fQlNcIixcbiAgICAgICAgICAgIFwiYmhcIjpcImFyX0JIXCIsXG4gICAgICAgICAgICBcImJkXCI6XCJibl9CRFwiLFxuICAgICAgICAgICAgXCJiYlwiOlwiZW5fQkJcIixcbiAgICAgICAgICAgIFwiYnlcIjpcImJ5X0JZXCIsXG4gICAgICAgICAgICBcImJlXCI6XCJibF9CRVwiLFxuICAgICAgICAgICAgXCJielwiOlwiZW5fQlpcIixcbiAgICAgICAgICAgIFwiYmpcIjpcImZyX0JKXCIsXG4gICAgICAgICAgICBcImJtXCI6XCJlbl9CTVwiLFxuICAgICAgICAgICAgXCJidFwiOlwiYnRfQlRcIixcbiAgICAgICAgICAgIFwiYm9cIjpcImVzX0JPXCIsXG4gICAgICAgICAgICBcImJhXCI6XCJocl9CQVwiLFxuICAgICAgICAgICAgXCJid1wiOlwiZW5fQldcIixcbiAgICAgICAgICAgIFwiYnZcIjpcImJ2X0JWXCIsXG4gICAgICAgICAgICBcImJyXCI6XCJwdF9CUlwiLFxuICAgICAgICAgICAgXCJpb1wiOlwiZW5fSU9cIixcbiAgICAgICAgICAgIFwidmdcIjpcImVuX1ZHXCIsXG4gICAgICAgICAgICBcImJuXCI6XCJtc19CTlwiLFxuICAgICAgICAgICAgXCJiZ1wiOlwidHJfQkdcIixcbiAgICAgICAgICAgIFwiYmZcIjpcImZyX0JGXCIsXG4gICAgICAgICAgICBcImJpXCI6XCJmcl9CSVwiLFxuICAgICAgICAgICAgXCJraFwiOlwia2hfS0hcIixcbiAgICAgICAgICAgIFwiY21cIjpcImVuX0NNXCIsXG4gICAgICAgICAgICBcImNhXCI6XCJlbl9DQVwiLFxuICAgICAgICAgICAgXCJjdlwiOlwiY3RfQ1ZcIixcbiAgICAgICAgICAgIFwiYnFcIjpcImJxX0JRXCIsXG4gICAgICAgICAgICBcImt5XCI6XCJlbl9LWVwiLFxuICAgICAgICAgICAgXCJjZlwiOlwiZnJfQ0ZcIixcbiAgICAgICAgICAgIFwidGRcIjpcImZyX1REXCIsXG4gICAgICAgICAgICBcImNsXCI6XCJlc19DTFwiLFxuICAgICAgICAgICAgXCJjblwiOlwiemhfQ05cIixcbiAgICAgICAgICAgIFwiY3hcIjpcImN4X0NYXCIsXG4gICAgICAgICAgICBcImNjXCI6XCJtc19DQ1wiLFxuICAgICAgICAgICAgXCJjb1wiOlwiZXNfQ09cIixcbiAgICAgICAgICAgIFwia21cIjpcImZyX0tNXCIsXG4gICAgICAgICAgICBcImNnXCI6XCJmcl9DR1wiLFxuICAgICAgICAgICAgXCJjZFwiOlwiZnJfQ0RcIixcbiAgICAgICAgICAgIFwiY2tcIjpcImVuX0NLXCIsXG4gICAgICAgICAgICBcImNyXCI6XCJlc19DUlwiLFxuICAgICAgICAgICAgXCJoclwiOlwiaHJfSFJcIixcbiAgICAgICAgICAgIFwiY3VcIjpcImVzX0NVXCIsXG4gICAgICAgICAgICBcImN3XCI6XCJjd19DV1wiLFxuICAgICAgICAgICAgXCJjeVwiOlwiZWxfQ1lcIixcbiAgICAgICAgICAgIFwiY3pcIjpcImN6X0NaXCIsXG4gICAgICAgICAgICBcImNpXCI6XCJmcl9DSVwiLFxuICAgICAgICAgICAgXCJka1wiOlwiZGFfREtcIixcbiAgICAgICAgICAgIFwiZGpcIjpcImZyX0RKXCIsXG4gICAgICAgICAgICBcImRtXCI6XCJlbl9ETVwiLFxuICAgICAgICAgICAgXCJkb1wiOlwiZXNfRE9cIixcbiAgICAgICAgICAgIFwiZWNcIjpcImVzX0VDXCIsXG4gICAgICAgICAgICBcImVnXCI6XCJhcl9FR1wiLFxuICAgICAgICAgICAgXCJzdlwiOlwiZXNfU1ZcIixcbiAgICAgICAgICAgIFwiZ3FcIjpcImVzX0dRXCIsXG4gICAgICAgICAgICBcImVyXCI6XCJhYV9FUlwiLFxuICAgICAgICAgICAgXCJlZVwiOlwiZWVfRUVcIixcbiAgICAgICAgICAgIFwiZXRcIjpcImVuX0VUXCIsXG4gICAgICAgICAgICBcImZrXCI6XCJlbl9GS1wiLFxuICAgICAgICAgICAgXCJmb1wiOlwiZGFfRk9cIixcbiAgICAgICAgICAgIFwiZmpcIjpcImVuX0ZKXCIsXG4gICAgICAgICAgICBcImZpXCI6XCJmb19GSVwiLFxuICAgICAgICAgICAgXCJmclwiOlwiZnJfRlJcIixcbiAgICAgICAgICAgIFwiZ2ZcIjpcImZyX0dGXCIsXG4gICAgICAgICAgICBcInBmXCI6XCJmcl9QRlwiLFxuICAgICAgICAgICAgXCJ0ZlwiOlwidGZfVEZcIixcbiAgICAgICAgICAgIFwiZ2FcIjpcImZyX0dBXCIsXG4gICAgICAgICAgICBcImdtXCI6XCJlbl9HTVwiLFxuICAgICAgICAgICAgXCJnZVwiOlwiZ2VfR0VcIixcbiAgICAgICAgICAgIFwiZGVcIjpcImRlX0RFXCIsXG4gICAgICAgICAgICBcImdoXCI6XCJlbl9HSFwiLFxuICAgICAgICAgICAgXCJnaVwiOlwiZW5fR0lcIixcbiAgICAgICAgICAgIFwiZ3JcIjpcImVsX0dSXCIsXG4gICAgICAgICAgICBcImdsXCI6XCJkYV9HTFwiLFxuICAgICAgICAgICAgXCJnZFwiOlwiZW5fR0RcIixcbiAgICAgICAgICAgIFwiZ3BcIjpcImZyX0dQXCIsXG4gICAgICAgICAgICBcImd1XCI6XCJlbV9HVVwiLFxuICAgICAgICAgICAgXCJndFwiOlwiZXNfR1RcIixcbiAgICAgICAgICAgIFwiZ2dcIjpcImdnX0dHXCIsXG4gICAgICAgICAgICBcImduXCI6XCJmcl9HTlwiLFxuICAgICAgICAgICAgXCJnd1wiOlwicHRfR1dcIixcbiAgICAgICAgICAgIFwiZ3lcIjpcImVuX0dZXCIsXG4gICAgICAgICAgICBcImh0XCI6XCJmcl9IVFwiLFxuICAgICAgICAgICAgXCJobVwiOlwiaG1fSE1cIixcbiAgICAgICAgICAgIFwiaG5cIjpcImVzX0hOXCIsXG4gICAgICAgICAgICBcImhrXCI6XCJ6aF9IS1wiLFxuICAgICAgICAgICAgXCJodVwiOlwiaHVfSFVcIixcbiAgICAgICAgICAgIFwiaXNcIjpcImlzX0lTXCIsXG4gICAgICAgICAgICBcImluXCI6XCJlbl9JTlwiLFxuICAgICAgICAgICAgXCJpZFwiOlwiaWRfSURcIixcbiAgICAgICAgICAgIFwiaXJcIjpcImZhX0lSXCIsXG4gICAgICAgICAgICBcImlxXCI6XCJhcl9JUVwiLFxuICAgICAgICAgICAgXCJpZVwiOlwiZW5fSUVcIixcbiAgICAgICAgICAgIFwiaW1cIjpcImltX0lNXCIsXG4gICAgICAgICAgICBcImlsXCI6XCJpbF9JTFwiLFxuICAgICAgICAgICAgXCJpdFwiOlwiaXRfSVRcIixcbiAgICAgICAgICAgIFwiam1cIjpcImptX0pNXCIsXG4gICAgICAgICAgICBcImpwXCI6XCJqcF9KUFwiLFxuICAgICAgICAgICAgXCJqZVwiOlwiamVfSkVcIixcbiAgICAgICAgICAgIFwiam9cIjpcImFyX0pPXCIsXG4gICAgICAgICAgICBcImt6XCI6XCJrel9LWlwiLFxuICAgICAgICAgICAgXCJrZVwiOlwia2VfS0VcIixcbiAgICAgICAgICAgIFwia2lcIjpcImtpX0tJXCIsXG4gICAgICAgICAgICBcImt3XCI6XCJrd19LV1wiLFxuICAgICAgICAgICAgXCJrZ1wiOlwia2dfS0dcIixcbiAgICAgICAgICAgIFwibGFcIjpcImxhX0xBXCIsXG4gICAgICAgICAgICBcImx2XCI6XCJsdl9MVlwiLFxuICAgICAgICAgICAgXCJsYlwiOlwibGJfTEJcIixcbiAgICAgICAgICAgIFwibHNcIjpcImxzX0xTXCIsXG4gICAgICAgICAgICBcImxyXCI6XCJscl9MUlwiLFxuICAgICAgICAgICAgXCJseVwiOlwibHlfTFlcIixcbiAgICAgICAgICAgIFwibGlcIjpcImxpX0xJXCIsXG4gICAgICAgICAgICBcImx0XCI6XCJsdF9MVFwiLFxuICAgICAgICAgICAgXCJsdVwiOlwibHVfTFVcIixcbiAgICAgICAgICAgIFwibW9cIjpcIm1vX01PXCIsXG4gICAgICAgICAgICBcIm1rXCI6XCJta19NS1wiLFxuICAgICAgICAgICAgXCJtZ1wiOlwibWdfTUdcIixcbiAgICAgICAgICAgIFwibXdcIjpcIm13X01XXCIsXG4gICAgICAgICAgICBcIm15XCI6XCJteV9NWVwiLFxuICAgICAgICAgICAgXCJtdlwiOlwibXZfTVZcIixcbiAgICAgICAgICAgIFwibWxcIjpcIm1sX01MXCIsXG4gICAgICAgICAgICBcIm10XCI6XCJtdF9NVFwiLFxuICAgICAgICAgICAgXCJtaFwiOlwibWhfTUhcIixcbiAgICAgICAgICAgIFwibXFcIjpcIm1xX01RXCIsXG4gICAgICAgICAgICBcIm1yXCI6XCJtcl9NUlwiLFxuICAgICAgICAgICAgXCJtdVwiOlwibXVfTVVcIixcbiAgICAgICAgICAgIFwieXRcIjpcInl0X1lUXCIsXG4gICAgICAgICAgICBcIm14XCI6XCJteF9NWFwiLFxuICAgICAgICAgICAgXCJmbVwiOlwiZm1fRk1cIixcbiAgICAgICAgICAgIFwibWRcIjpcIm1kX01EXCIsXG4gICAgICAgICAgICBcIm1jXCI6XCJtY19NQ1wiLFxuICAgICAgICAgICAgXCJtblwiOlwibW5fTU5cIixcbiAgICAgICAgICAgIFwibWVcIjpcIm1lX01FXCIsXG4gICAgICAgICAgICBcIm1zXCI6XCJtc19NU1wiLFxuICAgICAgICAgICAgXCJtYVwiOlwibWFfTUFcIixcbiAgICAgICAgICAgIFwibXpcIjpcIm16X01aXCIsXG4gICAgICAgICAgICBcIm1tXCI6XCJtbV9NTVwiLFxuICAgICAgICAgICAgXCJuYVwiOlwibmFfTkFcIixcbiAgICAgICAgICAgIFwibnJcIjpcIm5yX05SXCIsXG4gICAgICAgICAgICBcIm5wXCI6XCJucF9OUFwiLFxuICAgICAgICAgICAgXCJubFwiOlwibmxfTkxcIixcbiAgICAgICAgICAgIFwibmNcIjpcIm5jX05DXCIsXG4gICAgICAgICAgICBcIm56XCI6XCJuel9OWlwiLFxuICAgICAgICAgICAgXCJuaVwiOlwibmlfTklcIixcbiAgICAgICAgICAgIFwibmVcIjpcIm5lX05FXCIsXG4gICAgICAgICAgICBcIm5nXCI6XCJuZ19OR1wiLFxuICAgICAgICAgICAgXCJudVwiOlwibnVfTlVcIixcbiAgICAgICAgICAgIFwibmZcIjpcIm5mX05GXCIsXG4gICAgICAgICAgICBcImtwXCI6XCJrcF9LUFwiLFxuICAgICAgICAgICAgXCJtcFwiOlwibXBfTVBcIixcbiAgICAgICAgICAgIFwibm9cIjpcIm5vX05PXCIsXG4gICAgICAgICAgICBcIm9tXCI6XCJvbV9PTVwiLFxuICAgICAgICAgICAgXCJwa1wiOlwicGtfUEtcIixcbiAgICAgICAgICAgIFwicHdcIjpcInB3X1BXXCIsXG4gICAgICAgICAgICBcInBzXCI6XCJhcl9QU1wiLFxuICAgICAgICAgICAgXCJwYVwiOlwiZXNfUEFcIixcbiAgICAgICAgICAgIFwicGdcIjpcImVuX1BHXCIsXG4gICAgICAgICAgICBcInB5XCI6XCJlc19QWVwiLFxuICAgICAgICAgICAgXCJwZVwiOlwiZXNfUEVcIixcbiAgICAgICAgICAgIFwicGhcIjpcImVuX1BIXCIsXG4gICAgICAgICAgICBcInBuXCI6XCJwbl9QTlwiLFxuICAgICAgICAgICAgXCJwbFwiOlwicGxfUExcIixcbiAgICAgICAgICAgIFwicHRcIjpcInB0X1BUXCIsXG4gICAgICAgICAgICBcInByXCI6XCJlbl9QUlwiLFxuICAgICAgICAgICAgXCJxYVwiOlwiYXJfUUFcIixcbiAgICAgICAgICAgIFwicm9cIjpcInJvX1JPXCIsXG4gICAgICAgICAgICBcInJ1XCI6XCJydV9SVVwiLFxuICAgICAgICAgICAgXCJyd1wiOlwicndfUldcIixcbiAgICAgICAgICAgIFwicmVcIjpcImZlX1JFXCIsXG4gICAgICAgICAgICBcIndzXCI6XCJ3c19XU1wiLFxuICAgICAgICAgICAgXCJzbVwiOlwiaXRfU01cIixcbiAgICAgICAgICAgIFwic2FcIjpcImFyX1NBXCIsXG4gICAgICAgICAgICBcInNuXCI6XCJmcl9TTlwiLFxuICAgICAgICAgICAgXCJyc1wiOlwicnNfUlNcIixcbiAgICAgICAgICAgIFwic2NcIjpcImVuX1NDXCIsXG4gICAgICAgICAgICBcInNsXCI6XCJlbl9TTFwiLFxuICAgICAgICAgICAgXCJzZ1wiOlwic2dfU0dcIixcbiAgICAgICAgICAgIFwic3hcIjpcInN4X1NYXCIsXG4gICAgICAgICAgICBcInNrXCI6XCJza19TS1wiLFxuICAgICAgICAgICAgXCJzaVwiOlwic2lfU0lcIixcbiAgICAgICAgICAgIFwic2JcIjpcImVuX1NCXCIsXG4gICAgICAgICAgICBcInNvXCI6XCJzb19TT1wiLFxuICAgICAgICAgICAgXCJ6YVwiOlwiemFfWkFcIixcbiAgICAgICAgICAgIFwiZ3NcIjpcImdzX0dTXCIsXG4gICAgICAgICAgICBcImtyXCI6XCJrb19LUlwiLFxuICAgICAgICAgICAgXCJzc1wiOlwic3NfU1NcIixcbiAgICAgICAgICAgIFwiZXNcIjpcImVzX0VTXCIsXG4gICAgICAgICAgICBcImxrXCI6XCJsa19MS1wiLFxuICAgICAgICAgICAgXCJibFwiOlwiYmxfQkxcIixcbiAgICAgICAgICAgIFwic2hcIjpcImVuX1NIXCIsXG4gICAgICAgICAgICBcImtuXCI6XCJlbl9LTlwiLFxuICAgICAgICAgICAgXCJsY1wiOlwiZW5fTENcIixcbiAgICAgICAgICAgIFwibWZcIjpcIm1mX01GXCIsXG4gICAgICAgICAgICBcInBtXCI6XCJmcl9QTVwiLFxuICAgICAgICAgICAgXCJ2Y1wiOlwiZW5fVkNcIixcbiAgICAgICAgICAgIFwic2RcIjpcImFyX1NEXCIsXG4gICAgICAgICAgICBcInNyXCI6XCJubF9TUlwiLFxuICAgICAgICAgICAgXCJzalwiOlwic2pfU0pcIixcbiAgICAgICAgICAgIFwic3pcIjpcImVuX1NaXCIsXG4gICAgICAgICAgICBcInNlXCI6XCJzdl9TRVwiLFxuICAgICAgICAgICAgXCJjaFwiOlwiZGVfQ0hcIixcbiAgICAgICAgICAgIFwic3lcIjpcImFyX1NZXCIsXG4gICAgICAgICAgICBcInN0XCI6XCJwdF9TVFwiLFxuICAgICAgICAgICAgXCJ0d1wiOlwiemhfVFdcIixcbiAgICAgICAgICAgIFwidGpcIjpcInRqX1RKXCIsXG4gICAgICAgICAgICBcInR6XCI6XCJzd19UWlwiLFxuICAgICAgICAgICAgXCJ0aFwiOlwidGhfVEhcIixcbiAgICAgICAgICAgIFwidGxcIjpcInRsX1RMXCIsXG4gICAgICAgICAgICBcInRnXCI6XCJ0cl9UR1wiLFxuICAgICAgICAgICAgXCJ0a1wiOlwidGtfVEtcIixcbiAgICAgICAgICAgIFwidG9cIjpcInRvX1RPXCIsXG4gICAgICAgICAgICBcInR0XCI6XCJlbl9UVFwiLFxuICAgICAgICAgICAgXCJ0blwiOlwiYXJfVE5cIixcbiAgICAgICAgICAgIFwidHJcIjpcInRyX1RSXCIsXG4gICAgICAgICAgICBcInRtXCI6XCJ0bV9UTVwiLFxuICAgICAgICAgICAgXCJ0Y1wiOlwiZW5fVENcIixcbiAgICAgICAgICAgIFwidHZcIjpcInR2X1RWXCIsXG4gICAgICAgICAgICBcInVtXCI6XCJlbl9VTVwiLFxuICAgICAgICAgICAgXCJ2aVwiOlwiZW5fVklcIixcbiAgICAgICAgICAgIFwiZ2JcIjpcImVuX0dCXCIsXG4gICAgICAgICAgICBcInVzXCI6XCJlbl9VU1wiLFxuICAgICAgICAgICAgXCJ1Z1wiOlwiZW5fVUdcIixcbiAgICAgICAgICAgIFwidWFcIjpcInJ1X1VBXCIsXG4gICAgICAgICAgICBcImFlXCI6XCJhcl9BRVwiLFxuICAgICAgICAgICAgXCJ1eVwiOlwicmRfVVlcIixcbiAgICAgICAgICAgIFwidXpcIjpcInV6X1VaXCIsXG4gICAgICAgICAgICBcInZ1XCI6XCJ2dV9WVVwiLFxuICAgICAgICAgICAgXCJ2YVwiOlwidmFfVkFcIixcbiAgICAgICAgICAgIFwidmVcIjpcImVzX1ZFXCIsXG4gICAgICAgICAgICBcInZuXCI6XCJ2bl9WTlwiLFxuICAgICAgICAgICAgXCJ3ZlwiOlwid2ZfV0ZcIixcbiAgICAgICAgICAgIFwiZWhcIjpcImVoX0VIXCIsXG4gICAgICAgICAgICBcInllXCI6XCJhcl9ZRVwiLFxuICAgICAgICAgICAgXCJ6bVwiOlwiZW5fWk1cIixcbiAgICAgICAgICAgIFwiendcIjpcImVtX1pXXCIsXG4gICAgICAgICAgICBcImF4XCI6XCJzdl9BWFwiXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmkxOG5Db2Rlcy5maW5kS2V5QnlWYWx1ZSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIGZvcihsZXQgcHJvcCBpbiB0aGlzICkge1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aGlzWyBwcm9wIF0gPT09IHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHRoaXMuaTE4bkNvZGVzLmdldEFsbFByb3BzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gdGhpcyApIHtcbiAgICAgICAgICAgICAgICBpZiggdGhpcy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaCh0aGlzW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHRyYW5zbGF0ZVNob3J0VG9Jc28oc2hvcnQpIHtcbiAgICAgICAgbGV0IHJlcyA9ICB0aGlzLmkxOG5Db2Rlc1tzaG9ydF07XG4gICAgICAgIGlmIChyZXMgIT09IG51bGwgJiYgcmVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93KFwiU2VsZWN0ZWQgRWxlbWVudCBTZWVtcyBub3QgdG8gYmUgdmFsaWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc2xhdGVJc29Bc3NvY0FycmF5VG9TaG9ydChpMThuQXJyYXkpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGkxOG5BcnJheSkpIHtcbiAgICAgICAgICAgIHRocm93IChcIklucHV0IFBhcmFtZXRlciBtdXN0IGJlIG9mIFR5cGUgQXJyYXlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcbiAgICAgICAgaTE4bkFycmF5LmVhY2godGhpcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdEFycmF5W3RoaXMudHJhbnNsYXRlU2hvcnRUb0lzbyhrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0QXJyYXk7XG4gICAgfVxuXG5cbiAgICB0cmFuc2xhdGVJc29BcnJheVRvU2hvcnQoaTE4bkFycmF5KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpMThuQXJyYXkpKSB7XG4gICAgICAgICAgICB0aHJvdyAoXCJJbnB1dCBQYXJhbWV0ZXIgbXVzdCBiZSBvZiBUeXBlIEFycmF5XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaTE4bkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKHRoaXMudHJhbnNsYXRlU2hvcnRUb0lzbyhpMThuQXJyYXlbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRBcnJheTtcbiAgICB9XG5cbiAgICB0cmFuc2xhdGVJc29Ub1Nob3J0KGkxOG4pIHtcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuaTE4bkNvZGVzLmZpbmRLZXlCeVZhbHVlKGkxOG4pO1xuICAgICAgICBpZiAocmVzICE9PSBudWxsICYmIHJlcyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyhcIlNlbGVjdGVkIExhbmd1YWdlIGlzIG5vdCBhdmFpbGFibGUgJ1wiICtpMThuKyBcIidcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVUcmFuc2xhdG9yOyIsIi8qKlxuICogQ3JlYXRlZCBieSBzYnJhbmR0IG9uIDA1LjA3LjE3LlxuICovXG5pbXBvcnQgSW5pdE1lbWJlciBmcm9tICcuL0luaXRNZW1iZXInO1xuY2xhc3MgRmxhZ3NUb29sIGV4dGVuZHMgSW5pdE1lbWJlciB7XG5cbiAgICBpbml0TWVtYmVyKCkge1xuICAgICAgICB0aGlzLkZBREVJTl9TUEVFRCA9IDQwMDtcbiAgICAgICAgdGhpcy5GQURFSU5fREVMQVkgPSAxNTtcbiAgICAgICAgdGhpcy5tYWluID0gbnVsbDtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3NlciA9IG51bGw7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50RmxhZyA9IDA7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcyA9IFwiXCI7XG4gICAgICAgIHRoaXMucGlja2VyQ2xhc3MgPSBcIlwiO1xuICAgICAgICB0aGlzLmhvdmVyQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhZ2dlckxlYXZlQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhZ2dlckNhbmNlbEFuaW1hdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyVHlwZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsLCBsb2FkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbDtcbiAgICAgICAgdGhpcy5tYWluID0gbG9hZGVyO1xuICAgICAgICAvL2xldCBzdHJpbmcgPSBTdHJpbmcoZWwuYXR0cignbGFuZ3VhZ2VzJykucmVwbGFjZSgvJy9nLCBcIlxcXCJcIikpO1xuICAgICAgICAvL2xldCBsbmcgPSAkLnBhcnNlSlNPTihzdHJpbmcpO1xuICAgICAgICBsZXQgbG5nID0gbG9hZGVyLmxhbmdLZXlzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudExuZyA9IGxvYWRlci5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVJc29Ub1Nob3J0KGxuZ1tpXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5sYW5ndWFnZXMuaW5kZXhPZihjdXJyZW50TG5nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5wdXNoKGN1cnJlbnRMbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJMYW5ndWFnZXMgY2FuIG5vdCBiZSBhZGRlZCB0d2ljZS4gU2Vjb25kICdcIiArIGxuZ1tpXSArIFwiJyB3YXMgaWdub3JlZC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuYXR0cignYW5pbWF0ZScpICE9PSB1bmRlZmluZWQgJiYgKGVsLmF0dHIoJ2FuaW1hdGUnKSA9PT0gXCJmYWxzZVwiIHx8IEJvb2xlYW4oZWwuYXR0cignYW5pbWF0ZScpKSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICB0aGlzLkZBREVJTl9TUEVFRCA9IDA7XG4gICAgICAgICAgICB0aGlzLkZBREVJTl9ERUxBWSA9IDA7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMubG9hZFN0eWxlcygpO1xuICAgICAgICB0aGlzLnBhcnNlUGxhY2Vob2xkZXIoKTtcbiAgICAgICAgdGhpcy5pbml0RmxhZ0NvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICBwYXJzZVBsYWNlaG9sZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cigncGxhY2Vob2xkZXInKSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIGxldCBzdHJpbmcgPSBTdHJpbmcodGhpcy5jb250YWluZXIuYXR0cigncGxhY2Vob2xkZXInKS5yZXBsYWNlKC8nL2csIFwiXFxcIlwiKSk7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IFwiXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9ICQucGFyc2VKU09OKHN0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyVHlwZSA9IFwiYXJyYXlcIjtcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBbXTtcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlci5sZW5ndGggPCB0aGlzLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcIklmIG11bHRpcGxlIFBsYWNlaG9sZGVycyBhcmUgcHJvdmlkZWQsIHBsZWFzZSBwcm92aWRlIGEgcGxhY2Vob2xkZXIgZm9yIGV2ZXJ5IGxhbmd1YWdlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYWNlaG9sZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlclt0aGlzLmxhbmd1YWdlc1tpXV0gPSBwbGFjZWhvbGRlcltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXJUeXBlID0gXCJzdHJpbmdcIjtcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRTdHlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5hdHRyKFwiZXhwYW5kZXItY2xhc3NcIikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcyAgPSB0aGlzLmNvbnRhaW5lci5hdHRyKFwiZXhwYW5kZXItY2xhc3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cihcInBpY2tlci1jbGFzc1wiKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlckNsYXNzID0gdGhpcy5jb250YWluZXIuYXR0cihcInBpY2tlci1jbGFzc1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGbGFnQ29udHJvbGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucGlja2VyQ2xhc3MgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J1wiK3RoaXMucGlja2VyQ2xhc3MrXCInPjwvZGl2PlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J2RlZmF1bHQtcGlja2VyJz48L2Rpdj5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFnZ2VyID0gJCh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbigpW3RoaXMuY29udGFpbmVyLmNoaWxkcmVuKCkubGVuZ3RoIC0gMV0pO1xuICAgICAgICAvL3RoaXMuZmxhZ2dlci5jc3Moe1wibGVmdFwiIDogdGhpcy5tYWluLmlucHV0VG9vbC5pbnB1dC5vdXRlcldpZHRoKCkgLSAyNCwgJ21hcmdpbi10b3AnOiAtICh0aGlzLm1haW4uaW5wdXRUb29sLmlucHV0Lm91dGVySGVpZ2h0KCkgKyAyNCkgLyAyfSk7XG4gICAgICAgIHRoaXMuZmxhZ2dlci5odG1sKCc8c3BhbiB0aXRsZT1cIkxhbmd1YWdlOiAnKyB0aGlzLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlU2hvcnRUb0lzbyh0aGlzLmxhbmd1YWdlc1swXSkgKydcIiBjbGFzcz1cImZsYWctaWNvbiBmbGFnLWljb24tJysgdGhpcy5sYW5ndWFnZXNbMF0gKydcIj48L3NwYW4+Jyk7XG4gICAgICAgIHRoaXMubG9hZEZsYWdzKCk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuZmxhZ2dlci5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHNlbGYubGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMSkgcmV0dXJuO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuZmxhZ2dlckxlYXZlQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5mbGFnZ2VyQ2FuY2VsQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XCJjdXJzb3JcIjogXCJwb2ludGVyXCJ9KTtcbiAgICAgICAgICAgICAgICBzZWxmLmhvdmVyQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICghc2VsZi5pc0FuaW1hdGluZykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmhvdmVyQW5pbWF0aW9uVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmxhZ2dlci5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuZmxhZ2dlckNhbmNlbEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZhZGVPdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZhZGVJbigpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLnNob3coKTtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5mYWRlSW4oNTApO1xuICAgICAgICBsZXQgb3V0ZXJ2ID0gdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICQodGhpcykuZGVsYXkodiAqIHNlbGYuRkFERUlOX0RFTEFZKS5mYWRlSW4oc2VsZi5GQURFSU5fU1BFRUQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5kZWxheShvdXRlcnYgKiBzZWxmLkZBREVJTl9ERUxBWSkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZmFkZU91dChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBvdXRlcnYgPSB0aGlzLmZsYWdnZXJDaG9vc2VyLmNoaWxkcmVuKCkubGVuZ3RoO1xuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgJCh0aGlzKS5kZWxheSh2ICogc2VsZi5GQURFSU5fREVMQVkgKiAzKS5mYWRlT3V0KHNlbGYuRkFERUlOX1NQRUVEKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5mbGFnZ2VyQ2hvb3Nlci5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgICAgICAgICBzZWxmLmZsYWdnZXJDaG9vc2VyLmhpZGUoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgfSwgKG91dGVydiAtIDIpICogc2VsZi5GQURFSU5fREVMQVkgKiAzKTtcbiAgICB9XG5cbiAgICByZXBsYWNlQ3VycmVudChpdGVtKSB7XG4gICAgICAgIHRoaXMuZmxhZ2dlci5odG1sKGl0ZW0uaHRtbCgpKTtcbiAgICAgICAgdGhpcy5tYWluLmlucHV0VG9vbC5jaGFuZ2VkSW5wdXRWaWV3KCk7XG4gICAgfVxuXG4gICAgbG9hZEZsYWdzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRTdHlsZUNsYXNzZXMgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J1wiKyB0aGlzLmlucHV0U3R5bGVDbGFzc2VzICsgXCInPjwvZGl2PlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXY+PC9kaXY+XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZsYWdnZXJDaG9vc2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3NlciA9ICQodGhpcy5jb250YWluZXIuY2hpbGRyZW4oKVt0aGlzLmNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jc3Moe1wicG9zaXRpb25cIiA6IFwiYWJzb2x1dGVcIixcIm1hcmdpbi10b3BcIjogXCItMnB4XCIsIFwiZGlzcGxheVwiOiBcIm5vbmVcIiwgXCJwYWRkaW5nXCI6IFwiMnB4XCIsIFwiYmFja2dyb3VuZC1jb2xvclwiIDogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBcImJvcmRlclwiIDogXCIxcHggc29saWQgXCIrIHRoaXMubWFpbi5pbnB1dFRvb2wuaW5wdXQuY3NzKCdib3JkZXItY29sb3InKSwgXCJ6LWluZGV4XCI6IDJ9KTtcbiAgICAgICAgbGV0IGl0ZW1zUGVyUm93ID0gTWF0aC5mbG9vcigodGhpcy5mbGFnZ2VyQ2hvb3Nlci5pbm5lcldpZHRoKCkgLSB0aGlzLmZsYWdnZXJDaG9vc2VyLmNzcyhcInBhZGRpbmdcIikgKiAyKSAvICh0aGlzLmZsYWdnZXIub3V0ZXJXaWR0aCgpICsgMikpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50RmxhZykgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5hcHBlbmQoJzxkaXYgc3R5bGU9XCJmbG9hdDpyaWdodDsgZGlzcGxheTogbm9uZTsgcGFkZGluZzowIDAgMnB4IDJweDtcIiA+PHNwYW4gdGl0bGU9XCJMYW5ndWFnZTogJysgdGhpcy5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZVNob3J0VG9Jc28odGhpcy5sYW5ndWFnZXNbaV0pICsnXCIgY2xhc3M9XCJmbGFnLWljb24gZmxhZy1pY29uLScrIHRoaXMubGFuZ3VhZ2VzW2ldICsnXCI+PC9zcGFuPjwvZGl2PicpO1xuXG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhlIEN1cnJlbnQgSXRlbVxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSAkKCB0aGlzLmZsYWdnZXJDaG9vc2VyIC5jaGlsZHJlbigpWyB0aGlzLmZsYWdnZXJDaG9vc2VyIC5jaGlsZHJlbigpLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGN1cnJlbnQuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1wiY3Vyc29yXCIgOiBcInBvaW50ZXJcIn0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRGbGFnID0gaTtcbiAgICAgICAgICAgICAgICBzZWxmLnJlcGxhY2VDdXJyZW50KCQodGhpcykpO1xuICAgICAgICAgICAgICAgIHNlbGYuZmFkZU91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRGbGFncygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChpICUgaXRlbXNQZXJSb3cgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLmFwcGVuZChcIjxkaXYgc3R5bGU9J2NsZWFyOiBib3RoOyc+PC9kaXY+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuYXBwZW5kKFwiPGRpdiBzdHlsZT0nY2xlYXI6IGJvdGg7Jz48L2Rpdj5cIik7XG5cbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5mbGFnZ2VyTGVhdmVBbmltYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mYWRlT3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmZsYWdnZXJDYW5jZWxBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmZsYWdnZXJMZWF2ZUFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsYWdzVG9vbDsiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuY2xhc3MgSW5pdE1lbWJlciB7XG4gICAgaW5pdE1lbWJlcigpIHt9XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lbWJlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5pdE1lbWJlcjsiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSBcIi4vSW5pdE1lbWJlclwiO1xuY2xhc3MgSW5wdXRUb29sIGV4dGVuZHMgSW5pdE1lbWJlciB7XG5cbiAgICBpbml0TWVtYmVyKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFpbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmlucHV0dmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuaW5wdXRTdHlsZUNsYXNzZXMgPSBcIlwiO1xuICAgICAgICB0aGlzLmlucHV0dmFsdWVzLnNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gMCwga2V5O1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSlcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcInNpemVcIlxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwiZWFjaFwiXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJoYXNLZXlcIikgc2l6ZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcy5lYWNoID0gZnVuY3Rpb24gKGN0eCwgY2FsbGFibGUpIHtcbiAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KVxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwic2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJlYWNoXCJcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcImhhc0tleVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxhYmxlLmFwcGx5KGN0eCwgW2tleSwgdGhpc1trZXldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlucHV0dmFsdWVzLmhhc0tleSA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGtleSA9PT0gdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsLCBsb2FkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbDtcblxuICAgICAgICBpZiAoZWwuYXR0cihcImlucHV0LWNsYXNzXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRTdHlsZUNsYXNzZXMgID0gZWwuYXR0cihcImlucHV0LWNsYXNzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IGVsLmF0dHIoXCJwbGFjZWhvbGRlclwiKSAhPT0gdW5kZWZpbmVkID8gXCJwbGFjZWhvbGRlcj0nJ1wiIDogXCJcIjtcbiAgICAgICAgbGV0IHJvd3MgPSBwYXJzZUludChlbC5hdHRyKCdyb3dzJykpO1xuICAgICAgICBpZiAocm93cyA9PT0gMSB8fCAhcm93cykge1xuICAgICAgICAgICAgZWwuYXBwZW5kKFwiPGlucHV0IFwiK3BsYWNlaG9sZGVyK1wiIGNsYXNzPSdcIit0aGlzLmlucHV0U3R5bGVDbGFzc2VzK1wiJyB0eXBlPSd0ZXh0JyAvPlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZChcIjx0ZXh0YXJlYSBcIitwbGFjZWhvbGRlcitcIiBjbGFzcz0nXCIrdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcytcIicgc3R5bGU9J2xpbmUtaGVpZ2h0OiAxMnB4JyB0eXBlPSd0ZXh0JyByb3dzPSdcIityb3dzK1wiJz48L3RleHRhcmVhPlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXQgPSAkKGVsLmNoaWxkcmVuKClbZWwuY2hpbGRyZW4oKS5sZW5ndGggLSAxXSk7XG5cbiAgICAgICAgdGhpcy5tYWluID0gbG9hZGVyO1xuICAgICAgICB0aGlzLmlucHV0LmNzcyh7XCJ3aWR0aFwiIDogZWwuYXR0cignd2lkdGgnKSA8IDM1ID8gMzUgOiBlbC5hdHRyKCd3aWR0aCcpLCBcImhlaWdodFwiIDogZWwuYXR0cignaGVpZ2h0JykgPCAxMiA/IDEyIDogZWwuYXR0cignaGVpZ2h0Jyl9KTtcbiAgICAgICAgZWwuY3NzKHtcIndpZHRoXCIgOiB0aGlzLmlucHV0Lm91dGVyV2lkdGgoKSA8IDM1ID8gJ2F1dG8nIDogdGhpcy5pbnB1dC5vdXRlcldpZHRoKCksIFwicGFkZGluZy1ib3R0b21cIiA6IFwiMnB4XCIsIFwicGFkZGluZy10b3BcIiA6IFwiMnB4XCIsIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwifSk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudE1ldGhvZHMoKTtcbiAgICAgICAgdGhpcy5pbml0S2V5TG9nZ2luZygpO1xuICAgICAgICB0aGlzLmluaXRJbnB1dENoYW5nZSgpO1xuICAgIH1cblxuXG4gICAgaW5pdEtleUxvZ2dpbmcoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmlucHV0LmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSBzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tzZWxmLm1haW4uZmxhZ3NUb29sLmN1cnJlbnRGbGFnXTtcbiAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbY3VycmVudExhbmd1YWdlXSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHNlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW3NlbGYubWFpbi5mbGFnc1Rvb2wuY3VycmVudEZsYWddO1xuICAgICAgICAgICAgc2VsZi5pbnB1dHZhbHVlc1tjdXJyZW50TGFuZ3VhZ2VdID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlZElucHV0VmlldygpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW3RoaXMubWFpbi5mbGFnc1Rvb2wuY3VycmVudEZsYWddO1xuICAgICAgICBpZiAoIHRoaXMubWFpbi5mbGFnc1Rvb2wucGxhY2VIb2xkZXJUeXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgdGhpcy5tYWluLmZsYWdzVG9vbC5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMubWFpbi5mbGFnc1Rvb2wucGxhY2VIb2xkZXJUeXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuYXR0cigncGxhY2Vob2xkZXInLCB0aGlzLm1haW4uZmxhZ3NUb29sLnBsYWNlaG9sZGVyW2N1cnJlbnRMYW5ndWFnZV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5wdXQudmFsKHRoaXMuaW5wdXR2YWx1ZXNbY3VycmVudExhbmd1YWdlXSlcbiAgICB9XG5cbiAgICBhZGRFbGVtZW50TWV0aG9kcygpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcHJpbnRSZXN1bHRzID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmlucHV0dmFsdWVzICE9PSB1bmRlZmluZWQgJiYgc2VsZi5pbnB1dHZhbHVlc1tsYW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5wdXR2YWx1ZXNbbGFuZ107XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuaW5wdXR2YWx1ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvQXNzb2NBcnJheVRvU2hvcnQoc2VsZi5pbnB1dHZhbHVlcyk7Ly87c2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZVNob3J0VG9Jc28obGFuZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1pc3NpbmdpMThuKCkubGVuZ3RoID09PSAwO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1pc3NpbmdpMThuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgbWlzc2luZyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLmlucHV0dmFsdWVzLmhhc0tleShzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tpXSkgfHwgc2VsZi5pbnB1dHZhbHVlc1tzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tpXV0gPT09IHVuZGVmaW5lZCB8fCBzZWxmLmlucHV0dmFsdWVzW3NlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW2ldXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZy5wdXNoKHNlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvQXJyYXlUb1Nob3J0KG1pc3NpbmcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNldFZhbHVlQXV0byA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgIHNldFZhbHVlKGtleSwgdmFsdWVba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmlucHV0LnZhbCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2V0VmFsdWUgPSBmdW5jdGlvbihsbmcsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsbmcsIHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChsbmcgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mICBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG5nLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkJvdGggaW5wdXQgYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBzaXplXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmdbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYubWFpbi5pc2kxOG5SZWdpc3RlcmVkKHNob3J0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbc2hvcnRdID0gdmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KFwiTGFuZ3VhZ2UgXCIgKyBsbmcgKyBcIiBpcyBub3QgcmVnaXN0ZXJlZCB3aXRoIHRoZSBWaWV3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKFwiRWl0aGVyIGJvdGgsIG9yIG5vbiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgQXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1haW4uaXNpMThuUmVnaXN0ZXJlZChzaG9ydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dHZhbHVlc1tzaG9ydF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkxhbmd1YWdlIFwiICsgbG5nICsgXCIgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCB0aGUgVmlld1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmNoYW5nZWRJbnB1dFZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZWkxOG4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IuaTE4bkNvZGVzLmdldEFsbFByb3BzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJGb3JtSW5jb21wbGV0ZUhhbmRsZXIgPSBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBIYW5kbGVyIG11c3QgYmUgb2YgdHlwZSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLm1haW4uZmFpbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uaTE4biA9IHByaW50UmVzdWx0cztcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uY29tcGxldGUgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLm1pc3NpbmcgPSBtaXNzaW5naTE4bjtcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uc2V0VmFsdWUgPSBzZXRWYWx1ZTtcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uc2V0VmFsdWVBdXRvID0gc2V0VmFsdWVBdXRvO1xuICAgICAgICB0aGlzLmNvbnRhaW5lclswXS5hbGxMb2NhbGVzID0gYXZhaWxhYmxlaTE4bjtcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0ucmVnaXN0ZXJGb3JtSW5jb21wbGV0ZUhhbmRsZXIgPSByZWdpc3RlckZvcm1JbmNvbXBsZXRlSGFuZGxlcjtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5pMThuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuaTE4bih2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5pdC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuY29tcGxldGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5taXNzaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLm1pc3NpbmcoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChsbmcsIHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLnNldFZhbHVlKGxuZywgdmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLnNldFZhbHVlQXV0byA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykpO1xuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5zZXRWYWx1ZUF1dG8odmFsdWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qdGhpcy5jb250YWluZXIuaW5pdC5wcm90b3R5cGUudmFsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYodmFsdWUgJiYgJCh0aGlzKS5hdHRyKFwiaWRcIikpe1xuICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5zZXRWYWx1ZVdpdGhPYmplY3QodmFsdWUpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTsqL1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLmFsbExvY2FsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuYWxsTG9jYWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5yZWdpc3RlckZvcm1JbmNvbXBsZXRlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VG9vbDsiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSAnLi9Jbml0TWVtYmVyJztcbmltcG9ydCBGbGFnc1Rvb2wgZnJvbSAnLi9GbGFnc1Rvb2wnO1xuaW1wb3J0IElucHV0VG9vbCBmcm9tIFwiLi9JbnB1dFRvb2xcIjtcbmltcG9ydCBDb2RlVHJhbnNsYXRvciBmcm9tIFwiLi9Db2RlVHJhbnNsYXRvclwiO1xuXG5jbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIEluaXRNZW1iZXIge1xuXG4gICAgaW5pdE1lbWJlcigpIHtcbiAgICAgICAgdGhpcy5mbGFnc1Rvb2wgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5wdXRUb29sID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2RlVHJhbnNsYXRvciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5mYWlsSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBsYW5nS2V5cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxhbmdLZXlzID0gbGFuZ0tleXM7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChcIiNcIiArIGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuaW5pdENvZGVUcmFuc2xhdG9yKCk7XG4gICAgICAgIHRoaXMuaW5pdElucHV0VG9vbCgpO1xuICAgICAgICB0aGlzLmluaXRGbGFnc1Rvb2wobGFuZ0tleXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU3VibWl0SGFuZGxlcigpO1xuICAgICAgICB0aGlzLmlucHV0VG9vbC5jaGFuZ2VkSW5wdXRWaWV3KCk7XG4gICAgfVxuXG4gICAgaW5pdElucHV0VG9vbCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dFRvb2wgPSBuZXcgSW5wdXRUb29sKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICBpbml0RmxhZ3NUb29sKGxhbmdLZXlzKSB7XG4gICAgICAgIHRoaXMuZmxhZ3NUb29sID0gbmV3IEZsYWdzVG9vbCh0aGlzLmNvbnRhaW5lciwgdGhpcywgbGFuZ0tleXMpO1xuICAgIH1cblxuICAgIGluaXRDb2RlVHJhbnNsYXRvcigpIHtcbiAgICAgICAgdGhpcy5jb2RlVHJhbnNsYXRvciA9IG5ldyBDb2RlVHJhbnNsYXRvcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuXG4gICAgaXNpMThuUmVnaXN0ZXJlZChpMThuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZsYWdzVG9vbC5sYW5ndWFnZXMuaW5kZXhPZihpMThuKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJTdWJtaXRIYW5kbGVyKCkge1xuICAgICAgICBsZXQgZm9ybSA9IHRoaXMuZmluZEZvcm0odGhpcy5jb250YWluZXIpO1xuICAgICAgICBpZiAoZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBmb3JtLnN1Ym1pdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgaTE4biA9IHNlbGYuY29udGFpbmVyLmkxOG4oKTtcbiAgICAgICAgICAgICAgICBpMThuLmVhY2ggPSBzZWxmLmlucHV0VG9vbC5pbnB1dHZhbHVlcy5lYWNoO1xuICAgICAgICAgICAgICAgIGkxOG4uZWFjaCh0aGlzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nXCIrc2VsZi5jb250YWluZXIuYXR0cignaWQnKStcIltcIitrZXkrXCJdJyB2YWx1ZT0nXCIrdmFsdWUrXCInPlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEF0dHIgPSBzZWxmLmNvbnRhaW5lci5hdHRyKFwic3VibWl0T25NaXNzaW5nXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdE9uTWlzc2luZyA9IHN1Ym1pdEF0dHIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB8fCBzdWJtaXRBdHRyID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgIHx8IFN0cmluZyhzdWJtaXRBdHRyKSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgfHwgU3RyaW5nKHN1Ym1pdEF0dHIpID09PSBcIlRydWVcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHNlbGYuY29udGFpbmVyLmNvbXBsZXRlKCkgfHwgc3VibWl0T25NaXNzaW5nO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMgJiYgIXN1Ym1pdE9uTWlzc2luZykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbG9yIHRoZSBWaWV3LlxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0VG9vbC5pbnB1dC5hZGRDbGFzcygnaTE4bi12aWV3LWluY29tcGxldGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSdW4gYW4gb3B0aW9uYWwgRmFpbCBIYW5kbGVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5mYWlsSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZhaWxIYW5kbGVyLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0VG9vbC5pbnB1dC5yZW1vdmVDbGFzcygnaTE4bi12aWV3LWluY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kRm9ybShlbCkge1xuICAgICAgICBpZiAoZWwucGFyZW50KCkgPT09IHVuZGVmaW5lZCB8fCBlbC5wYXJlbnQoKSA9PT0gbnVsbCB8fCBlbC5wYXJlbnQoKS5wcm9wKCdub2RlTmFtZScpID09PSAnQk9EWScpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbC5wYXJlbnQoKS5wcm9wKCdub2RlTmFtZScpID09PSAnRk9STScpIHtcbiAgICAgICAgICAgIHJldHVybiBlbC5wYXJlbnQoKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEZvcm0oZWwucGFyZW50KCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udHJvbGxlcjsiLCIvKipcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cbiAqL1xuaW1wb3J0IE1haW5Db250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRyb2xsZXInO1xuXG5jbGFzcyBpMThuSW5wdXRWaWV3IHtcblxuICBjb25zdHJ1Y3RvcihsYW5nS2V5cyl7XG4gICAgdGhpcy5sYW5nS2V5cyA9IGxhbmdLZXlzO1xuICB9XG5cbiAgaTE4bklucHV0Vmlldyhjb250YWluZXIpIHtcbiAgICByZXR1cm4gbmV3IE1haW5Db250cm9sbGVyKGNvbnRhaW5lciwgdGhpcy5sYW5nS2V5cyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGkxOG5JbnB1dFZpZXc7Il19
