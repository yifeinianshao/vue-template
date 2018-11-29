module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 20,
            unitPrecision: 2,
            propWhiteList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 2
        })
    ]
}
