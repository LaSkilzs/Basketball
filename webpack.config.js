const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./src/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.css$/, use: ["css-loader", "style-loader"] },
      { test: /\.(png|jpg|jpeg|gif)$/, use: "file-loader" }
    ]
  },
  devServer: {
    hot: true,
    port: 3000,
    contentBase: "./",
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
