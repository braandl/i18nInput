"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var TextEditorTool = /*#__PURE__*/function () {
  function TextEditorTool(_ref) {
    var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      _ref$inputStyleClass = _ref.inputStyleClass,
      inputStyleClass = _ref$inputStyleClass === void 0 ? "input-class" : _ref$inputStyleClass,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 3 : _ref$rows;
    (0, _classCallCheck2["default"])(this, TextEditorTool);
    /** @private */
    this._placeholder = placeholder;
    /** @private */
    this._inputStyleClass = inputStyleClass;
    /** @private */
    this._rows = rows;
    /** @private */
    this._container = document.createElement("div");
    this._container.className = "".concat(this._inputStyleClass);
    this._container.setAttribute("role", "i18ninput-textarea-editor");
    this._createElement();
    this._setupEventListeners();
  }

  /**
   * @private
   * @description Creates the HTML structure of the text editor
   * @returns {void}
   */
  return (0, _createClass2["default"])(TextEditorTool, [{
    key: "_createElement",
    value: function _createElement() {
      this._container.innerHTML = "\n            <header role=\"header\">\n                <nav role=\"tablist\" style=\"margin-bottom: -1px\">\n                    <button type=\"button\" class=\"".concat(this._inputStyleClass, "\" role=\"tabnav-tab\" data-tab=\"write\" aria-selected=\"true\">Write</button>\n                    <button type=\"button\" class=\"").concat(this._inputStyleClass, "\" role=\"tabnav-tab\" data-tab=\"preview\" aria-selected=\"false\">Preview</button>\n                </nav>\n                <div role=\"toolbar\">\n                    <button title=\"Heading\" class=\"").concat(this._inputStyleClass, "\" role=\"heading-btn\" type=\"button\">H</button>\n                    <button title=\"Bold\" class=\"").concat(this._inputStyleClass, "\" role=\"bold-btn\" type=\"button\"><strong>B</strong></button>\n                    <button title=\"Italic\" class=\"").concat(this._inputStyleClass, "\" role=\"italic-btn\" type=\"button\"><em>I</em></button>\n                </div>\n            </header>\n            <section role=\"content\">\n                <div class=\"").concat(this._inputStyleClass, " form-control d-none\" role=\"tabpanel\" data-tab=\"preview\">\n                    Nothing to preview\n                </div>\n                <div class=\"").concat(this._inputStyleClass, "\" role=\"tabpanel\" data-tab=\"write\">\n                    <textarea class=\"").concat(this._inputStyleClass, " form-control\" placeholder=\"").concat(this._placeholder, "\" role=\"textarea\" name=\"markdown\" style=\"min-height: 10em\" rows='").concat(this._rows, "'></textarea>\n                </div>\n            </section>\n        ");
    }

    /**
     * @private
     * @description Sets up the event listeners for the text editor
     * @returns {void}
     */
  }, {
    key: "_setupEventListeners",
    value: function _setupEventListeners() {
      var _this = this;
      var BUTTON_SELECTOR = "button[role='tabnav-tab']";
      var SECTION_SELECTOR = "div[role='tabpanel']";
      var TEXTAREA_SELECTOR = "textarea[role='textarea']";
      var HEADING_BUTTON_SELECTOR = "button[role='heading-btn']";
      var BOLD_BUTTON_SELECTOR = "button[role='bold-btn']";
      var ITALIC_BUTTON_SELECTOR = "button[role='italic-btn']";
      this._container.querySelector("".concat(SECTION_SELECTOR, "[data-tab=\"preview\"]")).classList.add("d-none");
      this._container.querySelector("".concat(SECTION_SELECTOR, "[data-tab=\"write\"]")).classList.remove("d-none");
      this._container.querySelectorAll(BUTTON_SELECTOR).forEach(function (button) {
        button.addEventListener("click", function (event) {
          var parent = event.target.closest("div[role='i18ninput-textarea-editor']");
          var buttons = parent.querySelectorAll(BUTTON_SELECTOR);
          var sections = parent.querySelectorAll(SECTION_SELECTOR);
          buttons.forEach(function (button) {
            button.classList.remove("selected");
            button.setAttribute("aria-selected", "false");
          });
          sections.forEach(function (section) {
            section.classList.add("d-none");
          });
          event.target.classList.add("selected");
          event.target.setAttribute("aria-selected", "true");
          var selectedSection = parent.querySelector("".concat(SECTION_SELECTOR, "[data-tab=\"").concat(event.target.dataset.tab, "\"]"));
          selectedSection.classList.remove("d-none");
          selectedSection.setAttribute("aria-selected", "true");
          if (event.target.dataset.tab === "preview") {
            var markdown = parent.querySelector(TEXTAREA_SELECTOR).value;
            var preview = parent.querySelector("".concat(SECTION_SELECTOR, "[data-tab=\"preview\"]"));
            if (markdown) {
              preview.innerHTML = _this._parseMarkdownToHTML(markdown);
            } else {
              preview.innerHTML = "Kein Text zum Vorschauen";
            }
          }
        });
      });

      /* Heading */
      this._container.querySelector(HEADING_BUTTON_SELECTOR).addEventListener("click", function (event) {
        if (_this._isPreviewMode()) return;
        var textarea = _this._container.querySelector(TEXTAREA_SELECTOR);
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = "### ".concat(selectedText);
        textarea.setRangeText(newText, start, end, "end");
        textarea.focus();
      });

      /* Bold */
      this._container.querySelector(BOLD_BUTTON_SELECTOR).addEventListener("click", function (event) {
        if (_this._isPreviewMode()) return;
        var textarea = _this._container.querySelector(TEXTAREA_SELECTOR);
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = "**".concat(selectedText, "**");
        textarea.setRangeText(newText, start, end, "end");
        textarea.focus();
        textarea.setSelectionRange(start + 2, end + 2 + selectedText.length);
      });

      /* Italic */
      this._container.querySelector(ITALIC_BUTTON_SELECTOR).addEventListener("click", function (event) {
        if (_this._isPreviewMode()) return;
        var textarea = _this._container.querySelector(TEXTAREA_SELECTOR);
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = "*".concat(selectedText, "*");
        textarea.setRangeText(newText, start, end, "end");
        textarea.focus();
        textarea.setSelectionRange(start + 1, end + 1 + selectedText.length);
      });
    }

    /**
     * @private
     * @description Checks if the text editor is in preview mode
     * @returns {boolean} True if the text editor is in preview mode, false otherwise
     */
  }, {
    key: "_isPreviewMode",
    value: function _isPreviewMode() {
      return this._container.querySelector("button[data-tab='preview']").classList.contains("selected");
    }

    /**
     * @private
     * @description Parses markdown to HTML
     * @param {string} markdown - The markdown to parse
     * @returns {string} The HTML representation of the markdown 
     */
  }, {
    key: "_parseMarkdownToHTML",
    value: function _parseMarkdownToHTML(markdown) {
      // Convert headings
      var html = markdown.replace(/^### (.*$)/gim, '<h3 style="font-weight: 600; margin: 0;">$1</h3>');
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
  }, {
    key: "render",
    value: function render() {
      return this._container;
    }

    /**
     * @public
     * @description Returns the textarea element of the text editor
     * @returns {HTMLTextAreaElement} The textarea element of the text editor
     */
  }, {
    key: "getTextarea",
    value: function getTextarea() {
      return this._container.querySelector("textarea[role='textarea']");
    }
  }]);
}();
var _default = exports["default"] = TextEditorTool;