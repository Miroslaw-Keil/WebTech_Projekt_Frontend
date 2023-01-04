import { shallowMount } from '@vue/test-utils'
import GerichtCreateForm from '@/components/GerichtCreateForm'

describe('GerichtCreateForm.vue', () => {
  it('renders props.id when passed', () => {
    const id = '1'
    const wrapper = shallowMount(GerichtCreateForm, {
      props: { id }
    })
    expect(wrapper.props().id).toMatch(id)
  })
})
