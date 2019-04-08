// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import underscore from 'vue-underscore'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(underscore)
Vue.use(VueCarousel)

Vue.prototype.$goBack = function () {
  window.history.back()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
