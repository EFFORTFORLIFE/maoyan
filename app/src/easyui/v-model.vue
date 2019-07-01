<template>
<div>
    <h4>{{msg}}</h4>
    <input type="text" v-bind:value="msg">
    <input type="text" v-model="msg">
</div>
</template>
<script>
export default {
    data:()=>{
        return{
            msg:'gfdsfgs'
        }
    }
}
</script>
<style>

</style>


