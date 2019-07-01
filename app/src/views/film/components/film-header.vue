  <template>
      <div class="film-header">
        <span class="filmBckBtn" @click="backfromfilm"></span>
        <span>猫眼电影</span>
        <span></span>
      </div>
  </template>

  <script>

  export default {
    name: 'film_header',
    methods:{
      backfromfilm:function(){
        window.history.back();
      }
    }
  }
  </script>

  <style>

  *{
    margin:0;
    padding:0;
  }
  span:nth-child(3){
    width: 15px;
    height: 15px;
  }
  .filmBckBtn{
    width: 15px;
    height: 15px;
    border-bottom: 1px #fff solid;
    border-right:  1px #fff solid;
    transform: rotate(135deg);
  }
  .film-header{
      height: 50px;
      line-height: 50px;
      background: #06c1ae;
      padding-left:15px;
      padding-right:15px;
      color:#fff;
      display: flex;
      flex-direction:row;
      align-items:center;
      justify-content: space-between;
      border-bottom: 1px #666 solid;
  }

  </style>
