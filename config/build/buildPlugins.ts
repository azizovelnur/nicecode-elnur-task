import { Configuration } from "webpack"
import { BuildOptions } from "./types/types"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildPlugins({
  paths,
}: BuildOptions): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ]
}
