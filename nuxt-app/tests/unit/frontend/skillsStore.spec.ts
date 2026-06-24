// tests/unit/frontend/skillsStore.spec.ts
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

const testLocale = 'en'

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
    it('has empty dataByLocale object', () => {
      const store = useSkillsStore()
      expect(store.dataByLocale).toEqual({})
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
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)

      const result = await store.fetchData(testLocale)

      expect($fetch).toHaveBeenCalledWith('/api/skills', { query: { locale: testLocale } })
      expect(store.dataByLocale[testLocale]).toEqual(mockSkillsData)
      expect(result).toEqual(mockSkillsData)
    })

    it('sets loading to true during fetch then false after', async () => {
      const store = useSkillsStore()

      let loadingDuringFetch = false
      vi.mocked($fetch).mockImplementationOnce(() => {
        loadingDuringFetch = store.loading
        return Promise.resolve(mockSkillsData)
      })

      expect(store.loading).toBe(false)
      await store.fetchData(testLocale)
      expect(loadingDuringFetch).toBe(true)
      expect(store.loading).toBe(false)
    })

    it('does not re-fetch if data is already loaded (caching)', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)

      await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)

      const result = await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockSkillsData)
    })

    it('sets error message when API call fails', async () => {
      const store = useSkillsStore()
      const errorMessage = 'Network error'
      vi.mocked($fetch).mockRejectedValueOnce(new Error(errorMessage))

      const result = await store.fetchData(testLocale)

      expect(store.error).toBe(errorMessage)
      expect(store.dataByLocale[testLocale]).toBeUndefined()
      expect(result).toEqual([])
    })

    it('sets error from statusMessage when available', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce({
        statusMessage: 'Internal Server Error',
        message: 'Something went wrong',
      })

      await store.fetchData(testLocale)

      expect(store.error).toBe('Internal Server Error')
    })

    it('sets fallback error when no message is available', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData(testLocale)

      expect(store.error).toBe('Error loading skills')
    })

    it('resets error to null on new fetch attempt', async () => {
      const store = useSkillsStore()

      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))
      await store.fetchData(testLocale)
      expect(store.error).toBe('fail')

      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)
      expect(store.error).toBeNull()
    })

    it('sets loading to false even when fetch fails', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))

      await store.fetchData(testLocale)

      expect(store.loading).toBe(false)
    })
  })

  // ----- getSkillByLabel -----
  describe('getSkillByLabel', () => {
    it('returns the correct skill item by label', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSkillByLabel('Vue.js', testLocale)

      expect(result).toEqual({ icon: 'mdi:vuejs', label: 'Vue.js' })
    })

    it('is case-insensitive', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSkillByLabel('vue.js', testLocale)

      expect(result).toBeDefined()
      expect(result?.label).toBe('Vue.js')
    })

    it('finds skills across different sections', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      expect(store.getSkillByLabel('Docker', testLocale)).toBeDefined()
      expect(store.getSkillByLabel('Node.js / Express', testLocale)).toBeDefined()
    })

    it('returns undefined for non-existent skill', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSkillByLabel('Ruby on Rails', testLocale)

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useSkillsStore()

      const result = store.getSkillByLabel('Vue.js', testLocale)

      expect(result).toBeUndefined()
    })
  })

  // ----- getSkillCount -----
  describe('getSkillCount', () => {
    it('returns total count of skills across all sections', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      expect(store.getSkillCount(testLocale)).toBe(6)
    })

    it('returns 0 when data is empty', () => {
      const store = useSkillsStore()

      expect(store.getSkillCount(testLocale)).toBe(0)
    })
  })

  // ----- getSectionByTitle -----
  describe('getSectionByTitle', () => {
    it('returns the correct section by exact title', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSectionByTitle('Frontend', testLocale)

      expect(result).toBeDefined()
      expect(result?.title).toBe('Frontend')
      expect(result?.items).toHaveLength(3)
    })

    it('is case-insensitive', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSectionByTitle('frontend', testLocale)

      expect(result).toBeDefined()
      expect(result?.title).toBe('Frontend')
    })

    it('matches partial title (uses includes)', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSectionByTitle('Backend', testLocale)

      expect(result).toBeDefined()
      expect(result?.title).toContain('Backend')
    })

    it('returns undefined for non-existent section', async () => {
      const store = useSkillsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockSkillsData)
      await store.fetchData(testLocale)

      const result = store.getSectionByTitle('Machine Learning', testLocale)

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useSkillsStore()

      const result = store.getSectionByTitle('Frontend', testLocale)

      expect(result).toBeUndefined()
    })
  })
})