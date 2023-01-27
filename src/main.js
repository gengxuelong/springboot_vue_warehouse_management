import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "@/router";
import ElementUI from 'element-ui'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$httpUrl = 'http://localhost:8080'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
