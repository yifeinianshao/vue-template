import axios from 'axios'

// process.env.NODE_ENV
// axios.defaults.baseURL = ''
// axios.defaults.headers.common['Authorization'] = 'Bearer' + 'AUTH_TOKEN'

axios.interceptors.request.use(config => {
    // Do something before request is sent

    return config
})

axios.interceptors.response.use(response => {
    // Do something with response data

    return response.data
}, error => {
    return Promise.reject(error.response.data)
})

export default axios
