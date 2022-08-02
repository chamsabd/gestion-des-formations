import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Vuex from 'vuex'


import router from './router'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
