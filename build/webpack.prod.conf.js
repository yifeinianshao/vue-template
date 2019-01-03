const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConf = require('./webpack.base.conf')
const { production } = require('../config')

module.exports = merge(baseConf, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendors'
        }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new CleanWebpackPlugin([production.outputFile], {
            root: path.resolve(__dirname, '..')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash:7].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '..', `${production.outputFile}/index.html`),
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
})
