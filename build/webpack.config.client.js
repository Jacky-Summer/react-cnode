const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ],
  devtool: 'inline-source-map'
})

if (isDev) {
  config.entry = {
    app: ['react-hot-loader/patch', path.join(__dirname, '../client/app.js')]
  }
  config.devServer = {
    host: '0.0.0.0', // 对于所有的网络设备都是可用的
    port: 8888,
    contentBase: path.join(__dirname, '../dist'), // 告诉服务器从哪个目录中提供内容
    hot: true,
    overlay: {
      errors: true //  //server有任何的错误，则在网页中蒙层加提示
    },
    publicPath: '/public/', // 此路径下的打包文件可在浏览器中访问
    historyApiFallback: {
      index: '/public/index.html' // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    }
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
