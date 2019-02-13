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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9Db2RlVHJhbnNsYXRvci5qcyIsImpzL0ZsYWdzVG9vbC5qcyIsImpzL0luaXRNZW1iZXIuanMiLCJqcy9JbnB1dFRvb2wuanMiLCJqcy9NYWluQ29udHJvbGxlci5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0dBOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUlNLGM7Ozs7O3FDQUVXO0FBQ1QsaUJBQUssU0FBTCxHQUFpQjtBQUNiLHNCQUFLLE9BRFE7QUFFYixzQkFBSyxPQUZRO0FBR2Isc0JBQUssT0FIUTtBQUliLHNCQUFLLE9BSlE7QUFLYixzQkFBSyxPQUxRO0FBTWIsc0JBQUssT0FOUTtBQU9iLHNCQUFLLE9BUFE7QUFRYixzQkFBSyxPQVJRO0FBU2Isc0JBQUssT0FUUTtBQVViLHNCQUFLLE9BVlE7QUFXYixzQkFBSyxPQVhRO0FBWWIsc0JBQUssT0FaUTtBQWFiLHNCQUFLLE9BYlE7QUFjYixzQkFBSyxPQWRRO0FBZWIsc0JBQUssT0FmUTtBQWdCYixzQkFBSyxPQWhCUTtBQWlCYixzQkFBSyxPQWpCUTtBQWtCYixzQkFBSyxPQWxCUTtBQW1CYixzQkFBSyxPQW5CUTtBQW9CYixzQkFBSyxPQXBCUTtBQXFCYixzQkFBSyxPQXJCUTtBQXNCYixzQkFBSyxPQXRCUTtBQXVCYixzQkFBSyxPQXZCUTtBQXdCYixzQkFBSyxPQXhCUTtBQXlCYixzQkFBSyxPQXpCUTtBQTBCYixzQkFBSyxPQTFCUTtBQTJCYixzQkFBSyxPQTNCUTtBQTRCYixzQkFBSyxPQTVCUTtBQTZCYixzQkFBSyxPQTdCUTtBQThCYixzQkFBSyxPQTlCUTtBQStCYixzQkFBSyxPQS9CUTtBQWdDYixzQkFBSyxPQWhDUTtBQWlDYixzQkFBSyxPQWpDUTtBQWtDYixzQkFBSyxPQWxDUTtBQW1DYixzQkFBSyxPQW5DUTtBQW9DYixzQkFBSyxPQXBDUTtBQXFDYixzQkFBSyxPQXJDUTtBQXNDYixzQkFBSyxPQXRDUTtBQXVDYixzQkFBSyxPQXZDUTtBQXdDYixzQkFBSyxPQXhDUTtBQXlDYixzQkFBSyxPQXpDUTtBQTBDYixzQkFBSyxPQTFDUTtBQTJDYixzQkFBSyxPQTNDUTtBQTRDYixzQkFBSyxPQTVDUTtBQTZDYixzQkFBSyxPQTdDUTtBQThDYixzQkFBSyxPQTlDUTtBQStDYixzQkFBSyxPQS9DUTtBQWdEYixzQkFBSyxPQWhEUTtBQWlEYixzQkFBSyxPQWpEUTtBQWtEYixzQkFBSyxPQWxEUTtBQW1EYixzQkFBSyxPQW5EUTtBQW9EYixzQkFBSyxPQXBEUTtBQXFEYixzQkFBSyxPQXJEUTtBQXNEYixzQkFBSyxPQXREUTtBQXVEYixzQkFBSyxPQXZEUTtBQXdEYixzQkFBSyxPQXhEUTtBQXlEYixzQkFBSyxPQXpEUTtBQTBEYixzQkFBSyxPQTFEUTtBQTJEYixzQkFBSyxPQTNEUTtBQTREYixzQkFBSyxPQTVEUTtBQTZEYixzQkFBSyxPQTdEUTtBQThEYixzQkFBSyxPQTlEUTtBQStEYixzQkFBSyxPQS9EUTtBQWdFYixzQkFBSyxPQWhFUTtBQWlFYixzQkFBSyxPQWpFUTtBQWtFYixzQkFBSyxPQWxFUTtBQW1FYixzQkFBSyxPQW5FUTtBQW9FYixzQkFBSyxPQXBFUTtBQXFFYixzQkFBSyxPQXJFUTtBQXNFYixzQkFBSyxPQXRFUTtBQXVFYixzQkFBSyxPQXZFUTtBQXdFYixzQkFBSyxPQXhFUTtBQXlFYixzQkFBSyxPQXpFUTtBQTBFYixzQkFBSyxPQTFFUTtBQTJFYixzQkFBSyxPQTNFUTtBQTRFYixzQkFBSyxPQTVFUTtBQTZFYixzQkFBSyxPQTdFUTtBQThFYixzQkFBSyxPQTlFUTtBQStFYixzQkFBSyxPQS9FUTtBQWdGYixzQkFBSyxPQWhGUTtBQWlGYixzQkFBSyxPQWpGUTtBQWtGYixzQkFBSyxPQWxGUTtBQW1GYixzQkFBSyxPQW5GUTtBQW9GYixzQkFBSyxPQXBGUTtBQXFGYixzQkFBSyxPQXJGUTtBQXNGYixzQkFBSyxPQXRGUTtBQXVGYixzQkFBSyxPQXZGUTtBQXdGYixzQkFBSyxPQXhGUTtBQXlGYixzQkFBSyxPQXpGUTtBQTBGYixzQkFBSyxPQTFGUTtBQTJGYixzQkFBSyxPQTNGUTtBQTRGYixzQkFBSyxPQTVGUTtBQTZGYixzQkFBSyxPQTdGUTtBQThGYixzQkFBSyxPQTlGUTtBQStGYixzQkFBSyxPQS9GUTtBQWdHYixzQkFBSyxPQWhHUTtBQWlHYixzQkFBSyxPQWpHUTtBQWtHYixzQkFBSyxPQWxHUTtBQW1HYixzQkFBSyxPQW5HUTtBQW9HYixzQkFBSyxPQXBHUTtBQXFHYixzQkFBSyxPQXJHUTtBQXNHYixzQkFBSyxPQXRHUTtBQXVHYixzQkFBSyxPQXZHUTtBQXdHYixzQkFBSyxPQXhHUTtBQXlHYixzQkFBSyxPQXpHUTtBQTBHYixzQkFBSyxPQTFHUTtBQTJHYixzQkFBSyxPQTNHUTtBQTRHYixzQkFBSyxPQTVHUTtBQTZHYixzQkFBSyxPQTdHUTtBQThHYixzQkFBSyxPQTlHUTtBQStHYixzQkFBSyxPQS9HUTtBQWdIYixzQkFBSyxPQWhIUTtBQWlIYixzQkFBSyxPQWpIUTtBQWtIYixzQkFBSyxPQWxIUTtBQW1IYixzQkFBSyxPQW5IUTtBQW9IYixzQkFBSyxPQXBIUTtBQXFIYixzQkFBSyxPQXJIUTtBQXNIYixzQkFBSyxPQXRIUTtBQXVIYixzQkFBSyxPQXZIUTtBQXdIYixzQkFBSyxPQXhIUTtBQXlIYixzQkFBSyxPQXpIUTtBQTBIYixzQkFBSyxPQTFIUTtBQTJIYixzQkFBSyxPQTNIUTtBQTRIYixzQkFBSyxPQTVIUTtBQTZIYixzQkFBSyxPQTdIUTtBQThIYixzQkFBSyxPQTlIUTtBQStIYixzQkFBSyxPQS9IUTtBQWdJYixzQkFBSyxPQWhJUTtBQWlJYixzQkFBSyxPQWpJUTtBQWtJYixzQkFBSyxPQWxJUTtBQW1JYixzQkFBSyxPQW5JUTtBQW9JYixzQkFBSyxPQXBJUTtBQXFJYixzQkFBSyxPQXJJUTtBQXNJYixzQkFBSyxPQXRJUTtBQXVJYixzQkFBSyxPQXZJUTtBQXdJYixzQkFBSyxPQXhJUTtBQXlJYixzQkFBSyxPQXpJUTtBQTBJYixzQkFBSyxPQTFJUTtBQTJJYixzQkFBSyxPQTNJUTtBQTRJYixzQkFBSyxPQTVJUTtBQTZJYixzQkFBSyxPQTdJUTtBQThJYixzQkFBSyxPQTlJUTtBQStJYixzQkFBSyxPQS9JUTtBQWdKYixzQkFBSyxPQWhKUTtBQWlKYixzQkFBSyxPQWpKUTtBQWtKYixzQkFBSyxPQWxKUTtBQW1KYixzQkFBSyxPQW5KUTtBQW9KYixzQkFBSyxPQXBKUTtBQXFKYixzQkFBSyxPQXJKUTtBQXNKYixzQkFBSyxPQXRKUTtBQXVKYixzQkFBSyxPQXZKUTtBQXdKYixzQkFBSyxPQXhKUTtBQXlKYixzQkFBSyxPQXpKUTtBQTBKYixzQkFBSyxPQTFKUTtBQTJKYixzQkFBSyxPQTNKUTtBQTRKYixzQkFBSyxPQTVKUTtBQTZKYixzQkFBSyxPQTdKUTtBQThKYixzQkFBSyxPQTlKUTtBQStKYixzQkFBSyxPQS9KUTtBQWdLYixzQkFBSyxPQWhLUTtBQWlLYixzQkFBSyxPQWpLUTtBQWtLYixzQkFBSyxPQWxLUTtBQW1LYixzQkFBSyxPQW5LUTtBQW9LYixzQkFBSyxPQXBLUTtBQXFLYixzQkFBSyxPQXJLUTtBQXNLYixzQkFBSyxPQXRLUTtBQXVLYixzQkFBSyxPQXZLUTtBQXdLYixzQkFBSyxPQXhLUTtBQXlLYixzQkFBSyxPQXpLUTtBQTBLYixzQkFBSyxPQTFLUTtBQTJLYixzQkFBSyxPQTNLUTtBQTRLYixzQkFBSyxPQTVLUTtBQTZLYixzQkFBSyxPQTdLUTtBQThLYixzQkFBSyxPQTlLUTtBQStLYixzQkFBSyxPQS9LUTtBQWdMYixzQkFBSyxPQWhMUTtBQWlMYixzQkFBSyxPQWpMUTtBQWtMYixzQkFBSyxPQWxMUTtBQW1MYixzQkFBSyxPQW5MUTtBQW9MYixzQkFBSyxPQXBMUTtBQXFMYixzQkFBSyxPQXJMUTtBQXNMYixzQkFBSyxPQXRMUTtBQXVMYixzQkFBSyxPQXZMUTtBQXdMYixzQkFBSyxPQXhMUTtBQXlMYixzQkFBSyxPQXpMUTtBQTBMYixzQkFBSyxPQTFMUTtBQTJMYixzQkFBSyxPQTNMUTtBQTRMYixzQkFBSyxPQTVMUTtBQTZMYixzQkFBSyxPQTdMUTtBQThMYixzQkFBSyxPQTlMUTtBQStMYixzQkFBSyxPQS9MUTtBQWdNYixzQkFBSyxPQWhNUTtBQWlNYixzQkFBSyxPQWpNUTtBQWtNYixzQkFBSyxPQWxNUTtBQW1NYixzQkFBSyxPQW5NUTtBQW9NYixzQkFBSyxPQXBNUTtBQXFNYixzQkFBSyxPQXJNUTtBQXNNYixzQkFBSyxPQXRNUTtBQXVNYixzQkFBSyxPQXZNUTtBQXdNYixzQkFBSyxPQXhNUTtBQXlNYixzQkFBSyxPQXpNUTtBQTBNYixzQkFBSyxPQTFNUTtBQTJNYixzQkFBSyxPQTNNUTtBQTRNYixzQkFBSyxPQTVNUTtBQTZNYixzQkFBSyxPQTdNUTtBQThNYixzQkFBSyxPQTlNUTtBQStNYixzQkFBSyxPQS9NUTtBQWdOYixzQkFBSyxPQWhOUTtBQWlOYixzQkFBSyxPQWpOUTtBQWtOYixzQkFBSyxPQWxOUTtBQW1OYixzQkFBSyxPQW5OUTtBQW9OYixzQkFBSyxPQXBOUTtBQXFOYixzQkFBSyxPQXJOUTtBQXNOYixzQkFBSyxPQXROUTtBQXVOYixzQkFBSyxPQXZOUTtBQXdOYixzQkFBSyxPQXhOUTtBQXlOYixzQkFBSyxPQXpOUTtBQTBOYixzQkFBSyxPQTFOUTtBQTJOYixzQkFBSyxPQTNOUTtBQTROYixzQkFBSyxPQTVOUTtBQTZOYixzQkFBSyxPQTdOUTtBQThOYixzQkFBSyxPQTlOUTtBQStOYixzQkFBSyxPQS9OUTtBQWdPYixzQkFBSyxPQWhPUTtBQWlPYixzQkFBSyxPQWpPUTtBQWtPYixzQkFBSyxPQWxPUTtBQW1PYixzQkFBSyxPQW5PUTtBQW9PYixzQkFBSyxPQXBPUTtBQXFPYixzQkFBSyxPQXJPUTtBQXNPYixzQkFBSyxPQXRPUTtBQXVPYixzQkFBSyxPQXZPUTtBQXdPYixzQkFBSyxPQXhPUTtBQXlPYixzQkFBSyxPQXpPUTtBQTBPYixzQkFBSyxPQTFPUTtBQTJPYixzQkFBSyxPQTNPUTtBQTRPYixzQkFBSyxPQTVPUTtBQTZP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QWlDLE1BQXJDLEVBQTZDO0FBQ3pDLHVCQUFPLEdBQUcsTUFBSCxFQUFQO0FBQ0gsYUFGRCxNQUVNO0FBQ0YsdUJBQU8sS0FBSyxRQUFMLENBQWMsR0FBRyxNQUFILEVBQWQsQ0FBUDtBQUNIO0FBQ0o7Ozs7RUF2RndCLG9COztrQkEwRmQsYzs7Ozs7Ozs7O3FqQkNsR2Y7Ozs7O0FBR0E7Ozs7Ozs7O0lBRU0sYTtBQUVKLHlCQUFZLFFBQVosRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0Q7Ozs7a0NBRWEsUyxFQUFXO0FBQ3ZCLGFBQU8sSUFBSSx3QkFBSixDQUFtQixTQUFuQixFQUE4QixLQUFLLFFBQW5DLENBQVA7QUFDRDs7Ozs7O2tCQUVZLGEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcclxuICogQ3JlYXRlZCBieSBzYnJhbmR0IG9uIDA1LjA3LjE3LlxyXG4gKi9cclxuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSBcIi4vSW5pdE1lbWJlclwiO1xyXG5jbGFzcyBDb2RlVHJhbnNsYXRvciBleHRlbmRzIEluaXRNZW1iZXIge1xyXG5cclxuICAgIGluaXRNZW1iZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pMThuQ29kZXMgPSB7XHJcbiAgICAgICAgICAgIFwiYWZcIjpcImZhX0FGXCIsXHJcbiAgICAgICAgICAgIFwiYWxcIjpcImFsX0FMXCIsXHJcbiAgICAgICAgICAgIFwiZHpcIjpcImFyX0RaXCIsXHJcbiAgICAgICAgICAgIFwiYXNcIjpcImVuX0FTXCIsXHJcbiAgICAgICAgICAgIFwiYWRcIjpcImFkX0FEXCIsXHJcbiAgICAgICAgICAgIFwiYW9cIjpcInB0X0FPXCIsXHJcbiAgICAgICAgICAgIFwiYWlcIjpcImVuX0FJXCIsXHJcbiAgICAgICAgICAgIFwiYXFcIjpcImFxX0FRXCIsXHJcbiAgICAgICAgICAgIFwiYWdcIjpcImFuX0FHXCIsXHJcbiAgICAgICAgICAgIFwiYXJcIjpcImFzX0FSXCIsXHJcbiAgICAgICAgICAgIFwiYW1cIjpcImFtX0FNXCIsXHJcbiAgICAgICAgICAgIFwiYXdcIjpcIm5sX0FXXCIsXHJcbiAgICAgICAgICAgIFwiYXVcIjpcImVuX0FVXCIsXHJcbiAgICAgICAgICAgIFwiYXRcIjpcImRlX0FUXCIsXHJcbiAgICAgICAgICAgIFwiYXpcIjpcImF6X0FaXCIsXHJcbiAgICAgICAgICAgIFwiYnNcIjpcImVuX0JTXCIsXHJcbiAgICAgICAgICAgIFwiYmhcIjpcImFyX0JIXCIsXHJcbiAgICAgICAgICAgIFwiYmRcIjpcImJuX0JEXCIsXHJcbiAgICAgICAgICAgIFwiYmJcIjpcImVuX0JCXCIsXHJcbiAgICAgICAgICAgIFwiYnlcIjpcImJ5X0JZXCIsXHJcbiAgICAgICAgICAgIFwiYmVcIjpcImJsX0JFXCIsXHJcbiAgICAgICAgICAgIFwiYnpcIjpcImVuX0JaXCIsXHJcbiAgICAgICAgICAgIFwiYmpcIjpcImZyX0JKXCIsXHJcbiAgICAgICAgICAgIFwiYm1cIjpcImVuX0JNXCIsXHJcbiAgICAgICAgICAgIFwiYnRcIjpcImJ0X0JUXCIsXHJcbiAgICAgICAgICAgIFwiYm9cIjpcImVzX0JPXCIsXHJcbiAgICAgICAgICAgIFwiYmFcIjpcImhyX0JBXCIsXHJcbiAgICAgICAgICAgIFwiYndcIjpcImVuX0JXXCIsXHJcbiAgICAgICAgICAgIFwiYnZcIjpcImJ2X0JWXCIsXHJcbiAgICAgICAgICAgIFwiYnJcIjpcInB0X0JSXCIsXHJcbiAgICAgICAgICAgIFwiaW9cIjpcImVuX0lPXCIsXHJcbiAgICAgICAgICAgIFwidmdcIjpcImVuX1ZHXCIsXHJcbiAgICAgICAgICAgIFwiYm5cIjpcIm1zX0JOXCIsXHJcbiAgICAgICAgICAgIFwiYmdcIjpcInRyX0JHXCIsXHJcbiAgICAgICAgICAgIFwiYmZcIjpcImZyX0JGXCIsXHJcbiAgICAgICAgICAgIFwiYmlcIjpcImZyX0JJXCIsXHJcbiAgICAgICAgICAgIFwia2hcIjpcImtoX0tIXCIsXHJcbiAgICAgICAgICAgIFwiY21cIjpcImVuX0NNXCIsXHJcbiAgICAgICAgICAgIFwiY2FcIjpcImVuX0NBXCIsXHJcbiAgICAgICAgICAgIFwiY3ZcIjpcImN0X0NWXCIsXHJcbiAgICAgICAgICAgIFwiYnFcIjpcImJxX0JRXCIsXHJcbiAgICAgICAgICAgIFwia3lcIjpcImVuX0tZXCIsXHJcbiAgICAgICAgICAgIFwiY2ZcIjpcImZyX0NGXCIsXHJcbiAgICAgICAgICAgIFwidGRcIjpcImZyX1REXCIsXHJcbiAgICAgICAgICAgIFwiY2xcIjpcImVzX0NMXCIsXHJcbiAgICAgICAgICAgIFwiY25cIjpcInpoX0NOXCIsXHJcbiAgICAgICAgICAgIFwiY3hcIjpcImN4X0NYXCIsXHJcbiAgICAgICAgICAgIFwiY2NcIjpcIm1zX0NDXCIsXHJcbiAgICAgICAgICAgIFwiY29cIjpcImVzX0NPXCIsXHJcbiAgICAgICAgICAgIFwia21cIjpcImZyX0tNXCIsXHJcbiAgICAgICAgICAgIFwiY2dcIjpcImZyX0NHXCIsXHJcbiAgICAgICAgICAgIFwiY2RcIjpcImZyX0NEXCIsXHJcbiAgICAgICAgICAgIFwiY2tcIjpcImVuX0NLXCIsXHJcbiAgICAgICAgICAgIFwiY3JcIjpcImVzX0NSXCIsXHJcbiAgICAgICAgICAgIFwiaHJcIjpcImhyX0hSXCIsXHJcbiAgICAgICAgICAgIFwiY3VcIjpcImVzX0NVXCIsXHJcbiAgICAgICAgICAgIFwiY3dcIjpcImN3X0NXXCIsXHJcbiAgICAgICAgICAgIFwiY3lcIjpcImVsX0NZXCIsXHJcbiAgICAgICAgICAgIFwiY3pcIjpcImN6X0NaXCIsXHJcbiAgICAgICAgICAgIFwiY2lcIjpcImZyX0NJXCIsXHJcbiAgICAgICAgICAgIFwiZGtcIjpcImRhX0RLXCIsXHJcbiAgICAgICAgICAgIFwiZGpcIjpcImZyX0RKXCIsXHJcbiAgICAgICAgICAgIFwiZG1cIjpcImVuX0RNXCIsXHJcbiAgICAgICAgICAgIFwiZG9cIjpcImVzX0RPXCIsXHJcbiAgICAgICAgICAgIFwiZWNcIjpcImVzX0VDXCIsXHJcbiAgICAgICAgICAgIFwiZWdcIjpcImFyX0VHXCIsXHJcbiAgICAgICAgICAgIFwic3ZcIjpcImVzX1NWXCIsXHJcbiAgICAgICAgICAgIFwiZ3FcIjpcImVzX0dRXCIsXHJcbiAgICAgICAgICAgIFwiZXJcIjpcImFhX0VSXCIsXHJcbiAgICAgICAgICAgIFwiZWVcIjpcImVlX0VFXCIsXHJcbiAgICAgICAgICAgIFwiZXRcIjpcImVuX0VUXCIsXHJcbiAgICAgICAgICAgIFwiZmtcIjpcImVuX0ZLXCIsXHJcbiAgICAgICAgICAgIFwiZm9cIjpcImRhX0ZPXCIsXHJcbiAgICAgICAgICAgIFwiZmpcIjpcImVuX0ZKXCIsXHJcbiAgICAgICAgICAgIFwiZmlcIjpcImZvX0ZJXCIsXHJcbiAgICAgICAgICAgIFwiZnJcIjpcImZyX0ZSXCIsXHJcbiAgICAgICAgICAgIFwiZ2ZcIjpcImZyX0dGXCIsXHJcbiAgICAgICAgICAgIFwicGZcIjpcImZyX1BGXCIsXHJcbiAgICAgICAgICAgIFwidGZcIjpcInRmX1RGXCIsXHJcbiAgICAgICAgICAgIFwiZ2FcIjpcImZyX0dBXCIsXHJcbiAgICAgICAgICAgIFwiZ21cIjpcImVuX0dNXCIsXHJcbiAgICAgICAgICAgIFwiZ2VcIjpcImdlX0dFXCIsXHJcbiAgICAgICAgICAgIFwiZGVcIjpcImRlX0RFXCIsXHJcbiAgICAgICAgICAgIFwiZ2hcIjpcImVuX0dIXCIsXHJcbiAgICAgICAgICAgIFwiZ2lcIjpcImVuX0dJXCIsXHJcbiAgICAgICAgICAgIFwiZ3JcIjpcImVsX0dSXCIsXHJcbiAgICAgICAgICAgIFwiZ2xcIjpcImRhX0dMXCIsXHJcbiAgICAgICAgICAgIFwiZ2RcIjpcImVuX0dEXCIsXHJcbiAgICAgICAgICAgIFwiZ3BcIjpcImZyX0dQXCIsXHJcbiAgICAgICAgICAgIFwiZ3VcIjpcImVtX0dVXCIsXHJcbiAgICAgICAgICAgIFwiZ3RcIjpcImVzX0dUXCIsXHJcbiAgICAgICAgICAgIFwiZ2dcIjpcImdnX0dHXCIsXHJcbiAgICAgICAgICAgIFwiZ25cIjpcImZyX0dOXCIsXHJcbiAgICAgICAgICAgIFwiZ3dcIjpcInB0X0dXXCIsXHJcbiAgICAgICAgICAgIFwiZ3lcIjpcImVuX0dZXCIsXHJcbiAgICAgICAgICAgIFwiaHRcIjpcImZyX0hUXCIsXHJcbiAgICAgICAgICAgIFwiaG1cIjpcImhtX0hNXCIsXHJcbiAgICAgICAgICAgIFwiaG5cIjpcImVzX0hOXCIsXHJcbiAgICAgICAgICAgIFwiaGtcIjpcInpoX0hLXCIsXHJcbiAgICAgICAgICAgIFwiaHVcIjpcImh1X0hVXCIsXHJcbiAgICAgICAgICAgIFwiaXNcIjpcImlzX0lTXCIsXHJcbiAgICAgICAgICAgIFwiaW5cIjpcImVuX0lOXCIsXHJcbiAgICAgICAgICAgIFwiaWRcIjpcImlkX0lEXCIsXHJcbiAgICAgICAgICAgIFwiaXJcIjpcImZhX0lSXCIsXHJcbiAgICAgICAgICAgIFwiaXFcIjpcImFyX0lRXCIsXHJcbiAgICAgICAgICAgIFwiaWVcIjpcImVuX0lFXCIsXHJcbiAgICAgICAgICAgIFwiaW1cIjpcImltX0lNXCIsXHJcbiAgICAgICAgICAgIFwiaWxcIjpcImlsX0lMXCIsXHJcbiAgICAgICAgICAgIFwiaXRcIjpcIml0X0lUXCIsXHJcbiAgICAgICAgICAgIFwiam1cIjpcImptX0pNXCIsXHJcbiAgICAgICAgICAgIFwianBcIjpcImpwX0pQXCIsXHJcbiAgICAgICAgICAgIFwiamVcIjpcImplX0pFXCIsXHJcbiAgICAgICAgICAgIFwiam9cIjpcImFyX0pPXCIsXHJcbiAgICAgICAgICAgIFwia3pcIjpcImt6X0taXCIsXHJcbiAgICAgICAgICAgIFwia2VcIjpcImtlX0tFXCIsXHJcbiAgICAgICAgICAgIFwia2lcIjpcImtpX0tJXCIsXHJcbiAgICAgICAgICAgIFwia3dcIjpcImt3X0tXXCIsXHJcbiAgICAgICAgICAgIFwia2dcIjpcImtnX0tHXCIsXHJcbiAgICAgICAgICAgIFwibGFcIjpcImxhX0xBXCIsXHJcbiAgICAgICAgICAgIFwibHZcIjpcImx2X0xWXCIsXHJcbiAgICAgICAgICAgIFwibGJcIjpcImxiX0xCXCIsXHJcbiAgICAgICAgICAgIFwibHNcIjpcImxzX0xTXCIsXHJcbiAgICAgICAgICAgIFwibHJcIjpcImxyX0xSXCIsXHJcbiAgICAgICAgICAgIFwibHlcIjpcImx5X0xZXCIsXHJcbiAgICAgICAgICAgIFwibGlcIjpcImxpX0xJXCIsXHJcbiAgICAgICAgICAgIFwibHRcIjpcImx0X0xUXCIsXHJcbiAgICAgICAgICAgIFwibHVcIjpcImx1X0xVXCIsXHJcbiAgICAgICAgICAgIFwibW9cIjpcIm1vX01PXCIsXHJcbiAgICAgICAgICAgIFwibWtcIjpcIm1rX01LXCIsXHJcbiAgICAgICAgICAgIFwibWdcIjpcIm1nX01HXCIsXHJcbiAgICAgICAgICAgIFwibXdcIjpcIm13X01XXCIsXHJcbiAgICAgICAgICAgIFwibXlcIjpcIm15X01ZXCIsXHJcbiAgICAgICAgICAgIFwibXZcIjpcIm12X01WXCIsXHJcbiAgICAgICAgICAgIFwibWxcIjpcIm1sX01MXCIsXHJcbiAgICAgICAgICAgIFwibXRcIjpcIm10X01UXCIsXHJcbiAgICAgICAgICAgIFwibWhcIjpcIm1oX01IXCIsXHJcbiAgICAgICAgICAgIFwibXFcIjpcIm1xX01RXCIsXHJcbiAgICAgICAgICAgIFwibXJcIjpcIm1yX01SXCIsXHJcbiAgICAgICAgICAgIFwibXVcIjpcIm11X01VXCIsXHJcbiAgICAgICAgICAgIFwieXRcIjpcInl0X1lUXCIsXHJcbiAgICAgICAgICAgIFwibXhcIjpcIm14X01YXCIsXHJcbiAgICAgICAgICAgIFwiZm1cIjpcImZtX0ZNXCIsXHJcbiAgICAgICAgICAgIFwibWRcIjpcIm1kX01EXCIsXHJcbiAgICAgICAgICAgIFwibWNcIjpcIm1jX01DXCIsXHJcbiAgICAgICAgICAgIFwibW5cIjpcIm1uX01OXCIsXHJcbiAgICAgICAgICAgIFwibWVcIjpcIm1lX01FXCIsXHJcbiAgICAgICAgICAgIFwibXNcIjpcIm1zX01TXCIsXHJcbiAgICAgICAgICAgIFwibWFcIjpcIm1hX01BXCIsXHJcbiAgICAgICAgICAgIFwibXpcIjpcIm16X01aXCIsXHJcbiAgICAgICAgICAgIFwibW1cIjpcIm1tX01NXCIsXHJcbiAgICAgICAgICAgIFwibmFcIjpcIm5hX05BXCIsXHJcbiAgICAgICAgICAgIFwibnJcIjpcIm5yX05SXCIsXHJcbiAgICAgICAgICAgIFwibnBcIjpcIm5wX05QXCIsXHJcbiAgICAgICAgICAgIFwibmxcIjpcIm5sX05MXCIsXHJcbiAgICAgICAgICAgIFwibmNcIjpcIm5jX05DXCIsXHJcbiAgICAgICAgICAgIFwibnpcIjpcIm56X05aXCIsXHJcbiAgICAgICAgICAgIFwibmlcIjpcIm5pX05JXCIsXHJcbiAgICAgICAgICAgIFwibmVcIjpcIm5lX05FXCIsXHJcbiAgICAgICAgICAgIFwibmdcIjpcIm5nX05HXCIsXHJcbiAgICAgICAgICAgIFwibnVcIjpcIm51X05VXCIsXHJcbiAgICAgICAgICAgIFwibmZcIjpcIm5mX05GXCIsXHJcbiAgICAgICAgICAgIFwia3BcIjpcImtwX0tQXCIsXHJcbiAgICAgICAgICAgIFwibXBcIjpcIm1wX01QXCIsXHJcbiAgICAgICAgICAgIFwibm9cIjpcIm5vX05PXCIsXHJcbiAgICAgICAgICAgIFwib21cIjpcIm9tX09NXCIsXHJcbiAgICAgICAgICAgIFwicGtcIjpcInBrX1BLXCIsXHJcbiAgICAgICAgICAgIFwicHdcIjpcInB3X1BXXCIsXHJcbiAgICAgICAgICAgIFwicHNcIjpcImFyX1BTXCIsXHJcbiAgICAgICAgICAgIFwicGFcIjpcImVzX1BBXCIsXHJcbiAgICAgICAgICAgIFwicGdcIjpcImVuX1BHXCIsXHJcbiAgICAgICAgICAgIFwicHlcIjpcImVzX1BZXCIsXHJcbiAgICAgICAgICAgIFwicGVcIjpcImVzX1BFXCIsXHJcbiAgICAgICAgICAgIFwicGhcIjpcImVuX1BIXCIsXHJcbiAgICAgICAgICAgIFwicG5cIjpcInBuX1BOXCIsXHJcbiAgICAgICAgICAgIFwicGxcIjpcInBsX1BMXCIsXHJcbiAgICAgICAgICAgIFwicHRcIjpcInB0X1BUXCIsXHJcbiAgICAgICAgICAgIFwicHJcIjpcImVuX1BSXCIsXHJcbiAgICAgICAgICAgIFwicWFcIjpcImFyX1FBXCIsXHJcbiAgICAgICAgICAgIFwicm9cIjpcInJvX1JPXCIsXHJcbiAgICAgICAgICAgIFwicnVcIjpcInJ1X1JVXCIsXHJcbiAgICAgICAgICAgIFwicndcIjpcInJ3X1JXXCIsXHJcbiAgICAgICAgICAgIFwicmVcIjpcImZlX1JFXCIsXHJcbiAgICAgICAgICAgIFwid3NcIjpcIndzX1dTXCIsXHJcbiAgICAgICAgICAgIFwic21cIjpcIml0X1NNXCIsXHJcbiAgICAgICAgICAgIFwic2FcIjpcImFyX1NBXCIsXHJcbiAgICAgICAgICAgIFwic25cIjpcImZyX1NOXCIsXHJcbiAgICAgICAgICAgIFwicnNcIjpcInJzX1JTXCIsXHJcbiAgICAgICAgICAgIFwic2NcIjpcImVuX1NDXCIsXHJcbiAgICAgICAgICAgIFwic2xcIjpcImVuX1NMXCIsXHJcbiAgICAgICAgICAgIFwic2dcIjpcInNnX1NHXCIsXHJcbiAgICAgICAgICAgIFwic3hcIjpcInN4X1NYXCIsXHJcbiAgICAgICAgICAgIFwic2tcIjpcInNrX1NLXCIsXHJcbiAgICAgICAgICAgIFwic2lcIjpcInNpX1NJXCIsXHJcbiAgICAgICAgICAgIFwic2JcIjpcImVuX1NCXCIsXHJcbiAgICAgICAgICAgIFwic29cIjpcInNvX1NPXCIsXHJcbiAgICAgICAgICAgIFwiemFcIjpcInphX1pBXCIsXHJcbiAgICAgICAgICAgIFwiZ3NcIjpcImdzX0dTXCIsXHJcbiAgICAgICAgICAgIFwia3JcIjpcImtvX0tSXCIsXHJcbiAgICAgICAgICAgIFwic3NcIjpcInNzX1NTXCIsXHJcbiAgICAgICAgICAgIFwiZXNcIjpcImVzX0VTXCIsXHJcbiAgICAgICAgICAgIFwibGtcIjpcImxrX0xLXCIsXHJcbiAgICAgICAgICAgIFwiYmxcIjpcImJsX0JMXCIsXHJcbiAgICAgICAgICAgIFwic2hcIjpcImVuX1NIXCIsXHJcbiAgICAgICAgICAgIFwia25cIjpcImVuX0tOXCIsXHJcbiAgICAgICAgICAgIFwibGNcIjpcImVuX0xDXCIsXHJcbiAgICAgICAgICAgIFwibWZcIjpcIm1mX01GXCIsXHJcbiAgICAgICAgICAgIFwicG1cIjpcImZyX1BNXCIsXHJcbiAgICAgICAgICAgIFwidmNcIjpcImVuX1ZDXCIsXHJcbiAgICAgICAgICAgIFwic2RcIjpcImFyX1NEXCIsXHJcbiAgICAgICAgICAgIFwic3JcIjpcIm5sX1NSXCIsXHJcbiAgICAgICAgICAgIFwic2pcIjpcInNqX1NKXCIsXHJcbiAgICAgICAgICAgIFwic3pcIjpcImVuX1NaXCIsXHJcbiAgICAgICAgICAgIFwic2VcIjpcInN2X1NFXCIsXHJcbiAgICAgICAgICAgIFwiY2hcIjpcImRlX0NIXCIsXHJcbiAgICAgICAgICAgIFwic3lcIjpcImFyX1NZXCIsXHJcbiAgICAgICAgICAgIFwic3RcIjpcInB0X1NUXCIsXHJcbiAgICAgICAgICAgIFwidHdcIjpcInpoX1RXXCIsXHJcbiAgICAgICAgICAgIFwidGpcIjpcInRqX1RKXCIsXHJcbiAgICAgICAgICAgIFwidHpcIjpcInN3X1RaXCIsXHJcbiAgICAgICAgICAgIFwidGhcIjpcInRoX1RIXCIsXHJcbiAgICAgICAgICAgIFwidGxcIjpcInRsX1RMXCIsXHJcbiAgICAgICAgICAgIFwidGdcIjpcInRyX1RHXCIsXHJcbiAgICAgICAgICAgIFwidGtcIjpcInRrX1RLXCIsXHJcbiAgICAgICAgICAgIFwidG9cIjpcInRvX1RPXCIsXHJcbiAgICAgICAgICAgIFwidHRcIjpcImVuX1RUXCIsXHJcbiAgICAgICAgICAgIFwidG5cIjpcImFyX1ROXCIsXHJcbiAgICAgICAgICAgIFwidHJcIjpcInRyX1RSXCIsXHJcbiAgICAgICAgICAgIFwidG1cIjpcInRtX1RNXCIsXHJcbiAgICAgICAgICAgIFwidGNcIjpcImVuX1RDXCIsXHJcbiAgICAgICAgICAgIFwidHZcIjpcInR2X1RWXCIsXHJcbiAgICAgICAgICAgIFwidW1cIjpcImVuX1VNXCIsXHJcbiAgICAgICAgICAgIFwidmlcIjpcImVuX1ZJXCIsXHJcbiAgICAgICAgICAgIFwiZ2JcIjpcImVuX0dCXCIsXHJcbiAgICAgICAgICAgIFwidXNcIjpcImVuX1VTXCIsXHJcbiAgICAgICAgICAgIFwidWdcIjpcImVuX1VHXCIsXHJcbiAgICAgICAgICAgIFwidWFcIjpcInJ1X1VBXCIsXHJcbiAgICAgICAgICAgIFwiYWVcIjpcImFyX0FFXCIsXHJcbiAgICAgICAgICAgIFwidXlcIjpcInJkX1VZXCIsXHJcbiAgICAgICAgICAgIFwidXpcIjpcInV6X1VaXCIsXHJcbiAgICAgICAgICAgIFwidnVcIjpcInZ1X1ZVXCIsXHJcbiAgICAgICAgICAgIFwidmFcIjpcInZhX1ZBXCIsXHJcbiAgICAgICAgICAgIFwidmVcIjpcImVzX1ZFXCIsXHJcbiAgICAgICAgICAgIFwidm5cIjpcInZuX1ZOXCIsXHJcbiAgICAgICAgICAgIFwid2ZcIjpcIndmX1dGXCIsXHJcbiAgICAgICAgICAgIFwiZWhcIjpcImVoX0VIXCIsXHJcbiAgICAgICAgICAgIFwieWVcIjpcImFyX1lFXCIsXHJcbiAgICAgICAgICAgIFwiem1cIjpcImVuX1pNXCIsXHJcbiAgICAgICAgICAgIFwiendcIjpcImVtX1pXXCIsXHJcbiAgICAgICAgICAgIFwiYXhcIjpcInN2X0FYXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaTE4bkNvZGVzLmZpbmRLZXlCeVZhbHVlID0gZnVuY3Rpb24oIHZhbHVlICkge1xyXG4gICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gdGhpcyApIHtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRoaXNbIHByb3AgXSA9PT0gdmFsdWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5pMThuQ29kZXMuZ2V0QWxsUHJvcHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IHByb3AgaW4gdGhpcyApIHtcclxuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmhhc093blByb3BlcnR5KCBwcm9wICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2godGhpc1twcm9wXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0ZVNob3J0VG9Jc28oc2hvcnQpIHtcclxuICAgICAgICBsZXQgcmVzID0gIHRoaXMuaTE4bkNvZGVzW3Nob3J0XTtcclxuICAgICAgICBpZiAocmVzICE9PSBudWxsICYmIHJlcyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyhcIlNlbGVjdGVkIEVsZW1lbnQgU2VlbXMgbm90IHRvIGJlIHZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGVJc29Bc3NvY0FycmF5VG9TaG9ydChpMThuQXJyYXkpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaTE4bkFycmF5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJJbnB1dCBQYXJhbWV0ZXIgbXVzdCBiZSBvZiBUeXBlIEFycmF5XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdEFycmF5ID0gW107XHJcbiAgICAgICAgaTE4bkFycmF5LmVhY2godGhpcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0QXJyYXlbdGhpcy50cmFuc2xhdGVTaG9ydFRvSXNvKGtleSldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRBcnJheTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdHJhbnNsYXRlSXNvQXJyYXlUb1Nob3J0KGkxOG5BcnJheSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpMThuQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIklucHV0IFBhcmFtZXRlciBtdXN0IGJlIG9mIFR5cGUgQXJyYXlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGkxOG5BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHRBcnJheS5wdXNoKHRoaXMudHJhbnNsYXRlU2hvcnRUb0lzbyhpMThuQXJyYXlbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGVJc29Ub1Nob3J0KGkxOG4pIHtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5pMThuQ29kZXMuZmluZEtleUJ5VmFsdWUoaTE4bik7XHJcbiAgICAgICAgaWYgKHJlcyAhPT0gbnVsbCAmJiByZXMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3coXCJTZWxlY3RlZCBMYW5ndWFnZSBpcyBub3QgYXZhaWxhYmxlICdcIiAraTE4bisgXCInXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVRyYW5zbGF0b3I7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cclxuICovXHJcbmltcG9ydCBJbml0TWVtYmVyIGZyb20gJy4vSW5pdE1lbWJlcic7XHJcbmNsYXNzIEZsYWdzVG9vbCBleHRlbmRzIEluaXRNZW1iZXIge1xyXG5cclxuICAgIGluaXRNZW1iZXIoKSB7XHJcbiAgICAgICAgdGhpcy5GQURFSU5fU1BFRUQgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5GQURFSU5fREVMQVkgPSAxNTtcclxuICAgICAgICB0aGlzLm1haW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZsYWcgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlucHV0U3R5bGVDbGFzc2VzID0gXCJcIjtcclxuICAgICAgICB0aGlzLnBpY2tlckNsYXNzID0gXCJcIjtcclxuICAgICAgICB0aGlzLmhvdmVyQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyTGVhdmVBbmltYXRpb25UaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZsYWdnZXJDYW5jZWxBbmltYXRpb25UaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYWNlSG9sZGVyVHlwZSA9IFwic3RyaW5nXCI7XHJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWwsIGxvYWRlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbDtcclxuICAgICAgICB0aGlzLm1haW4gPSBsb2FkZXI7XHJcbiAgICAgICAgLy9sZXQgc3RyaW5nID0gU3RyaW5nKGVsLmF0dHIoJ2xhbmd1YWdlcycpLnJlcGxhY2UoLycvZywgXCJcXFwiXCIpKTtcclxuICAgICAgICAvL2xldCBsbmcgPSAkLnBhcnNlSlNPTihzdHJpbmcpO1xyXG4gICAgICAgIGxldCBsbmcgPSBsb2FkZXIubGFuZ0tleXM7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TG5nID0gbG9hZGVyLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZUlzb1RvU2hvcnQobG5nW2ldKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YoY3VycmVudExuZykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcy5wdXNoKGN1cnJlbnRMbmcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTGFuZ3VhZ2VzIGNhbiBub3QgYmUgYWRkZWQgdHdpY2UuIFNlY29uZCAnXCIgKyBsbmdbaV0gKyBcIicgd2FzIGlnbm9yZWQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWwuYXR0cignYW5pbWF0ZScpICE9PSB1bmRlZmluZWQgJiYgKGVsLmF0dHIoJ2FuaW1hdGUnKSA9PT0gXCJmYWxzZVwiIHx8IEJvb2xlYW4oZWwuYXR0cignYW5pbWF0ZScpKSA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRkFERUlOX1NQRUVEID0gMDtcclxuICAgICAgICAgICAgdGhpcy5GQURFSU5fREVMQVkgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMubG9hZFN0eWxlcygpO1xyXG4gICAgICAgIHRoaXMucGFyc2VQbGFjZWhvbGRlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEZsYWdDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VQbGFjZWhvbGRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cigncGxhY2Vob2xkZXInKSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0cmluZyA9IFN0cmluZyh0aGlzLmNvbnRhaW5lci5hdHRyKCdwbGFjZWhvbGRlcicpLnJlcGxhY2UoLycvZywgXCJcXFwiXCIpKTtcclxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBcIlwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gJC5wYXJzZUpTT04oc3RyaW5nKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGxhY2Vob2xkZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VIb2xkZXJUeXBlID0gXCJhcnJheVwiO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gW107XHJcbiAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlci5sZW5ndGggPCB0aGlzLmxhbmd1YWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRocm93KFwiSWYgbXVsdGlwbGUgUGxhY2Vob2xkZXJzIGFyZSBwcm92aWRlZCwgcGxlYXNlIHByb3ZpZGUgYSBwbGFjZWhvbGRlciBmb3IgZXZlcnkgbGFuZ3VhZ2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2Vob2xkZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJbdGhpcy5sYW5ndWFnZXNbaV1dID0gcGxhY2Vob2xkZXJbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlSG9sZGVyVHlwZSA9IFwic3RyaW5nXCI7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN0eWxlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cihcImV4cGFuZGVyLWNsYXNzXCIpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcyAgPSB0aGlzLmNvbnRhaW5lci5hdHRyKFwiZXhwYW5kZXItY2xhc3NcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXIuYXR0cihcInBpY2tlci1jbGFzc1wiKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGlja2VyQ2xhc3MgPSB0aGlzLmNvbnRhaW5lci5hdHRyKFwicGlja2VyLWNsYXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0RmxhZ0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyQ2xhc3MgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKFwiPGRpdiBjbGFzcz0nXCIrdGhpcy5waWNrZXJDbGFzcytcIic+PC9kaXY+XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J2RlZmF1bHQtcGlja2VyJz48L2Rpdj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmxhZ2dlciA9ICQodGhpcy5jb250YWluZXIuY2hpbGRyZW4oKVt0aGlzLmNvbnRhaW5lci5jaGlsZHJlbigpLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAvL3RoaXMuZmxhZ2dlci5jc3Moe1wibGVmdFwiIDogdGhpcy5tYWluLmlucHV0VG9vbC5pbnB1dC5vdXRlcldpZHRoKCkgLSAyNCwgJ21hcmdpbi10b3AnOiAtICh0aGlzLm1haW4uaW5wdXRUb29sLmlucHV0Lm91dGVySGVpZ2h0KCkgKyAyNCkgLyAyfSk7XHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyLmh0bWwoJzxzcGFuIHRpdGxlPVwiTGFuZ3VhZ2U6ICcrIHRoaXMubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKHRoaXMubGFuZ3VhZ2VzWzBdKSArJ1wiIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi0nKyB0aGlzLmxhbmd1YWdlc1swXSArJ1wiPjwvc3Bhbj4nKTtcclxuICAgICAgICB0aGlzLmxvYWRGbGFncygpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmZsYWdnZXIuaG92ZXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKHNlbGYubGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5mbGFnZ2VyTGVhdmVBbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuZmxhZ2dlckNhbmNlbEFuaW1hdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuaXNBbmltYXRpbmcpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHtcImN1cnNvclwiOiBcInBvaW50ZXJcIn0pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ob3ZlckFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmlzQW5pbWF0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi5ob3ZlckFuaW1hdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmxhZ2dlci5tb3VzZWxlYXZlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5mbGFnZ2VyQ2FuY2VsQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5mYWRlT3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVJbigpIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLnNob3coKTtcclxuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLmZhZGVJbig1MCk7XHJcbiAgICAgICAgbGV0IG91dGVydiA9IHRoaXMuZmxhZ2dlckNob29zZXIuY2hpbGRyZW4oKS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5kZWxheSh2ICogc2VsZi5GQURFSU5fREVMQVkpLmZhZGVJbihzZWxmLkZBREVJTl9TUEVFRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5kZWxheShvdXRlcnYgKiBzZWxmLkZBREVJTl9ERUxBWSkucXVldWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZhZGVPdXQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgb3V0ZXJ2ID0gdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jaGlsZHJlbigpLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmRlbGF5KHYgKiBzZWxmLkZBREVJTl9ERUxBWSAqIDMpLmZhZGVPdXQoc2VsZi5GQURFSU5fU1BFRUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmZsYWdnZXJDaG9vc2VyLmZhZGVPdXQoJ2Zhc3QnKTtcclxuICAgICAgICAgICAgc2VsZi5mbGFnZ2VyQ2hvb3Nlci5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICB9LCAob3V0ZXJ2IC0gMikgKiBzZWxmLkZBREVJTl9ERUxBWSAqIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDdXJyZW50KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmZsYWdnZXIuaHRtbChpdGVtLmh0bWwoKSk7XHJcbiAgICAgICAgdGhpcy5tYWluLmlucHV0VG9vbC5jaGFuZ2VkSW5wdXRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZsYWdzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0U3R5bGVDbGFzc2VzICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChcIjxkaXYgY2xhc3M9J1wiKyB0aGlzLmlucHV0U3R5bGVDbGFzc2VzICsgXCInPjwvZGl2PlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoXCI8ZGl2PjwvZGl2PlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmxhZ2dlckNob29zZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZsYWdnZXJDaG9vc2VyID0gJCh0aGlzLmNvbnRhaW5lci5jaGlsZHJlbigpW3RoaXMuY29udGFpbmVyLmNoaWxkcmVuKCkubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuY3NzKHtcInBvc2l0aW9uXCIgOiBcImFic29sdXRlXCIsXCJtYXJnaW4tdG9wXCI6IFwiLTJweFwiLCBcImRpc3BsYXlcIjogXCJub25lXCIsIFwicGFkZGluZ1wiOiBcIjJweFwiLCBcImJhY2tncm91bmQtY29sb3JcIiA6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIFwiYm9yZGVyXCIgOiBcIjFweCBzb2xpZCBcIisgdGhpcy5tYWluLmlucHV0VG9vbC5pbnB1dC5jc3MoJ2JvcmRlci1jb2xvcicpLCBcInotaW5kZXhcIjogMn0pO1xyXG4gICAgICAgIGxldCBpdGVtc1BlclJvdyA9IE1hdGguZmxvb3IoKHRoaXMuZmxhZ2dlckNob29zZXIuaW5uZXJXaWR0aCgpIC0gdGhpcy5mbGFnZ2VyQ2hvb3Nlci5jc3MoXCJwYWRkaW5nXCIpICogMikgLyAodGhpcy5mbGFnZ2VyLm91dGVyV2lkdGgoKSArIDIpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmN1cnJlbnRGbGFnKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuYXBwZW5kKCc8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHQ7IGRpc3BsYXk6IG5vbmU7IHBhZGRpbmc6MCAwIDJweCAycHg7XCIgPjxzcGFuIHRpdGxlPVwiTGFuZ3VhZ2U6ICcrIHRoaXMubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKHRoaXMubGFuZ3VhZ2VzW2ldKSArJ1wiIGNsYXNzPVwiZmxhZy1pY29uIGZsYWctaWNvbi0nKyB0aGlzLmxhbmd1YWdlc1tpXSArJ1wiPjwvc3Bhbj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgQ3VycmVudCBJdGVtXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gJCggdGhpcy5mbGFnZ2VyQ2hvb3NlciAuY2hpbGRyZW4oKVsgdGhpcy5mbGFnZ2VyQ2hvb3NlciAuY2hpbGRyZW4oKS5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuaG92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7XCJjdXJzb3JcIiA6IFwicG9pbnRlclwifSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyZW50LmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudEZsYWcgPSBpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZXBsYWNlQ3VycmVudCgkKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmFkZU91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkRmxhZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpICUgaXRlbXNQZXJSb3cgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIuYXBwZW5kKFwiPGRpdiBzdHlsZT0nY2xlYXI6IGJvdGg7Jz48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5hcHBlbmQoXCI8ZGl2IHN0eWxlPSdjbGVhcjogYm90aDsnPjwvZGl2PlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5mbGFnZ2VyQ2hvb3Nlci5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLmZsYWdnZXJMZWF2ZUFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZmFkZU91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDI1MCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmxhZ2dlckNob29zZXIub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLmZsYWdnZXJDYW5jZWxBbmltYXRpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuZmxhZ2dlckxlYXZlQW5pbWF0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYWdzVG9vbDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBzYnJhbmR0IG9uIDA1LjA3LjE3LlxyXG4gKi9cclxuY2xhc3MgSW5pdE1lbWJlciB7XHJcbiAgICBpbml0TWVtYmVyKCkge31cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdE1lbWJlcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbml0TWVtYmVyOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHNicmFuZHQgb24gMDUuMDcuMTcuXHJcbiAqL1xyXG5pbXBvcnQgSW5pdE1lbWJlciBmcm9tIFwiLi9Jbml0TWVtYmVyXCI7XHJcbmNsYXNzIElucHV0VG9vbCBleHRlbmRzIEluaXRNZW1iZXIge1xyXG5cclxuICAgIGluaXRNZW1iZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWFpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdHlsZUNsYXNzZXMgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuaW5wdXR2YWx1ZXMuc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IDAsIGtleTtcclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwiZWFjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcImhhc0tleVwiKSBzaXplKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcy5lYWNoID0gZnVuY3Rpb24gKGN0eCwgY2FsbGFibGUpIHtcclxuICAgICAgICAgICAgbGV0IGtleTtcclxuICAgICAgICAgICAgZm9yIChrZXkgaW4gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICYmIGtleSAhPT0gXCJzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAmJiBrZXkgIT09IFwiZWFjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgJiYga2V5ICE9PSBcImhhc0tleVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGFibGUuYXBwbHkoY3R4LCBba2V5LCB0aGlzW2tleV1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnB1dHZhbHVlcy5oYXNLZXkgPSBmdW5jdGlvbiggdmFsdWUgKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHRoaXMgKSB7XHJcbiAgICAgICAgICAgICAgICBpZigga2V5ID09PSB2YWx1ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsLCBsb2FkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWw7XHJcblxyXG4gICAgICAgIGlmIChlbC5hdHRyKFwiaW5wdXQtY2xhc3NcIikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0U3R5bGVDbGFzc2VzICA9IGVsLmF0dHIoXCJpbnB1dC1jbGFzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gZWwuYXR0cihcInBsYWNlaG9sZGVyXCIpICE9PSB1bmRlZmluZWQgPyBcInBsYWNlaG9sZGVyPScnXCIgOiBcIlwiO1xyXG4gICAgICAgIGxldCByb3dzID0gcGFyc2VJbnQoZWwuYXR0cigncm93cycpKTtcclxuICAgICAgICBpZiAocm93cyA9PT0gMSB8fCAhcm93cykge1xyXG4gICAgICAgICAgICBlbC5hcHBlbmQoXCI8aW5wdXQgXCIrcGxhY2Vob2xkZXIrXCIgY2xhc3M9J1wiK3RoaXMuaW5wdXRTdHlsZUNsYXNzZXMrXCInIHR5cGU9J3RleHQnIC8+XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmFwcGVuZChcIjx0ZXh0YXJlYSBcIitwbGFjZWhvbGRlcitcIiBjbGFzcz0nXCIrdGhpcy5pbnB1dFN0eWxlQ2xhc3NlcytcIicgc3R5bGU9J2xpbmUtaGVpZ2h0OiAxMnB4JyB0eXBlPSd0ZXh0JyByb3dzPSdcIityb3dzK1wiJz48L3RleHRhcmVhPlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQgPSAkKGVsLmNoaWxkcmVuKClbZWwuY2hpbGRyZW4oKS5sZW5ndGggLSAxXSk7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbiA9IGxvYWRlcjtcclxuICAgICAgICB0aGlzLmlucHV0LmNzcyh7XCJ3aWR0aFwiIDogZWwuYXR0cignd2lkdGgnKSA8IDM1ID8gMzUgOiBlbC5hdHRyKCd3aWR0aCcpLCBcImhlaWdodFwiIDogZWwuYXR0cignaGVpZ2h0JykgPCAxMiA/IDEyIDogZWwuYXR0cignaGVpZ2h0Jyl9KTtcclxuICAgICAgICBlbC5jc3Moe1wid2lkdGhcIiA6IHRoaXMuaW5wdXQub3V0ZXJXaWR0aCgpIDwgMzUgPyAnYXV0bycgOiB0aGlzLmlucHV0Lm91dGVyV2lkdGgoKSwgXCJwYWRkaW5nLWJvdHRvbVwiIDogXCIycHhcIiwgXCJwYWRkaW5nLXRvcFwiIDogXCIycHhcIiwgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJ9KTtcclxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRNZXRob2RzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0S2V5TG9nZ2luZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdElucHV0Q2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRLZXlMb2dnaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gc2VsZi5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbc2VsZi5tYWluLmZsYWdzVG9vbC5jdXJyZW50RmxhZ107XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbY3VycmVudExhbmd1YWdlXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdElucHV0Q2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gc2VsZi5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbc2VsZi5tYWluLmZsYWdzVG9vbC5jdXJyZW50RmxhZ107XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXR2YWx1ZXNbY3VycmVudExhbmd1YWdlXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlZElucHV0VmlldygpIHtcclxuICAgICAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbdGhpcy5tYWluLmZsYWdzVG9vbC5jdXJyZW50RmxhZ107XHJcbiAgICAgICAgaWYgKCB0aGlzLm1haW4uZmxhZ3NUb29sLnBsYWNlSG9sZGVyVHlwZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgdGhpcy5tYWluLmZsYWdzVG9vbC5wbGFjZWhvbGRlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmICggdGhpcy5tYWluLmZsYWdzVG9vbC5wbGFjZUhvbGRlclR5cGUgPT09IFwiYXJyYXlcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LmF0dHIoJ3BsYWNlaG9sZGVyJywgdGhpcy5tYWluLmZsYWdzVG9vbC5wbGFjZWhvbGRlcltjdXJyZW50TGFuZ3VhZ2VdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dC52YWwodGhpcy5pbnB1dHZhbHVlc1tjdXJyZW50TGFuZ3VhZ2VdKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnRNZXRob2RzKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBwcmludFJlc3VsdHMgPSBmdW5jdGlvbiAobGFuZykge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pbnB1dHZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaW5wdXR2YWx1ZXNbbGFuZ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5wdXR2YWx1ZXNbbGFuZ107XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZi5pbnB1dHZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZUlzb0Fzc29jQXJyYXlUb1Nob3J0KHNlbGYuaW5wdXR2YWx1ZXMpOy8vO3NlbGYubWFpbi5jb2RlVHJhbnNsYXRvci50cmFuc2xhdGVTaG9ydFRvSXNvKGxhbmcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pc3NpbmdpMThuKCkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG1pc3NpbmdpMThuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW5nID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuaW5wdXR2YWx1ZXMuaGFzS2V5KHNlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW2ldKSB8fCBzZWxmLmlucHV0dmFsdWVzW3NlbGYubWFpbi5mbGFnc1Rvb2wubGFuZ3VhZ2VzW2ldXSA9PT0gdW5kZWZpbmVkIHx8IHNlbGYuaW5wdXR2YWx1ZXNbc2VsZi5tYWluLmZsYWdzVG9vbC5sYW5ndWFnZXNbaV1dLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmcucHVzaChzZWxmLm1haW4uZmxhZ3NUb29sLmxhbmd1YWdlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvQXJyYXlUb1Nob3J0KG1pc3NpbmcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHNldFZhbHVlQXV0byA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgIHNldFZhbHVlKGtleSwgdmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnZhbCh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZXRWYWx1ZSA9IGZ1bmN0aW9uKGxuZywgdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG5nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChsbmcgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuZy5sZW5ndGggIT09IHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkJvdGggaW5wdXQgYXJyYXlzIG11c3QgaGF2ZSB0aGUgc2FtZSBzaXplXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxuZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hvcnQgPSBzZWxmLm1haW4uY29kZVRyYW5zbGF0b3IudHJhbnNsYXRlSXNvVG9TaG9ydChsbmdbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5tYWluLmlzaTE4blJlZ2lzdGVyZWQoc2hvcnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0dmFsdWVzW3Nob3J0XSA9IHZhbHVlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coXCJMYW5ndWFnZSBcIiArIGxuZyArIFwiIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggdGhlIFZpZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChcIkVpdGhlciBib3RoLCBvciBub24gYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEFycmF5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3J0ID0gc2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLnRyYW5zbGF0ZUlzb1RvU2hvcnQobG5nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm1haW4uaXNpMThuUmVnaXN0ZXJlZChzaG9ydCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0dmFsdWVzW3Nob3J0XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyhcIkxhbmd1YWdlIFwiICsgbG5nICsgXCIgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aCB0aGUgVmlld1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZWRJbnB1dFZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlaTE4biA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5tYWluLmNvZGVUcmFuc2xhdG9yLmkxOG5Db2Rlcy5nZXRBbGxQcm9wcygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gZnVuY3Rpb24oaGFuZGxlcikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIEhhbmRsZXIgbXVzdCBiZSBvZiB0eXBlIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYubWFpbi5mYWlsSGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLmkxOG4gPSBwcmludFJlc3VsdHM7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uY29tcGxldGUgPSBjb21wbGV0ZWQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0ubWlzc2luZyA9IG1pc3NpbmdpMThuO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLnNldFZhbHVlID0gc2V0VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJbMF0uc2V0VmFsdWVBdXRvID0gc2V0VmFsdWVBdXRvO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLmFsbExvY2FsZXMgPSBhdmFpbGFibGVpMThuO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyWzBdLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gcmVnaXN0ZXJGb3JtSW5jb21wbGV0ZUhhbmRsZXI7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLmkxOG4gPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLmkxOG4odmFsdWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuY29tcGxldGUoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5taXNzaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkubWlzc2luZygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gKGxuZywgdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgkKHRoaXMpLmF0dHIoXCJpZFwiKS5yZXBsYWNlKCcjJywgJycpKS5zZXRWYWx1ZShsbmcsIHZhbHVlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5zZXRWYWx1ZUF1dG8gPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCQodGhpcykpO1xyXG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLnNldFZhbHVlQXV0byh2YWx1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyp0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS52YWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgIGlmKHZhbHVlICYmICQodGhpcykuYXR0cihcImlkXCIpKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLnNldFZhbHVlV2l0aE9iamVjdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTsqL1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbml0LnByb3RvdHlwZS5hbGxMb2NhbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJCh0aGlzKS5hdHRyKFwiaWRcIikucmVwbGFjZSgnIycsICcnKSkuYWxsTG9jYWxlcygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmluaXQucHJvdG90eXBlLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCQodGhpcykuYXR0cihcImlkXCIpLnJlcGxhY2UoJyMnLCAnJykpLnJlZ2lzdGVyRm9ybUluY29tcGxldGVIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0VG9vbDsiLCIvKipcclxuICogQ3JlYXRlZCBieSBzYnJhbmR0IG9uIDA1LjA3LjE3LlxyXG4gKi9cclxuaW1wb3J0IEluaXRNZW1iZXIgZnJvbSAnLi9Jbml0TWVtYmVyJztcclxuaW1wb3J0IEZsYWdzVG9vbCBmcm9tICcuL0ZsYWdzVG9vbCc7XHJcbmltcG9ydCBJbnB1dFRvb2wgZnJvbSBcIi4vSW5wdXRUb29sXCI7XHJcbmltcG9ydCBDb2RlVHJhbnNsYXRvciBmcm9tIFwiLi9Db2RlVHJhbnNsYXRvclwiO1xyXG5cclxuY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBJbml0TWVtYmVyIHtcclxuXHJcbiAgICBpbml0TWVtYmVyKCkge1xyXG4gICAgICAgIHRoaXMuZmxhZ3NUb29sID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dFRvb2wgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29kZVRyYW5zbGF0b3IgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmZhaWxIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGxhbmdLZXlzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxhbmdLZXlzID0gbGFuZ0tleXM7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKFwiI1wiICsgY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmluaXRDb2RlVHJhbnNsYXRvcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdElucHV0VG9vbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdEZsYWdzVG9vbChsYW5nS2V5cyk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclN1Ym1pdEhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLmlucHV0VG9vbC5jaGFuZ2VkSW5wdXRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdElucHV0VG9vbCgpIHtcclxuICAgICAgICB0aGlzLmlucHV0VG9vbCA9IG5ldyBJbnB1dFRvb2wodGhpcy5jb250YWluZXIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGbGFnc1Rvb2wobGFuZ0tleXMpIHtcclxuICAgICAgICB0aGlzLmZsYWdzVG9vbCA9IG5ldyBGbGFnc1Rvb2wodGhpcy5jb250YWluZXIsIHRoaXMsIGxhbmdLZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29kZVRyYW5zbGF0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlVHJhbnNsYXRvciA9IG5ldyBDb2RlVHJhbnNsYXRvcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNpMThuUmVnaXN0ZXJlZChpMThuKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmxhZ3NUb29sLmxhbmd1YWdlcy5pbmRleE9mKGkxOG4pICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclN1Ym1pdEhhbmRsZXIoKSB7XHJcbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzLmZpbmRGb3JtKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICBpZiAoZm9ybSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgZm9ybS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaTE4biA9IHNlbGYuY29udGFpbmVyLmkxOG4oKTtcclxuICAgICAgICAgICAgICAgIGkxOG4uZWFjaCA9IHNlbGYuaW5wdXRUb29sLmlucHV0dmFsdWVzLmVhY2g7XHJcbiAgICAgICAgICAgICAgICBpMThuLmVhY2godGhpcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZW5kKFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nXCIrc2VsZi5jb250YWluZXIuYXR0cignaWQnKStcIltcIitrZXkrXCJdJyB2YWx1ZT0nXCIrdmFsdWUrXCInPlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEF0dHIgPSBzZWxmLmNvbnRhaW5lci5hdHRyKFwic3VibWl0T25NaXNzaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0T25NaXNzaW5nID0gc3VibWl0QXR0ciA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgc3VibWl0QXR0ciA9PT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHx8IFN0cmluZyhzdWJtaXRBdHRyKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICB8fCBTdHJpbmcoc3VibWl0QXR0cikgPT09IFwiVHJ1ZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHNlbGYuY29udGFpbmVyLmNvbXBsZXRlKCkgfHwgc3VibWl0T25NaXNzaW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcmVzICYmICFzdWJtaXRPbk1pc3NpbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sb3IgdGhlIFZpZXcuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnB1dFRvb2wuaW5wdXQuYWRkQ2xhc3MoJ2kxOG4tdmlldy1pbmNvbXBsZXRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biBhbiBvcHRpb25hbCBGYWlsIEhhbmRsZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZmFpbEhhbmRsZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZmFpbEhhbmRsZXIuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlucHV0VG9vbC5pbnB1dC5yZW1vdmVDbGFzcygnaTE4bi12aWV3LWluY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEZvcm0oZWwpIHtcclxuICAgICAgICBpZiAoZWwucGFyZW50KCkgPT09IHVuZGVmaW5lZCB8fCBlbC5wYXJlbnQoKSA9PT0gbnVsbCB8fCBlbC5wYXJlbnQoKS5wcm9wKCdub2RlTmFtZScpID09PSAnQk9EWScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5wYXJlbnQoKS5wcm9wKCdub2RlTmFtZScpID09PSAnRk9STScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsLnBhcmVudCgpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZEZvcm0oZWwucGFyZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc2JyYW5kdCBvbiAwNS4wNy4xNy5cclxuICovXHJcbmltcG9ydCBNYWluQ29udHJvbGxlciBmcm9tICcuL01haW5Db250cm9sbGVyJztcclxuXHJcbmNsYXNzIGkxOG5JbnB1dFZpZXcge1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYW5nS2V5cyl7XHJcbiAgICB0aGlzLmxhbmdLZXlzID0gbGFuZ0tleXM7XHJcbiAgfVxyXG5cclxuICBpMThuSW5wdXRWaWV3KGNvbnRhaW5lcikge1xyXG4gICAgcmV0dXJuIG5ldyBNYWluQ29udHJvbGxlcihjb250YWluZXIsIHRoaXMubGFuZ0tleXMpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBpMThuSW5wdXRWaWV3OyJdfQ==
