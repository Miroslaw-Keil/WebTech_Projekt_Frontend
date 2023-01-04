import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('Testing Navbar.vue', () => {
  it('should show Navbar by default', () => {
    // when
    const wrapper = mount(Navbar)

    // then
    expect(wrapper.find('Navbar').classes()).toContain('show')
  })
})
