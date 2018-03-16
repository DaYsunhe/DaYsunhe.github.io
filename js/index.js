$(function(){
	banner();
	cooperation();
	show();
	zy();
	zs();
	storshow();
	kx();
	wenda();
})
// 菜单栏
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

// 轮播图
function banner (){
	var i=0;
	var length=$(".banner .img img").length+1;
	$(".banner img:first").show();
	$(".banner ul li a:first").css("background","#FF8400");
	var dsq=window.setInterval(ks,3500);
	$(".banner").hover(tz,star);
	$(".banner ul li").hover(hvli);
	
	function ks(){
		i++;
		if (i==length) {i=1;}
		$(".banner img").eq(i-1).fadeIn(800).siblings().fadeOut(500);
		$(".banner ul li a").not(i-1).css("background","white");
		$(".banner ul li a").eq(i-1).css("background","#FF8400");
	}
	function star(){
		dsq=window.setInterval(ks,3500);
	}
	function tz(){
		clearInterval(dsq);
	}
	function hvli(){
		tz();
		i=$(this).index();
		ks();
	}
}

//合作单位
function cooperation(){
	var cooperation=document.getElementById("cooperation-md");
	var container=document.getElementById("contianer-md");
	var u1=document.getElementById("cooperation-u1");
	var u2=document.getElementById("cooperation-u2");
	var lf=document.getElementById("cooperation-lf");
	var ri=document.getElementById("cooperation-ri");
	var info;
	var timeout;
	var time=1;
	var delaytime=2000;
	function act(){
		if(cooperation.scrollLeft%218==0){
			clearInterval(info);
			timeout=setTimeout(delay,delaytime);
		}
		else{
			cooperation.scrollLeft+=2;
			if(cooperation.scrollLeft >=1302){
				cooperation.scrollLeft=0;
			}
		}
	}
	function delay (){
		cooperation.scrollLeft+=2;
		info=setInterval(act,time);
	}
	info=setInterval(act,time);
	
	cooperation.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	cooperation.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onmouseover=function(){
			clearInterval(info);
			clearInterval(timeout);
		}
		
	
	lf.onmouseout=function(){
		info=setInterval(act,time);
	}

	ri.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	ri.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onclick=function(){
		do{
			cooperation.scrollLeft++;
			if(cooperation.scrollLeft >=1302){
				cooperation.scrollLeft=0;
				}
			}
		while(cooperation.scrollLeft%218!=0);
	}
	ri.onclick=function(){
		do{
			
			if(cooperation.scrollLeft <=0){
				cooperation.scrollLeft=1302;
				}
			cooperation.scrollLeft--;
			}
		while(cooperation.scrollLeft%218!=0);
	}
}

// 产品展示
function show(){
	var lg=$(".showtop li").length;
	for(i=0;i<lg;i++){
		$(".showtop li").eq(i).find("a").css("background","url(img/c"+(2+i)+".jpg)");
		$(".showbottom li").eq(i).find("a").css("background","url(img/c"+(6+i)+".jpg)");
	}
}
//专业人物
function zy(){
	var info;
	info=setInterval(act,time);
	var zy=document.getElementById("zy-md");
	var show=document.getElementById("zy-show");
	var u1=document.getElementById("zyshow1");
	var lf=document.getElementById("zy-lf");
	var ri=document.getElementById("zy-ri");
	var timeout;
	var time=1;
	var delaytime=2000;
	function act(){
		if(zy.scrollLeft%272==0){
			clearInterval(info);
			timeout=setTimeout(delay,delaytime);
		}
		else{
			zy.scrollLeft+=2;
			if(zy.scrollLeft >=1088){
				zy.scrollLeft=0;
			}
		}
	}
	function delay (){
		zy.scrollLeft+=2;
		info=setInterval(act,time);
	}
	
	
	zy.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	zy.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onmouseover=function(){
			clearInterval(info);
			clearInterval(timeout);
		}
		
	
	lf.onmouseout=function(){
		info=setInterval(act,time);
	}

	ri.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	ri.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onclick=function(){
		do{
			zy.scrollLeft++;
			if(zy.scrollLeft >=1088){
				zy.scrollLeft=0;
				}
			}
		while(zy.scrollLeft%272!=0);
	}
	ri.onclick=function(){
		do{
			
			if(zy.scrollLeft <=0){
				zy.scrollLeft=1088;
				}
			zy.scrollLeft--;
			}
		while(zy.scrollLeft%272!=0);
	}
}
//证书
function zs(){
	var info;
	info=setInterval(act,time);
	var zs=document.getElementById("zhengshu");
	var zscon=document.getElementById("zs-con");
	var timeout;
	var time=1;
	var delaytime=2000;
	function act(){
		if(zs.scrollLeft%138==0){
			clearInterval(info);
			timeout=setTimeout(delay,delaytime);
		}
		else{
			zs.scrollLeft+=2;
			if(zs.scrollLeft >=276){
				zs.scrollLeft=0;
			}
		}
	}
	function delay (){
		zs.scrollLeft+=2;
		info=setInterval(act,time);
	}
	
	
	zs.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	zs.onmouseout=function(){
		info=setInterval(act,time);  
	}
}



// 店面展示
function storshow(){
	var info;
	info=setInterval(act,time);
	var ss=document.getElementById("ss");
	var sscon=document.getElementById("sscon");
	var u1=document.getElementById("lf");
	var lf=document.getElementById("ss-lf");
	var ri=document.getElementById("ss-ri");
	var timeout;
	var time=1;
	var delaytime=2000;
	function act(){
		if(ss.scrollLeft%228==0){
			clearInterval(info);
			timeout=setTimeout(delay,delaytime);
		}
		else{
			ss.scrollLeft+=2;
			if(ss.scrollLeft >=1140){
				ss.scrollLeft=0;
			}
		}
	}
	function delay (){
		ss.scrollLeft+=2;
		info=setInterval(act,time);
	}
	
	
	ss.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	ss.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onmouseover=function(){
			clearInterval(info);
			clearInterval(timeout);
		}
		
	
	lf.onmouseout=function(){
		info=setInterval(act,time);
	}

	ri.onmouseover=function(){
		clearInterval(info);
		clearInterval(timeout);
	}
	ri.onmouseout=function(){
		info=setInterval(act,time);  
	}

	lf.onclick=function(){
		do{
			ss.scrollLeft++;
			if(ss.scrollLeft >=1140){
				ss.scrollLeft=0;
				}
			}
		while(ss.scrollLeft%228!=0);
	}
	ri.onclick=function(){
		do{
			
			if(ss.scrollLeft <=0){
				ss.scrollLeft=1140;
				}
			ss.scrollLeft--;
			}
		while(ss.scrollLeft%228!=0);
	}
}
//企业快讯
function kx(){
	$(".kxtop a").eq(0).css("background","url(img/dt_libg.gif)");
	$(".kxtop a").eq(0).mouseover(function(){
		$(".kx").css("display","block");
		$(".hy").css("display","none");
		$(".kxtop a").eq(0).css("background","url(img/dt_libg.gif)");
		$(".kxtop a").eq(1).css("background","none");

	})

	$(".kxtop a").eq(1).mouseover(function(){
		$(".kx").css("display","none");
		$(".hy").css("display","block");
		$(".kxtop a").eq(1).css("background","url(img/dt_libg.gif)");
		$(".kxtop a").eq(0).css("background","none");
	})
}

// 问答
function wenda(){
	var time=38;
	var kxribtm=document.getElementById("kxribtm")
	var dsq=setInterval(ks,time);
	function ks(){
		kxribtm.scrollTop++;

		if (document.getElementById("kxribtm").scrollTop>=420) {
			document.getElementById("kxribtm").scrollTop=0;
		}
	}
	$(".kxribtm").hover(function(){clearInterval(dsq)},
		function(){dsq=dsq=setInterval(ks,time)});
}

//返回顶部

function tip(){
	
	$('body,html').animate({scrollTop:0},1000);
}
	

