<template>
<div>
    <h1 :class="['thin','italic',flag?'active':'']"> :classadlsjsjdf离开就算了就到了饭卡</h1>
    <h2 :class="['thin','italic',{'active':flag}]"> :classadlsjsjdf离开就算了就到了饭卡</h2>
    <h1 :class="{red:true,'thin':true,italic:false,'active':false}">sdhsfg成功</h1>
    <h3 :class="[classObj,classObj2]">在哪里等候iu</h3>
</div>
</template>
<script>
export default {
    data:()=>{
        return{
            flag:true,
            classObj:{red:true,'thin':true,italic:false,'active':false},
            classObj2:{fontStyle:italic}
        }
    }
}
</script>
<style>
.thin{
    font-weight: 200;
}
.italic{
    font-style: italic;
}
.active{
    letter-spacing:0.5em;
}
.red{
    color:red;
}
</style>

