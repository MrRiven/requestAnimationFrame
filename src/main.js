// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import store from './store/store.js'
import '@/assets/css/main.css'

Vue.use(store)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

console.log(SERVER_URL, SERVER_ENV) // eslint-disable-line
