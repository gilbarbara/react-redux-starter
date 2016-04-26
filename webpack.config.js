/*eslint-disable no-var, one-var, func-names, indent, prefer-arrow-callback, object-shorthand, no-console, newline-per-chained-call, one-var-declaration-per-line, prefer-template, vars-on-top */
var path              = require('path'),
    autoprefixer      = require('autoprefixer'),
    webpack           = require('webpack'),
    CleanPlugin       = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlPlugin        = require('html-webpack-plugin');
//    ScriptExtHtml     = require('script-ext-html-webpack-plugin'),
//    CopyPlugin        = require('copy-webpack-plugin');

var env = process.env.NODE_ENV;

var outputFile = '[name].js';
var outputDir = path.resolve(__dirname);
var cssLoaders = 'css!postcss?pack=custom!sass';

var plugins = [
  new webpack.NoErrorsPlugin()
];

if (env === 'production') {
  outputFile = '[name].min.js';
  outputDir = path.join(__dirname, 'dist');
  plugins = plugins.concat([
    new CleanPlugin(['dist'], { verbose: false }),
    new ExtractTextPlugin('/styles/app.css'),
    new HtmlPlugin({
      inject: false,
      template: './index.ejs',
      title: 'React-Starter',
      appMountId: 'react',
      mobile: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]);
}

module.exports = {
  context: path.join(__dirname, 'app'),
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  entry: {
    '/scripts/app': ['./scripts/main.js']
    // '/scripts/vendor/modernizr': './app/scripts/vendor/modernizr-custom.js'
  },
  output: {
    path: outputDir,
    filename: outputFile
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: env === 'production' ? ExtractTextPlugin.extract(cssLoaders) : 'style!' + cssLoaders
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?name=/[path][name].[ext]&limit=10000&minetype=application/font-woff'
      },
      {
        test: /fonts\/.*\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=/[path][name].[ext]'
      },
      {
        test: /media\/.*\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=/[path][name].[ext]',
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.ico/,
        loader: 'file?name=/[path][name].[ext]'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  postcss: function() {
    return {
      defaults: [autoprefixer],
      custom: [
        autoprefixer({
          browsers: [
            'ie >= 9',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
          ]
        })
      ]
    };
  },
  sassLoader: {
    includePaths: [path.join(__dirname, 'bower_components')],
    sourceMap: true,
    sourceMapContents: true
  },
  cssLoader: {
    minification: env === 'production',
    sourceMap: true
  }
};
