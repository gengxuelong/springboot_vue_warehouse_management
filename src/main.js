import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "@/router";
import store from "@/store"
import ElementUI from 'element-ui'
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';//element样式渲染必不可少的文件
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$httpUrl = 'http://localhost:8888'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
