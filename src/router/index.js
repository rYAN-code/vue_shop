import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Users from '../components/User/Users.vue'
import Roles from '../components/Right/Roles.vue'
import Rights from '../components/Right/Rights.vue'
import Category from '../components/Good/Category.vue'
import Parameter from '../components/Good/Parameter.vue'
import List from '../components/Good/List.vue'
import Add from '../components/Good/Add.vue'
import Order from '../components/Order/Order.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Home',
      component: Home,
      redirect: '/Welcome',
      children: [
        { path: '/Welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/roles', component: Roles },
        { path: '/rights', component: Rights },
        { path: '/categories', component: Category },
        { path: '/params', component: Parameter },
        { path: '/goods', component: List },
        { path: '/goods/add', component: Add },
        { path: '/order', component: Order }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径，from 从哪个路径跳转来，next 是一个函数，表示放行
  // 1、next()放行    2、next('/login')强制跳转
  if (to.path === '/login') {
    return next()
  }
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router
