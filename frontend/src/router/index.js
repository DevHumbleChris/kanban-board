import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        authRequired: false
      }
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/register',
      name: 'register',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/account',
      component: () => import('../views/account/AccountView.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/account/DashboardView.vue')
        },
        {
          path: 'github',
          name: 'github',
          component: () => import('../views/account/GitHubView.vue')
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('../views/account/ProjectsView.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/account/SettingsView.vue')
        },
        {
          path: 'tasks',
          name: 'tasks',
          component: () => import('../views/account/TasksView.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.authRequired)
  if (authRequired) next({ name: 'login'})
  else next()
})

export default router
