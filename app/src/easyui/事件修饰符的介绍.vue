<template>
    <div>
        <div class="inner" @click="divHandler">
            <input type="button" value="戳他" @click="inputHandler">
        </div>
        <!-- <a href="http://www.baidu.com" @click.once="urlHandler">百度</a>  -->
        <!-- <div class="inner" @click.capture="divHandler">
            <input type="button" value="戳他" @click="inputHandler">
        </div> -->
        <!-- <div class="inner" @click.self="divHandler">
            <input type="button" value="戳他" @click="inputHandler">
        </div> -->
        <!-- <div class="outer" @click="outHandler">
            <div class="inner" @click.prevent="divHandler">
                <input type="button" value="戳他" @click="inputHandler">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    methods:{
        divHandler(){
            console.log('inner');
        },
        inputHandler(){
            console.log('btn');
        },
        urlHandler(){
            console.log('url')
        },
        outHandler(){
            console.log('out')
        }
        
    }
}
</script>
<style>
.inner{
    height: 150px;
    background-color: darkcyan;
}
.outer{
    padding:40px;
    background-color:red;
}
</style>


