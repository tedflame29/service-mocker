const path = require('path');
const webpack = require('webpack');
const Server = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new Server(webpack(config), {
  quiet: true,
  contentBase: path.join(__dirname, '..', 'test'),
  publicPath: config.output.publicPath,
}).listen(3000, '0.0.0.0');