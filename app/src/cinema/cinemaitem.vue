<template>
<div class="cinemasitem">
    <router-link :to="mypath">
        <div>
            <span class="nm">{{data.nm}}</span>
            <span class="price">{{data.sellPrice}}元</span>
        </div>
        <div>
            <span class="addr">{{data.addr}}</span>
            <span class="distance">{{data.distance}}</span>
        </div>
        <div class="vip">{{data.tag.vipTag}}</div>
        <div class="card">{{data.promotion.cardPromotionTag}}</div>
    </router-link>
</div>
</template>
<script>
export default {
    data:()=>{
        return {
            mypath:"#"
        }
    },
    props:["data"],

}
</script>
<style>
.cinemasitem{
    padding:10px;
    border-bottom:1px solid #ccc;
}
.nm{
        font-size: 16px;
}
.price{
    color:red;
    font-size: 16px;
}
.addr{
    font-size:13px;
}
.distance{
    font-size:12px;
}
.vip{
    font-size:11px;
}
.card{
    font-size:12px;
}
</style>
