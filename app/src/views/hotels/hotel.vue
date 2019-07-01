<template>
<div ref="root">	
    <div class="sliderPanel">
      <div v-for="(item,index) in imgArray" :key=index class="picbox">
      	<transition name="slide-fade">
      		<img :style="{width:width,top:top}" @mouseover="clearAuto" @mouseout="slideAuto" v-show="index===selectIndex"  :src="item.url" style="min-height: 100%">
      	</transition>
      </div>
    </div>
    <div @click="clickLeft" @mouseover="clearAuto" @mouseout="slideAuto" class="arrowLeft verticalCenter horizaCenter">
     	 左移
    </div>
    <div @click="clickRight" @mouseover="clearAuto" @mouseout="slideAuto"  class="arrowRight verticalCenter horizaCenter">
      	右移
    </div>
    <div class="sliderBar horizaCenter">
      <div v-for="(item,index) in imgArray" :key=index @mouseover="clearAuto" @mouseout="slideAuto" @click="setIndex(index)"  class="circle" :class="{circleSelected:index===selectIndex}">
      </div>
    </div>
  </div>
</template>
<script>
  const SCREEN_WIDTH=document.body.clientWidth//网页可见区域宽
  const SCREEN_HEIGHT=document.body.scrollHeight//网页正文全文高
  var selectIndex=0
  var timer=null
  export default {
	name: "app",
	data() {
		return {
				  selectIndex:0,
					width:'100%',
	        height:SCREEN_HEIGHT+'px',
	        top:0,
	        imgArray:[
	          {
	            url:'/public/themes/download.png',
	          },
	          {
	            url:'/public/themes/download.png',
	          },
	          {
	            url:'/public/themes/download.png',
	          }
        	]
		}
	},
	methods:{
		 slideAuto:function () {
			var that=this;
     	timer=setInterval(function(){ 
            that.clickRight();     
      },3000)
       	//clearInterval(timer);
      },
      clearAuto:function(){
      	clearInterval(timer);
      },
		  clickLeft:function(){
		  	if(this.selectIndex==0){
		  		this.selectIndex=this.imgArray.length-1;
		  	}else{
		  		this.selectIndex--;
		  	}
		  	console.log(this.selectIndex);
          
      },
      clickRight:function(){
        if(this.selectIndex==this.imgArray.length-1){
		  		this.selectIndex=0;
		  	}else{
		  		this.selectIndex++;
		  	}
      },
      setIndex:function (index) {
       this.selectIndex=index;
      }
   },
   mounted:function(){
    this.slideAuto();    
	}
}
 
</script>
<style>
.sliderPanel{
    width:100%;
    height:100%;
}
.picbox{
    width:375px;
    height:100px;
}
</style>


