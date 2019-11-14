const path = require("path");
const rimraf = require("rimraf");

rimraf("dist", res => {
  console.log('dist 缓存清理成功');
});

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, '../', "dist"),
    publicPath: '/'
  },
  mode: "production",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
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
            presets: ["@babel/preset-env"],
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