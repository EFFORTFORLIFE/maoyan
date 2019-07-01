<template>
    <div>
        <input type="button" value='现身' @click="flag=!flag">
        <h3>lajdflj</h3>
        <h3 v-if="flag">sfgdfgsag</h3>
        <h3 v-show="flag">sdfad</h3>
        <h3>alsdjf</h3>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            flag:true
        }
    }
}
</script>
<style>

</style>
