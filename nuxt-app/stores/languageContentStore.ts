import { defineStore } from 'pinia'

// On définit proprement ce qu'est un objet "Langue" pour TypeScript
interface LanguageItem {
  name: string
  level: string
  img: string
}

export interface PrintLanguageItem {
  name: string
  level: string
}

export const useLanguageContentStore = defineStore('languageContent', {

  state: () => ({
    // Notre dictionnaire de tableaux de langues : { fr: {...}, en: {...} }
    dataByLocale: {} as Record<string, LanguageItem[]>,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData(locale: string): Promise<LanguageItem[] | null> {
      // 1. Si les données pour CETTE langue sont déjà en cache, on les renvoie direct
      if (this.dataByLocale[locale]) {
        return this.dataByLocale[locale]
      }
        
      this.loading = true
      this.error = null
    
      try {
        // 2. On envoie la locale dans la query string : /api/lang-content?locale=fr
        const response = await $fetch<LanguageItem[]>('/api/lang-content', {
          query: { locale }
        })
        
        // 3. On stocke le résultat dans le bon tiroir du dictionnaire
        this.dataByLocale[locale] = response
        return response
    
      } catch (err: any) {
        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement des langues'
        return null
      } finally {
        this.loading = false
      }
    },
  },

  getters: {
    getPrintLanguages: (state: { dataByLocale: Record<string, LanguageItem[]> }) => (locale: string): PrintLanguageItem[] => {
      const languages = state.dataByLocale[locale] || []

      return languages.map((language: LanguageItem) => {
        return {
          name: language.name,
          level: language.level
        }
      })
    }
  }
})