const path = require("path");
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "./",
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              "@babel/env"
            ],
            plugins: ["dynamic-import-webpack"]
          }
        },
        exclude: /(node_modules|bower_components|npm-package|examples|webpack)/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "static/images",
            name: "[name].[ext]"
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "static/fonts",
            name: "[name].[ext]"
          }
        }]
      }
    ]
  },
  plugins: []
};