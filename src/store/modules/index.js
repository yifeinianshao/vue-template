const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
    if (key === './index.js') return
    if (!files(key).default) return
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
