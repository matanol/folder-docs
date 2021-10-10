const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const getWebpackConfig = require("./getWebpackConfig");

const webpackConfig = getWebpackConfig();

const server = new WebpackDevServer(
  webpack(webpackConfig),
  webpackConfig.devServer
);

server.start();
