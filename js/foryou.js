$(function () {
   $("#header").load("head.html")
   $("#footer").load("foot.html")
   $("#silde-ri").load("cebianlanri.html")

   //轮播图
   var swiper1 = new Swiper('.swiper1', {
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: {
         disableOnInteraction: false,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });

   //严选空间选项卡
   $(".yxSpaceTabList .tabItem").click(function(){
      var index = $(this).index()
      console.log(index)
      $(this).addClass("active1").siblings().removeClass('active1')
      $(".five_box").eq(index).css("display","block").siblings().css("display","none")
   })


   // 视频旁边轮播图
   var swiper2 = new Swiper('.swiper2', {
      direction: 'vertical',
      slidesPerView: 2.31,
     
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      loop: true,
  });

})