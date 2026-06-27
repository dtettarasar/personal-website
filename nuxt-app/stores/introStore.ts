// stores/introStore.ts
import { defineStore } from 'pinia'

export const useIntroStore = defineStore('intro', {

  state: () => ({
    // Un dictionnaire pour stocker les textes par langue : { fr: [], en: [] }
    dataByLocale: {} as Record<string, string[]>,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData(locale: string): Promise<string[] | null> {
      // Si on a déjà les données pour CETTE langue, on utilise le cache
      if (this.dataByLocale[locale]) {
        return this.dataByLocale[locale]
      }
        
      this.loading = true
      this.error = null

      try {
        // On passe la locale en paramètre de requête à l'API
        const response = await $fetch<string[]>('/api/intro-text', {
          query: { locale }
        })
        
        // On stocke le résultat spécifiquement pour cette langue
        this.dataByLocale[locale] = response
        return response

      } catch (err: any) {
        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement de l’intro'
        return null
        
      } finally {
        this.loading = false
      }
    },
  },

})