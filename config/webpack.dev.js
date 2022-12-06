const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
      static: {
          directory: path.join(__dirname, '../dist')
      },
      host: 'dev-deliver-secret.eigen.com',
      port: 8090,
  },
  performance: {
    hints: false,
  }
});