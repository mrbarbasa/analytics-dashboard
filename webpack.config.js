const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: root,
    extensions: ['', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules']
  },
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
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/,
        include: root
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          `sass?sourceMap&includePaths[]=${root}/assets/scss`
        ],
        exclude: /node_modules/,
        include: root
      }
    ]
  }
};