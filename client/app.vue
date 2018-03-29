<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}}-{{counter}}</p>
    <p>moduleA:{{textA}}{{textPlus}}</p>
    <p>moduleB:{{textB}}</p>
    <p>textC:{{textC}}</p>
    <router-link to='/app/123'>app</router-link>
    <router-link to='/app/456'>app</router-link>

    <router-link to='/login'>login</router-link>

    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/tudo/todo.vue'
console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
    this['a/add']()
    this['b/testAction']()
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    ...mapMutations(['updateCount', 'a/updateText'])
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    // textB () {
    //   return this.$store.state.b.text
    // },
    ...mapState({
      counter: (state) => state.count,
      textA: (state) => state.a.text,
      textB: (state) => state.b.text,
      textC: state => state.c.text
    }),
    ...mapGetters({
      'fullName': 'fullName',
      textPlus: 'a/textPlus'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}
</style>


