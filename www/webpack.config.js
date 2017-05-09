const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractCSS = new ExtractTextPlugin('[name].style.css');

console.log(path.join(__dirname, 'code'));
module.exports = {
  entry: {
    index: "entries/index",
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].js'
  },
  resolve: {
    root: path.join(__dirname, 'code'),
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'es2016', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      }, {
        test: /\.s?css$/i,
        loader: extractCSS.extract(['css', 'sass'])
      }, {
        test: /\.html$/,
        loader: 'html',
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
    extractCSS
  ],
  devtool: process.env.DEV ? 'inline-source-map' : ''
}

