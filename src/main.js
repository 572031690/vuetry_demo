
import Vue from 'vue'
import App from './App.vue'
//配置路由
import router from './router/router.js';
// 请求数据
import VueResource from 'vue-resource';
//挂载全局的中央事件总线
import Bus from './Bus/index'

import store from './vuex/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//es6两种文件导出
import AllA from './assets/es6导入导出/modelA'
import {a} from './assets/es6导入导出/modelB' //也可以 {a as mya} 重新定义名字
console.log(AllA, a);

Vue.prototype.$bus = Bus

Vue.use(VueResource);
Vue.use(ElementUI);
//4.挂载路由
new Vue({ 
    el:'#app',
    router,
    store,
    render:h => h(App)
  })

