import Vue from 'vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import App from './App.vue'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';

Vue.config.productionTip = false

Vue.use(ElementUi)

// 添加全局前置导航守卫
router.beforeEach((to, from, next)=>{
  // 判断token存不存在
  const token = Cookie.get('token')
  // token不存在，说明当前用户未登录，应该跳转登录页面
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if(token && to.name === 'login'){ // token存在，说明用户登录，跳转至主页
    next({ name: 'home' })
  } else {
    // 卸载当前路由的组件实例
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  },
  beforeCreate() {
    if (Cookie.get('routeInfo')) this.$router.replace(JSON.parse(Cookie.get('routeInfo')))
  }
}).$mount('#app')
