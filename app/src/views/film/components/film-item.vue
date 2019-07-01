<template>
  <router-link to="/film-detail">

    <div class="hot-item">
        <img :src="data.img" alt="">


        <div class="hot-item-right">
          
          <div class="film-info">
            <h4>{{data.nm}}</h4>
            <div class="film-score">
              观众评 <span>{{data.sc}}</span>
            </div>
            <p>主演: {{data.star}}</p>
            <p>{{data.showInfo}}</p>
          </div>

          <button v-if="data.showst === 3" class="ishot">购票</button>
          <button v-if="data.showst === 4" class="isMust">预售</button>
        </div>
      </div>

    </router-link>
</template>

<script>
export default {
    name: "file-item",
    props: ["data"]
}
</script>

<style>
.hot-item{
     padding:10px;
     display: flex;
  }

  .hot-item img{
    display: block;
    width:64px;
    height:90px;
    margin-right:10px;
  }

  .hot-item-right{
    display: flex;
    border-bottom: 1px #eee solid;
    height:90px;
    padding-bottom: 10px;
    padding-right: 20px;
    font-size: 13px;
    color:#666;
    flex:1;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .hot-item-right h4{
    margin-bottom: 5px;
    font-size: 14px;
    color:#000;
  }

    .film-score{
      margin-bottom:5px;
    }

    .film-score span{
      color:#faaf00;
      font-weight: bold;
    }

    .film-info{
      flex:1;
      overflow: hidden;
    }

    .film-info p{
      line-height: 1.8;
      width:100%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }

    .hot-item-right .ishot{
      padding:0 10px;
      height:27px;
      background: #f03d37;
      color:#fff;
      border-radius: 4px;
      border:none;
    }

    .hot-item-right .isMust{
      padding:0 10px;
      height:27px;
      background: #3c9fe6;
      color:#fff;
      border-radius: 4px;
      border:none;
    }
</style>
