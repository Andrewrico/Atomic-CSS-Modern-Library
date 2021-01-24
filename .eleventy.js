const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const markdownShortcode = require("eleventy-plugin-markdown-shortcode");
const fs = require("fs");
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
const Terser = require("terser");
const site = require('./src/_data/site.json');
const dateFilter = require('./src/filters/date-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
// const parseTransform = require('./src/transforms/parse-transform.js');

// const htmlMinTransform = require('./src/transforms/html-min-transform.js');
module.exports = function (eleventyConfig) {


  // Alias
  eleventyConfig.addLayoutAlias('homepage', 'page/homepage.njk');
  // HTML min
  // eleventyConfig.addTransform('htmlmin', htmlMinTransform);
  // eleventyConfig.addTransform('parse', parseTransform);
  // Passthrough
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/admin/eleventyConfig.yml');
  eleventyConfig.addPassthroughCopy('src/admin/previews.js');
  eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  // Collection
  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;
  eleventyConfig.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });
  eleventyConfig.addCollection('postFeed', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse().slice(0, site.maxPostsPerPage);
  });
  // Plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(markdownShortcode, {
    html: true,
    njk: true,
    linkify: true,
  });
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  /* Markdown Overrides */
   let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  eleventyConfig.setLibrary("md", markdownLibrary);

  // BrowserSync
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');
        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      }
    }
  });
  // Filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('markdownFilter', markdownFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("Terser error: ", minified.error);
      return code;
    }
    return minified.code;
  });
  // Directories
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "css",
    ],
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "html",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      data: "_data", 
      includes: "_includes"
    },
  };
};