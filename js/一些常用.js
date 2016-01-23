function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]}
/*function getStyle(obj,attr){	

	if(obj.currentStyle){
		
	return obj.currentStyle[attr];
	
	}else{
		
	return	getComputedStyle(obj)[attr];
	
		}
	}*/
	
/*function $(id){
	return document.getElementById(id);
		}*/
		
function doMove(obj,attr,dir,target,endFn){	
	clearInterval(obj.timer);
	dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	obj.timer=setInterval(function(){		
		var speed=parseInt(getStyle(obj,attr))+dir;				
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
			}
		obj.style[attr]=speed+"px"; 	
		if(speed==target){
			clearInterval(obj.timer);
			endFn&&endFn();
			}		
		},18);
	}
function shake(obj,attr,endFn){
	/*if(obj.onOff){return};
	obj.onOff=true;*/
	var pos=parseInt(getStyle(obj,attr));	
	var arr=[];
	var num=0;
	for(var i=10;i>0;i-=2){
		arr.push(i,-i);
		}
		clearInterval(obj.timer);
		obj.shake=setInterval(function(){	
			/*var pos=parseInt(getStyle(obj,attr),0);	*/	
			obj.style[attr]=pos+arr[num]+"px";			
			num++;
			if(num===arr.length){
				clearInterval(obj.shake);
				endFn&&endFn();
				}
				/*obj.onOff=false;*/
			},50);
	}


function getElementsByClassName(parent/* 比如oUl,这里可以用前面写的获取元素的方法*/,tagName/* 标签 */,className){
	
	var arr=[];
	var aEls=parent.getElementsByTagName(tagName);			
		for(var i=0;i<aEls.length;i++){	
						
			var aClassName=aEls[i].className.split(" ");				
				for(var j=0;j<aClassName.length;j++){					
					if(aClassName[j]==className){	
							
						arr.push(aEls[i]);
						break;			
						}							
					}														
				}
			console.log(arr);	
			return arr;
		} //封装了一个可以通过获取classname来获取元素...通过选中父级，子节点名字，classname。
function ajax(method,url,data,success){
	var xhr =null;
	try{
		xhr=new XMLHttpRequest();
		}catch(e){
			xht=new ActiveXObject("Microsoft.XMLHTTP");
			}
	if(method=="get"&&data){
		url+="?"+data;
		}	
	xhr.open(method,url,true);
	if(method=="get"){
		xhr.send();
		}else{
			xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
			xhr.send(data);
			}	
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				success&&success(xhr.responseText);
				}else{
					alert("出错了，Err:"+xhr.status);
					}
			}
		}
	}		
		
/*var re={
	textChinese：/[\u4e00-\u9fa5]/ //匹配中文          常用的正则方法
	delt：/^\s*|\s*$/ //行首尾删除空格
	Email：/^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/
	webNet：/[a-zA-z]+://[^\s]* /这里有个空格要删掉
	QQ号：/[1-9][0-9]{4,9}/
	邮政编码：/[1-9]\d{5}/
	身份证：/[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x/

	}*/
/* 关于正则：
	当正则需要传参的时候不能简写成//，必须全称new RegExp()，参数传（）里面；
		. 代表任意字符   \.代表真正的点
		\s:代表空格
		\S:非空格
		\d：数字
		\D:非数字
		\w：匹配包括下划线的任何单词字符。
		\W：非字符
		\b:独立的部分  （三部分：起始，结束，空格）比如 str="a bc e"
					re=/\bc/ 这里c前面不是起始也不是结束也不是空格而是b，所以不满足
		\B:非独立的部分
		\1: 重复的第一个子项。 \2就是重复的第二个子项
		（a）（b）(c）/1就是 (a)(b)(c)(a)
	转义字符
	\n代表换行
 */