import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import ConnexionView from '../pages/ConnexionView.vue'

import routesFromPages from "~pages"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home Page' } },
    { path: '/connexion', name: 'connexionabout', component: ConnexionView, meta: { title: 'Connection Page' } },
  
    ...routesFromPages,
  ]
})
export default router
