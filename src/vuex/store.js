import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

//1.state主要用于存储数据
var state={
    count:1,
    list:[],//新闻数据缓存
    isTopBarShow: true, //顶部栏的隐藏和显示
    newsList: [] 
}

const INCCOUNT = 'INCCOUNT'
const HIDETOPBAR = 'HIDETOPBAR'
const COMINGLIST = 'COMINGLIST'
// 2.mutations里面放的是方法,方法主要用于改变state里面的数据
var mutations={
    [INCCOUNT](){
        ++state.count;
    },
    // addlist(state,data){
    //     state.list=(data);
    // },
    [HIDETOPBAR](state, data) {
        state.isTopBarShow = data
    },
    [COMINGLIST](state, newslist) {
        state.list = newslist
    }
}
// 3.getters有点类似计算属性，改变state里面的counts数据的时候会触发getters里面的方法 获取新的值(基本用不到)
var getters = {
    computedCount:(state)=>{
        return state.count*2;
    },
    comingListGetter (state) {
        // return state.list.filter((item, key) => key < 3 ) 
        return state.list.filter((item, key) => key < state.count ) 
        
    }
}
var actions = {
    getNewsListAction(store) {
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        axios.get(api).then((response)=>{
            console.log(response,'dsadsa');
            //注意this指向
            // this.list=response.body.result;
            //数据放在store里面
            // this.$store.commit('addlist',response.body.result);
            this.commit('COMINGLIST',response.data.result)

        },(err)=>{
            console.log(err);
        })
    }
}
//vuex 实例化Vuex.store
const  store = new Vuex.Store({
    // state:{
    //     count:1
    // },
    state,  //上面的简写
    // mutations:{
    //     increment(state){
    //         //变更状态
    //         state.count++;
    //     }
    // }
    mutations //上面的简写
    ,getters,
    actions
})

//暴露出去
export default  store;
