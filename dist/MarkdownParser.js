"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MarkdownConfig = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var MarkdownConfig = {
  RULES: {
    HEADING: /^### (.*)/m,
    BOLD: /\*\*(.*?)\*\*/gm,
    ITALIC: /_(.*?)_/gm,
    LINE_BREAK: /\n/g
  },
  STRICT: {
    BOLD: /^\*\*(.*?)\*\*/gm,
    ITALIC: /^_(.*?)_/gm
  },
  HTML: {
    HEADING: '<h3 style="font-weight: 600; margin: 0;">$1</h3>',
    BOLD: '<strong>$1</strong>',
    ITALIC: '<em>$1</em>',
    LINE_BREAK: '<br>'
  }
};
/**
 * @class MarkdownParser
 * @description A class that parses markdown to HTML
 * @param {Object} options
 * @param {boolean} options.heading - Whether headings are allowed
 * @param {boolean} options.bold - Whether bold text is allowed
 * @param {boolean} options.italic - Whether italic text is allowed
 * @example
 * const parser = new MarkdownParser({ heading: true, bold: true, italic: true });
 * const markdown = '### Hello, world!';
 * const html = parser.parseMarkdown(markdown);
 * console.log(html); // <h3 style="font-weight: 600; margin: 0;">Hello, world!</h3>
 * 
 * @author Andrei Chiriac
 * @version 1.0
 */

exports.MarkdownConfig = MarkdownConfig;

var MarkdownParser = /*#__PURE__*/function () {
  function MarkdownParser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, MarkdownParser);
    var _options$heading = options.heading,
        heading = _options$heading === void 0 ? true : _options$heading,
        _options$bold = options.bold,
        bold = _options$bold === void 0 ? true : _options$bold,
        _options$italic = options.italic,
        italic = _options$italic === void 0 ? true : _options$italic;
    /** @private */

    this._headingAllowed = heading;
    /** @private */

    this._boldAllowed = bold;
    /** @private */

    this._italicAllowed = italic;
  }
  /**
   * @public
   * @description Parses markdown to HTML. It handles headings, bold, italic, and line breaks.
   * @param {string} markdown 
   */


  (0, _createClass2["default"])(MarkdownParser, [{
    key: "parseMarkdown",
    value: function parseMarkdown(markdown) {
      if (!markdown) return '';
      var html = markdown;
      html = this._parseHeading(html);
      html = this._parseBold(html);
      html = this._parseItalic(html);
      html = this._parseLineBreaks(html);
      return html;
    }
    /**
     * @private
     * @description Parses markdown headings to HTML
     * @param {string} markdown 
     */

  }, {
    key: "_parseHeading",
    value: function _parseHeading(markdown) {
      if (!this._headingAllowed) return markdown;
      return markdown.replace(MarkdownConfig.RULES.HEADING, MarkdownConfig.HTML.HEADING);
    }
    /**
     * @private
     * @description Parses bold markdown to HTML
     * @param {string} markdown 
     */

  }, {
    key: "_parseBold",
    value: function _parseBold(markdown) {
      if (!this._boldAllowed) return markdown;
      return markdown.replace(MarkdownConfig.RULES.BOLD, MarkdownConfig.HTML.BOLD);
    }
    /**
     * @private
     * @description Parses italic markdown to HTML
     * @param {string} markdown 
     */

  }, {
    key: "_parseItalic",
    value: function _parseItalic(markdown) {
      if (!this._italicAllowed) return markdown;
      return markdown.replace(MarkdownConfig.RULES.ITALIC, MarkdownConfig.HTML.ITALIC);
    }
    /**
     * @private
     * @description Parses markdown line breaks to HTML
     * @param {string} markdown 
     */

  }, {
    key: "_parseLineBreaks",
    value: function _parseLineBreaks(markdown) {
      return markdown.replace(MarkdownConfig.RULES.LINE_BREAK, MarkdownConfig.HTML.LINE_BREAK);
    }
  }]);
  return MarkdownParser;
}();

exports["default"] = MarkdownParser;