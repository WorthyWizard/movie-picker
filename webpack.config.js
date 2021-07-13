const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    overlay: true,
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.module\.css$/i,
        use: ["style-loader", {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]__[sha1:hash:hex:5]'
            }
          }
        }]
      },
      {
        test: /^((?!\.module).)*css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|ttf|ico|svg)$/,
        exclude: '/node_modules/',
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}

module.exports = (env, options) => {
  let isProd = options.mode === 'production';
  config.devtool = isProd ? false : 'eval-cheap-module-source-map';
  config.target = isProd ? 'browserslist' : 'web';
  return config;
}