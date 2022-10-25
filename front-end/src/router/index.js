import Vue from 'vue'
import VueRouter from 'vue-router'
import FormationPage from '@/views/FormationPage'
Vue.use(VueRouter)

const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
// },
  {
    path: '/formation',
    name: "FormationPage",
    component: FormationPage,
  }
, {
  path: "/login",
  name: "loginPage",
  component: function () {
      return import("../views/auth/Login.vue");
  },
},
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
