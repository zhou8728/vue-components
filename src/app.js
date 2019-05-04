import Vue from 'vue'
import Button from './button.vue'

Vue.component('g-button', Button)

new Vue({
  render: render => render(App),
})

