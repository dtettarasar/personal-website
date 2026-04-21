// stores/languageContentStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface LanguageContent {
  name: string
  level: string
  img: string
}

export const useLanguageContentStore = defineStore('languageContent', () => {
  // ===== STATE =====
  const data = ref<LanguageContent[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(): Promise<LanguageContent[]> {
    if (data.value.length > 0) {
      return data.value
    }

    loading.value = true
    error.value = null

    try {
      data.value = await $fetch<LanguageContent[]>('/api/lang-content')
      return data.value
    } catch (err: any) {
      error.value = err?.statusMessage ?? err?.message ?? 'Erreur lors du chargement du contenu des langues'
      return []
    } finally {
      loading.value = false
    }
  }

  // ===== RETURN =====
  return { data, loading, error, fetchData }
})
