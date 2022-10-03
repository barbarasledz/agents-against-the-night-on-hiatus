import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/authentication/LogIn.vue'
import RegisterAcc from '../views/authentication/RegisterAcc.vue'
import AllAgents from "../views/agents/AllAgents.vue"
import NewAgent from "../views/agents/NewAgent.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'log-in',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterAcc
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
  // TODO: figure out how to make a default path...
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

export default router
