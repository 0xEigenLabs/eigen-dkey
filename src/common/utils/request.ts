import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { getFromStorage } from '@/common/utils'

class Request {

    private instance: AxiosInstance

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use( config => {
            console.log('global interceptor -- requset')
            if (getFromStorage('auth_token')) {
                config.headers['Authorization'] = `Bearer ${getFromStorage('auth_token')}`
            }
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

    public request = (config: AxiosRequestConfig) => {
        return this.instance.request(config)
    }
}


const config: AxiosRequestConfig = {
    baseURL: 'https://dkeytest.eigen.cash/api',
    // baseURL: '43.133.35.136:3000',
    timeout: 30000
}

const request = new Request(config)

export default request.request