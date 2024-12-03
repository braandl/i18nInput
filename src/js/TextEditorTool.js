import MarkdownParser, { MarkdownConfig } from "./MarkdownParser.js";

/**
 * @class TextEditorTool
 * @description A text editor tool for the i18ninput library, based on markdown syntax with a preview mode that supports headings, bold, and italic text.
 * This tool allows for easy text input and formatting within a textarea element.
 * 
 * @param {Object} options - Configuration options for the text editor tool.
 * @param {string} [options.placeholder=""] - The placeholder text for the textarea. Default is an empty string.
 * @param {string} [options.inputStyleClass="input-class"] - The class name for the text editor tool. Default is "input-class".
 * @param {number} [options.rows=3] - The number of rows for the textarea. Default is 3.
 * @param {Object} [options.rules={}] - The rules for the text editor tool. Default is an empty object. The rules can be `heading`, `bold`, and `italic`.
 * 
 * @example
 * // Create a new TextEditorTool instance
 * const editor = new TextEditorTool({
 *   placeholder: "Enter text here...",
 *   inputStyleClass: "custom-input-class",
 *   rows: 5,
 *   rules: { heading: false, bold: true, italic: true }
 * });
 * 
 * // Append the editor to a container
 * document.getElementById('editor-container').appendChild(editor.render());
 * 
 * // Create the text editor tool with the following HTML structure:
 * <div class="example-test-editor" input-class="readonly-aware-light" languages="['de_DE', 'en_GB']" rows="3" rules="['heading': false]"></div>
 * 
 * @note The `options.inputStyleClass` parameter may affect the styling of the text editor. 
 * It is recommended to override the styles in your CSS file rather than adding predefined styles to the class.
 * 
 * @author Andrei Chiriac
 * @version 1.1
 */
class TextEditorTool {
    constructor({ placeholder = "", inputStyleClass = "input-class", rows = 3, rules = {} }) {
        /** @private */
        this._placeholder = placeholder;
        /** @private */
        this._inputStyleClass = inputStyleClass;
        /** @private */
        this._rows = rows;
        /** @private */
        this._container = document.createElement("div");
        this._container.className = `${this._inputStyleClass}`;
        this._container.setAttribute("role", "i18ninput-textarea-editor");
        
        /** @private */
        this._onChangeCallback = null;

        /** @private */
        this._headingAllowed = rules?.heading ?? true;
        /** @private */
        this._boldAllowed = rules?.bold ?? true;
        /** @private */
        this._italicAllowed = rules?.italic ?? true;

        this._createElement();
        this._addButtons();
        this._setupEventListeners();

    }

    /**
     * @private
     * @description Creates the HTML structure of the text editor
     * @returns {void}
     */
    _createElement() {
        this._container.innerHTML = `
            <header role="header">
                <nav role="tablist" style="margin-bottom: -1px">
                    <button type="button" class="${this._inputStyleClass}" role="tabnav-tab" data-tab="write" aria-selected="true">Write</button>
                    <button type="button" class="${this._inputStyleClass}" role="tabnav-tab" data-tab="preview" aria-selected="false">Preview</button>
                </nav>
                <div class="text-editor-toolbar" role="toolbar"></div>
            </header>
            <section role="content">
                <div class="${this._inputStyleClass} form-control d-none" role="tabpanel" data-tab="preview">
                    Nothing to preview
                </div>
                <div class="${this._inputStyleClass}" role="tabpanel" data-tab="write">
                    <textarea class="${this._inputStyleClass} form-control" placeholder="${this._placeholder}" role="textarea" name="markdown" style="min-height: 10em" rows='${this._rows}'></textarea>
                </div>
            </section>
        `;
    }

    /**
     * @private
     * @description Adds the buttons to the text editor toolbar based on the configuration options
     * @returns {void}
     */
    _addButtons() {
        const tooblar = this._container.getElementsByClassName("text-editor-toolbar")[0];

        if (this._headingAllowed) {
            const headingButton = document.createElement("button");
            headingButton.title = "Heading";
            headingButton.className = this._inputStyleClass;
            headingButton.setAttribute("role", "heading-btn");
            headingButton.type = "button";
            headingButton.textContent = "H";
            tooblar.appendChild(headingButton);
        }

        if (this._boldAllowed) {
            const boldButton = document.createElement("button");
            boldButton.title = "Bold";
            boldButton.className = this._inputStyleClass;
            boldButton.setAttribute("role", "bold-btn");
            boldButton.type = "button";
            boldButton.innerHTML = "<strong>B</strong>";
            tooblar.appendChild(boldButton);
        }

        if (this._italicAllowed) {
            const italicButton = document.createElement("button");
            italicButton.title = "Italic";
            italicButton.className = this._inputStyleClass;
            italicButton.setAttribute("role", "italic-btn");
            italicButton.type = "button";
            italicButton.innerHTML = "<em>I</em>";
            tooblar.appendChild(italicButton);
        }
    }

    /**
     * @private
     * @description Sets up the event listeners for the text editor
     * @returns {void}
     */
    _setupEventListeners() {
        const BUTTON_SELECTOR = "button[role='tabnav-tab']";
        const SECTION_SELECTOR = "div[role='tabpanel']";
        const TEXTAREA_SELECTOR = "textarea[role='textarea']";
        const HEADING_BUTTON_SELECTOR = "button[role='heading-btn']";
        const BOLD_BUTTON_SELECTOR = "button[role='bold-btn']";
        const ITALIC_BUTTON_SELECTOR = "button[role='italic-btn']";

        this._container.querySelector(`${SECTION_SELECTOR}[data-tab="preview"]`).classList.add("d-none");
        this._container.querySelector(`${SECTION_SELECTOR}[data-tab="write"]`).classList.remove("d-none");

        this._container.querySelectorAll(BUTTON_SELECTOR).forEach(button => {
            button.addEventListener("click", event => {
                const parent = event.target.closest("div[role='i18ninput-textarea-editor']");
                const buttons = parent.querySelectorAll(BUTTON_SELECTOR);
                const sections = parent.querySelectorAll(SECTION_SELECTOR);

                buttons.forEach(button => {
                    button.classList.remove("selected");
                    button.setAttribute("aria-selected", "false");
                });
                sections.forEach(section => {
                    section.classList.add("d-none");
                });

                event.target.classList.add("selected");
                event.target.setAttribute("aria-selected", "true");

                const selectedSection = parent.querySelector(`${SECTION_SELECTOR}[data-tab="${event.target.dataset.tab}"]`);
                selectedSection.classList.remove("d-none");
                selectedSection.setAttribute("aria-selected", "true");

                if (event.target.dataset.tab === "preview") {
                    this.updatePreview();
                }
            });
        });

        /* Heading */
        this._container.querySelector(HEADING_BUTTON_SELECTOR)?.addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            const selectedText = String(textarea.value.substring(start, end));

            if (MarkdownConfig.RULES.HEADING.test(selectedText)) {
                const cleanText = selectedText.substring(4);
                textarea.setRangeText(cleanText, start, end, "end");
            }
            else if (start >= 4 && MarkdownConfig.RULES.HEADING.test(textarea.value.substring(start - 4, start))) {
                textarea.setRangeText(selectedText, start - 4, end, "end");
            }
            else {
                textarea.setRangeText(`### ${selectedText}`, start, end, "end");
            }

            textarea.focus();
            this._notifyChange();
        });

        /* Bold */
        this._container.querySelector(BOLD_BUTTON_SELECTOR)?.addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = String(textarea.value.substring(start, end));

            if (MarkdownConfig.STRICT.BOLD.test(selectedText)) {
                const cleanText = selectedText.slice(2, -2);
                textarea.setRangeText(cleanText, start, end, "end");
                textarea.setSelectionRange(start, end - 4);
            } else if (start >= 2 && MarkdownConfig.STRICT.BOLD.test(textarea.value.substring(start - 2, end + 2))) {
                textarea.setRangeText(selectedText, start - 2, end + 2, "end");
                textarea.setSelectionRange(start - 2, end - 2);
            } else {
                textarea.setRangeText(`**${selectedText}**`, start, end, "end");
                textarea.setSelectionRange(start + 2, end + 2);
            }

            textarea.focus();
            this._notifyChange();
        });

        /* Italic */
        this._container.querySelector(ITALIC_BUTTON_SELECTOR)?.addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = String(textarea.value.substring(start, end));

            if (MarkdownConfig.STRICT.ITALIC.test(selectedText)) {
                const cleanText = selectedText.slice(1, -1);
                textarea.setRangeText(cleanText, start, end, "end");
                textarea.setSelectionRange(start, end - 2);
            } else if (start >= 1 && MarkdownConfig.STRICT.ITALIC.test(textarea.value.substring(start - 1, end + 1))) {
                textarea.setRangeText(selectedText, start - 1, end + 1, "end");
                textarea.setSelectionRange(start - 1, end - 1);
            } else {
                textarea.setRangeText(`_${selectedText}_`, start, end, "end");
                textarea.setSelectionRange(start + 1, end + 1);
            }

            textarea.focus();
            this._notifyChange();
        });
    }

    /**
     * @private
     * @description Checks if the text editor is in preview mode
     * @returns {boolean} True if the text editor is in preview mode, false otherwise
     */
    _isPreviewMode() {
        return this._container.querySelector("button[data-tab='preview']").classList.contains("selected");
    }

    /**
     * @private
     * @description Notifies when content has changed
     * @returns {void}
     */
    _notifyChange() {
        if (this._onChangeCallback) {
            this._onChangeCallback(this.getTextarea().value);
        }
    }

    /**
     * @public
     * @description Returns the container of the text editor
     * @returns {HTMLDivElement} The container of the text editor
     */
    render() {
        return this._container;
    }

    /**
     * @public
     * @description Returns the textarea element of the text editor
     * @returns {HTMLTextAreaElement} The textarea element of the text editor
     */
    getTextarea() {
        return this._container.querySelector("textarea[role='textarea']");
    }

    /**
     * @public
     * @description Updates the preview section of the text editor with the markdown content
     * @returns {void}
     */
    updatePreview() {
        const parser = new MarkdownParser({ heading: this._headingAllowed, bold: this._boldAllowed, italic: this._italicAllowed });
        const markdown = this._container.querySelector("textarea[role='textarea']").value;
        const preview = this._container.querySelector("div[data-tab='preview']");
        preview.innerHTML = markdown ? parser.parseMarkdown(markdown) : "Nothing to preview";
    }

     /**
     * @public
     * @description Sets a callback to be called when the content changes
     * @param {Function} callback 
     * @returns {void}
     */
     setOnChangeCallback(callback) {
        this._onChangeCallback = callback;
    }
}

export default TextEditorTool;