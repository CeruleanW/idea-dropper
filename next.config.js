module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};

// const withStories = require('@component-controls/nextjs-plugin/build');
// module.exports = withStories({
//   future: {
//     webpack5: true, //use webpack 5 for nextjs
//   },
//   configPath: '.storybook',
// });