const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

new HtmlWebpackPlugin({
  template:
})

module.exports = {
  entry: './public/js/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};