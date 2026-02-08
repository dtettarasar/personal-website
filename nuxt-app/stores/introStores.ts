// stores/introStore.ts
import { defineStore } from 'pinia'

export const useIntroStore = defineStore('intro', {

  state: () => ({
    paragraphs: [] as string[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchIntroText() {

      if (this.paragraphs.length > 0) return

      this.loading = true
      this.error = null

      try {
        const data = await $fetch<string[]>('/api/intro-text')
        this.paragraphs = data

      } catch (err: any) {
        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement de l’intro'
        
      } finally {
        this.loading = false
      }

    },
  },

})