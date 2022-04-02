import { defineStore } from 'pinia'
import { useLocalStorage, throttleFilter } from '@vueuse/core'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: null
        }
    },
    action: {
        setToken(token) {
            this.token = token
            useLocalStorage('token', token, { eventFilter: throttleFilter(1000) })
        }
    }
})