// stores/skillsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface SkillItem {
  icon: string
  label: string
}

interface SkillSection {
  title: string
  icon: string
  items: SkillItem[]
}

// ===== STORE =====
export const useSkillsStore = defineStore('skills', () => {
  // ===== STATE =====
  const data = ref<SkillSection[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS =====
  async function fetchData(): Promise<SkillSection[]> {
    // Avoid re-fetch if data already loaded
    if (data.value.length > 0) {
      return data.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ status: string; data: SkillSection[] }>(
        '/api/skills'
      )
      data.value = response.data
      return data.value
    } catch (err: any) {
      console.error('Failed to fetch skills:', err)
      error.value =
        err?.statusMessage ?? err?.message ?? 'Error loading skills'
      return []
    } finally {
      loading.value = false
    }
  }

  // ===== GETTERS =====
  function getSkillByLabel(label: string): SkillItem | undefined {
    for (const section of data.value) {
      const skill = section.items.find(
        (item) => item.label.toLowerCase() === label.toLowerCase()
      )
      if (skill) return skill
    }
    return undefined
  }

  function getSkillCount(): number {
    return data.value.reduce((total, section) => total + section.items.length, 0)
  }

  function getSectionByTitle(title: string): SkillSection | undefined {
    return data.value.find((section) =>
      section.title.toLowerCase().includes(title.toLowerCase())
    )
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
    getSkillByLabel,
    getSkillCount,
    getSectionByTitle,
  }
})
