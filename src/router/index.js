import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Your to-do List"
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "Info"
    },
    component: () => import('@/views/About.vue')
  },
  {
    path: '/person',
    name: 'Person',
    meta: {
      title: "Person"
    },
    component: () => import('@/views/Person.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
