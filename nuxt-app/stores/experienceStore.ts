// stores/experienceStore.ts
import { defineStore } from 'pinia'

export interface ExperienceItem {
  companyName: string
  companyVenue: string
  jobTitle: string
  period: string
  companyLogoSrc: string
  jobMissions: string[]
}

export const useExperienceStore = defineStore('experience', {

  state: () => ({
    // Même pattern dictionnaire que pour les langues !
    dataByLocale: {} as Record<string, ExperienceItem[]>,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData(locale: string) {
      
      // 1. Système de cache par langue
      if (this.dataByLocale[locale]) { 
        return this.dataByLocale[locale]
      }
    
      this.loading = true
      this.error = null
    
      try {

        // 2. Appel API avec la locale en paramètre de requête
        const response = await $fetch<ExperienceItem[]>('/api/experience', {

          query: { locale }

        })
        
        // 3. Stockage dans le bon tiroir
        this.dataByLocale[locale] = response

        return response
    
      } catch (err: any) {

        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement des expériences'

        return []

      } finally {

        this.loading = false

      }
    },
  },
})