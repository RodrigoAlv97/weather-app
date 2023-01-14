const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const ruleForFonts = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: "asset/resource",
  generator: {
    filename: "./fonts/[name][ext]"
  }
}

const ruleForImages = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  type: "asset/resource"
}

const rules = [ruleForStyles, ruleForFonts, ruleForImages]

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  module: { rules },
  devServer: {
    open: true,
    port: 3000,
  },
}