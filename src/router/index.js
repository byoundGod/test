import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "about" */ '../views/register/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: "/about",
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router