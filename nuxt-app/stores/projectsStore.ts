// stores/projectsStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// ===== INTERFACES TYPESCRIPT =====
interface ProjectLink {
  label: string
  url: string
  icon: string
}

interface Project {
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
  const data = ref<Project[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function fetchData() {
    if (data.value.length > 0) return data.value

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ data: Project[] }>('/api/projects')
      data.value = response.data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch projects'
      console.error('Error fetching projects:', err)
    } finally {
      loading.value = false
    }

    return data.value
  }

  // Getters
  function getProjectByTitle(title: string) {
    return data.value.find(p => p.title === title)
  }

  function getProjectCount() {
    return data.value.length
  }

  function getProjectsByStackIcon(icon: string) {
    return data.value.filter(p => p.stack.includes(icon))
  }

  return { data, loading, error, fetchData, getProjectByTitle, getProjectCount, getProjectsByStackIcon }
})