import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: `
  <ul>
    <li v-for="(val,key,index) in obj" :key="val">{{val}}-{{key}}-{{index}}</li>
  </ul>`,
  data: {
    text: 0,
    obj: {
      a: 1,
      b: 2,
      c: 4
    }
  }
})
