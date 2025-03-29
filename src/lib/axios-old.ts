import Axios, { InternalAxiosRequestConfig } from 'axios'

import { API_URL } from '@/config'
import storage from '@/utils/storage'
import toast from 'react-hot-toast'
// import { useToast } from '@/components/ui'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    const token = storage.getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    config.headers.Accept = 'application/json'
    return config
}

export const axiosOld = Axios.create({
    baseURL: API_URL,
})
axiosOld.interceptors.request.use(authRequestInterceptor)
axiosOld.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const message = error.response?.data?.message || error.message

        // const { toast } = useToast();
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
            // if (errorList.length > 0) {
            //     toast({
            //         title: 'Validation Error',
            //         variant: 'destructive',
            //         description: errorList.join('\\r\\n'),
            //     });
            // }
        } else {
            // toast({
            //     title: 'Error',
            //     variant: 'destructive',
            //     description: message,
            // });
        }

        return Promise.reject(error)
    }
)