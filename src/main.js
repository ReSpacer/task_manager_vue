import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
