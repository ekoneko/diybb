const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevServer = require('webpack-dev-server');

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
  proxy: {
    '/api': {
      target: {
        host: 'localhost',
        protocol: 'http:',
        port: process.env.SERVERPORT || 3000
      },
      pathRewrite: {'^/api' : ''},
    }
  }
});
const port = process.env.PORT || 3001;
server.listen(port);
console.log(`listen ${port} port success!`);
