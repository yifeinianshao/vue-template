const merge = require('webpack-merge')
const portfinder = require('portfinder')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConf = require('./webpack.base.conf')
const { development } = require('../config')

const devWebpackConfig = merge(baseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        https: false,
        port: development.port,
        open: false,
        proxy: {}
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = development.port
    portfinder.getPort((err, newPort) => {
        if (err) {
            reject(err)
        } else {
            devWebpackConfig.devServer.port = newPort
            resolve(devWebpackConfig)
        }
    })
})
