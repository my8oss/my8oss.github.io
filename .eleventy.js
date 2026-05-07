const { execSync } = require('child_process');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  
  // ── Custom filters (keep what you need) ────────
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

  // ── Markdown enhancements (optional) ────────────────
  eleventyConfig.amendLibrary('md', (mdLib) => {
    mdLib.use(markdownItAnchor);
    mdLib.use(markdownItAttrs);
    // No callout containers, no Pagefind code
  });

  // ── Static assets ───────────────────────────────────
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/styles");

  // ── Directory config ────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};