import axios from 'axios'
import { useRouter } from 'vue-router'
import config from '@/config'
import { ElMessage } from 'element-plus'

const router = useRouter()
const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const toLogin = () => {
    router.replace({
        path: '/login',        
        query: {
            redirect: router.currentRoute.fullPath
        }
    });
}

const errorHandle = (status, message) => {
    switch(status) {
        case 401:
            toLogin();
            break;
        case 403:
            ElMessage({message:message || '登录过期，请重新登录'})
    }
}

const request = axios.create({
    baseURL: baseURL,
    timeout: 100*1000,
    headers: {
        
    }

})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(response => {
    const { status, data, statusText } = response
    if(status !== 200) {
        errorHandle(status, statusText)
        return false
    }
    return data
    
})

export default request