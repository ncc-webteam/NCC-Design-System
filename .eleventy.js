let Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/img/");

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes")
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "public"
    },

    pathPrefix: "/Eleventy-testing/public/"
  };
};
