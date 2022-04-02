import { mock } from 'mockjs'
import userApi from './user'

mock(/\/user\/token/, 'get', userApi.getToken)


