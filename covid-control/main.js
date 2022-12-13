import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui"
App.mpType = 'app'
Vue.config.productionTip = false
Vue.use(uView)
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif