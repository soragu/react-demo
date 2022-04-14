// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const path = require('path')
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const htmlWebpackPlugin = require('html-webpack-plugin')
// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const webpack = require('webpack')

const htmlPlugin = new htmlWebpackPlugin({
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:5].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name '__dirname'.
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

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = config
