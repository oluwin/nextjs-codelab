import Axios, { InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/config';
import storage from "@/utils/storage";
import toast from 'react-hot-toast';


function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    const token = storage.getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    config.headers.Accept = 'application/json'
    return config
}

export const axios = Axios.create({
    baseURL: API_URL,
})
axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const message = error.response?.data?.message || error.message

        if (error?.response?.status === 401) {
            localStorage.removeItem('token')
            window.location.href = '/'
        }

        if (error?.code === 'ERR_NETWORK') {
            return
        }

        // check if error is validation error
        if (error?.response?.data?.errors) {
            // create a list of error and notify user
            const errors = error.response.data.errors
            const errorList = Object.keys(errors).map((key) => {
                return errors[key]
            })
            if (errorList.length > 0) {
                toast.error(errorList.join('\\r\\n'),
                );
            }
        } else {
            toast.error(message);
        }

        return Promise.reject(error)
    }
)