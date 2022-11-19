import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request {

    private instance: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use( config => {
            console.log('global interceptor -- requset')
            return config
        }, error => {
            console.error(error) // for debug
            Promise.reject(error)
        })
        this.instance.interceptors.response.use( response => {
            console.log('global interceptor -- reponse')
            return response.data
        }, error => {
            console.error(error) // for debug
            Promise.reject(error)
        })
    }

    public request(config: AxiosRequestConfig) {
        return this.instance.request(config)
    }
}

export default Request