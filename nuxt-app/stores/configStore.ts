// stores/configStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const ownerName = ref<string>('')

  async function fetchConfig() {
    if (ownerName.value) return
    try {
      const response = await $fetch<{ ownerName: string }>('/api/config')
      ownerName.value = response.ownerName
    } catch (err) {
      console.error("Erreur lors du chargement de la config globale", err)
    }
  }

  return { ownerName, fetchConfig }
})