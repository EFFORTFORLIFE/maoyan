<template>
    <div>
        
        <div class="detail-header">
            <span @click="handleBack"></span>
            找到你
        </div>
        
        <!-- 详情头部电影信息 -->
        <div class="detail-info">
            <div class="detail-info-bg">
                <img src="http://p0.meituan.net/148.208/movie/238de53af8fd65ed76fea870cfc6a260287400.jpg">
            </div>

            <div class="detail-info-content">

                <img src="http://p0.meituan.net/148.208/movie/238de53af8fd65ed76fea870cfc6a260287400.jpg">

                <div class="info-content-right">
                    <div class="info-content-text">
                        <h4>我的间谍前男友</h4>
                        <div class="summary">The Spy Who Dumped Me</div>
                        <p>暂无评分</p>
                        <p>喜剧,动作</p>
                        <p>美国/117分钟</p>
                        <p>2018-10-19大陆上映</p>
                    </div>
                    
                    <span class="arrow"></span>
                </div>

            </div>
        </div>

        <!-- 详情页日期条件头部 -->
        <FilmDetailHeader :dates="dates" @showlayer="handleShowLayer"></FilmDetailHeader>

        <!-- 条件选择浮层 -->
        <div class="detail-layer" :class="{active: showLayer}" @click="handleHideLayer">
            <div class="detail-layer-content">
                <FilmDetailHeader :dates="dates" ></FilmDetailHeader>
            </div>
        </div>
        <div class="film-bottom"></div>
        <!-- 电影院列表 -->
        <div class="cinema-list">
            <div class="cinema-item" v-for="(item,key) in cinemas" :key="key">

                <h4>中影佰纳飞影电影城(凤凰城店)
                    <span>39<i>元起</i></span> 
                </h4>

                <div class="cinema-address">
                    <p>黄埔区锐丰中心5号楼三层（地铁6号线香雪站F出口）</p>
                    <span>20km</span>
                </div>

                <div class="cinema-tags">
                    <span class="orange">折扣卡</span>
                    <span class="blue">巨幕厅</span>
                </div>

                <p class="cinema-action">
                    开卡特惠，首单2张立减12元
                </p>

                <p class="cinema-action">
                    近期场次: 15.20 | 20.10
                </p>

            </div>
        </div>

    </div>
    
</template>

<script>

import FilmDetailHeader from  "./components/film-detail-header.vue";

export default {
    components: {
        FilmDetailHeader
    },
    methods: {
        handleShowLayer: function(){
            this.showLayer = true;
        },
        handleHideLayer: function(event){
            // es6对象解构
            const {className} = event.target;

            if(className.indexOf("detail-layer") > -1){
                this.showLayer = false;
            }   
        },
        handleBack: function(){
            window.history.back();
        }
    },
    data: () => {
        return {
            showLayer: false,
            currentDate: 0,
            dates: [
                "今天10月19日",
                "今天10月20日",
                "今天10月21日",
                "今天10月22日",
                "今天10月23日",
                "今天10月24日",
                "今天10月25日"
            ],
            cinemas: [1,1,1,1,1,1]
        }
    }
}
</script>

<style>
/*电影列表*/
.cinema-list{
    padding-left:15px;
}

.cinema-item{
    padding:10px 10px 10px;
    border-bottom: 1px #eee solid;
}

.cinema-item h4{
    font-weight: normal;
    margin-bottom: 5px;
    font-size: 18px;
}

.cinema-item h4 span{
    color:red;
    font-size: 20px;
}

.cinema-item h4 i{
    font-size: 12px;
    font-style: normal;
}

.cinema-address{
    display: flex;
    font-size: 13px;
    color:#666;
    margin-bottom: 5px;
}

.cinema-address p{
     overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

.cinema-tags{
    margin-bottom: 5px;
}

.cinema-tags span{
    font-size: 12px;
    padding:0 5px;
    border:1px #666 solid;
    margin-right: 5px;
    border-radius:4px;
}

.cinema-tags span.orange{
    color:orange; 
    border-color: orange;
}

.cinema-tags span.blue{
    color:mediumturquoise;
    border-color:mediumturquoise;
}

.cinema-action{
    font-size: 12px;
    color:#999;
    line-height: 1.8;
}

/* 弹层的样式 */
.detail-layer{
    display: none;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgb(0, 0, 0, 0.5);
    z-index:9;
}

.detail-layer.active{
    display: block;
}

/* 浮层的样式 */
.detail-layer{
    padding-top:50px;
    background: rgba(0,0,0,0.5);
}

.detail-layer-content{
    background:#fff;
}

.detail-info{
    height: 190px;
    background: #666;
    overflow: hidden;
    position: relative;
}

.detail-info-content{
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.2);
    color:#fff;
}

.detail-info-bg{
    width:100%;
    height: 100%;
}

.detail-info-bg img{
    display: block;
    width:100%;
    filter: blur(20px);
}

.detail-info-content{
    display: flex;
    padding:20px;
    /* padding的值不会添加到宽高度 */
    box-sizing: border-box;
}

.detail-info-content img{
    width:110px;
    margin-right:10px;
}

.info-content-text h4{
    font-size: 18px;

}

.info-content-text .summary{
    font-size: 12px;
    line-height: 2;
}

.info-content-text p {
    font-size: 12px;
    line-height: 2;
}

.detail-info-content span{
    display: block;
    width:10px;
    height:10px;
    border-right: 1px #fff solid;
    border-bottom:1px #fff solid;
    transform: rotate(-45deg);
}

.info-content-right{
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>
