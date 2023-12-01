import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import Bag from '../components/Bag.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bag',
    name: 'bag',
    component: Bag
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
