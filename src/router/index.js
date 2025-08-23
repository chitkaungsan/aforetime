import { createRouter, createWebHistory } from 'vue-router'
import MaiPlace from '@/Houses/MaiPlace.vue'
const routes = [
  {
    path: '/',
    name: 'MaiPlace',
    component: MaiPlace
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
