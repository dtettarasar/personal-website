// stores/educationsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface Education {
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
  const data = ref<Education[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(): Promise<Education[]> {
    // Avoid re-fetch if data already loaded
    if (data.value.length > 0) {
      return data.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ status: string; data: Education[] }>(
        '/api/educations'
      )
      data.value = response.data
      return data.value
    } catch (err: any) {
      console.error('Failed to fetch educations:', err)
      error.value =
        err?.statusMessage ?? err?.message ?? 'Error loading educations'
      return []
    } finally {
      loading.value = false
    }
  }

  // ===== GETTERS =====
  function getEducationByTitle(title: string): Education | undefined {
    return data.value.find((edu) =>
      edu.title.toLowerCase().includes(title.toLowerCase())
    )
  }

  function getEducationsByYear(year: string): Education[] {
    return data.value.filter((edu) => edu.year === year)
  }

  function getEducationCount(): number {
    return data.value.length
  }

  function getEducationsByIssuer(issuer: string): Education[] {
    return data.value.filter((edu) =>
      edu.issuer.toLowerCase().includes(issuer.toLowerCase())
    )
  }

  function hasCredential(education: Education): boolean {
    return !!education.certificationLink
  }

  // ===== RETURN =====
  return {
    // State
    data,
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
