const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin('[name].style.css');

module.exports = {
  entry: {
    vendor: [
      'jquery',
      'initialize-css',
      'bootstrap/dist/js/bootstrap',
      'lodash',
      'whatwg-fetch',
      'react',
    ],
    index: "entries/index",
    editor: "entries/editor",
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js'
  },
  resolve: {
    modules: [path.join(__dirname, 'code'), 'node_modules'],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'es2016', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      }, {
        test: /\.s?css$/i,
        use: extractCSS.extract(['css-loader', 'sass-loader'])
      }, {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize: true
        }
      }, {
        loader: 'file-loader',
        test: /\.(png|jpg|gif|webp|eot|ttf|cur|woff2?|svg)$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DIYBB2',
      // favicon: ''
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
    extractCSS,
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
  ],
  devtool: process.env.DEV ? 'inline-source-map' : ''
}
