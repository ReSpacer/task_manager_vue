import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// Global
import vWindow from '../components/v-window'

// Auth
import vLogin from '../components/auth/v-login'
import vRegister from '../components/auth/v-register'
import vVerifyEmail from '../components/auth/v-verify-email'
import vResetPassword from '../components/auth/v-reset-password'
import vChangePassword from '../components/auth/v-change-password'

// Task-Manager
import vMainPage from '../components/task-manager/v-main-page'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => {
        ///
        return '/login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: vWindow,
      props: {curComponent: vLogin}
    },
    {
      path: '/register',
      name: 'register',
      component: vWindow,
      props: {curComponent: vRegister}
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: vWindow,
      props: {curComponent: vVerifyEmail}
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: vWindow,
      props: {curComponent: vResetPassword}
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: vWindow,
      props: {curComponent: vChangePassword}
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: vMainPage
    }
    
  ]
});