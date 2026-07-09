import { describe, it, expect, vi, afterEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ResumePrintPage from '~/pages/resume-print-version.vue'

describe('Resume Print Page', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders print toolbar controls', async () => {
    const wrapper = await mountSuspended(ResumePrintPage, {
      global: {
        stubs: {
          ResumePrintVersionHeader: true,
          ResumePrintVersionProfileSection: true,
          ResumePrintVersionExperienceSection: true,
          ResumePrintVersionSkillsSection: true,
          ResumePrintVersionLanguageSection: true,
          ResumePrintVersionEducationSection: true,
        },
      },
    })

    expect(wrapper.find('.resume-toolbar').exists()).toBe(true)
    expect(wrapper.find('.print-btn').exists()).toBe(true)
  })

  it('calls window.print() when print button is clicked', async () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {})

    const wrapper = await mountSuspended(ResumePrintPage, {
      global: {
        stubs: {
          ResumePrintVersionHeader: true,
          ResumePrintVersionProfileSection: true,
          ResumePrintVersionExperienceSection: true,
          ResumePrintVersionSkillsSection: true,
          ResumePrintVersionLanguageSection: true,
          ResumePrintVersionEducationSection: true,
        },
      },
    })

    await wrapper.find('.print-btn').trigger('click')

    expect(printSpy).toHaveBeenCalledTimes(1)
  })
})
