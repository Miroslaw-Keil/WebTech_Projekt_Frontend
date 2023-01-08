import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EinfuegenView from '@/views/EinfuegenView'
import AuslesenView from '@/views/AuslesenView'
import alleEinsehenView from '@/views/AlleEinsehenView'
import LoeschenView from '@/views/BearbeitenView'
import BearbeitenView from '@/views/UeberschreibenView'
import { LoginCallback } from '@okta/okta-vue'
import LoginComponent from '@/components/Login.vue'
import ProfileComponent from '@/components/Profile.vue'

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
    path: '/bearbeiten',
    name: 'bearbeiten',
    component: LoeschenView
  },
  {
    path: '/ueberschreiben/:id',
    name: 'ueberschreiben',
    component: BearbeitenView,
    props: true
  },
  {
    path: '/login',
    component: LoginComponent
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
