const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(config, {
  mode : 'development',
  output : {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].js',
    assetModuleFilename: 'img/[hash][ext]',
    clean: true,
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
        },
      }),
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[contenthash].css'
  })]
});