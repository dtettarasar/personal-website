// tests/unit/frontend/projectsStore.spec.ts
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProjectsStore } from '~/stores/projectsStore'

// ===== MOCK DATA =====
const mockProjectsData = [
  {
    title: 'News Ipsum',
    img: '/img/portfolio/news-ipsum-homepage.png',
    desc: [
      '<strong>High-performance News Platform</strong> built with Nuxt.',
      'Implemented a <strong>TDD</strong> approach with Vitest.',
    ],
    icon: 'material-symbols:newspaper-rounded',
    stack: [
      'mdi:language-typescript',
      'mdi:vuejs',
      'lineicons:nuxt',
      'devicon-plain:vitest',
      'mdi:docker',
    ],
    links: [
      { label: 'View source code', url: 'https://github.com/dtettarasar/news-ipsum', icon: 'material-symbols:code-blocks' },
      { label: 'Live Demo', url: 'https://projects-news.dylan-tettarasar.dev/', icon: 'material-symbols:rocket-launch' },
    ],
  },
  {
    title: 'Otis AI – AI SaaS Platform',
    img: '/img/portfolio/otis-ai-homepage.png',
    desc: [
      'An <strong>AI-assisted content generation SaaS</strong>.',
    ],
    icon: 'material-symbols:edit-note-rounded',
    stack: [
      'mdi:vuejs',
      'fa7-brands:node-js',
      'devicon-plain:vitest',
      'lineicons:mongodb',
      'bi:stripe',
    ],
    links: [
      { label: 'View source code', url: 'https://github.com/dtettarasar/otis-ai-frontend', icon: 'material-symbols:code-blocks' },
    ],
    video: 'https://www.youtube.com/watch?v=4xhqBR_Kues',
  },
  {
    title: 'AI Art Shield',
    img: '/img/portfolio/cs50.jpg',
    desc: [
      'A <strong>Python-based security tool</strong>.',
    ],
    icon: 'ic:round-terminal',
    stack: [
      'mdi:language-python',
    ],
    links: [
      { label: 'View source code', url: 'https://github.com/dtettarasar/CS50P-final-project', icon: 'material-symbols:code-blocks' },
    ],
  },
]

const testLocale = 'en'

// ===== TESTS =====
describe('projectsStore', () => {
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
      const store = useProjectsStore()
      expect(store.dataByLocale).toEqual({})
    })

    it('has loading set to false', () => {
      const store = useProjectsStore()
      expect(store.loading).toBe(false)
    })

    it('has error set to null', () => {
      const store = useProjectsStore()
      expect(store.error).toBeNull()
    })
  })

  // ----- fetchData -----
  describe('fetchData', () => {
    it('calls $fetch with /api/projects and populates data', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)

      const result = await store.fetchData(testLocale)

      expect($fetch).toHaveBeenCalledWith('/api/projects', { query: { locale: testLocale } })
      expect(store.dataByLocale[testLocale]).toEqual(mockProjectsData)
      expect(result).toEqual(mockProjectsData)
    })

    it('sets loading to true during fetch then false after', async () => {
      const store = useProjectsStore()

      let loadingDuringFetch = false
      vi.mocked($fetch).mockImplementationOnce(() => {
        loadingDuringFetch = store.loading
        return Promise.resolve(mockProjectsData)
      })

      expect(store.loading).toBe(false)
      await store.fetchData(testLocale)
      expect(loadingDuringFetch).toBe(true)
      expect(store.loading).toBe(false)
    })

    it('does not re-fetch if data is already loaded (caching)', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)

      await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)

      const result = await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockProjectsData)
    })

    it('sets error message when API call fails', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('Network error'))

      const result = await store.fetchData(testLocale)

      expect(store.error).toBe('Network error')
      expect(store.dataByLocale[testLocale]).toBeUndefined()
      expect(result).toEqual([])
    })

    it('sets fallback error when no message is available', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData(testLocale)

      expect(store.error).toBe('Failed to fetch projects')
    })

    it('resets error to null on new fetch attempt', async () => {
      const store = useProjectsStore()

      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))
      await store.fetchData(testLocale)
      expect(store.error).toBe('fail')

      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)
      expect(store.error).toBeNull()
    })

    it('sets loading to false even when fetch fails', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))

      await store.fetchData(testLocale)

      expect(store.loading).toBe(false)
    })
  })

  // ----- getProjectByTitle -----
  describe('getProjectByTitle', () => {
    it('returns the correct project by exact title', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const result = store.getProjectByTitle(testLocale, 'News Ipsum')

      expect(result).toBeDefined()
      expect(result?.title).toBe('News Ipsum')
      expect(result?.stack).toContain('mdi:vuejs')
    })

    it('returns undefined for non-existent project', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const result = store.getProjectByTitle(testLocale, 'Non Existent Project')

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useProjectsStore()

      const result = store.getProjectByTitle(testLocale, 'News Ipsum')

      expect(result).toBeUndefined()
    })

    it('returns project with video field when present', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const result = store.getProjectByTitle(testLocale, 'Otis AI – AI SaaS Platform')

      expect(result?.video).toBe('https://www.youtube.com/watch?v=4xhqBR_Kues')
    })

    it('returns project without video field when absent', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const result = store.getProjectByTitle(testLocale, 'AI Art Shield')

      expect(result?.video).toBeUndefined()
    })
  })

  // ----- getProjectCount -----
  describe('getProjectCount', () => {
    it('returns total number of projects', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      expect(store.getProjectCount(testLocale)).toBe(3)
    })

    it('returns 0 when data is empty', () => {
      const store = useProjectsStore()

      expect(store.getProjectCount(testLocale)).toBe(0)
    })
  })

  // ----- getProjectsByStackIcon -----
  describe('getProjectsByStackIcon', () => {
    it('returns projects that use a specific stack icon', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const vueProjects = store.getProjectsByStackIcon(testLocale, 'mdi:vuejs')

      expect(vueProjects).toHaveLength(2)
      expect(vueProjects.map(p => p.title)).toContain('News Ipsum')
      expect(vueProjects.map(p => p.title)).toContain('Otis AI – AI SaaS Platform')
    })

    it('returns only projects matching the icon', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const pythonProjects = store.getProjectsByStackIcon(testLocale, 'mdi:language-python')

      expect(pythonProjects).toHaveLength(1)
      expect(pythonProjects[0].title).toBe('AI Art Shield')
    })

    it('returns empty array for non-existent stack icon', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const result = store.getProjectsByStackIcon(testLocale, 'mdi:ruby')

      expect(result).toEqual([])
    })

    it('returns empty array when data is empty', () => {
      const store = useProjectsStore()

      const result = store.getProjectsByStackIcon(testLocale, 'mdi:vuejs')

      expect(result).toEqual([])
    })

    it('finds projects with shared stack icons (vitest)', async () => {
      const store = useProjectsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockProjectsData)
      await store.fetchData(testLocale)

      const vitestProjects = store.getProjectsByStackIcon(testLocale, 'devicon-plain:vitest')

      expect(vitestProjects).toHaveLength(2)
    })
  })
})