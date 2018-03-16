//获取元素函数
function $(id){
  return document.getElementById(id);
}
//创建异步对象函数
function createXhr(){
		var xhr=null;
	    if(window.XMLHttpRequest){
			//标准创建
		    xhr=new XMLHttpRequest();
		}else{
			//IE8以下创建
		    xhr=new ActiveXObject("Microsoft.XMLHttp");
		}
        return xhr;
	}