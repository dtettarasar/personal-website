import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useSkillsStore } from '~/stores/skillsStore'

// ===== MOCK DATA =====
const mockSkillsData = [
  {
    title: 'Frontend',
    icon: 'mdi:vuejs',
    items: [
      { icon: 'mdi:vuejs', label: 'Vue.js' },
      { icon: 'lineicons:nuxt', label: 'Nuxt' },
      { icon: 'mdi:language-typescript', label: 'TypeScript' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: 'carbon:tools-alt',
    items: [
      { icon: 'mdi:git', label: 'Git' },
      { icon: 'mdi:docker', label: 'Docker' },
    ],
  },
  {
    title: 'Backend (not my primary focus but operational)',
    icon: 'mdi:server-network',
    items: [
      { icon: 'mdi:nodejs', label: 'Node.js / Express' },
    ],
  },
]

const mockApiResponse = {
  status: 'success',
  data: mockSkillsData,
  timestamp: '2026-03-01T12:00:00.000Z',
}

// ===== TESTS =====
describe('skillsStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.stubGlobal('$fetch', vi.fn())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  // ----- Initial State -----
  describe('initial state', () => {
    it('has empty data array', () => {
      const store = useSkillsStore()
      expect(store.data).toEqual([])
    })

    it('has loading set to false', () => {
      const store = useSkillsStore()
      expect(store.loading).toBe(false)
    })

    it('has error set to null', () => {
      const store = useSkillsStore()
      expect(store.error).toBeNull()
    })
  })

  // ----- fetchData -----
  describe('fetchData', () => {
    it('calls $fetch with /api/skills and populates data', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)

      const result = await store.fetchData()

      expect($fetch).toHaveBeenCalledWith('/api/skills')
      expect(store.data).toEqual(mockSkillsData)
      expect(result).toEqual(mockSkillsData)
    })

    it('sets loading to true during fetch then false after', async () => {
      const store = useSkillsStore()

      // Capture loading state during fetch
      let loadingDuringFetch = false
      vi.mocked($fetch).mockImplementationOnce(() => {
        loadingDuringFetch = store.loading
        return Promise.resolve(mockApiResponse)
      })

      expect(store.loading).toBe(false)
      await store.fetchData()
      expect(loadingDuringFetch).toBe(true)
      expect(store.loading).toBe(false)
    })

    it('does not re-fetch if data is already loaded (caching)', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)

      // First call — fetches from API
      await store.fetchData()
      expect($fetch).toHaveBeenCalledTimes(1)

      // Second call — should return cached data
      const result = await store.fetchData()
      expect($fetch).toHaveBeenCalledTimes(1) // No additional call
      expect(result).toEqual(mockSkillsData)
    })

    it('sets error message when API call fails', async () => {
      const store = useSkillsStore()
      const errorMessage = 'Network error'
      vi.mocked($fetch).mockRejectedValueOnce(new Error(errorMessage))

      const result = await store.fetchData()

      expect(store.error).toBe(errorMessage)
      expect(store.data).toEqual([])
      expect(result).toEqual([])
    })

    it('sets error from statusMessage when available', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce({
        statusMessage: 'Internal Server Error',
        message: 'Something went wrong',
      })

      await store.fetchData()

      expect(store.error).toBe('Internal Server Error')
    })

    it('sets fallback error when no message is available', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData()

      expect(store.error).toBe('Error loading skills')
    })

    it('resets error to null on new fetch attempt', async () => {
      const store = useSkillsStore()

      // First call fails
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))
      await store.fetchData()
      expect(store.error).toBe('fail')

      // error is set, but data is empty so next call will re-fetch
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()
      expect(store.error).toBeNull()
    })

    it('sets loading to false even when fetch fails', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))

      await store.fetchData()

      expect(store.loading).toBe(false)
    })
  })

  // ----- getSkillByLabel -----
  describe('getSkillByLabel', () => {
    it('returns the correct skill item by label', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSkillByLabel('Vue.js')

      expect(result).toEqual({ icon: 'mdi:vuejs', label: 'Vue.js' })
    })

    it('is case-insensitive', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSkillByLabel('vue.js')

      expect(result).toBeDefined()
      expect(result?.label).toBe('Vue.js')
    })

    it('finds skills across different sections', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      expect(store.getSkillByLabel('Docker')).toBeDefined()
      expect(store.getSkillByLabel('Node.js / Express')).toBeDefined()
    })

    it('returns undefined for non-existent skill', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSkillByLabel('Ruby on Rails')

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useSkillsStore()

      const result = store.getSkillByLabel('Vue.js')

      expect(result).toBeUndefined()
    })
  })

  // ----- getSkillCount -----
  describe('getSkillCount', () => {
    it('returns total count of skills across all sections', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      // 3 (Frontend) + 2 (Tools) + 1 (Backend) = 6
      expect(store.getSkillCount()).toBe(6)
    })

    it('returns 0 when data is empty', () => {
      const store = useSkillsStore()

      expect(store.getSkillCount()).toBe(0)
    })
  })

  // ----- getSectionByTitle -----
  describe('getSectionByTitle', () => {
    it('returns the correct section by exact title', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSectionByTitle('Frontend')

      expect(result).toBeDefined()
      expect(result?.title).toBe('Frontend')
      expect(result?.items).toHaveLength(3)
    })

    it('is case-insensitive', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSectionByTitle('frontend')

      expect(result).toBeDefined()
      expect(result?.title).toBe('Frontend')
    })

    it('matches partial title (uses includes)', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSectionByTitle('Backend')

      expect(result).toBeDefined()
      expect(result?.title).toContain('Backend')
    })

    it('returns undefined for non-existent section', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getSectionByTitle('Machine Learning')

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useSkillsStore()

      const result = store.getSectionByTitle('Frontend')

      expect(result).toBeUndefined()
    })
  })
})
