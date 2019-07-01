<template>
    <div class="content">
        <div class="top">
            <span class="backBtn" @click="backAction"></span>
        </div>
        <div class="dice">
            <div class="box1">
                <span class="item1"></span>
            </div>
            <div class="box2">
                <span class="item2"></span>
                <span class="item2"></span>
            </div>
            <div class="box3">
                <span class="item3"></span>
                <span class="item3"></span>
                <span class="item3"></span>
            </div>
            <div class="box4">
                <div class="column4">
                    <span class="item4"></span>
                    <span class="item4"></span>
                </div>
                <div class="column4">
                    <span class="item4"></span>
                    <span class="item4"></span>
                </div>
            </div>
            <div class="box5">
                <div class="column5">
                    <span class="item5"></span>
                    <span class="item5"></span>
                </div>
                <div class="column5">
                    <span class="item5"></span>
                </div>
                <div class="column5">
                    <span class="item5"></span>
                    <span class="item5"></span>
                </div>
            </div>
            <div class="box6">
                <div class="column6">
                    <span class="item6"></span>
                    <span class="item6"></span>
                    <span class="item6"></span>
                </div>
                <div class="column6">
                    <span class="item6"></span>
                    <span class="item6"></span>
                    <span class="item6"></span>
                </div>
            </div>
            <div class="box7">
                <div class="column7">
                    <span class="item7"></span>
                    <span class="item7"></span>
                    <span class="item7"></span>
                </div>
                <div class="column7">
                    <span class="item7"></span>
                </div>
                <div class="column7">
                    <span class="item7"></span>
                    <span class="item7"></span>
                    <span class="item7"></span>
                </div>
            </div>
            <div class="box8">
                <div class="column8">
                    <span class="item8"></span>
                    <span class="item8"></span>
                    <span class="item8"></span>
                </div>
                <div class="column8">
                    <span class="item8"></span>
                    <span class="item8"></span>
                </div>
                <div class="column8">
                    <span class="item8"></span>
                    <span class="item8"></span>
                    <span class="item8"></span>
                </div>
            </div>
            <div class="box9">
                <div class="column9">
                    <span class="item9"></span>
                    <span class="item9"></span>
                    <span class="item9"></span>
                </div>
                <div class="column9">
                    <span class="item9"></span>
                    <span class="item9"></span>
                    <span class="item9"></span>
                </div>
                <div class="column9">
                    <span class="item9"></span>
                    <span class="item9"></span>
                    <span class="item9"></span>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
export default{
    methods:{
        backAction:function(){
            window.history.back();
        }
    }
}
</script>
<style>
.content{
    width:375px;
    height:667px;
    background: #f00;
}
.dice{
    padding-top:10px;
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.top{
    width:100%;
    height:40px;
    line-height: 40px;
    background:#f00;
    border-bottom:honeydew 2px dotted;
}
.backBtn{
    display:inline-block;
    margin-left: 15px;
    width:15px;
    height:15px;
    border-bottom:1px solid #fff;
    border-right:1px solid #fff;
    transform:rotate(135deg);
}
.box1{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20%;
    justify-content:center;
    align-items:center;
}
.item1{
    width:40px;
    height:40px;
    background:#fff;
    border-radius:50%;
}
.box2{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20%;
    justify-content:space-around;
    align-items:center;
}
.item2{
    width:30px;
    height:30px;
    background:#fff;
    border-radius:50%;
}
.box3{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
}
.item3{
    width:30px;
    height:30px;
    background:#fff;
    border-radius:50%;
}
.item3:nth-child(2){
    align-self:center;
}
.item3:nth-child(3){
    align-self:flex-end;
}
.box4{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
}
.item4{
    width:30px;
    height:30px;
    background:#fff;
    border-radius:50%;
}
.column4{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.box5{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
}
.item5{
    width:25px;
    height:25px;
    background:#fff;
    border-radius:50%;
}
.column5{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.column5:nth-child(2){
    justify-content:center;
}
.box6{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    align-items:center;
}
.item6{
    width:30px;
    height:30px;
    background:#fff;
    border-radius:50%;
}
.column6{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.box7{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    align-items:center;
}
.item7{
    width:25px;
    height:25px;
    background:#fff;
    border-radius:50%;
}
.column7{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.column7:nth-child(2){
    justify-content:center;
}
.box8{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    align-items:center;
}
.item8{
    width:25px;
    height:25px;
    background:#fff;
    border-radius:50%;
}
.column8{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
.column8:nth-child(2){
    justify-content:space-between;
}
.box9{
    float:left;
    width:80px;
    height:80px;
    background:#000;
    display: flex;
    padding:10px;
    border-radius:20px;
    flex-wrap: wrap;
    align-items:center;
}
.item9{
    width:25px;
    height:25px;
    background:#fff;
    border-radius:50%;
}
.column9{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
</style>
<!--flex-wrap: wrap;//规定灵活的项目在必要的时候拆行或拆列。
flex-basis: 100%;//宽度战100%-->