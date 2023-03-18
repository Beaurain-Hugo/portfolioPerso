import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'

import routesFromPages from "~pages"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home Page' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About Page' } },
  
    ...routesFromPages,
  ]
})
export default router
