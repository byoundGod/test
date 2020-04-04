import Vue from 'vue'
import VueRouter from 'vue-router'
import Management from '../views/management/index.vue'

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
    path: '/management',
    name: 'Management',
    component: Management,
    children: [{
      path: "",
      component: () => import( /* webpackChunkName: "about" */ '../views/management/article')
    },{
      path: "/management/article",
      component: () => import( /* webpackChunkName: "about" */ '../views/management/article')
    },{
      path: "/management/edit",
      component: () => import( /* webpackChunkName: "about" */ '../views/management/article/edit.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router