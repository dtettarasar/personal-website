import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useExperienceStore } from '~/stores/experienceStore'

const mockExperiencesData = [
  {
    companyName: 'Digital Product Lab (Independant)',
    companyVenue: 'Rambouillet, France',
    jobTitle: 'Product Owner & Product Engineer',
    period: '2024 - Present',
    companyLogoSrc: '/img/resume/experiences/research-and-development.png',
    jobMissions: ['Mission long format A', 'Mission long format B'],
    jobMissionsShort: ['Mission short A', 'Mission short B'],
    displayOnPrint: true,
  },
  {
    companyName: 'DII / POLITICO',
    companyVenue: 'Paris, France',
    jobTitle: 'Web & CRM Product Owner',
    period: '2018 - 2024',
    companyLogoSrc: '/img/resume/experiences/company-logo-dii.png',
    jobMissions: ['Mission DII long'],
    displayOnPrint: true,
  },
  {
    companyName: 'Btown Ltd',
    companyVenue: 'New Delhi, India',
    jobTitle: 'Web Content Specialist',
    period: '2014',
    companyLogoSrc: '/img/resume/experiences/company-logo-btown.png',
    jobMissions: ['Mission hidden from print'],
    jobMissionsShort: ['Hidden short mission'],
    displayOnPrint: false,
  },
]

const testLocale = 'en'

describe('experienceStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.stubGlobal('$fetch', vi.fn())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('initial state', () => {
    it('has empty dataByLocale object', () => {
      const store = useExperienceStore()
      expect(store.dataByLocale).toEqual({})
    })

    it('has loading set to false', () => {
      const store = useExperienceStore()
      expect(store.loading).toBe(false)
    })

    it('has error set to null', () => {
      const store = useExperienceStore()
      expect(store.error).toBeNull()
    })
  })

  describe('fetchData', () => {
    it('calls $fetch with /api/experience and stores data by locale', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)

      const result = await store.fetchData(testLocale)

      expect($fetch).toHaveBeenCalledWith('/api/experience', { query: { locale: testLocale } })
      expect(store.dataByLocale[testLocale]).toEqual(mockExperiencesData)
      expect(result).toEqual(mockExperiencesData)
    })

    it('does not re-fetch when locale data is cached', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)

      await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)

      const secondCall = await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)
      expect(secondCall).toEqual(mockExperiencesData)
    })

    it('sets loading to false after a failed fetch', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))

      await store.fetchData(testLocale)

      expect(store.loading).toBe(false)
    })

    it('sets error from statusMessage when available', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockRejectedValueOnce({
        statusMessage: 'Internal Server Error',
        message: 'Something went wrong',
      })

      await store.fetchData(testLocale)

      expect(store.error).toBe('Internal Server Error')
    })

    it('sets fallback error when no message is available', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData(testLocale)

      expect(store.error).toBe('Erreur lors du chargement des expériences')
    })
  })

  describe('getExperienceByCompany', () => {
    it('returns the matching company entry', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)
      await store.fetchData(testLocale)

      const result = store.getExperienceByCompany('DII / POLITICO', testLocale)

      expect(result).toBeDefined()
      expect(result?.companyVenue).toBe('Paris, France')
    })

    it('is case-insensitive', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)
      await store.fetchData(testLocale)

      const result = store.getExperienceByCompany('dii / politico', testLocale)

      expect(result).toBeDefined()
      expect(result?.companyName).toBe('DII / POLITICO')
    })

    it('returns undefined for unknown company', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)
      await store.fetchData(testLocale)

      const result = store.getExperienceByCompany('Unknown Company', testLocale)

      expect(result).toBeUndefined()
    })
  })

  describe('getPrintExperiences', () => {
    it('filters displayOnPrint=false and keeps print fields only', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)
      await store.fetchData(testLocale)

      const result = store.getPrintExperiences(testLocale)

      expect(result).toHaveLength(2)
      expect(result.some((item) => item.companyName === 'Btown Ltd')).toBe(false)
      expect('companyLogoSrc' in result[0]).toBe(false)
    })

    it('preserves jobMissionsShort when available', async () => {
      const store = useExperienceStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockExperiencesData)
      await store.fetchData(testLocale)

      const result = store.getPrintExperiences(testLocale)
      const rnd = result.find((item) => item.companyName.includes('Digital Product Lab'))

      expect(rnd?.jobMissionsShort).toEqual(['Mission short A', 'Mission short B'])
    })
  })
})
