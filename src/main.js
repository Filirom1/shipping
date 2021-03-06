// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
global.jQuery = jQuery

require('bootstrap-loader')
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import VueResource from 'vue-resource'
import Registry from './api/registry'
var registry = new Registry()

Vue.use(VueResource)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  registry,
  template: '<App/>',
  components: { App }
})
