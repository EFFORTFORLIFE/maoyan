<template>
<div>
    <div id="app">{{msg}}</div>
    <p v-cloak>453454{{msg}}</p>
    <h4 v-text="msg">45453453</h4>
    <div v-html="msg2"></div>
    <div v-text="msg2"></div>
    <div v-cloak>{{msg2}}</div>
    <input type="button" value="按钮" v-bind:title="mytitle+'lin'">
    <input type="button" value="按钮" :title="mytitle">
    <input type="button" value="按钮" @click="show">
    <input type="button" value="按钮"  v-on:mouseover="show">
 </div>
</template>
<script>
export default {
    name:'app',
    data:()=>{
        return{
            msg:'32423',
            msg2:'<h1>3253454</h1>',
            mytitle:'这是自己定义的标题'
        }
    },
    methods:{
        show:function(){
            alert('hello');
        }
    }
}
</script>
<style>

</style>


