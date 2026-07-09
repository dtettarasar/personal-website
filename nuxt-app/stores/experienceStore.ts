// stores/experienceStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ExperienceItem {
  companyName: string
  companyVenue: string
  jobTitle: string
  period: string
  companyLogoSrc: string
  jobMissions: string[]
  jobMissionsShort?: string[]
  displayOnPrint: boolean
}

export interface PrintExperienceItem {
  companyName: string
  companyVenue: string
  jobTitle: string
  period: string
  jobMissions: string[]
  jobMissionsShort?: string[]
  displayOnPrint: boolean
}

export const useExperienceStore = defineStore('experience',() => {

  // ===== STATE (références réactives) =====
    // Un dictionnaire pour stocker les données par langue : { fr: ExperienceItem[], en: ExperienceItem[] }
    const dataByLocale = ref<Record<string, ExperienceItem[]>>({})
    const loading = ref(false)
    const error = ref<string | null>(null)

  //ACTIONS (fonctions)
  async function fetchData(locale: string): Promise<ExperienceItem[] | null> {
    // 1. Système de cache par langue
    if (dataByLocale.value[locale]) { 
      return dataByLocale.value[locale]
    }
  
    loading.value = true
    error.value = null
  
    try {

      // 2. Appel API avec la locale en paramètre de requête
      const response = await $fetch<ExperienceItem[]>('/api/experience', {
        query: { locale }
      })
      
      // 3. Stockage dans le bon tiroir
      dataByLocale.value[locale] = response

      return response
  
    } catch (err: any) {

      error.value = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement des expériences'

      return null

    } finally {

      loading.value = false

    }
  }

  //GETTERS (fonctions personnalisées avec paramètres)
  function getExperienceByCompany(companyName: string, locale: string): ExperienceItem | undefined {
    const experiences = dataByLocale.value[locale] || []
    return experiences.find(
      (item: ExperienceItem) => item.companyName.toLowerCase() === companyName.toLowerCase()
    )
  }

  function getPrintExperiences(locale: string): PrintExperienceItem[] {
    const experiences = dataByLocale.value[locale] || []

    return experiences
      .filter((item: ExperienceItem) => item.displayOnPrint)
      .map((item: ExperienceItem) => {
        return {
          companyName: item.companyName,
          companyVenue: item.companyVenue,
          jobTitle: item.jobTitle,
          period: item.period,
          jobMissions: item.jobMissions,
          jobMissionsShort: item.jobMissionsShort,
          displayOnPrint: item.displayOnPrint
        }
      })
  }


  return {
    dataByLocale,
    loading,
    error,
    fetchData,
    getExperienceByCompany,
    getPrintExperiences
  }

})