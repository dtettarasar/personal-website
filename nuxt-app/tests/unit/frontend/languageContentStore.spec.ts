import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLanguageContentStore } from '~/stores/languageContentStore'

const mockLanguagesData = [
  {
    name: 'French',
    level: 'Native Language',
    img: '/img/language/france-croissant.png',
  },
  {
    name: 'English',
    level: 'Business Level',
    img: '/img/language/uk-afternoon-tea.png',
  },
]

const testLocale = 'en'

describe('languageContentStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.stubGlobal('$fetch', vi.fn())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('initial state', () => {
    it('has empty dataByLocale object', () => {
      const store = useLanguageContentStore()
      expect(store.dataByLocale).toEqual({})
    })

    it('has loading set to false', () => {
      const store = useLanguageContentStore()
      expect(store.loading).toBe(false)
    })

    it('has error set to null', () => {
      const store = useLanguageContentStore()
      expect(store.error).toBeNull()
    })
  })

  describe('fetchData', () => {
    it('calls $fetch with /api/lang-content and stores locale data', async () => {
      const store = useLanguageContentStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockLanguagesData)

      const result = await store.fetchData(testLocale)

      expect($fetch).toHaveBeenCalledWith('/api/lang-content', { query: { locale: testLocale } })
      expect(store.dataByLocale[testLocale]).toEqual(mockLanguagesData)
      expect(result).toEqual(mockLanguagesData)
    })

    it('does not re-fetch when locale data is cached', async () => {
      const store = useLanguageContentStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockLanguagesData)

      await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)

      const secondCall = await store.fetchData(testLocale)
      expect($fetch).toHaveBeenCalledTimes(1)
      expect(secondCall).toEqual(mockLanguagesData)
    })

    it('sets error from thrown Error message', async () => {
      const store = useLanguageContentStore()
      vi.mocked($fetch).mockRejectedValueOnce(new Error('Network error'))

      const result = await store.fetchData(testLocale)

      expect(store.error).toBe('Network error')
      expect(result).toBeNull()
    })

    it('sets fallback error when no message is available', async () => {
      const store = useLanguageContentStore()
      vi.mocked($fetch).mockRejectedValueOnce({})

      await store.fetchData(testLocale)

      expect(store.error).toBe('Erreur lors du chargement des langues')
    })
  })

  describe('getPrintLanguages', () => {
    it('returns only name and level for print projection', async () => {
      const store = useLanguageContentStore()
      vi.mocked($fetch).mockResolvedValueOnce(mockLanguagesData)
      await store.fetchData(testLocale)

      const result = store.getPrintLanguages(testLocale)

      expect(result).toEqual([
        { name: 'French', level: 'Native Language' },
        { name: 'English', level: 'Business Level' },
      ])
      expect('img' in result[0]).toBe(false)
    })

    it('returns empty array when locale is not loaded', () => {
      const store = useLanguageContentStore()

      const result = store.getPrintLanguages('fr')

      expect(result).toEqual([])
    })
  })
})
