import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Teasing from '~/components/other/teasing.vue'

describe('Teasing', () => {
  it('renders "Coming Soon"', async () => {
    const wrapper = await mountSuspended(Teasing)
    expect(wrapper.text()).toContain('Coming Soon')
  })

  it('renders the placeholder message', async () => {
    const wrapper = await mountSuspended(Teasing)
    expect(wrapper.text()).toContain('New content currently in the forge')
  })
})
