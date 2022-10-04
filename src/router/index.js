import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/authentication/LogIn.vue'
import RegisterAcc from '../views/authentication/RegisterAcc.vue'
import AllAgents from "../views/agents/AllAgents.vue"
import NewAgent from "../views/agents/NewAgent.vue"
import UserProfile from "../views/authentication/UserProfile.vue"
import * as auth from '../services/AuthService'
import store from '../store/index.js'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'log-in',
    component: LogIn,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next('/profile');
      } else {
        next();
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterAcc,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next('/home');
      } else {
        next();
      }
    }
  },
  {
    path: '/agents',
    name: 'all-agents',
    component: AllAgents
  },
  {
    path: '/newAgent',
    name: 'new-agent',
    component: NewAgent
  },
  {
    path: '/profile',
    name: 'user-profile',
    component: UserProfile,
    beforeEnter: (to, from, next) => {
      if (auth.isLoggedIn()) {
        next();
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  store.dispatch('authenticate');
  next();
})

export default router
