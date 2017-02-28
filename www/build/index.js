const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevServer = require('webpack-dev-server');

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler);
const port = process.env.PORT || 3000;
server.listen(port);
console.log(`listen ${port} port success!`);
