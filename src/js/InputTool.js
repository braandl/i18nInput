import TextEditorTool from "./TextEditorTool";

/**
 * Created by sbrandt on 05.07.17.
 */
class InputTool {

    constructor(el, loader) {
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
        let placeholder = el.attr("placeholder") !== undefined ? "placeholder=''" : "";
        let rows = parseInt(el.attr('rows'));
        if (rows === 1 || !rows) {
            el.append("<input " + placeholder + " class='" + this.inputStyleClasses + "' type='text' style='padding-right: 36px;'/>");
            this.input = $(el.children()[el.children().length - 1]);
        } else {
            el.addClass("text-editor-wrapper")
            let rules = null;
            if (el.attr('rules') !== undefined) {
                rules = JSON.parse(el.attr('rules').replace(/\[/g, '{').replace(/\]/g, '}').replace(/'/g, '"'));
            }
            this.texteditor = new TextEditorTool({ placeholder: placeholder, inputStyleClass: this.inputStyleClasses, rows: rows, rules: rules });
            el.append(this.texteditor.render());
            this.input = $(this.texteditor.getTextarea());

            // Add locale change listener to text editor
            this.texteditor.setOnChangeCallback(value => {
                let currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];
                this.inputvalues[currentLanguage] = value;
            })
        }

        this.main = loader;
        if (this.texteditor == null)
            this.input.css({ "width": el.attr('width') < 35 ? 35 : el.attr('width'), "height": el.attr('height') < 12 ? 12 : el.attr('height') });
        el.css({ "width": el.attr('width') < 35 ? 35 : el.attr('width'), "padding-bottom": "2px", "padding-top": "2px", "position": "relative" });
        this.addElementMethods();
        this.initKeyLogging();
        this.initInputChange();
    }


    initKeyLogging() {
        this.input.on('keyup', () => {
            let currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];
            this.inputvalues[currentLanguage] = $(this.input).val();
        });
    }

    initInputChange() {
        this.input.on('change', () => {
            let currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];
            this.inputvalues[currentLanguage] = $(this.input).val();
        });
    }

    changedInputView() {
        let currentLanguage = this.main.flagsTool.languages[this.main.flagsTool.currentFlag];
        if (this.main.flagsTool.placeHolderType === "string") {
            this.input.attr('placeholder', this.main.flagsTool.placeholder);
        } else if (this.main.flagsTool.placeHolderType === "array") {
            this.input.attr('placeholder', this.main.flagsTool.placeholder[currentLanguage]);
        }
        this.input.val(this.inputvalues[currentLanguage])
        this.texteditor?.updatePreview();
    }

    addElementMethods() {
        const printResults = lang => {
            if (this.inputvalues !== undefined && this.inputvalues[lang] !== undefined) {
                return this.inputvalues[lang];
            } else if (this.inputvalues !== undefined) {
                return this.main.codeTranslator.translateIsoAssocArrayToShort(this.inputvalues);
            } else {
                return "";
            }
        };

        const printResultsObject = lang => {
            if (this.inputvalues !== undefined && this.inputvalues[lang] !== undefined) {
                return this.inputvalues[lang];
            } else if (this.inputvalues !== undefined) {
                return this.main.codeTranslator.translateIsoAssocArrayToShortObject(this.inputvalues);
            } else {
                return "";
            }
        };

        const completed = function () {
            return missingi18n().length === 0;
        };

        const missingi18n = () => {
            let missing = [];

            for (let i = 0; i < this.main.flagsTool.languages.length; i++) {
                if (!(this.main.flagsTool.languages[i] in this.inputvalues)
                    || this.inputvalues[this.main.flagsTool.languages[i]] === undefined
                    || this.inputvalues[this.main.flagsTool.languages[i]].length === 0
                ) {
                    missing.push(this.main.flagsTool.languages[i]);
                }
            }

            return this.main.codeTranslator.translateIsoArrayToShort(missing);
        };

        const setValueAuto = value => {
            if (typeof value === 'object') {
                Object.keys(value).forEach(function (key) {
                    setValue(key, value[key]);
                });
            } else {
                this.input.val(value);
            }
        }

        const setValue = (lng, value) => {
            console.log(lng, value);
            if (lng instanceof Array) {
                if (value instanceof Array) {
                    if (lng.length !== value.length) {
                        throw ("Both input arrays must have the same size");
                    }
                    for (let i = 0; i < lng.length; i++) {
                        let short = this.main.codeTranslator.translateIsoToShort(lng[i]);
                        if (this.main.isi18nRegistered(short)) {
                            this.inputvalues[short] = value[i];
                        } else {
                            throw ("Language " + lng + " is not registered with the View");
                        }
                    }
                } else {
                    throw ("Either both, or non argument must be of type Array");
                }
            } else {
                let short = this.main.codeTranslator.translateIsoToShort(lng);
                if (this.main.isi18nRegistered(short)) {
                    this.inputvalues[short] = value;
                } else {
                    throw ("Language " + lng + " is not registered with the View");
                }
            }
            this.changedInputView();
            return true;
        };

        const availablei18n = () => {
            return this.main.codeTranslator.getAllLongs();
        };

        const registerFormIncompleteHandler = handler => {
            if (typeof handler !== 'function') {
                console.warn('The Handler must be of type function');
                return false;
            }
            this.main.failHandler = handler;
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
}

export default InputTool;