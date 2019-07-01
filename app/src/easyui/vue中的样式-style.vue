<template>
    <div>
        <h1 :style="[classObj,classObj2]">zheshi sjdlfak</h1>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            classObj:{red:true,'thin':true,italic:false,'active':false},
            classObj2:{'font-style':'italic'}
        }
    }
}
</script>
<style>

</style>
