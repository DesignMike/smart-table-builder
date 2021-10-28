const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require( './config.json' );

const devMode = process.env.NODE_ENV !== 'production';

function resolve (dir) {
  return path.join(__dirname, dir)
}

// Naming and path settings
var appName = 'app';
var entryPoint = {
  admin: './src/admin/main.js',
  style: './assets/less/style.css',
};

var exportPath = path.resolve(__dirname, './assets/js');

// Enviroment flag
var plugins = [];

// extract css into its own file
plugins.push(new MiniCssExtractPlugin({
  filename: '../css/[name].css',
  ignoreOrder: false, // Enable to remove warnings about conflicting order
}));

// enable live reload with browser-sync
// set your WordPress site URL in config.json
// file and uncomment the snippet below.
// --------------------------------------
// plugins.push(new BrowserSyncPlugin( {
//   proxy: {
//     target: config.proxyURL
//   },
//   files: [
//     '**/*.php'
//   ],
//   cors: true,
//   reloadDelay: 0
// } ));


plugins.push(new VueLoaderPlugin());

// Differ settings based on production flag
if ( devMode ) {
  appName = '[name].js';
} else {
  appName = '[name].min.js';
}

module.exports = {
  entry: entryPoint,
  mode: devMode ? 'development' : 'production',
  output: {
    path: exportPath,
    filename: appName,
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('./src/'),
      'frontend': path.resolve('./src/frontend/'),
      'admin': path.resolve('./src/admin/'),
    },
    modules: [
      path.resolve('./node_modules'),
      path.resolve(path.join(__dirname, 'src/')),
    ]
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

  plugins,

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: ['babel-loader','vue-svg-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /(^frontend\.css$)/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                //TailWindCSS(tailwindConfig),
                require('tailwindcss')(resolve('_config/tailwind.config.js')),
                require('postcss-preset-env')({ stage: 1 }),
                require('postcss-prefix-selector')({
                  prefix: '.wptable',
                  exclude: ['.wrap.wptable', '.ui']
                })
              ],
            },
          },
        ],
      },
    ]
  },
}
