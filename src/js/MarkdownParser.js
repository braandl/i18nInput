export const MarkdownConfig = {
    RULES: {
        HEADING: /^### (.*)/m,
        BOLD: /\*\*(.*?)\*\*/gm,
        ITALIC: /_(.*?)_/gm,
        LINE_BREAK: /\n/g

    },
    STRICT: {
        BOLD: /^\*\*(.*?)\*\*/gm,
        ITALIC: /^_(.*?)_/gm,
    },
    HTML: {
        HEADING: '<h3 style="font-weight: 600; margin: 0;">$1</h3>',
        BOLD: '<strong>$1</strong>',
        ITALIC: '<em>$1</em>',
        LINE_BREAK: '<br>'
    }
}

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
export default class MarkdownParser {
    constructor(options = {}) {
        const {
            heading = true,
            bold = true,
            italic = true
        } = options;

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
    parseMarkdown(markdown) {
        if (!markdown) return '';

        let html = markdown;
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
    _parseHeading(markdown) {
        if (!this._headingAllowed) return markdown;
        return markdown.replace(MarkdownConfig.RULES.HEADING, MarkdownConfig.HTML.HEADING);
    }

    /**
     * @private
     * @description Parses bold markdown to HTML
     * @param {string} markdown 
     */
    _parseBold(markdown) {
        if (!this._boldAllowed) return markdown;
        return markdown.replace(MarkdownConfig.RULES.BOLD, MarkdownConfig.HTML.BOLD);
    }
    
    /**
     * @private
     * @description Parses italic markdown to HTML
     * @param {string} markdown 
     */
    _parseItalic(markdown) {
        if (!this._italicAllowed) return markdown;
        return markdown.replace(MarkdownConfig.RULES.ITALIC, MarkdownConfig.HTML.ITALIC);
    }

    /**
     * @private
     * @description Parses markdown line breaks to HTML
     * @param {string} markdown 
     */
    _parseLineBreaks(markdown) {
        return markdown.replace(MarkdownConfig.RULES.LINE_BREAK, MarkdownConfig.HTML.LINE_BREAK);
    }
}