  <template>
    <div id="app">
      <IndexHeader></IndexHeader>
       <div class="download"></div>
      <Category></Category>
      <!-- <like-list></like-list> -->
      <FilmHot></FilmHot>
      <div class="bottom">
        <div>
          <span class="bottomBtn">登录</span>
          <span class="bottomBtn">注册</span>
        </div>
        <div>
          <span class="cityTitle">城市:</span>
          <span class="bottomBtn">广州</span>
        </div>
      </div>
      <div class="film-bottom">正在加载</div>
    </div>
  </template>
  <script>
  import IndexHeader from "../../components/index-header.vue"
  import Category from "../../components/category.vue"
  import LikeList from "../../components/like-list.vue"
  import FilmHot from "../film/components/film-hot.vue"

  export default {
    name: 'index',
    components:{
      IndexHeader,
      Category,
      LikeList,
      FilmHot
    }
  }
  </script>
  <style>
.download{
  background-image:url(../../../public/themes/download.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width:100%;
  height:120px;
}
.bottom{
  display:flex;
  justify-content:space-around;
  align-items: center;
  width:100%;
  height: 60px;
  background: #f0efed;
  position: fixed;
  bottom:0px;
}
.cityTitle{
  color:#666;
  margin-right:0px;
}
.bottomBtn{
  color:#666;
  width:auto;
  height: 20px;
  line-height: 20px;
  border:1px solid #666;
  padding:8px;
  border-radius: 20%;
}
.bottom span{
  margin:5px;
}
  </style>
