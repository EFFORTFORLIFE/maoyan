<template>
    <div>
        <div id="app">
            <input type="button" value="start" @click="start">
            <input type="button" value="stop" @click="stop">
            <h4>{{this.msg}}</h4>
        </div>
    </div>
</template>
<script>
export default {
    data:()=>{
        return{
            msg:'猥琐发育，别闹了',
            intervalId:null
        }
    },
    methods:{
        start(){
                if(this.intervalId != null) return ;
                this.intervalId = setInterval( () => {
                console.log(this.msg)
                var start = this.msg.substring(0,1)
                var end = this.msg.substring(1)
                this.msg = end + start
                
            },400)
        },
        stop(){
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
</script>
<style>

</style>


