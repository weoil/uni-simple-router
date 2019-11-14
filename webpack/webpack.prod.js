const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const rimraf = require("rimraf");

const ENV=process.env

rimraf("dist", res => {
  console.log('dist 缓存清理成功');
});

module.exports = merge(common, {
 mode: "production",
  output: {
    filename: `uni-simple-router@${ENV.npm_package_version}.js`,
    publicPath: "./",
  },
  plugins: [
    new UglifyJSPlugin(),
  ]
});
