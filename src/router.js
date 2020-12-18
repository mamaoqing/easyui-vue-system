import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EasyHello from "./views/EasyHello.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
        path: "/easyui",
        name: "easyUiHome",
        component: EasyHello
    },
    {
      path: '/buildings',
      component: () => import(/* webpackChunkName: "icon" */ './components/menu'),
      meta: {title: '菜单树'}
    },
    {
      path: '/unit',
      component: () => import(/* webpackChunkName: "icon" */ './components/table'),
      meta: {title: '表格'}
    },
    {
      path: '/form',
      component: () => import(/* webpackChunkName: "icon" */ './components/form'),
      meta: {title: 'form表单'}
    },
    {
      path: '/layout',
      component: () => import(/* webpackChunkName: "icon" */ './components/layout'),
      meta: {title: 'layout'}
    },
  ]
});

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
