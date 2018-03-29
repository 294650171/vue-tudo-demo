import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watch', newCount)
// })

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before each resolve')
  next()
})

router.afterEach((to, from, next) => {
  console.log('after each ')
})

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
