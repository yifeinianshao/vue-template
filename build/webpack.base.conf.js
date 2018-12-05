const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const { production } = require('../config')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: resolve(production.outputFile),
        filename: 'scripts/[name].[hash:7].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.styl'],
        alias: {
            'src': resolve('src'),
            'styl': resolve('src/assets/stylus'),
            'img': resolve('src/assets/image')
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
                include: [resolve('src')]
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
