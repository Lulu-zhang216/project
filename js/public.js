$(function(){
    $("#header").load("head.html")
    $("#footer").load("foot.html")
    $("#silde").load("cebianlan.html")

  // 调取数据，进行动态创建插入

var num = window.location.search.substr(1)
console.log(num)
$.get("./json/xiangqingye.json",function(str){
  var index = num
  console.log(str[index].title)
  $(`
  <div class="m-crumbs">
              <a href="/">首页</a>
              <span class="w-icon-arrow"></span>
              <span class="top_tit">${str[index].title}</span>
  </div>

  <div class="ban">
  <div class="swiper-container swiper1">
  <div class="swiper-wrapper  swiperbox"></div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  </div>
  </div>

  <div class="white">
  <div class="sortBar">

  <div class="category">
  <div class="name">分类： </div>
  <div class="categoryGroup"></div>
  </div>

  <div class="area">
  <div class="name" style="margin-right: 0px;">配送地区: </div>
  <div class="categoryGroup"> </div>
  </div>

  <div class="sorts">
  <div class="name" style="margin-right: 19px;">排序：</div>
  <div class="categoryGroup">
  <span class="leiming">默认</span>
  <span class="leiming">
      价格
      <div class="icon">
          <i class="up"></i>
          <i class="down1"></i>
      </div>
  </span>
  <span class="leiming">
      上架时间
      <div class="icon">
     <i class="time"></i>        
   </div>
  </span>

  </div>
  </div>                                          
                       
                   
  </div>
  </div>
  `).appendTo($(".content"))
  //轮播图的图片
  var img = str[index].img
  console.log(img)
  $.each(img,function(i){
     $(`
     <div class="swiper-slide pic_1">
     <img src="${img[i]}">
     </div>
     `).appendTo($(".swiperbox"))
  })
  //分类
  var list = str[index].list
  console.log(list)
  $.each(list,function(j){
    $(`
    <span class="leiming">${list[j]}</span>
    `).appendTo($(".category .categoryGroup"))
  })
 //地区
 var lis = str[index].lis
 console.log(lis)
$.each(lis,function(x){
  $(`
  <span class="leiming">${lis[x]}</span>
  `).appendTo($(".area .categoryGroup"))
})

//每一个模块
var item = str[index].item
$.each(item,function(y){
  // console.log(item[y].head) //大标题
  // console.log(item[y].li)  //每个li的内容
$(`

<div class="con">

<div class="title">
<p class="big_title">${item[y].head}</p>
<p class="smail_title">${item[y].head1}</p>
</div>

<ul class="itemList"> </ul>

</div>
`).appendTo($(".white"))

//每一个模块的li
var li =item[y].li
$.each(li,function(z){
  // console.log(li[z].foot)  //每个li里具体的内容
  $(`
  <li class="items">
  <div class="item_con">
      <div class="hd">
          <img class="img3" src="${li[z].img}" style="display: block;">
          <img class="img4" src="${li[z].imgs}">

      </div>
      <div class="logo1"></div>
      <div class="xin_bot">
          <div class="promTitle">
              <div class="qiang">${li[z].titles}</div>
              <div class="qtime">${li[z].txt}</div>

          </div>
          <div class="promContent">${li[z].title}</div>
      </div>
      <div class="bd">
          <div class="prdtTags">
              <span class="m-itemTag" ming = "kong">
              ${li[z].center}
              </span>
          </div>
          <h4 class="h4name" title="${li[z].head}">${li[z].head}</h4>
          <p class="price">
              <span class="xinprice">${li[z].price}</span>
              <span class="oldpirce">${li[z].change}</span>
          </p>
          <div class="data-reactid">
              <hr />
              <p class="desc">${li[z].foot}</p>
          </div>
      </div>
  </div>
</li>
  `).appendTo($(".itemList").last())
   if(li[z].center==""){
    $(".m-itemTag").last().css("display","none")
   }
})

})
var swiper1 = new Swiper('.swiper1', {
  autoplay: {
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

});


})












 




})