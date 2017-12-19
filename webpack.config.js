var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    'main': ['babel-polyfill'],
    'react-basic': './react-basic/src/index.js',
    'react-state': './react-state/src/index.jsx',
    'react-prop-types': './react-prop-types/src/index.jsx',
    'react-lifecycle': './react-lifecycle/src/index.jsx',
    'react-redux': './react-redux/src/index.jsx',
    // 'react-deep-state': './react-deep-state/src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
