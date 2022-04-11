const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const htmlPlugin = new htmlWebpackPlugin({
  template: path.join(__dirname, './public/index.html'),
  filename: 'index.html',
})

const hmrPlugin = new webpack.HotModuleReplacementPlugin()

const config = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, '__tests__')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    // publicPath: '/',
    historyApiFallback: true,
    proxy: {
      // api fox mock
      '/api': {
        target: 'http://127.0.0.1:4523/mock/793873',
        pathRewrite: { '/api': '' },
        changeOrigin: true,
      },
    },
  },
  plugins: [htmlPlugin, hmrPlugin],
}

module.exports = config
