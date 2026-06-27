// stores/educationsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface EducationItem {
  educationLogoSrc: string
  title: string
  issuer: string
  year: string
  certificationLink?: string
  courseDetails?: string[]
}

// ===== STORE =====
export const useEducationsStore = defineStore('educations', () => {

  // ===== STATE =====
  const dataByLocale = ref<Record<string, EducationItem[]>>({})
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(locale: string): Promise<EducationItem[] | null> {
    // Avoid re-fetch if data already loaded
    if (dataByLocale.value[locale]?.length > 0) {
      return dataByLocale.value[locale]
    }

    loading.value = true
    error.value = null

    try {

        const response = await $fetch<EducationItem[]>(
          '/api/educations', 
          { query: { locale } }
        )

        dataByLocale.value[locale] = response

        return response

    } catch (err: any) {

        console.error('Failed to fetch educations:', err)

        error.value = err?.statusMessage ?? err?.message ?? 'Error loading educations'

        return null

    } finally {

        loading.value = false

    }
  }

  // ===== GETTERS =====
  function getEducationByTitle(title: string, locale: string): EducationItem | undefined {

    const education = dataByLocale.value[locale] || []

    return education.find((edu) =>
      edu.title.toLowerCase().includes(title.toLowerCase())
    )
  }

  function getEducationsByYear(year: string, locale: string): EducationItem[] {
    const educations = dataByLocale.value[locale] || []
    return educations.filter((edu: EducationItem) => edu.year === year)
  }

  function getEducationCount(locale: string): number {
    const educations = dataByLocale.value[locale] || []
    return educations.length
  }

  function getEducationsByIssuer(issuer: string, locale: string): EducationItem[] {
    const educations = dataByLocale.value[locale] || []
    return educations.filter((edu: EducationItem) =>
      edu.issuer.toLowerCase().includes(issuer.toLowerCase())
    )
  }

  function hasCredential(education: EducationItem): boolean {
    return !!education.certificationLink
  }

  // ===== RETURN =====
  return {
    // State
    dataByLocale, 
    loading,
    error,

    // Actions
    fetchData,

    // Getters
    getEducationByTitle,
    getEducationsByYear,
    getEducationCount,
    getEducationsByIssuer,
    hasCredential,
  }
})
