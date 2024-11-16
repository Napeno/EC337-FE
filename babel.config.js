const Dotenv = require('dotenv-webpack');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["nativewind/babel", {
        config: {
          path: ".env",
          prefix: "process.env."
        }
      }],
      "react-native-reanimated/plugin",
    ],
  };
};
