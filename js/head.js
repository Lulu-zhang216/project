$(function(){
    //第一个滚动新闻
var index =0;
var lheight = $(".news1_ul li").height()
var timer;
timer= setInterval(function(){
 if(index == 1){
     index =0;
     $(".news1_ul").css("top",0)
 }else{
     index ++;
     $(".news1_ul").animate({"top":-index * lheight})
 }
},2000)
$(".news1_ul li").mouseover(function(){
    clearInterval(timer)
})
$(".news1_ul li").mouseout(function(){
    timer= setInterval(function(){
        if(index == 1){
            index =0;
            $(".news1_ul").css("top",0)
        }else{
            index ++;
            $(".news1_ul").animate({"top":-index * lheight})
        }
       },2000)
})





//第二个滚动新闻
var num =0;
var lheight2 = $(".news2_ul li").height()
// console.log(lheight2)
var time;
time= setInterval(function(){
 if(num == 2){
     num =0;
     $(".news2_ul").css("top",0)
 }else{
     num ++;
     $(".news2_ul").animate({"top":-num * lheight2})
 }
},2000)
// var time;
// var lheight2 = $(".news2_ul li").height()

// time= setInterval(function(){
//         $(".news2_ul li").first().appendTo($(".news2_ul"))
//         $(".news2_ul").css("top",-lheight2)
//         animate({"top":0},2000)
//     },2000)
     



$(".header_bot_cen .tab_li").hover(function(){
    $(this).addClass(".act1").siblings(".header_bot_cen .tab_li").removeClass(".act1")
    $(".tab_con").css("display","block")

    $(".tab_list").html("")
    var licon =$(this).attr("li_con")
    $.get("./json/headfenlei.json",function(str){
        $.each(str,function(i){
            var name = str[i].title
            var fl = str[i].fenlei
            // console.log(name)
            if(licon == name){
                $.each(fl,function(j){
                    var title = fl[j].fenlei1
                    // console.log(title)
                    $(`
                <dl class="dl"> 
                <dt class="dt">${title}</dt>
                </dl>
                `).appendTo($(".tab_list"))
                var ddle = fl[j].image
                var ddri = fl[j].fenlei2
                $.each(ddle,function(x){
                    $(`
                    <dd class="dd">
                    <a class="dd_le" title=" ${ddri[x]}">
                        <img src="${ddle[x]}">
                    </a>
                    <span class="dd_ri" title=" ${ddri[x]}">
                    ${ddri[x]}
                    </span>

                </dd>
                    `).appendTo($(".dl").last())
                })
                })
                
            }
          
        })
    })
},function(){
    $(".tab_con").css("display","none")
})

//吸顶
$(window).scroll(function(){
    if($("html,body").scrollTop() >=176){
        $('.xi').css({"display":"block","position":"fixed"})
    }else{
        $(".xi").css("display","none")
    }
})

//吸顶里的hover
$(".xi_main .tab_li").hover(function(){
    $(this).addClass(".act1").siblings(".tab_li").removeClass(".act1")
    $(".tab_con").css({"display":"block","top":"50px"})

    $(".tab_list").html("")
    var licon =$(this).attr("li_con")
    $.get("./json/headfenlei.json",function(str){
        $.each(str,function(i){
            var name = str[i].title
            var fl = str[i].fenlei
            // console.log(name)
            if(licon == name){
                $.each(fl,function(j){
                    var title = fl[j].fenlei1
                    // console.log(title)
                    $(`
                <dl class="dl"> 
                <dt class="dt">${title}</dt>
                </dl>
                `).appendTo($(".tab_list"))
                var ddle = fl[j].image
                var ddri = fl[j].fenlei2
                $.each(ddle,function(x){
                    $(`
                    <dd class="dd">
                    <a class="dd_le" title=" ${ddri[x]}">
                        <img src="${ddle[x]}">
                    </a>
                    <span class="dd_ri" title=" ${ddri[x]}">
                    ${ddri[x]}
                    </span>

                </dd>
                    `).appendTo($(".dl").last())
                })
                })
                
            }
          
        })
    })
},function(){
    $(".tab_con").css("display","none")
})

















//头部
//跳转首页
$(".shouye").click(function(){
    window.open("./index.html","_self")
})
//跳转为你严选
$(".yanxuan").click(function(){
    window.open("./foryou.html","_self")
})
//跳转众筹
$(".zhongchou").click(function(){
    window.open("./crowdFunding.html","_self")
})

$(".tab_li").click(function(){
    var index = $(this).index()
    window.open("./public.html?"+(index-1),"_self")
})

//吸顶
$(".shouye1").click(function(){
    window.open("./index.html","_self")
})

$(".xi_main .tab_li").click(function(){
    var index = $(this).index()
    window.open("./public.html?"+(index-1),"_self")
})


})