const WorkerPlugin = require("worker-plugin");

module.exports = function ({ env }) {
  return {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.plugins.push(new WorkerPlugin());
        return webpackConfig;
      },
    },
  };
};
