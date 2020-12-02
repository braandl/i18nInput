/**
 * Created by sbrandt on 05.07.17.
 */
import FlagsTool from './FlagsTool';
import InputTool from "./InputTool";
import CodeTranslator from "./CodeTranslator";

class MainController
{

    constructor(container, langKeys) {
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

    initInputTool() {
        this.inputTool = new InputTool(this.container, this);
    }

    initFlagsTool(langKeys) {
        this.flagsTool = new FlagsTool(this.container, this, langKeys);
    }

    initCodeTranslator() {
        this.codeTranslator = new CodeTranslator(this.container, this);
    }

    isi18nRegistered(i18n) {
        return this.flagsTool.languages.indexOf(i18n) !== -1;
    }

    registerSubmitHandler() {
        let form = this.findForm(this.container);
        if (form !== null) {
            const self = this;
            form.submit(function() {
                let i18n = self.container.i18n();
                i18n.each = self.inputTool.inputvalues.each;
                i18n.each(this, function(key, value) {
                    $(this).append("<input type='hidden' name='"+self.container.attr('id')+"["+key+"]' value='"+value+"'>");
                });

                const submitAttr = self.container.attr("submitOnMissing");
                const submitOnMissing = submitAttr === undefined
                    || submitAttr === null
                    || String(submitAttr) === "true"
                    || String(submitAttr) === "True";

                const res = self.container.complete() || submitOnMissing;

                if (!res && !submitOnMissing) {

                    // Color the View.
                    self.inputTool.input.addClass('i18n-view-incomplete');

                    // Run an optional Fail Handler.
                    if (self.failHandler !== null) {
                        setTimeout(function() {
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

    findForm(el) {
        if (el.parent() === undefined || el.parent() === null || el.parent().prop('nodeName') === 'BODY') {
            return null;
        }
        if (el.parent().prop('nodeName') === 'FORM') {
            return el.parent();
        } else{
            return this.findForm(el.parent());
        }
    }
}

export default MainController;