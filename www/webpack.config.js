require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin('[name].style.css')

const htmlWebpackPluginOptions = {
  title: process.env.LOGO,
  excludeChunks: ['editor'],
  template: 'code/index.ejs',
  // favicon: ''
}

if (process.env.SENTRY && !process.env.DEV) {
  htmlWebpackPluginOptions.sentry = process.env.SENTRY
  htmlWebpackPluginOptions.sentry_release = Date.now()
}

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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      },
      GLOBALS: JSON.stringify({
        LOGO: process.env.LOGO || '',
        AVATAR_URL: process.env.AVATAR_URL || '',
      })
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginOptions),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    extractCSS,
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
  ],
  devServer: {
    proxy: {
      '/api/**': {
        target: process.env.PROXY_HOST,
        pathRewrite: {'^/api' : ''},
        autoRewrite: !!process.env.PROXY_CORS,
        changeOrigin: !!process.env.PROXY_CORS,
      }
    },
    port: process.env.PORT || 3001,
  },
  devtool: process.env.DEV ? 'inline-source-map' : 'source-map'
}
