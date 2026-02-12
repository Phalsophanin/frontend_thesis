import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/login.vue'
import Dashboard from '../components/dashbaord/Dashbaord.vue'



const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
