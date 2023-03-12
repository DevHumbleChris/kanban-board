import { defineStore } from 'pinia'
import { ref } from 'vue'

export const kanbanUIStore = defineStore('kanbanUI', () => {
    const accountView = ref('')

    const updateAccountView = (payload) => {
        accountView.value = payload
    }
    return {
        updateAccountView,
        accountView
    }
})
