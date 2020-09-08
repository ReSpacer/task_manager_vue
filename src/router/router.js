import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'v-login',
      component: () => import('../components/auth/v-login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/auth/v-register')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../components/auth/v-reset-password')
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: () => import('../components/auth/v-change-password')
    }
    
  ]
});