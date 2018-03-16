function ajax({type,url,data,dataType}){    //callback 回调地狱   解决return new  Promise  
	//对象{type,url,data,dataType } 这里必须是个对象，如果对象里面要是有空的话，只会undefined，不会报错

	return new Promise(open=>{
//		console.log(1);
  //1.创建xhr
	var xhr=new XMLHttpRequest();//这里 要调用                                
	//2.绑定事件
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			if(dataType==="json"){
				console.log(JSON.parse(xhr.responseText))
				open(JSON.parse(xhr.responseText));
			}else{
			  open(xhr.responseText);
//		  console.log(xhr.responseText);
				}			
		}
	}
	//3.打开链接
	if(type==="get"){
		url+="?"+data;//userName=zhuangzhuang&upwd=123456
    }
	xhr.open(type,url,true);
	
	//4.发送请求
	if(type==="get")	//如果是get
	   xhr.send(null);
	else
		xhr.send(data);
	 })
	}
