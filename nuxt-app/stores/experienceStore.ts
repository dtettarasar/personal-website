import { defineStore } from 'pinia'

// Type des données renvoyées par l’API (à adapter selon ton API)
interface ExperienceItem {

        companyName: string
        companyVenue: string
        jobTitle: string
        period: string
        companyLogoSrc: string
        jobMissions: string[]

    }
  
interface ExperienceState {

        data: ExperienceItem[]
        loading: boolean
        error: string | null

    }

export const useExperienceStore = defineStore('experience', {

    state: (): ExperienceState => ({
        data: [],
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
            // const data = await $fetch<string[]>('/api/experience')
            this.data = await $fetch<string[]>('/api/experience')
            return this.data
    
          } catch (err: any) {
            this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement des experiences'
            return []
            
          } finally {
            this.loading = false
          }
    
        },
      },

})