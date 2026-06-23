// stores/heroStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface HeroData {
  img: string
  imgAlt: string
  title: string
  subtitle: string
  specialty: string
  links: {
    email: string
    linkedin: string
    github: string
  }
}

export const useHeroStore = defineStore('hero', () => {

    // Un dictionnaire pour stocker les données par langue : { fr: HeroData, en: HeroData }
    const dataByLocale = ref<Record<string, HeroData>>({})
    const error = ref<string | null>(null)

    async function fetchData(locale: string) {

        if (dataByLocale.value[locale]) return dataByLocale.value[locale]

        try {

            error.value = null

            const response = await $fetch<HeroData>('/api/hero', {
                params: { locale }
            })

            dataByLocale.value[locale] = response

            return response

        } catch (err) {

            error.value = "Erreur lors du chargement de la bannière principale"
            console.error(err)

        }

    }

    return { dataByLocale, error, fetchData }

})