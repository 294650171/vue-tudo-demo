import Vue from 'vue'

const comp={
  template:`
    <div>{{text}}</div>
    <div>{{demo}}</div>
  `,
  props:{

  },
  data(){
    return{
      text:0,
      demo:""
    }
  }
}


const compVue=Vue.extend(comp)

new compVue({
  el:'#root',
  data:{
    demo:123
  }
})
