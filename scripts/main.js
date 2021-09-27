const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");
console.log("Starting the dev web server...");

const server = new WebpackDevServer(
  webpack(webpackConfig),
  webpackConfig.devServer
);

server.start();

// webpack(webpackConfig, (err, stats) => {
//   if (err || stats.hasErrors()) {
//     // Handle errors here
//     // console.log(err.errors);
//   }
//   // console.log(stats);
// });
