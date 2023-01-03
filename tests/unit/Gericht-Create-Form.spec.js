import { mount } from '@vue/test-utils'
import GerichtCreateForm from '@/components/GerichtCreateForm'

describe('Testing GerichtCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(GerichtCreateForm)

    // then
    expect(wrapper.find().classes()).not.toContain('show')
  })
})
