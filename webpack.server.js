/*eslint-disable no-var, one-var, func-names, indent, prefer-arrow-callback, prefer-template, object-shorthand, no-console, newline-per-chained-call, one-var-declaration-per-line, vars-on-top */
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = require('./webpack.config.js');

function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    if (interfaces.hasOwnProperty(devName)) {
      var iface = interfaces[devName];

      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }

  return '0.0.0.0';
}

config.devtool = 'eval';
config.entry.bundle = [
  'webpack-dev-server/client?http://localhost:3030',
  'webpack/hot/dev-server',
  config.entry['/scripts/app'][0]
];

config.module.loaders[0].loaders.unshift('react-hot');
config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new BrowserSyncPlugin({
    host: getIPAddress(),
    port: 3000,
    notify: true,
    logPrefix: 'sia',
    proxy: 'http://localhost:3030'
  }, {
    reload: false
  })
);

var bundleStart = null;
var compiler = webpack(config);

// We give notice in the terminal when it starts bundling and
// set the time it started
compiler.plugin('compile', function() {
  console.log('Bundling...');
  bundleStart = Date.now();
});

// We also give notice when it is done compiling, including the
// time it took. Nice to have
compiler.plugin('done', function() {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'app'),
  publicPath: '/',
  // in handy in more complicated setups.
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3030, 'localhost', function(err, result) {
  if (err) {
    console.log('err', err);
  }
});
