import { defineStore } from 'pinia'

export const useLanguageContentStore = defineStore('languageContent', {

    state: () => ({
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

            this.data = await $fetch<string[]>('/api/lang-content')
            return this.data
    
          } catch (err: any) {
            this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement du contenu des langues'
            return []

          } finally {
            this.loading = false
          }
    
        },
      },

})