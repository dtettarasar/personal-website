// stores/skillsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
export interface SkillItem {
  icon: string
  label: string
  displayOnPrint?: boolean
}

export interface SkillSection {
  title: string
  icon: string
  displayOnPrint?: boolean
  items: SkillItem[]
}

export interface PrintSkillItem {
  label: string
}

export interface PrintSkillSection {
  title: string
  items: PrintSkillItem[]
}

// ===== STORE (STYLE SETUP) =====
export const useSkillsStore = defineStore('skills', () => {

  // ===== STATE (références réactives) =====
  const dataByLocale = ref<Record<string, SkillSection[]>>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  // ===== ACTIONS (fonctions) =====
  async function fetchData(locale: string): Promise<SkillSection[] | null> {
    // Système de cache : si la langue est déjà chargée, on renvoie les données
    if (dataByLocale.value[locale]) {
      return dataByLocale.value[locale]
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<SkillSection[]>('/api/skills', {
        query: { locale }
      })
      
      // On range la réponse dans le bon tiroir de langue
      dataByLocale.value[locale] = response
      return response
      
    } catch (err: any) {
      console.error('Failed to fetch skills:', err)
      error.value = err?.statusMessage ?? err?.message ?? 'Error loading skills'
      return null
    } finally {
      loading.value = false
    }
  }

  // ===== GETTERS (fonctions personnalisées avec paramètres) =====
  
  function getSkillByLabel(label: string, locale: string): SkillItem | undefined {
    const sections = dataByLocale.value[locale] || []
    for (const section of sections) {
      const skill = section.items.find(
        (item: SkillItem) => item.label.toLowerCase() === label.toLowerCase()
      )
      if (skill) return skill
    }
    return undefined
  }

  function getSkillCount(locale: string): number {
    const sections = dataByLocale.value[locale] || []
    return sections.reduce((total: number, section: SkillSection) => total + section.items.length, 0)
  }

  function getSectionByTitle(title: string, locale: string): SkillSection | undefined {
    const sections = dataByLocale.value[locale] || []
    return sections.find((section) =>
      section.title.toLowerCase().includes(title.toLowerCase())
    )
  }

  function getPrintSkills(locale: string): PrintSkillSection[] {
    const sections = dataByLocale.value[locale] || []

    return sections
      .filter((section: SkillSection) => section.displayOnPrint !== false)
      .map((section: SkillSection) => {
        const items = section.items
          .filter((item: SkillItem) => item.displayOnPrint !== false)
          .map((item: SkillItem) => {
            return { label: item.label }
          })

        return {
          title: section.title,
          items
        }
      })
      .filter((section: PrintSkillSection) => section.items.length > 0)
  }

  // ===== TOUT CE QU'ON REND ACCESSIBLE =====
  return {
    // State
    dataByLocale,
    loading,
    error,
    
    // Actions
    fetchData,
    
    // Getters
    getSkillByLabel,
    getSkillCount,
    getSectionByTitle,
    getPrintSkills
  }
})