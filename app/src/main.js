import Vue from 'vue'//项目创建完就有的代码（共4处）
import App from './App.vue'//项目创建完就有的代码
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false//项目创建完就有的代码

// 导入vue-router
import VueRouter from "vue-router"
import Index from "./views/index/index.vue";
import Film from "./views/film/film.vue";
import FilmDetail from "./views/film/film-detail.vue"
import EasyUi from "./easyui/事件修饰符的介绍.vue"
import Hotel from "./views/hotels/hotel.vue"
import Cinema from "./cinema/cinema.vue"
// 注册路由
Vue.use(VueRouter)
// 路由数据声明
const routes = [
  { path: "/", component: Index },//由此开始
  { path: "/film", component: Film },
  { path: "/film-detail", component: FilmDetail },
  {path:"/easyui",component:EasyUi},
  {path:"/hotel",component:Hotel},
  {path:"/cinema",component:Cinema}

]
// 创建route的实例
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')//项目创建完就有的代码
