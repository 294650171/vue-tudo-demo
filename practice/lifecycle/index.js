import Vue from 'vue'

new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    throw new TypeError('出错了')
    // console.log(this, 'beforecreate')
  },
  errorCaptured () {
    // 可以用在正式环境，会向上冒泡
  }
})
