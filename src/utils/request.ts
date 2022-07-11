import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = Axios.create({
  baseURL:
    import.meta.env.MODE === 'development'
      ? 'https://mock.apifox.cn/m1/1266439-0-default'
      : 'https://tuapi.eees.cc/api.php',
  timeout: 10000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config && config.headers) {
      config.headers['fpc-token'] = 'fpcToken'
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg, data } = response.data
    if (code === 0) {
      return Promise.resolve(data)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
