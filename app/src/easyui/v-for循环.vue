<template>
    <div>
        <!-- <div v-for="item in list" :key=item>{{item}}</div>
        <div v-for="(item,i) in list" :key=i>{{item}}</div> 
         <p v-for="(item,i) in lists" :key=i>{{item.id}}</p> 
        <p v-for="(val,key,i) in user" :key=i>{{val}}  {{key}}  {{i}}</p>
        <p v-for="(val,key,i) in user" :key=i>{{val}}  {{key}}  {{i}}</p>-->
        <!-- <p v-for="count in 10" :key=count>{{count}}</p> -->
        <p v-for="item in lis" :key=item>{{item.name}}</p>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            list:[1,2,3,67,4],
            lists:[
                {id:1,name:'sldj'},
                {id:2,name:'sldj'},
                {id:3,name:'sldj'},
                {id:4,name:'sldj'},
            ],
            user:{
                id:1,
                name:'linxiaosheng'
            },
            lis:[
                {id:1,name:"lskjkdf"},
                {id:2,name:"jasldfjl"},
                {id:3,name:"lksdfja"}
                ]
        }
    }
}
</script>
<style>

</style>
