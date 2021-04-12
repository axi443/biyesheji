import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './permission.js'
import './icons' // icon
import './components'

import 'element-ui/lib/theme-chalk/index.css'
import element from './element_ui'
Vue.use(element)

import Echarts from '@/echarts'
Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
