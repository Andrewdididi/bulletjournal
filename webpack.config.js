const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.(jsx|js)?$/,
      loaders: ['babel-loader'],
      include: SRC_DIR,
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    },
    { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[name].[ext]' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  devServer: {
    inline: true,
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true,
  },
};
