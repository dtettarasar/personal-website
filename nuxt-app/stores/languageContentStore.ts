import { defineStore } from 'pinia'

export const useLanguageContentStore = defineStore('languageContent', {

    state: () => ({
        languagesContent: [],
        loading: false,
        error: null as string | null,
    }),

    actions: {

        async fetchData() {
    
            if (this.languagesContent.length > 0) { 

                return this.languagesContent
                
            }
    
          this.loading = true
          this.error = null
    
          try {
            const data = await $fetch<string[]>('/api/lang-content')
            this.languagesContent = data
            return data
    
          } catch (err: any) {
            this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement de l’intro'
            
          } finally {
            this.loading = false
          }
    
        },
      },

})