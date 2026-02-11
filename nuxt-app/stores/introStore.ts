// stores/introStore.ts
import { defineStore } from 'pinia'

export const useIntroStore = defineStore('intro', {

  state: () => ({
    data: [] as string[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData() {

      if (this.data.length > 0) {
        return this.data
      }
        
      this.loading = true
      this.error = null

      try {
        this.data = await $fetch<string[]>('/api/intro-text')
        return this.data

      } catch (err: any) {
        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement de l’intro'
        return []
        
      } finally {
        this.loading = false
      }

    },
  },

})