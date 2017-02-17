'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// must match config.webpack.dev_server.port
var devServerPort = 3808;

var dir_app = path.resolve(__dirname, '../src/js');

var config = {

  debug: true,

  entry: {
    'application'   : dir_app + '/index.js',
    //              'stories'               : './webpack/js/stories/stories.js'             
  },

  output: {
    // Build assets directly in to public/webpack/, let webpack know
    // that all webpacked assets start with webpack/

    // must match config.webpack.output_dir
    path: path.join(__dirname, '..', 'public', 'webpack'),
    filename: '[name].js',
    publicPath: '//localhost:' + devServerPort + '/webpack/'
  },

  resolve: {
    root: path.join(__dirname, '..', 'webpack'),
    extensions: ['', '.js', '.jsx']
  },

  plugins: [

    // must match config.webpack.manifest_filename
    new StatsPlugin('manifest.json', {
      // We only need assetsByChunkName
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true
    }),

    new webpack.ProvidePlugin({
      // TweenLite: "TweenLite",
      // CSSPlugin: "CSSPlugin",
      // EasePack: "EasePack"
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }

      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'file-loader?name=/images/[name].[ext]' 
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  devServer: {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },

  devtool: 'cheap-module-eval-source-map'

};

module.exports = config;

