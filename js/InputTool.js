/**
 * Created by sbrandt on 05.07.17.
 */
import InitMember from "./InitMember";
class InputTool extends InitMember {

    initMember() {
        this.container = null;
        this.main = null;
        this.input = null;
        this.inputvalues = [];
        this.inputStyleClasses = "";
        this.inputvalues.size = function() {
            let size = 0, key;
            for (key in this) {
                if (this.hasOwnProperty(key)
                    && key !== "size"
                    && key !== "each"
                    && key !== "hasKey") size++;
            }
            return size;
        };

        this.inputvalues.each = function (ctx, callable) {
            let key;
            for (key in this) {
                if (this.hasOwnProperty(key)
                    && key !== "size"
                    && key !== "each"
                    && key !== "hasKey") {
                    callable.apply(ctx, [key, this[key]]);
                }
            }
        };
        this.inputvalues.hasKey = function( value ) {
            for(let key in this ) {
                if( key === value ) {
                    return true;
                }
            }
            return false;
        }
    }

    constructor(el, loader) {
        super();
        this.container = el;

        if (el.attr("input-class") !== undefined) {
            this.inputStyleClasses  = el.attr("input-class");
        }
        let placeholder = el.attr("placeholder") !== undefined ? "placeholder=''" : "";
        let rows = parseInt(el.attr('rows'));
        if (rows === 1 || !rows) {
            el.append("<input "+placeholder+" class='"+this.inputStyleClasses+"' type='text' />");
        } else {
            el.append("<textarea "+placeholder+" class='"+this.inputStyleClasses+"' style='line-height: 12px' type='text' rows='"+rows+"'></textarea>");
        }

        this.input = $(el.children()[el.children().length - 1]);
        this.main = loader;
        this.input.css({"width" : el.attr('width') < 35 ? 35 : el.attr('width'), "height" : el.attr('height') < 12 ? 12 : el.attr('height')});
        el.css({"width" : this.input.outerWidth(), "padding-bottom" : "2px", "padding-top" : "2px"});
        this.addElementMethods();
        this.initKeyLogging();
    }


    initKeyLogging() {
        const self = this;
        this.input.keyup(function () {
            let currentLanguage = self.main.flagsTool.languages[self.main.flagsTool.currentFlag];
            self.inputvalues[currentLanguage] = $(this).val();
        });
    }

    changedInputView() {
        let currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];
        if ( this.main.flagsTool.placeHolderType === "string") {
            this.input.attr('placeholder', this.main.flagsTool.placeholder);
        } else if ( this.main.flagsTool.placeHolderType === "array") {
            this.input.attr('placeholder', this.main.flagsTool.placeholder[currentLanguage]);
        }
        this.input.val(this.inputvalues[currentLanguage])
    }

    addElementMethods() {
        const self = this;

        const printResults = function (lang) {
            if (self.inputvalues !== undefined && self.inputvalues[lang] !== undefined) {
                return self.inputvalues[lang];
            } else if (self.inputvalues !== undefined) {
                return self.main.codeTranslator.translateIsoAssocArrayToShort(self.inputvalues);//;self.main.codeTranslator.translateShortToIso(lang);
            } else {
                return "";
            }
        };

        const completed = function() {
            return missingi18n().length === 0;
        };

        const missingi18n = function() {
            let missing = [];

            for (let i = 0; i < self.main.flagsTool.languages.length; i++) {
                if (!self.inputvalues.hasKey(self.main.flagsTool.languages[i]) || self.inputvalues[self.main.flagsTool.languages[i]] === undefined || self.inputvalues[self.main.flagsTool.languages[i]].length === 0) {
                    missing.push(self.main.flagsTool.languages[i]);
                }
            }

            return self.main.codeTranslator.translateIsoArrayToShort(missing);
        };

        const setValue = function(lng, value) {
            if (lng instanceof Array) {
                if (value instanceof  Array) {
                    if (lng.length !== value.length) {
                        throw("Both input arrays must have the same size");
                    }
                    for (let i = 0; i < lng.length; i++) {
                        let short = self.main.codeTranslator.translateIsoToShort(lng[i]);
                        if (self.main.isi18nRegistered(short)) {
                            self.inputvalues[short] = value[i];
                        } else {
                            throw("Language " + lng + " is not registered with the View");
                        }
                    }
                } else {
                    throw ("Either both, or non argument must be of type Array");
                }
            } else {
                let short = self.main.codeTranslator.translateIsoToShort(lng);
                if (self.main.isi18nRegistered(short)) {
                    self.inputvalues[short] = value;
                } else {
                    throw("Language " + lng + " is not registered with the View");
                }
            }
            self.changedInputView();
            return true;
        };

        const availablei18n = function() {
            return self.main.codeTranslator.i18nCodes.getAllProps();
        };

        const registerFormIncompleteHandler = function(handler) {
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
}

export default InputTool;