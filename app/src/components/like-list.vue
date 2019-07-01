<template>
    <div class="likes">
        <div class="like-header">
            猜你喜欢
        </div>

        <div class="list">
            <div class="list-item" v-for="(item, key) in list" :key="key">
                <img src="http://p1.meituan.net/200.0/deal/8cea8c2222168755a35bddcac5e459ac144498.jpg@166_0_667_667a%7C267h_267w_2e_90Q"/>

                <div class="list-item-right">
                    <div>
                        <div class="title">
                            {{item.title}}
                        </div>
                        <p>
                            [体育中心]单人自助午餐
                        </p>
                    </div>

                    <div class="item-bottom">
                        <span>58元</span>
                        <em>已售165115</em>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "like-list",
    data: () => {
        return {
            list: [
                {
                   title: "11111" 
                },
                {
                    title: "22222222"
                }
            ]
        }
    }
}
</script>
<style>
.likes{
    border-top: 10px #eee solid;
    padding:0 10px;
}

.like-header{
    height:40px;
    line-height: 40px;
    border-bottom: 1px #eee solid;
}

.list-item{
    display: flex;
    padding:10px 0;
    border-bottom: 1px #eee solid;
}

.list-item img{
    width:90px;
    height:90px;
    margin-right: 10px;
}

.list-item-right{
    display: flex;
    flex:1;
    flex-direction: column;
    justify-content: space-between;
}

.list-item-right p{
    font-size: 12px;
    color:#666;
    margin-top:5px;
}

.item-bottom span{
    color: #06c1ae;
    font-size: 18px;
}

.item-bottom em{
    float: right;
    font-size: 12px;
    font-style: normal;
    color:#666;
}
</style>