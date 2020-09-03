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
      name: 'v-register',
      component: () => import('../components/v-register')
    }
  ]
});