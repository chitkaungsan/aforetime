import { createRouter, createWebHistory } from 'vue-router'
import MaiPlace from '@/Houses/MaiPlace.vue'
import Home from '@/Pages/Home.vue'
const routes = [
  {
    path: '/',
    name: '/home',
    component: Home
  },
  {
    path: '/mai-place',
    name: 'MaiPlace',
    component: MaiPlace
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
