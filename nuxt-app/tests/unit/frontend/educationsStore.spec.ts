import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useEducationsStore } from '~/stores/educationsStore'

// ===== MOCK DATA =====
const mockEducationsData = [
  {
    educationLogoSrc: '/img/resume/educations/harvard-university-logo-0.png',
    title: 'Introduction to Programming with Python',
    issuer: 'Harvard University',
    year: '2025',
    certificationLink: 'https://certificates.cs50.io/eed08f81.pdf',
  },
  {
    educationLogoSrc: '/img/resume/educations/fcc_logo.png',
    title: 'Back End Development and APIs',
    issuer: 'freeCodeCamp',
    year: '2023',
    certificationLink: 'https://www.freecodecamp.org/certification/fcc9e0cf531/back-end-development-and-apis',
  },
  {
    educationLogoSrc: '/img/resume/educations/harvard-university-logo-0.png',
    title: 'CS50x - Introduction to Computer Science',
    issuer: 'Harvard University',
    year: '2021',
    certificationLink: 'https://courses.edx.org/certificates/8c91c4feaae048159aab19a913c47924',
  },
  {
    educationLogoSrc: '/img/resume/educations/fcc_logo.png',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2020',
  },
  {
    educationLogoSrc: '/img/resume/educations/diploma-logo-inseec.png',
    title: "Master's degree - Digital Marketing",
    issuer: 'INSEEC Business School Paris',
    year: '2015',
  },
  {
    educationLogoSrc: '/img/resume/educations/diploma-logo-uvsq.png',
    title: 'BTEC Higher National Diploma',
    issuer: 'Versailles Saint-Quentin-en-Yvelines University',
    year: '2012',
    courseDetails: [
      'French Title : DUT Techniques de Commercialisation',
      'Specialized in Marketing',
    ],
  },
]

const mockApiResponse = {
  status: 'success',
  data: mockEducationsData,
  timestamp: '2026-03-02T12:00:00.000Z',
}

// ===== TESTS =====
describe('educationsStore', () => {
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
      const store = useEducationsStore()
      expect(store.data).toEqual([])
    })

    it('has loading set to false', () => {
      const store = useEducationsStore()
      expect(store.loading).toBe(false)
    })

    it('has error set to null', () => {
      const store = useEducationsStore()
      expect(store.error).toBeNull()
    })
  })

  // ----- fetchData -----
  describe('fetchData', () => {
    it('calls $fetch with /api/educations and populates data', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)

      const result = await store.fetchData()

      expect($fetch).toHaveBeenCalledWith('/api/educations')
      expect(store.data).toEqual(mockEducationsData)
      expect(result).toEqual(mockEducationsData)
    })

    it('sets loading to true during fetch then false after', async () => {
      const store = useEducationsStore()

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
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)

      await store.fetchData()
      expect($fetch).toHaveBeenCalledTimes(1)

      const result = await store.fetchData()
      expect($fetch).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockEducationsData)
    })

    it('sets error message when API call fails', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('Network error'))

      const result = await store.fetchData()

      expect(store.error).toBe('Network error')
      expect(store.data).toEqual([])
      expect(result).toEqual([])
    })

    it('sets error from statusMessage when available', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockRejectedValueOnce({
        statusMessage: 'Internal Server Error',
        message: 'Something went wrong',
      })

      await store.fetchData()

      expect(store.error).toBe('Internal Server Error')
    })

    it('sets fallback error when no message is available', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData()

      expect(store.error).toBe('Error loading educations')
    })

    it('resets error to null on new fetch attempt', async () => {
      const store = useEducationsStore()

      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))
      await store.fetchData()
      expect(store.error).toBe('fail')

      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()
      expect(store.error).toBeNull()
    })

    it('sets loading to false even when fetch fails', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('fail'))

      await store.fetchData()

      expect(store.loading).toBe(false)
    })
  })

  // ----- getEducationByTitle -----
  describe('getEducationByTitle', () => {
    it('returns the correct education by exact title', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationByTitle('CS50x - Introduction to Computer Science')

      expect(result).toBeDefined()
      expect(result?.issuer).toBe('Harvard University')
      expect(result?.year).toBe('2021')
    })

    it('matches partial title (uses includes)', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationByTitle('Python')

      expect(result).toBeDefined()
      expect(result?.title).toContain('Python')
    })

    it('is case-insensitive', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationByTitle('responsive web design')

      expect(result).toBeDefined()
      expect(result?.title).toBe('Responsive Web Design')
    })

    it('returns undefined for non-existent education', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationByTitle('PhD in Quantum Computing')

      expect(result).toBeUndefined()
    })

    it('returns undefined when data is empty', () => {
      const store = useEducationsStore()

      const result = store.getEducationByTitle('CS50x')

      expect(result).toBeUndefined()
    })
  })

  // ----- getEducationsByYear -----
  describe('getEducationsByYear', () => {
    it('returns all educations for a given year', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByYear('2020')

      // Only "Responsive Web Design" is in 2020
      expect(result).toHaveLength(1)
      expect(result[0].title).toBe('Responsive Web Design')
    })

    it('returns empty array for year with no educations', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByYear('1999')

      expect(result).toEqual([])
    })

    it('returns empty array when data is empty', () => {
      const store = useEducationsStore()

      const result = store.getEducationsByYear('2025')

      expect(result).toEqual([])
    })
  })

  // ----- getEducationCount -----
  describe('getEducationCount', () => {
    it('returns total number of educations', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      expect(store.getEducationCount()).toBe(6)
    })

    it('returns 0 when data is empty', () => {
      const store = useEducationsStore()

      expect(store.getEducationCount()).toBe(0)
    })
  })

  // ----- getEducationsByIssuer -----
  describe('getEducationsByIssuer', () => {
    it('returns all educations from Harvard', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByIssuer('Harvard')

      expect(result).toHaveLength(2)
      expect(result.every(e => e.issuer.includes('Harvard'))).toBe(true)
    })

    it('returns all educations from freeCodeCamp', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByIssuer('freeCodeCamp')

      expect(result).toHaveLength(2)
    })

    it('is case-insensitive', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByIssuer('harvard')

      expect(result).toHaveLength(2)
    })

    it('matches partial issuer name (uses includes)', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByIssuer('INSEEC')

      expect(result).toHaveLength(1)
      expect(result[0].issuer).toContain('INSEEC')
    })

    it('returns empty array for non-existent issuer', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const result = store.getEducationsByIssuer('MIT')

      expect(result).toEqual([])
    })

    it('returns empty array when data is empty', () => {
      const store = useEducationsStore()

      const result = store.getEducationsByIssuer('Harvard')

      expect(result).toEqual([])
    })
  })

  // ----- hasCredential -----
  describe('hasCredential', () => {
    it('returns true when education has a certificationLink', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const harvard = store.getEducationByTitle('CS50x')!

      expect(store.hasCredential(harvard)).toBe(true)
    })

    it('returns false when education has no certificationLink', async () => {
      const store = useEducationsStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockApiResponse)
      await store.fetchData()

      const inseec = store.getEducationByTitle("Master's degree")!

      expect(store.hasCredential(inseec)).toBe(false)
    })

    it('returns false for education with undefined certificationLink', () => {
      const store = useEducationsStore()

      const edu = {
        educationLogoSrc: '/img/test.png',
        title: 'Test',
        issuer: 'Test University',
        year: '2024',
      }

      expect(store.hasCredential(edu)).toBe(false)
    })

    it('returns false for education with empty string certificationLink', () => {
      const store = useEducationsStore()

      const edu = {
        educationLogoSrc: '/img/test.png',
        title: 'Test',
        issuer: 'Test University',
        year: '2024',
        certificationLink: '',
      }

      // Empty string is falsy → hasCredential returns false
      expect(store.hasCredential(edu)).toBe(false)
    })
  })
})
