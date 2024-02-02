
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const isAuthenticated = ref(true)
    const isAdmin = ref(true)

    const getIsAuthenticated = computed(() => isAuthenticated.value)
    function setIsAuthenticated(val) {
        isAuthenticated.value = val
        if (!val){
            setIsAdmin(false)
            // garde fou au cas ou pas auth mais accès qd même
        }
    }

    const getIsAdmin = computed(() => isAdmin.value)
    function setIsAdmin(val) {
        isAdmin.value = val
    }
  
    return { 
        isAuthenticated, isAdmin, 
        getIsAuthenticated, setIsAuthenticated,
        getIsAdmin, setIsAdmin
    }
})