const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { dirTree, docsFiles } = require("./docs-init");

const BUILD_DIR = path.join(__dirname, "../build");
const LIB_DIR = path.join(__dirname, "../client");

module.exports = {
  entry: path.join(__dirname, "injectTest.js"),
  output: {
    path: BUILD_DIR,
    filename: "injectTest.js",
    clean: true,
  },
  devServer: {
    static: {
      directory: LIB_DIR,
    },
    // compress: true,
    port: 8080,
    // hot: true,
  },
  mode: "development",
  stats: {
    assets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    entrypoints: false,
    hash: false,
    modules: false,
    timings: false,
    version: false,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //       },
  //     },
  //     {
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: "style-loader",
  //         },
  //         {
  //           loader: "css-loader",
  //         },
  //       ],
  //     },
  //   ],
  // },
  plugins: [
    new webpack.DefinePlugin({
      __MY_TEST__: JSON.stringify(docsFiles),
      // __DIR_TREE__: JSON.stringify(dirTree),
      // __DOCS_FILES__: JSON.stringify(docsFiles),
    }),
    new HtmlWebPackPlugin({
      template: path.join(LIB_DIR, "index.html"),
      inject: "body",
      // inject: "head",
    }),
  ],
};
