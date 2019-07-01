<template>
    <div class="must-wrapper">
        <div class="must-title">近期最受期待</div>
        <div class="must-top-list">
            <div class="must-top-content">

                <div class="must-top-item" v-for="(item, key) in topItems" :key="key">
                    <img src="https://p1.meituan.net/170.230/movie/a05a03a1b1b6c678eb7ef73a8347f4682641527.jpg"/>

                    <div class="top-item-star">
                        <span> ❤ </span>
                    </div>

                    <div class="top-item-text">
                        12312想看
                    </div>

                    <div class="top-item-title">
                        昨日青空昨日青空
                    </div>
                    <p>10月26号</p>
                </div>

            </div>
        </div>

        <div class="must-btm-list">
            <div class="must-title">近期最受期待</div>

            <FilmItem v-for="(item, key) in films" 
            :key="key" 
            isHot="1"
            :data="item">
            </FilmItem>

        </div>
        
    </div>
</template>

<script>
import FilmItem from "./film-item.vue"
import axios from "axios"
export default {
    components: {
        FilmItem
    },
    data: () => {
        return {
            topItems: [1,1,1,1,1,1,1,1,1,1],
            films: [],
            movieIds: [],
            loadMore: false
        }
    },
    beforeMount:function(){
        //  请求正在热映的数据
    axios.get("/ajax/movieOnInfoList")
    .then(res => {
      let {movieList, movieIds} = res.data;//获取了网络上的12条movieList和33个movieIds，保存到自己定义的let变量中
    //  console.log(movieList);
    //  console.log(res.data.movieList);
    //  console.log(movieIds);
    // console.log(res.data.movieIds)
      // 保存所有的电影id
    //   console.log(movieIds);
      movieIds.splice(0, 12);//movieIds被截掉了前面12个
      //console.log(movieIds);
      //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
      this.movieIds = movieIds;//这里的movieIds剩下33-12=21个
        //console.log(this.movieIds);
      movieList = movieList.map(function(v){//v相当于movieList的item项，map是循环遍历
        v.img = v.img.replace("w.h", "64.180");//v.img就是一个http://p0.meituan.net/w.h/movie/034069fc367db8a7d9644717b416cc
        //2c332883.jpg字符串，所以可以用replace
        return v;
      })
      this.films = movieList;
    });

    // 判断是否滚动到底部
    const windowHeight = window.innerHeight;
    //console.log("高度为"+windowHeight);
    window.addEventListener("scroll", (event) => {
      
      const filmBottom = document.querySelector('.film-bottom');
      const top = filmBottom.getBoundingClientRect().top;

      if(top < windowHeight){

        //保证请求只执行为一次
        if(this.loadMore) return;
        this.loadMore = true;
        //console.log(this.movieIds);
        const str = this.movieIds.join(",");//数组变成一个字符串
        //console.log(`${str}`);
        axios.get(`/ajax/moreComingList?token=&movieIds=${str}`)
        .then((res) => {

          res.data.coming = res.data.coming.map(v => {//当滑动到底部时，循环遍历movieList的每一项，v就是其中的item
            //   console.log(v);
            v.img = v.img.replace("w.h", "128.180");
            return v;
          })//为二次请求回来的12条数据设置格式

          // 把请求回来的数据合并到之前存在的列表
          this.films = [
            ...this.films,
            ...res.data.coming
          ]

          filmBottom.innerHTML = "加载完毕"
        })
      }
    })
    }
}
</script>

<style>
    .must-wrapper{
        padding: 0 10px;
    }

    .must-title{
        padding:10px 0;
        font-size:13px;
        color:#333;
    }

    .must-top-item{
        width:85px;
        position: relative;
        margin:0 5px;
    }

    .must-top-item img{
        display: block;
        width:100%;
    }

    .top-item-star{
        position: absolute;
        top:0;
        left:0;
        width: 28px;
        height:28px;
        background: rgba(0,0,0,0.5);
        border-radius: 0 0 10px 0;
        text-align: center;
        line-height: 28px;
    }

    .top-item-star span{
        color:#999;
    }

    .top-item-text{
        position: absolute;
        left:0;
        top: 99px;
        background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
        font-size: 12px;
        color:orange;
        width:100%;
        padding:2px 10px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .top-item-title{
        font-weight: bold;
        line-height: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
    }

    .must-top-item p{
        font-size: 13px;
        color:#666;
    }

    .must-top-list{
        width:100%;
        overflow-x:auto;
    }

    .must-top-content{
        display: flex;
        padding-bottom: 10px;
    }

    .must-btm-list{
        border-top:1px #eee solid;
    }


</style>
