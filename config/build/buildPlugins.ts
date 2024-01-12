import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import Dotenv from 'dotenv-webpack'

export function buildPlugins ({
  paths, isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    }),
    new Dotenv()
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }))
  }
  return plugins
}
