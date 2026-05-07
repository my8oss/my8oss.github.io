const buildDocsTree = require('./src/_filters/docsTree.js');
const markdownItContainer = require('markdown-it-container');
const markdownItAnchor = require('markdown-it-anchor');
const licenseLink = require('./src/_filters/licenseLink.js');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // ── Custom filters ────────────────────────────
  eleventyConfig.addFilter("licenseLink", licenseLink);

  eleventyConfig.addFilter("startsWith", function(str, prefix) {
    if (!str) return false;
    return str.startsWith(prefix);
  });

  eleventyConfig.addFilter("capitalize", function(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  eleventyConfig.addFilter("year", function() {
    return new Date().getFullYear();
  });

  // ── Docs sidebar tree ─────────────────────────
  eleventyConfig.addFilter("buildDocsTree", buildDocsTree);

  // ── Markdown enhancements ──────────────────────
  eleventyConfig.amendLibrary('md', (mdLib) => {
    // Auto-generate id attributes on headings
    mdLib.use(markdownItAnchor);

    // Callout containers (:::note, :::tip, etc.)
    const types = ['note', 'tip', 'caution', 'danger'];
    types.forEach(type => {
      mdLib.use(markdownItContainer, type, {
        render(tokens, idx) {
          const t = tokens[idx];
          if (t.nesting === 1) {
            const title = t.info.trim().split(' ').slice(1).join(' ') ||
                          type.charAt(0).toUpperCase() + type.slice(1);
            return `<div class="admonition ${type}"><strong>${title}</strong><p>`;
          } else {
            return `</p></div>`;
          }
        }
      });
    });
  });

  // ── Static assets ──────────────────────────────
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/styles");

  // ── Directory config ──────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};