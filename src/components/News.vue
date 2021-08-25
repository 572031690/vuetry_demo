<template>
    <div>
        我是一个新闻组件
        <br>
        <hr>
        <ul>
            <li v-for="(item,key) in this.$store.state.list" @click="handleChangePage(key)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
import store from '../vuex/store.js';
export default {
    data(){
        return{
            msg:123,
            newslist:[]
        }
    },store,
    methods:{
        requestData(){
            // var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
            // this.$http.get(api).then((response)=>{
            //     console.log(response);
            //     //注意this指向
            //     this.list=response.body.result;
            //     //数据放在store里面
            //     this.$store.commit('addlist',response.body.result);


            // },(err)=>{
            //     console.log(err);
            // })
        },
        handleChangePage(id) {
            console.log('dddddddddddd');
            this.$router.push({name: 'isnews', params: {id: 1}})
        }
    },
    mounted(){
        // console.log(this.$store.state.list.length,'sssssssssss');
        //判断store里面有没有数据
        // var listData = this.$store.state.list;
        // console.log(this.$store.state.list.length);

        if(this.$store.state.list.length === 0){
            console.log('发送请求');
            this.$store.dispatch("getNewsListAction")
            // this.newslist=this.$store.state.list;
        }else{
            // console.log(this.$store.state.list.length);
            console.log('使用缓存');
            // this.newslist=this.$store.state.list;
        }
    }
}
</script>