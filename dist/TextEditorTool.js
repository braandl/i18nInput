"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _MarkdownParser = _interopRequireDefault(require("./MarkdownParser.js"));
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
 * @note The `options.inputStyleClass` parameter may affect the styling of the text editor. 
 * It is recommended to override the styles in your CSS file rather than adding predefined styles to the class.
 * 
 * @author Andrei Chiriac
 * @version 1.0
 */
var TextEditorTool = /*#__PURE__*/function () {
  function TextEditorTool(_ref) {
    var _rules$heading, _rules$bold, _rules$italic;
    var _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      _ref$inputStyleClass = _ref.inputStyleClass,
      inputStyleClass = _ref$inputStyleClass === void 0 ? "input-class" : _ref$inputStyleClass,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 3 : _ref$rows,
      _ref$rules = _ref.rules,
      rules = _ref$rules === void 0 ? {} : _ref$rules;
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
    this._headingAllowed = (_rules$heading = rules === null || rules === void 0 ? void 0 : rules.heading) !== null && _rules$heading !== void 0 ? _rules$heading : true;
    this._boldAllowed = (_rules$bold = rules === null || rules === void 0 ? void 0 : rules.bold) !== null && _rules$bold !== void 0 ? _rules$bold : true;
    this._italicAllowed = (_rules$italic = rules === null || rules === void 0 ? void 0 : rules.italic) !== null && _rules$italic !== void 0 ? _rules$italic : true;
    this._createElement();
    this._addButtons();
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
      this._container.innerHTML = "\n            <header role=\"header\">\n                <nav role=\"tablist\" style=\"margin-bottom: -1px\">\n                    <button type=\"button\" class=\"".concat(this._inputStyleClass, "\" role=\"tabnav-tab\" data-tab=\"write\" aria-selected=\"true\">Write</button>\n                    <button type=\"button\" class=\"").concat(this._inputStyleClass, "\" role=\"tabnav-tab\" data-tab=\"preview\" aria-selected=\"false\">Preview</button>\n                </nav>\n                <div class=\"text-editor-toolbar\" role=\"toolbar\"></div>\n            </header>\n            <section role=\"content\">\n                <div class=\"").concat(this._inputStyleClass, " form-control d-none\" role=\"tabpanel\" data-tab=\"preview\">\n                    Nothing to preview\n                </div>\n                <div class=\"").concat(this._inputStyleClass, "\" role=\"tabpanel\" data-tab=\"write\">\n                    <textarea class=\"").concat(this._inputStyleClass, " form-control\" placeholder=\"").concat(this._placeholder, "\" role=\"textarea\" name=\"markdown\" style=\"min-height: 10em\" rows='").concat(this._rows, "'></textarea>\n                </div>\n            </section>\n        ");
    }

    /**
     * @private
     * @description Adds the buttons to the text editor toolbar based on the configuration options
     * @returns {void}
     */
  }, {
    key: "_addButtons",
    value: function _addButtons() {
      var tooblar = this._container.getElementsByClassName("text-editor-toolbar")[0];
      if (this._headingAllowed) {
        var headingButton = document.createElement("button");
        headingButton.title = "Heading";
        headingButton.className = this._inputStyleClass;
        headingButton.setAttribute("role", "heading-btn");
        headingButton.type = "button";
        headingButton.textContent = "H";
        tooblar.appendChild(headingButton);
      }
      if (this._boldAllowed) {
        var boldButton = document.createElement("button");
        boldButton.title = "Bold";
        boldButton.className = this._inputStyleClass;
        boldButton.setAttribute("role", "bold-btn");
        boldButton.type = "button";
        boldButton.innerHTML = "<strong>B</strong>";
        tooblar.appendChild(boldButton);
      }
      if (this._italicAllowed) {
        var italicButton = document.createElement("button");
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
  }, {
    key: "_setupEventListeners",
    value: function _setupEventListeners() {
      var _this = this,
        _this$_container$quer,
        _this$_container$quer2,
        _this$_container$quer3;
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
            _this.updatePreview();
          }
        });
      });

      /* Heading */
      (_this$_container$quer = this._container.querySelector(HEADING_BUTTON_SELECTOR)) === null || _this$_container$quer === void 0 || _this$_container$quer.addEventListener("click", function (event) {
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
      (_this$_container$quer2 = this._container.querySelector(BOLD_BUTTON_SELECTOR)) === null || _this$_container$quer2 === void 0 || _this$_container$quer2.addEventListener("click", function (event) {
        if (_this._isPreviewMode()) return;
        var textarea = _this._container.querySelector(TEXTAREA_SELECTOR);
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = "**".concat(selectedText, "**");
        textarea.setRangeText(newText, start, end, "end");
        textarea.focus();
        textarea.setSelectionRange(start + 2, end + 2);
      });

      /* Italic */
      (_this$_container$quer3 = this._container.querySelector(ITALIC_BUTTON_SELECTOR)) === null || _this$_container$quer3 === void 0 || _this$_container$quer3.addEventListener("click", function (event) {
        if (_this._isPreviewMode()) return;
        var textarea = _this._container.querySelector(TEXTAREA_SELECTOR);
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        var selectedText = textarea.value.substring(start, end);
        var newText = "_".concat(selectedText, "_");
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
  }, {
    key: "_isPreviewMode",
    value: function _isPreviewMode() {
      return this._container.querySelector("button[data-tab='preview']").classList.contains("selected");
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

    /**
     * @public
     * @description Updates the preview section of the text editor with the markdown content
     * @returns {void}
     */
  }, {
    key: "updatePreview",
    value: function updatePreview() {
      var parser = new _MarkdownParser["default"]({
        heading: this._headingAllowed,
        bold: this._boldAllowed,
        italic: this._italicAllowed
      });
      var markdown = this._container.querySelector("textarea[role='textarea']").value;
      var preview = this._container.querySelector("div[data-tab='preview']");
      preview.innerHTML = markdown ? parser.parseMarkdown(markdown) : "Nothing to preview";
    }
  }]);
}();
var _default = exports["default"] = TextEditorTool;