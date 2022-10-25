import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

//import Vuex from 'vuex'
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import router from './router'
// Make BootstrapVue available throughout your project

//Vue.use(Vuex)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
