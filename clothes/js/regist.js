$(function(){
	// 请求省份
	$.get("PHP/province.php",function(data){
			var data=data.split(",");
			for(var i=0;i<data.length;i++){
				$("#province").append("<option>"+data[i]+"</option>");
			}
	})
	// 请求城市
	$("#province").change(function(){
		var val=$("#province").val();
		var len=$("#city").find("option");

		for(var i=len.length-1;i>0;i--){
			$(len[i]).remove();
		}
		$.post("PHP/city.php","val="+val,function(data){

			if (data) {
				var da=data.split(",");

				for(var i=0;i<da.length;i++){
					$("#city").append("<option>"+da[i]+"</option>");
				}
			}
			

		})
	})

	// radio选框
	$(".sex dd p").on("click","input",function(e){
		$(this).siblings()[0].checked=false;
		$(this).attr("checked");
		
		
		
	})

}) 