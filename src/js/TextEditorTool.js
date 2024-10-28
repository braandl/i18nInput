class TextEditorTool {
    constructor({ placeholder = "", inputStyleClass = "input-class", rows = 3 }) {
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

        this._createElement();
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
                <div role="toolbar">
                    <button title="Heading" class="${this._inputStyleClass}" role="heading-btn" type="button">H</button>
                    <button title="Bold" class="${this._inputStyleClass}" role="bold-btn" type="button"><strong>B</strong></button>
                    <button title="Italic" class="${this._inputStyleClass}" role="italic-btn" type="button"><em>I</em></button>
                </div>
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
        this._container.querySelector(HEADING_BUTTON_SELECTOR).addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            const newText = `### ${selectedText}`;

            textarea.setRangeText(newText, start, end, "end");
            textarea.focus();
        });

        /* Bold */
        this._container.querySelector(BOLD_BUTTON_SELECTOR).addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            const newText = `**${selectedText}**`;

            textarea.setRangeText(newText, start, end, "end");
            textarea.focus();
            textarea.setSelectionRange(start + 2, end + 2);
        });

        /* Italic */
        this._container.querySelector(ITALIC_BUTTON_SELECTOR).addEventListener("click", event => {
            if (this._isPreviewMode()) return;

            const textarea = this._container.querySelector(TEXTAREA_SELECTOR);
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const selectedText = textarea.value.substring(start, end);
            const newText = `*${selectedText}*`;

            textarea.setRangeText(newText, start, end, "end");
            textarea.focus();
            textarea.setSelectionRange(start + 1, end + 1);
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
     * @description Parses markdown to HTML
     * @param {string} markdown - The markdown to parse
     * @returns {string} The HTML representation of the markdown 
     */
    _parseMarkdownToHTML(markdown) {
        // Convert headings
        let html = markdown.replace(/^### (.*$)/gim, '<h3 style="font-weight: 600; margin: 0;">$1</h3>');
        // Convert bold text
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert italic text
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Convert new lines
        html = html.replace(/\n/g, '<br>');

        return html;
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
        const markdown = this._container.querySelector("textarea[role='textarea']").value;
        const preview = this._container.querySelector("div[data-tab='preview']");
        preview.innerHTML = markdown ? this._parseMarkdownToHTML(markdown) : "Nothing to preview";
    }
}

export default TextEditorTool;