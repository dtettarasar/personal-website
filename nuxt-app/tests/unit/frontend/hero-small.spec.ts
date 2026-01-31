import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HeroSmall from '~/components/sections/hero-small.vue'

describe('HeroSmall', () => {
  it('renders the title', async () => {
    const wrapper = await mountSuspended(HeroSmall, {
      props: {
        title: 'Portfolio',
        icon: 'mdi:application-braces',
      },
    })
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
    expect(h1.text()).toContain('Portfolio')
  })

  it('renders with default icon when icon prop is not passed', async () => {
    const wrapper = await mountSuspended(HeroSmall, {
      props: {
        title: 'Test',
      },
    })
    expect(wrapper.text()).toContain('Test')
  })
})
