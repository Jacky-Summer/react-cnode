const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'] // 注意loader的执行顺序为从右到左，eslint-loader需在最右，先进行了eslint验证再进行babel的编译
      }
    ]
  }
}
