import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signin from '@/components/general/Signin'
import NotFound from '@/components/general/404'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

// this function looks for an item in the route oject to determine that a route is auth protected
// meta: { Auth: true }
router.beforeEach((to, from, next) => {
  // look for the meta Auth and check it (designated auth-guarded routes)
  if (to.matched.some(record => record.meta.Auth)) {
    if (!store.state.isLoggedIn) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
