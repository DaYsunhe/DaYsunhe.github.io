var $window=$(window);
$(window).scroll(function(){
	var windowheight=$window.scrollTop();
	if (windowheight>150) {
		$(".menu-content").css({"position":"fixed","top":"0px"});
	}
	else{
		$(".menu-content").css({"position":"static"});

	}

	if ($(window).scrollTop()>1000) {
		$(".tip").css("display","block");
	}
	else{
		$(".tip").css("display","none");
	}
})


//返回顶部
function tip(){
	
	$('body,html').animate({scrollTop:0},1000);
}