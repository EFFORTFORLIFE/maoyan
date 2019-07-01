<template>
    <div>
        <label>
            id:<input type="text" v-model="id">
        </label>
        <label>
            name:<input type="text" v-model="name">
        </label>
        <input type="button" value='添加' @click="add">
        <div id="app">
            <p v-for="item in list" v-bind:key=item.id><input type="checkbox">{{item.id}}---{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data:()=> {
        return{
            id:'',
            name:'',
            list:[
                {id:1,name:'lin'},
                {id:2,name:'xiao'},
                {id:3,name:'sheng'},
                {id:4,name:'wo'},
                {id:5,name:'a'}
            ]
        }
        
    },
    methods: {
        add() {
            this.list.unshift({id:this.id,name:this.name})
            // this.list.push({id:this.id,name:this.name})
        }
    }
}
</script>
<style>

</style>
