import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'v-login',
      component: () => import('../components/v-login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/v-register')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../components/v-reset-password')
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: () => import('../components/v-change-password')
    }
    
  ]
});