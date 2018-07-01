import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResources from 'vue-resource'

Vue.use(VueResources)

Vue.http.options.root = 'http://localhost/wordpress-vue/wp-json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
