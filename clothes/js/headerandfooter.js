(()=>{
		//所有页面加载页头
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="style/headerandfooter.css";
	var loginlink=document.head.appendChild(link);

	
	ajax({
		type:"get",
		url:"header.html",
//		dataType:"json"  如果要从后台拿数据（img，title...）,就需要用
		}).then(html=>{
			document.getElementById("top").innerHTML=html;
		})


	
	ajax({
		type:"get",
		url:"footer.html",
//		dataType:"json"  如果要从后台拿数据（img，title...）,就需要用
		}).then(html=>{
			document.getElementById("footer").innerHTML=html;
		})


		
	})();
