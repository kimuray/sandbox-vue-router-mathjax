import Vue from 'vue'
import Router from 'vue-router'
import Formula1 from '@/components/Formula1'
import Formula2 from '@/components/Formula2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/formula1',
      component: Formula1
    },
    {
      path: '/formula2',
      component: Formula2
    }
  ]
})
