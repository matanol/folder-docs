const getWebpackConfig = require('./getWebpackConfig');

const devServerExecPath = require.resolve('./devServer.js');

module.exports = {
  getWebpackConfig,
  devServerExecPath,
};
