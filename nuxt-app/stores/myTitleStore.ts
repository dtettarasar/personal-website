// stores/myTitleStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface MyTitle {
    title: string
    subtitle: string
}

// ===== STORE =====

export const useMyTitleStore = defineStore('myTitle', () => {
    // ===== STATE =====
    const data = ref<MyTitle | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<string | null>(null)

    // ===== ACTIONS =====
    async function fetchData(): Promise<MyTitle | null> {
        if (data.value) {
            return data.value
        }

        loading.value = true
        error.value = null

        try {
            data.value = await $fetch<MyTitle>('/api/my-title')
            return data.value
        } catch (err: any) {
            error.value = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement du titre'
            return null
        } finally {
            loading.value = false
        }
    }

    // ===== RETURN =====
    return { data, loading, error, fetchData }
})