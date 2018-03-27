import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  }
})

setInterval(() => {
  app.text += 1
}, 1000)
