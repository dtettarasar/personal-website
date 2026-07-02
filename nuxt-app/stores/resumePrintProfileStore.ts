// stores/resumePrintProfileStore.ts
import { defineStore } from 'pinia'

export const useResumePrintProfileStore = defineStore('resumePrintProfile', {

  state: () => ({
    dataByLocale: {} as Record<string, string>,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchData(locale: string): Promise<string | null> {
      if (this.dataByLocale[locale]) {
        return this.dataByLocale[locale]
      }

      this.loading = true
      this.error = null

      try {
        const response = await $fetch<string>('/api/resume-print-profile', {
          query: { locale }
        })

        this.dataByLocale[locale] = response

        return response

      } catch (err: any) {
        this.error = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement du profile print'

        return null

      } finally {
        this.loading = false
      }
    },
  },

})
