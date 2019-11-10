$(window).scroll(function() {
	if($(window).scrollTop() > 596) {
		$(".yx-cp-fixedtool-scrollToFixed").addClass("fixedActive")
		$(".yx-fixedtoolGoTop").addClass("active")
		$(".m-indexSideBar").addClass("fixed")
	} else {
		$(".yx-cp-fixedtool-scrollToFixed").removeClass("fixedActive")
		$(".yx-fixedtoolGoTop").removeClass("active")
		$(".m-indexSideBar").removeClass("fixed")
	}
	
})
$(".yx-cp-icon-yxclose").click(function(){
	$(".yx-subscribeDialog").css("display","none")
})

$(".yx-fixedtoolGoTop").click(function(){
	$('html , body').animate({scrollTop: 0});
	})