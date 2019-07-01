  <template>
   <div>
       <div id="cinemahead">
           <span id="backbtn" @click="forback"></span>
           <span id="mytitle">{{mytitle}}</span>
       </div>
       <div id="search">
           <input placeholder="搜影院"/>
           <span>🔍</span>
       </div>
       <CinemaItem v-for="(item,key) in cinemas" :key=key :data="item"></CinemaItem>
   </div>
  </template>
  <script>
  import CinemaItem from "./cinemaitem.vue"
  import axios from "axios"
  export default{
      data:()=>{
          return{
              mytitle:"影院",
              cinemas:[]
          }
      },
      methods:{
          forback:function(){
              window.history.back();
          }
      },
      components:{
          CinemaItem
      },
      mounted:function(){
          axios.get("/ajax/cinemaList").then(res=>{//这里需要用箭头函数
              this.cinemas=res.data.cinemas;
          });
      }
  }
  </script>
  <style>
#cinemahead{
    background:#06c1ae;
    line-height: 50px;
    height: 50px;
    text-align: center;
    position:relative;
    color:#fff;
}
#backbtn{
    position: absolute;
    left:20px;
    width: 15px;
    height: 15px;
    border-bottom: 1px #fff solid;
    border-right: 1px #fff solid;
    top:50%;
    transform: translateY(-50%) rotate(135deg);
}
#mytitle{
    font-size: 25px;
    font-family: 楷体;
}
#search{
    text-align: center;
    padding:4px;
    background-color:#f3efef;
}
#search input{
    border:1px #ccc solid;
    border-radius: 5px;
    height: 25px;
    line-height: 25px;
}
#search span{
    margin-left:20px;
    height: 25px;
    line-height: 25px;
    background-color:#efd9d9;
    padding:2px;
    border-radius: 5px;
}
  </style>
