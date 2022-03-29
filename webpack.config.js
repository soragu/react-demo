const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

const htmlPlugin = new htmlWebpackPlugin({
  template: path.join(__dirname, "./public/index.html"),
  filename: "index.html"
})

const config = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './dist',
    filename: '[name].[hash:5].js',
    clean: true
  },
	module: {
		rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
		]
	},
    plugins: [
        htmlPlugin
    ]
}

module.exports = config