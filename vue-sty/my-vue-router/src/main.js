import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Model from 'vue-class-model'
import Power from './models/power.js'

Vue.config.productionTip = false

Vue.use(Model)
const model = new Model({
  $power: Power
})

const vm = new Vue({
  router,
  model,
  render: h => h(App)
}).$mount('#app')

console.log(vm.$model.$power)
