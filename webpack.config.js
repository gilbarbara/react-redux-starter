/*eslint-disable no-var, one-var, func-names, indent, prefer-arrow-callback, object-shorthand, no-console, newline-per-chained-call, one-var-declaration-per-line, prefer-template, vars-on-top */
var path         = require('path'),
    autoprefixer = require('autoprefixer'),
    webpack      = require('webpack'),
    CleanPlugin  = require('clean-webpack-plugin'),
    ExtractText  = require('extract-text-webpack-plugin'),
    HtmlPlugin   = require('html-webpack-plugin'),
    CopyPlugin   = require('copy-webpack-plugin');

var build = process.env.NODE_ENV === 'production';

var cssLoaders = 'css!postcss?pack=custom!sass';

var plugins = [
  new webpack.NoErrorsPlugin()
];

if (build) {
  plugins = plugins.concat([
    new CleanPlugin(['dist'], { verbose: false }),
    new CopyPlugin([
      { from: './app/robots.txt' }
    ]),
    new ExtractText('styles/app.[hash].css'),
    new HtmlPlugin({
      inject: false,
      template: './index.ejs',
      title: 'React-Starter',
      appMountId: 'react',
      mobile: true,
      favicon: './favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
}

module.exports = {
  context: path.join(__dirname, 'app'),
  resolve: {
    alias: {
      modernizr$: path.resolve(__dirname, './.modernizrrc')
    },
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  entry: {
    'scripts/app': './scripts/main.js',
    'scripts/vendor/modernizr': './scripts/vendor/modernizr-custom.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
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
        loader: build ? ExtractText.extract(cssLoaders) : 'style!' + cssLoaders
      },
      {
        test: /fonts\/.*\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&minetype=application/font-woff' + (build ? '&name=/fonts/[name].[ext]' : '')
      },
      {
        test: /fonts\/.*\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file' + (build ? '?name=/fonts/[name].[ext]' : '')
      },
      {
        test: /media\/.*\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex' + (build ? '&name=/[path][name].[ext]' : ''),
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.modernizrrc$/,
        loader: 'modernizr'
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
    includePaths: [path.join(__dirname, 'node_modules')],
    sourceMap: true,
    sourceMapContents: true
  },
  cssLoader: {
    minification: build,
    sourceMap: true
  }
};
