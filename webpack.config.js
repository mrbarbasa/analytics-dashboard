const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.resolve(__dirname, 'src');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: root,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  }
};