#!/usr/bin/env node

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config");
console.log("test");
console.log(__dirname);

// *** PROBLEMS WITH NODEMON

// const nodemon = require("nodemon");
// const path = require("path");
// console.log("Starting the dev web server...");

// console.log("nodemon", Boolean(nodemon));

// nodemon({
//   watch: [`${process.cwd()}/**/*`],
//   ext: "md",
//   ignore: ["node_modules/", "README.md"],
//   quiet: "true",
//   exec: `webpack serve --mode=development --config \"${path.join(
//     __dirname,
//     "webpack.config.js"
//   )}\"`,
// });
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
