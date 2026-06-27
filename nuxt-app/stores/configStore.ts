// stores/configStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const ownerName = ref<string>('')

  async function fetchConfig(): Promise<{ ownerName: string } | null> {
    if (ownerName.value) return { ownerName: ownerName.value } // On renvoie l'existant
    try {
        const response = await $fetch<{ ownerName: string }>('/api/config')
        ownerName.value = response.ownerName
        return response // 👈 On renvoie la réponse fraîche
    } catch (err) {
        console.error("Erreur config globale", err)
        return null // 👈 On renvoie explicitement null en cas d'erreur
    }
}

  return { ownerName, fetchConfig }
})