const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

const getWebpackConfig = () => {
  const { dirTree } = require('../../files-loader');

  const BUILD_DIR = path.join(__dirname, '../build');

  // FIXME: FOR PROD AND DEV
  // const LIB_DIR = path.join(__dirname, '../../../client');
  const LIB_DIR = path.join(__dirname, '../../../../lib/client');

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
      hot: 'only',
      open: true,
    },
    watchOptions: {
      ignored: /node_modules/,
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
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader',
            },
            {
              loader: 'markdown-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        __DIR_TREE__: JSON.stringify(dirTree),
        // __DOC_FILES__: JSON.stringify(docFiles),
        __MAIN_DIR__: JSON.stringify(path.join(process.cwd(), '/demo')),
      }),
      new HtmlWebPackPlugin({
        template: path.join(LIB_DIR, 'index.html'),
        inject: 'body',
      }),
      // new WatchExternalFilesPlugin({
      //   files: [`${process.cwd()}/demo/**/*.md`],
      // }),
    ],
  };
};

module.exports = getWebpackConfig;
