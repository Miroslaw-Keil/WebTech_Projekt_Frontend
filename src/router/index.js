import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EinfuegenView from '@/views/EinfuegenView'
import AuslesenView from '@/views/AuslesenView'
import alleEinsehenView from '@/views/AlleEinsehenView'
import LoeschenView from '@/views/LoeschenView'
import BearbeitenView from '@/views/BearbeitenView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hinzufuegen',
    name: 'hinzufuegen',
    component: EinfuegenView
  },
  {
    path: '/auslesen',
    name: 'auslesen',
    component: AuslesenView
  },
  {
    path: '/alle-Einsehen',
    name: 'alleEinsehen',
    component: alleEinsehenView
  },
  {
    path: '/loeschen',
    name: 'loeschen',
    component: LoeschenView
  },
  {
    path: '/bearbeiten/:id',
    name: 'bearbeiten',
    component: BearbeitenView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
