import { Random } from 'mockjs'

export default {
    getToken: () => {
        return {
            status: 200,
            code: 0,
            data: Random.guid()
        }
    }
}