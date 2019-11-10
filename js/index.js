$(function () {
  $("#head").load("head.html")
  $("#foot").load("foot.html")
  $("#cebian").load("cebianlan.html")


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


  //新品首发

  $.ajax({
    "url": "./json/shoufa.json",
    "type": "get",
    "data": "",
    "dataType": "json",
    "async": "true"
  }).done(function (str) {
    // console.log(str)    //三个大的对象   每一行
    $(str).each(function (i) {
      // console.log(str[i])

      // console.log(str[i].list)  //list对象   每一行中的四个

      var lis = str[i].list
      $(lis).each(function (j) {
        // console.log(lis[j].img)  // 拿到具体的每一个数据
        $(`
           
        <div class="swiper-slide pic_2">
        <div class="pic_2_box">
        <div class="img">
        <img class="img1" src="${lis[j].img}" title="${lis[j].tit}">
        <img class="img2" src="${lis[j].img1}" title="${lis[j].tit}">
        </div>
      
        <div class="logo1"></div>
        <div class="xin_bot">
            <div class="promTitle">
                <div class="qiang">${lis[j].title}</div>
                <div class="qtime">${lis[j].txts}</div>
               
            </div>
            <div class="promContent">开通超会享优惠</div>
        </div>
    

    <div class="bd">
        <div class="prdtTags"></div>
        <h4 class="h4name"title="${lis[j].tit}" >${lis[j].tit}</h4>
        <p class="xinprice">¥${lis[j].price}</p>
    </div>
</div>
</div>
      
            `).appendTo($(".ban_xin").last())

        $(".ban_xin").delegate(".pic_2", "mouseover", function () {
          $(".img1").eq($(this).index()).css("display", "none")
          $(".img2").eq($(this).index()).css("display", "block")
        })

        $(".ban_xin").delegate(".pic_2", "mouseout", function () {
          $(".img1").eq($(this).index()).css("display", "block")
          $(".img2").eq($(this).index()).css("display", "none")
        })

      })

    })
    var swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
    });




  })


  //  人气推荐


  $.get("./json/renqi.json", function (str) {
    $.each(str, function (i) {
      var list1 = str[0].list
      //  console.log(list1)
      $(".third_tab").html("")
      $.each(list1, function (j) {
        //  console.log(list1[j].title) //可以插入的内容
        $(`
               <div class="tab_con_ren">
                      <div class="tab_con_ren_top">
                          <img src="${list1[j].img}" title="${list1[j].tit}">
                      </div>
                      <img class="tit1" src="./img/logo1.png">
                      <div class="xin_bot">
                        <div class="promTitle">
                            <div class="qiang">${list1[j].title}</div>
                            <div class="qtime">${list1[j].txt}${list1[j].tx}</div>
                           
                        </div>
                        <div class="promContent">${list1[j].txts}</div>
                    </div>
                      <div class="tab_con_ren_bot">
                          <div class="prdtTags1" con="kong">${list1[j].title}</div>
                        <h4 class="nameh4" title="${list1[j].tit}">${list1[j].tit}</h4>
                        <div class="price1">${list1[j].price}</div>
                      </div>
                   </div>
                


         `).appendTo($(".third_tab"))
        var kong = list1[j].title
        if (kong == "") {
          $('.prdtTags1').css("display", "none")
        }

      })

    })
  })


  $(".item").click(function () {
    $(this).addClass(".innerWrap .act2").siblings(".item").removeClass(".innerWrap .act2")

    $(".third_tab").html("")
    var dian = $(this).attr("dian")



    $.get("./json/renqi.json", function (str) {
      $.each(str, function (i) {
        var name = str[i].name
        //  console.log(name)
        var list = str[i].list
        //  console.log(list)
        if (dian == name) {
          $.each(list, function (j) {
            //  console.log(list[j].title) //可以插入的内容
            $(`
               <div class="tab_con_ren">
                      <div class="tab_con_ren_top">
                          <img src="${list[j].img}" title="${list[j].tit}">
                      </div>
                      <img class="tit1" src="./img/logo1.png">
                      <div class="xin_bot">
                        <div class="promTitle">
                            <div class="qiang">${list[j].title}</div>
                            <div class="qtime">${list[j].txt}${list[j].tx}</div>
                           
                        </div>
                        <div class="promContent">${list[j].txts}</div>
                    </div>
                      <div class="tab_con_ren_bot">
                          <div class="prdtTags1" con="kong">${list[j].title}</div>
                        <h4 class="nameh4" title="${list[j].tit}">${list[j].tit}</h4>
                        <div class="price1">${list[j].price}</div>
                      </div>
                   </div>
                


         `).appendTo($(".third_tab"))
            var kong = list[j].title
            if (kong == "") {
              $('.prdtTags1').css("display", "none")
            }

          })
        }
      })
    })
  })

  //限时购   倒计时



  //福利社左边轮播图
  var swiper3 = new Swiper('.swiper3', {
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


  //多个一样的板

  $.get("./json/gonggong.json", function (str) {
    $.each(str, function (i) {
      // console.log(str[i])   //每个板块的内容  创建板块与头部
      // console.log(str[i].title)
      $(`
    <div class="sixth">
    <div class="sixth_main">
    <div class="m-commonHeader">
    <div class="f-left">
            <h3 class="h3">${str[i].title}</h3>
        </div>
        <div class="f_right">
        <div class="subCateList"></div>
        <div class="morelist">查看更多 ></div>
    </div>
    </div>
    <div class="sixth_ban">
    <div class="swiper-container swiper4">
    <div class="swiper-wrapper swiper4-4"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>
    </div>
    <div class="sixth_bot">
      <ul class="itemList"></ul>
    </div>
    </div>
    </div>
    `).appendTo($(".duoge"))

      var txt = str[i].txt
      var img1s = str[i].img
      var list = str[i].list
      $.each(txt, function (j) {
        // console.log(txt[j])
        $(`
               <li>
                    <span>${txt[j]}</span>
                    <a>/</a>
                </li>
      `).appendTo($(".subCateList").last())
      })
      $.each(img1s, function (x) { //轮播图图片
        // console.log(img1s[x])
        $(`
              <div class="swiper-slide pic_4">
              <img src="${img1s[x]}">
               </div>
              `).appendTo($(".swiper4-4").last())
      })
      $.each(list, function (y) {
        // console.log(list[y])
        $(`
                <li class="items">
                <div class="item_con">
                <div class="hd">
                    <img class="img3" src="${list[y].img}" style=" display: block;">
                    <img class="img4" src="${list[y].img1}">
  
                </div>
               <div class="logo1"></div>
               <div class="xin_bot">
                  <div class="promTitle">
                      <div class="qiang">${list[y].txt}</div>
                      <div class="qtime">${list[y].tit}</div>
                     
                  </div>
                  <div class="promContent">${list[y].txts}</div>
              </div>
              <div class="bd">
                  <div class="prdtTags"></div>
                  <h4 class="h4name"title="${list[y].cen}" >${list[y].cen}</h4>
                  <p class="xinprice">${list[y].price}</p>
              </div>
            </div>
                
                </li>
          `).appendTo($(".itemList").last())

      })

     



      var swiper4 = new Swiper('.swiper4', {
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



  // 大家都在说

  $.ajax({
    "url": "./json/foot.json",
    "type": "get",
    "data": "",
    "dataType": "json",
    "async": "true"
  }).done(function (str) {
    console.log(str)    //三个大的对象   每一行
    $(str).each(function (i) {
      console.log(str[i])
     
                 // 拿到具体的每一个数据
        $(`
        <div class="swiper-slide pic_5">
  <div class="pic_5_top">
  <img src="${str[i].img}" title="${str[i].title}">
</div>
<div class="pic_5_bot">
  <div class="comment">
      <div class="comment_top">${str[i].people}${str[i].time}</div>
      <div class="comment_cen">
       <div class="comment_cen_le">
       ${str[i].title}
       </div>
       <div class="comment_cen_ri"> ${str[i].price}</div>
      </div>
      <div class="comment_bot"> ${str[i].content}</div>
  </div>
</div>
</div>
  `).appendTo($(".ban_xin2"))



      

    })
    var swiper5 = new Swiper('.swiper5', {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay:{
        delay: 1000
      },
      loop:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
    });




  })



})