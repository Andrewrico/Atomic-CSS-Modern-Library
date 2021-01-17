const site = require('./src/_data/site.json');
const fs = require("fs");
const Terser = require("terser");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const dateFilter = require('./src/filters/date-filter.js');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');
const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");
var markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = function (config) {
  config.addPlugin(markdownShortcode, {
    html: true,
    njk: true,
    linkify: true,
  });

  // Alias
  config.addLayoutAlias('homepage', 'page/homepage.njk');

  // HTML min
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);
  
  // Passthrough
  config.addPassthroughCopy("src/icons");
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/static");
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('src/admin/config.yml');
  config.addPassthroughCopy('src/admin/previews.js');
  config.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');
  
  // Collection
  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse();
  });
  config.addCollection('postFeed', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse().slice(0, site.maxPostsPerPage);
  });

  // Plugin
  config.addPlugin(embedYouTube);
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

   /* Markdown Overrides */
   let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  config.setLibrary("md", markdownLibrary);

  // BrowserSync
  config.setBrowserSyncConfig({
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
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);
  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  config.addFilter("jsmin", function (code) {
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
      "html"
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