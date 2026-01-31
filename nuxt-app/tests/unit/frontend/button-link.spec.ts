import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ButtonLink from '~/components/button-link.vue'

describe('ButtonLink', () => {
  it('renders the label', async () => {
    const wrapper = await mountSuspended(ButtonLink, {
      props: {
        label: 'Resume',
        link: '/resume',
        icon: 'mdi:card-account-details',
      },
    })
    expect(wrapper.text()).toContain('Resume')
  })

  it('uses the link prop for navigation', async () => {
    const wrapper = await mountSuspended(ButtonLink, {
      props: {
        label: 'Portfolio',
        link: '/portfolio',
      },
    })
    // NuxtLink rend un <a> avec l'URL ; le lien doit être présent dans le rendu
    expect(wrapper.html()).toContain('/portfolio')
  })
})
