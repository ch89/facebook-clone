import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Avatar from "./components/Avatar"
import './assets/css/app.css'

Vue.config.productionTip = false

Vue.component("avatar", Avatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
