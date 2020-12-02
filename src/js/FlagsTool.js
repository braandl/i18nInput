/**
 * Created by sbrandt on 05.07.17.
 */
class FlagsTool
{

    constructor(el, loader) {

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
        this.container = el;
        this.main = loader;
        let lng = null;
        if (el.attr('languages') !== undefined && loader.langKeys === undefined) {
            let string = String(el.attr('languages').replace(/'/g, "\""));
            lng = $.parseJSON(string);
        } else {
            lng = loader.langKeys;
        }

        for (let i = 0; i < lng.length; i++) {
            let currentLng = loader.codeTranslator.translateIsoToShort(lng[i]);
            if (this.languages.indexOf(currentLng) === -1) {
                this.languages.push(currentLng);
            } else {
                console.warn("Languages can not be added twice. Second '" + lng[i] + "' was ignored.");
            }
        }

        if (el.attr('animate') !== undefined && (el.attr('animate') === "false" || Boolean(el.attr('animate')) === false)) {
            this.FADEIN_SPEED = 0;
            this.FADEIN_DELAY = 0;
        }


        this.loadStyles();
        this.parsePlaceholder();
        this.initFlagController();
    }

    parsePlaceholder() {
        if (this.container.attr('placeholder') === undefined) return;
        let string = String(this.container.attr('placeholder').replace(/'/g, "\""));
        let placeholder = "";
        try {
            placeholder = $.parseJSON(string);
        } catch (e) {
            placeholder = string;
        }

        if (Array.isArray(placeholder)) {
            this.placeHolderType = "array";
            this.placeholder = [];
            if (placeholder.length < this.languages.length) {
                throw("If multiple Placeholders are provided, please provide a placeholder for every language");
            }

            for (let i = 0; i < placeholder.length; i++) {
                this.placeholder[this.languages[i]] = placeholder[i];
            }
        } else {
            this.placeHolderType = "string";
            this.placeholder = placeholder;
        }
    }

    loadStyles() {
        if (this.container.attr("expander-class") !== undefined) {
            this.inputStyleClasses  = this.container.attr("expander-class");
        }

        if (this.container.attr("picker-class") !== undefined) {
            this.pickerClass = this.container.attr("picker-class");
        }
    }

    initFlagController() {
        if (this.pickerClass !== "") {
            this.container.append("<div class='"+this.pickerClass+"'></div>");
        } else {
            this.container.append("<div class='default-picker'></div>");
        }
        this.flagger = $(this.container.children()[this.container.children().length - 1]);
        //this.flagger.css({"left" : this.main.inputTool.input.outerWidth() - 24, 'margin-top': - (this.main.inputTool.input.outerHeight() + 24) / 2});
        this.flagger.html('<span title="Language: '+ this.main.codeTranslator.translateShortToIso(this.languages[0]) +'" class="flag-icon flag-icon-'+ this.languages[0] +'"></span>');
        this.loadFlags();
        const self = this;

        this.flagger.hover(function(){
            if (self.languages.length === 1) return;
            clearTimeout(self.flaggerLeaveAnimationTimeout);
            clearTimeout(self.flaggerCancelAnimationTimeout);
            if (!self.isAnimating) {
                $(this).css({"cursor": "pointer"});
                self.hoverAnimationTimeout = setTimeout(function () {
                    self.fadeIn();
                }, 50);
            }
        }, function(){
            if (!self.isAnimating) {
                clearTimeout(self.hoverAnimationTimeout);
            }
        });

        this.flagger.mouseleave(function () {
            self.flaggerCancelAnimationTimeout = setTimeout(function () {
                self.fadeOut(function() {
                    self.isAnimating = false;
                });
            }, 1000);
        })
    }

    fadeIn() {
        this.isAnimating = true;
        const self = this;
        this.flaggerChooser.show();
        this.flaggerChooser.fadeIn(50);
        let outerv = this.flaggerChooser.children().length;
        this.flaggerChooser.children().each(function (v) {
            $(this).delay(v * self.FADEIN_DELAY).fadeIn(self.FADEIN_SPEED);
        });
        this.flaggerChooser.delay(outerv * self.FADEIN_DELAY).queue(function() {
            self.isAnimating = false;
        })
    }

    fadeOut(callback) {
        this.isAnimating = true;
        const self = this;
        let outerv = this.flaggerChooser.children().length;
        this.flaggerChooser.children().each(function (v) {
            $(this).delay(v * self.FADEIN_DELAY * 3).fadeOut(self.FADEIN_SPEED);
        });
        setTimeout(function () {
            self.flaggerChooser.fadeOut('fast');
            self.flaggerChooser.hide();
            callback.call();
        }, (outerv - 2) * self.FADEIN_DELAY * 3);
    }

    replaceCurrent(item) {
        this.flagger.html(item.html());
        this.main.inputTool.changedInputView();
    }

    loadFlags() {
        const self = this;
        if (this.inputStyleClasses !== "") {
            this.container.append("<div class='"+ this.inputStyleClasses + "'></div>");
        } else {
            this.container.append("<div></div>");
        }
        if (this.flaggerChooser != null) {
            this.flaggerChooser.remove();
        }
        this.flaggerChooser = $(this.container.children()[this.container.children().length - 1]);
        this.flaggerChooser.css({"position" : "absolute","margin-top": "-2px", "display": "none", "padding": "2px", "background-color" : "#FFFFFF",
            width: "100%",
            "border" : "1px solid "+ this.main.inputTool.input.css('border-color'), "z-index": 2});
        let itemsPerRow = Math.floor((this.flaggerChooser.innerWidth() - this.flaggerChooser.css("padding") * 2) / (this.flagger.outerWidth() + 2));
        for (let i = 0; i < this.languages.length; i++) {
            if (i === this.currentFlag) { continue; }
            this.flaggerChooser.append('<div style="float:right; display: none; padding:0 0 2px 2px;" ><span title="Language: '+ this.main.codeTranslator.translateShortToIso(this.languages[i]) +'" class="flag-icon flag-icon-'+ this.languages[i] +'"></span></div>');

            // Select the Current Item
            let current = $( this.flaggerChooser .children()[ this.flaggerChooser .children().length - 1]);
            current.hover(function() {
                $(this).css({"cursor" : "pointer"});
            });
            current.click(function () {
                self.currentFlag = i;
                self.replaceCurrent($(this));
                self.fadeOut(function() {
                    self.isAnimating = false;
                    self.loadFlags();
                });
            });

            if (i % itemsPerRow === 0) {
                this.flaggerChooser.append("<div style='clear: both;'></div>");
            }
        }
        this.flaggerChooser.append("<div style='clear: both;'></div>");

        this.flaggerChooser.on('mouseleave', function() {
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
}

export default FlagsTool;