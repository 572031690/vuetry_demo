
import Vue from 'vue';
//引入router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//1.创建组件
import User from '../components/User.vue';
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import UserList from '../components/Users/UserList.vue';
import UserAdd from '../components/Users/UserAdd.vue';
import DemoVuex from '../components/DemoVuex.vue';

//2.配置路由
const routes = [

{path:'/home',component:Home},
{path:'/news',component:News},
{path:'/demovuex',component:DemoVuex},
{path:'/user',component:User}, // user前面要加‘/’
  {
    path:'/user',
    component:User,
    children:[
      {path:'useradd',component:UserAdd},
      {path:'userlist',component:UserList}  //userlist前面没有‘/’

    ]
  },
  {
    path:'/detail/:id',
    name: 'detail',
    component: resolve => require(['../components/Detail.vue'],resolve)
  },

  {path:'*',redirect:'/home'}  //默认跳转路由
]

//3.实例化VueRouter
const router = new VueRouter({
  mode:'history',   //将原来的hash模式换成histrory模式 会需要一些后端的配置配合，还是默认hash模式比较好
  routes //缩写 相当于 routes: routes
})

//5.<router-view></router-view>放在app.vue里面
//6.在app.vue 内引入连接<router-link to="/home">首页</router-link>

export default  router;