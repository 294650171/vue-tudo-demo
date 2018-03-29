// import Todo from '../views/tudo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/:id',
    // path: '/app',
    props: true,
    // component: Todo,
    component: () => import('../views/tudo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'xxxxx'
    },
    beforeEnter (to, from, next) {
      console.log('before enter')
      next()
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
