// stores/experienceStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface ExperienceItem {
  companyName: string
  companyVenue: string
  jobTitle: string
  period: string
  companyLogoSrc: string
  jobMissions: string[]
}

export const useExperienceStore = defineStore('experience', () => {
  // ===== STATE =====
  const data = ref<ExperienceItem[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(): Promise<ExperienceItem[]> {
    if (data.value.length > 0) {
      return data.value
    }

    loading.value = true
    error.value = null

    try {
      data.value = await $fetch<ExperienceItem[]>('/api/experience')
      return data.value
    } catch (err: any) {
      error.value = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement des experiences'
      return []
    } finally {
      loading.value = false
    }
  }

  // ===== RETURN =====
  return { data, loading, error, fetchData }
})
