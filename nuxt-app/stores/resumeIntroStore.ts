// stores/resumeIntroStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResumeIntroStore = defineStore('resumeIntro', () => {
  // ===== STATE =====
  const data = ref<string[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(): Promise<string[]> {
    if (data.value.length > 0) {
      return data.value
    }

    loading.value = true
    error.value = null

    try {
      data.value = await $fetch<string[]>('/api/resume-intro')
      return data.value
    } catch (err: any) {
      error.value = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement de l\'intro resume'
      return []
    } finally {
      loading.value = false
    }
  }

  // ===== RETURN =====
  return { data, loading, error, fetchData }
})
