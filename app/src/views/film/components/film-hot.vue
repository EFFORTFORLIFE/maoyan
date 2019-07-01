<template>
  <div class="hot-list">
    <FilmItem v-for="(item, key) in films" 
    :key="key" 
    isHot="1"
    :data="item"></FilmItem>
    <!-- 将data数据携带给子组件 -->
  </div> 
</template>

<script>

import FilmItem from "./film-item.vue"
import axios from "axios";

export default {
  name: 'file_hot',
  components: {
    FilmItem
  },
  data: () => {
    return {
      films: [],
      movieIds: [],
      loadMore: false
    }
  },
  mounted: function(){

    //  请求正在热映的数据
    axios.get("/ajax/movieOnInfoList")
    .then(res => {
      let {movieList, movieIds} = res.data;
      //console.log(res.data);

      // 保存所有的电影id
      //console.log(movieIds);
      movieIds.splice(0, 12);//服务器已经给我们设定了一次只能请求12条，所以在第一请求我们就把前面的12个id给删除掉
      //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
      //console.log(movieIds);
      this.movieIds = movieIds;
      movieList = movieList.map(function(v){//v相当于movieList的item项
        v.img = v.img.replace("w.h", "128.180");
        return v;//注意返回每个item
      })
      this.films = movieList;
    });
    // 判断是否滚动到底部
    const windowHeight = window.innerHeight;
    //console.log("高度为"+windowHeight);
    window.addEventListener("scroll", (event) => {
      const filmBottom = document.querySelector('.film-bottom');
      const top = filmBottom.getBoundingClientRect().top;
      //console.log(top);//这是dom元素到屏幕顶部的距离
      //console.log(windowHeight);//这是固定值，window的高度
      if(top < windowHeight){
        //保证请求只执行为一次
        if(this.loadMore) return;
        this.loadMore = true;
        const str = this.movieIds.join(",");
        // console.log(str);
        axios.get(`/ajax/moreComingList?token=&movieIds=${str}`)//虽然传入20个id，但是服务器只返回12条，可能服务器后台做了限制
        .then((res) => {
          //console.log(res.data.coming);
          res.data.coming = res.data.coming.map(v => {
            v.img = v.img.replace("w.h", "128.180");
            return v;
          })

          // 把请求回来的数据合并到之前存在的列表
         // console.log(this.films);
          // this.films = [
          //   ...this.films,
          //   ...res.data.coming
          // ]
          this.films = this.films.concat(res.data.coming);
         // console.log(this.films);
          filmBottom.innerHTML = "加载完毕"
        })
      }
    })



  }
}
</script>

<style>

</style>
