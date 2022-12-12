import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EinfuegenView from '@/views/EinfuegenView'
import AuslesenView from '@/views/AuslesenView'
import alleEinsehenView from '@/views/AlleEinsehenView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/einfuegen',
    name: 'einfuegen',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
