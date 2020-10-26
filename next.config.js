// const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
module.exports = withCSS({})
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
})
// const withImages = require('next-images')
// module.exports = withImages({})

// const withFonts = require('next-fonts');
// const withImages = require('next-images');
// const withPlugins = require("next-compose-plugins");
// module.exports = withFonts({})
// module.exports = withPlugins({});

const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withFonts, withImages]);




// const withCSS = require('@zeit/next-css');
// const withFonts = require('next-fonts');
// const withImages = require('next-images');
// const withPlugins = require("next-compose-plugins");module.exports = withPlugins([withCSS, withFonts, withImages]);