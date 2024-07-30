module.exports = function(eleventyConfig) {
    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy("src/css");
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget("src/css");
  
    // Copy node_modules/bootstrap/dist/js/bootstrap.min.js to _site/js/bootstrap.min.js
    eleventyConfig.addPassthroughCopy({"node_modules/bootstrap/dist/js/bootstrap.min.js": "js/bootstrap.min.js"});
  
    // Copy node_modules/@popperjs/core/dist/umd/popper.min.js to _site/js/popper.min.js
    eleventyConfig.addPassthroughCopy({"node_modules/@popperjs/core/dist/umd/popper.min.js": "js/popper.min.js"});
  
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };