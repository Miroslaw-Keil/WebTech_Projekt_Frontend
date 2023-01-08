import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import GerichtBearbeitenForm from '@/components/GerichtBearbeitenForm'
import UeberschreibenView from '@/views/UeberschreibenView'
import App from '@/App'
import Navbar from '@/components/Navbar'
import AlleEinsehenView from '@/views/AlleEinsehenView'
import BearbeitenView from '@/views/BearbeitenView'

describe('Testing multiple Views', () => {
  let twoGerichteResponse = [
    { id: '1', name: 'Spaghetti', tageszeit: 'Mittag', vegan: false, zubereitungsdauer: 30},
    { id: '2', name: 'Avocadotoast', tageszeit: 'Morgen', vegan: true, zubereitungsdauer: 5}
  ]

  let oneGerichtResponse = {
  id: '1', name: 'Spaghetti', tageszeit: 'Mittag', vegan: false, zubereitungsdauer: 30
  }

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should have Create-Form component', () => {
    const wrapper = mount(UeberschreibenView)

    const createForm = wrapper.findComponent(GerichtBearbeitenForm)
    expect(createForm.exists()).toBeTruthy()
  }),

  it('should have Navbar component', () => {
    const wrapper = shallowMount(App)

    const navbar = wrapper.findComponent(Navbar)
    expect(navbar.exists()).toBeTruthy()
  }),

  it('should render all Gerichte', async () => {
    fetch.mockResponseOnce(JSON.stringify(twoGerichteResponse))

    const gericht_1 = twoGerichteResponse[0].name
    const gericht_2 = twoGerichteResponse[1].name
    const wrapper = shallowMount(AlleEinsehenView)

    await flushPromises()

    expect(wrapper.text()).toContain(gericht_1)
    expect(wrapper.text()).toContain(gericht_2)
  }),

  it('should render all Gerichte that can be deleted', async () => {
    fetch.mockResponseOnce(JSON.stringify(twoGerichteResponse))

    const gericht = twoGerichteResponse[0].name
    const wrapper = shallowMount(BearbeitenView)

    await flushPromises()

    expect(wrapper.text()).toContain(gericht)
  }),

  it('should render Gericht', async () => {
    fetch.mockResponseOnce(JSON.stringify(oneGerichtResponse))

    const id = oneGerichtResponse.id
    const gericht = oneGerichtResponse.name
    const wrapper = shallowMount(GerichtBearbeitenForm, {
      props: {id}
    })

    await flushPromises()

    expect(wrapper.text()).toContain(gericht)
  })
})
