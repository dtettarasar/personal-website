import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ResumePage from '~/pages/resume.vue'

describe('Resume Page', () => {
  it('renders a CTA to open print version in a new tab', async () => {
    const wrapper = await mountSuspended(ResumePage, {
      global: {
        stubs: {
          'sections-hero-small': true,
          'resume-intro-section': true,
          'TextSectionTitleAlt': true,
          'text-section-title-alt': true,
          'resume-xp-section': true,
          'resume-edu-section': true,
          'resume-skill-section': true,
          ResumeLanguageContent: true,
          Icon: true,
        },
      },
    })

    const cta = wrapper.find('a[href="/resume-print-version"]')

    expect(cta.exists()).toBe(true)
    expect(cta.attributes('target')).toBe('_blank')
    expect(cta.attributes('rel')).toContain('noopener')
    expect(cta.attributes('rel')).toContain('noreferrer')
    expect(cta.attributes('aria-label')).toBeTruthy()
  })
})
