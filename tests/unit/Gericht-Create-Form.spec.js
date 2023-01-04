import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import GerichtCreateForm from '@/components/GerichtCreateForm'
import BearbeitenView from '@/views/BearbeitenView'
import App from '@/App'
import Navbar from '@/components/Navbar'

describe('Testing GerichtCreateForm.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should have Create-Form component', () => {
    const wrapper = shallowMount(BearbeitenView)

    const createForm = wrapper.findComponent(GerichtCreateForm)
    expect(createForm.exists()).toBeTruthy()
  }),

  it('should have Navbar component', () => {
    const wrapper = shallowMount(App)

    const navbar = wrapper.findComponent(Navbar)
    expect(navbar.exists()).toBeTruthy()
  }),

  // it('should render Gericht', () => {
  //   fetch.mockResponseOnce(JSON.stringify([
  //     { id: '1', name: 'Spaghetti', tageszeit: 'Mittag', vegan: false, zubereitungsdauer: 30}
  //   ]))
  //
  //   const id = '1'
  //   const wrapper = shallowMount(GerichtCreateForm, {
  //     props: {id}
  //   })
  //
  //   expect(wrapper.text()).toContain('Name')
  // }),

  it('should render Gericht', async () => {
    fetch.mockResponseOnce(JSON.stringify(
      { id: '1', name: 'Spaghetti', tageszeit: 'Mittag', vegan: false, zubereitungsdauer: 30}
    ))

    const id = '1'
    const gericht = 'Spaghetti'
    const wrapper = shallowMount(GerichtCreateForm, {
      props: {id}
    })

    await flushPromises()

    expect(wrapper.text()).toContain(gericht)
  })
})
