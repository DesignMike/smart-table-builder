const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/main.js',
    output: {
      path: isDevelopment ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, '../assets/js'),
      filename: 'frontend.js',
      clean: isDevelopment
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: isDevelopment ? [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ] : [],
    optimization: {
      splitChunks: false,
      runtimeChunk: false,
      minimize: !isDevelopment
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      hot: true
    }
  };
}; 