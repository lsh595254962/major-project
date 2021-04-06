import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        isAlive: true,
        title: '首页'
      }
    },
    {
      path: '/contest',
      name: 'Contest',
      component: () => import('../views/Contest.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/testSub',
      name: 'TestSub',
      component: () => import('../views/TestSub.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/affairs',
      name: 'Affairs',
      component: () => import('../views/Affairs.vue'),
      meta: {
        isAlive: true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('../views/List.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/vList',
      name: 'VList',
      component: () => import('../views/VList.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/Detail.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/testDetail',
      name: 'TestDetail',
      component: () => import('../views/TestDetail.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/comDetail',
      name: 'ComDetail',
      component: () => import('../views/ComDetail.vue'),
      meta: {
        isAlive: false
      }
    },
    {
      path: '/vdetail',
      name: 'VideoDetail',
      component: () => import('../views/VideoDetail.vue'),
      meta: {
        isAlive: false
      }
    }
  ]
})
router.beforeEach((to, form, next) => {
  document.title =
    (to.matched[0].meta.title && to.matched[0].meta.title) ||
    '江苏联合职业技术学院'
  next()
})
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
