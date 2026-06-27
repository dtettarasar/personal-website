// stores/projectsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface ProjectLink {
  label: string
  url: string
  icon: string
}

interface ProjectItem {
  title: string
  img: string
  desc: string[]
  icon: string
  stack: string[]
  links: ProjectLink[]
  video?: string
}

// ===== STORE =====
export const useProjectsStore = defineStore('projects', () => {

  // State
  //const data = ref<Project[]>([])
  const dataByLocale = ref<Record<string, ProjectItem[]>>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function fetchData(locale: string): Promise<ProjectItem[] | null> {
    // 1. Système de cache par langue
    if (dataByLocale.value[locale]) { 
      return dataByLocale.value[locale]
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<ProjectItem[]>('/api/projects', {
        query: { locale }
      })


      // 3. Stockage dans le bon tiroir
      dataByLocale.value[locale] = response

      return response

    } catch (err: any) {

      error.value = err.message || 'Failed to fetch projects'
      console.error('Error fetching projects:', err)

      return null

    } finally {

      loading.value = false

    }

  }

  // Getters
  function getProjectByTitle(locale: string,title: string) {
    return dataByLocale.value[locale]?.find((p: ProjectItem) => p.title === title)
  }

  function getProjectCount(locale: string) {
    return dataByLocale.value[locale]?.length || 0
  }

  function getProjectsByStackIcon(locale: string,icon: string) {
    // return an empty array if the locale is not found or if no projects match the icon (to avoid returning undefined)
    return dataByLocale.value[locale]?.filter((p: ProjectItem) => p.stack.includes(icon)) || []
  }

  return { dataByLocale, loading, error, fetchData, getProjectByTitle, getProjectCount, getProjectsByStackIcon }
})