// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './build',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
    })
  ]
}
