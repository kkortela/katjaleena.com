'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: path.join(__dirname, '/public/'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }, {
      test: /\.otf$/,
      loader: 'url-loader?limit=10240&mimetype=application/x-font-opentype'
    }, {
      test: /\.jpg$/,
      loader: "url-loader?limit=10000&mimetype=image/jpg"
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=10000&mimetype=image/png"
    }, {
      test: /\.pdf$/,
      loader: "url-loader?limit=1&mimetype=application/pdf"
    }, {
      test: /\.svg$/,
      loader: "svg-url-loader?limit=1024&mimetype=image/svg"
    }]
  }
}
