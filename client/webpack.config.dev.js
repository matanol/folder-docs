const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { dirTree, docsFiles } = require("../scripts/docs-init");

const BUILD_DIR = path.resolve(__dirname, "build");

module.exports = {
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    alias: {
      react: path.join(__dirname, "node_modules", "react"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
  },
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      __DIR_TREE__: JSON.stringify(dirTree),
      __DOCS_FILES__: JSON.stringify(docsFiles),
    }),
  ],
};
