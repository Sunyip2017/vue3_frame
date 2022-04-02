import { ElMessage } from 'element-plus'

export function to(promise) {
    return promise.then(data => {
       return [null, data];
    })
    .catch(err => [err]);
 }

 export function responseHandle ({ data: { code, message }}) {
    if (code !== 0) {
        ElMessage.error(message)
    }
 }