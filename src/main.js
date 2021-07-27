import Vue from 'vue'
// import Greeting from './Greeting.vue'
// import RandomGenerator from './RandomGenerator.vue'
// import EmailValidation from './EmailValidation.vue'
// import Counter from './Counter.vue'
import Mount from './Mount.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Mount),
}).$mount('#app')
