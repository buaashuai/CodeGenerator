import Vue from 'vue'
import Router from 'vue-router'
import RouterDispatch from '../components/RouterDispatch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: RouterDispatch
    },
    {
      path: '/:page_path',
      name: 'main',
      component: RouterDispatch
    }
  ]
})
