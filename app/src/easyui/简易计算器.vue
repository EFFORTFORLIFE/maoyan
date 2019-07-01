<template>
<div>
    <input type="text" v-model="n1">
    <select v-model="opt">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <input type="text" v-model="n2">
    <input type="button" value="=" @click="cal">
    <input type="text" v-model="this.result">
</div>
</template>
<script>
export default {
    data:()=>{
        return{
            n1:0,
            n2:0,
            result:0,
            opt:'+'
        }
    },
    methods:{
        cal(){
            // switch(this.opt){
            //     case '+':
            //         this.result = parseInt(this.n1)+parseInt(this.n2);
            //         break;
            //     case '-':
            //     this.result = parseInt(this.n1)+-parseInt(this.n2);
            //         break;
            //     case '*':
            //     this.result = parseInt(this.n1)*parseInt(this.n2);
            //         break;
            //     case '/':
            //     this.result = parseInt(this.n1)/parseInt(this.n2);
            //         break;
            // }
            var res = 'parseInt(this.n1)'+this.opt+'parseInt(this.n2)';
            this.result = eval(res);
        }
    }
}
</script>
<style>

</style>


