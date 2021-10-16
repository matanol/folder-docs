const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const getWebpackConfig = () => {
  const { dirTree, docFiles } = require('../../files-loader');

  const BUILD_DIR = path.join(__dirname, '../build');
  const LIB_DIR = path.join(__dirname, '../../../client');

  return {
    entry: path.join(__dirname, '../injector.js'),
    output: {
      path: BUILD_DIR,
      filename: 'injectTest.js',
      clean: true,
    },
    devServer: {
      static: {
        directory: LIB_DIR,
      },
      port: 8080,
      hot: false,
    },
    mode: 'development',
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: false,
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
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __DIR_TREE__: JSON.stringify(dirTree),
        __DOC_FILES__: JSON.stringify(docFiles),
      }),
      new HtmlWebPackPlugin({
        template: path.join(LIB_DIR, 'index.html'),
        inject: 'body',
      }),
    ],
  };
};

module.exports = getWebpackConfig;
