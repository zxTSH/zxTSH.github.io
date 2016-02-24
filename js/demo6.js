(function(){
	var onOff=false;
	var timer=new Date().getTime();
	var oTimer=null;
	oTimer=setInterval(function(){
		
		if((new Date().getTime()-timer)>=2000){
			
			onOff=true;
			
			}
			
		if(onOff){
			
			clearInterval(oTimer);
			
			$("#welcome").css("opacity",0).bind({"transitionend":function(){
				
					$(this).removeClass("pageShow");
					//alert($(this).css("display"))
				
				}})
			
			
			
			}
			
		},1000);
	
	
})(); //welcome跳转

(function(){
	$(".tabPic").css("transition","1s");
	var num=0;
	var oWidth=$(".tabPic").find("li").get(0).offsetWidth;
	var tabPic=$(".tabPic").get(0);
	var tabLi=$(".tabNav").find("li");
	var Timer=null;
	var iStart=0;
	var iStartTouchX=0;
	var iX=0;
	function autoPlay(){
			num=num%tabLi.length;
			iX=-num*oWidth;
			tabPic.style.WebkitTransform=tabPic.style.transform="translateX("+iX+"px)";
			
			tabLi.each(function(){
				
				tabLi.removeClass("active");
				
				tabLi.eq(num).addClass("active");

				})
			
		}
	oTimer=setInterval(function(){
		
		num++;
		autoPlay();
		
		},4000);
	
	
	
		
	$(".tabWrap").bind({
		"touchstart":function(ev){
			//console.log(ev.originalEvent.changedTouches[0]);
				var Ev=ev.originalEvent.changedTouches[0];
				clearInterval(oTimer);
				iStartTouchX=Ev.pageX;
				iStart=iX;
				$(".tabPic").css("transition","0s");
			
			},
		"touchmove":function(ev){
				var Ev=ev.originalEvent.changedTouches[0];
				var disX=Ev.pageX-iStartTouchX;
				iX=iStart+disX;
				tabPic.style.WebkitTransform=tabPic.style.transform="translateX("+iX+"px)";
				$(".tabPic").css("transition","0s");
			},
		"touchend":function(ev){
			
			//num=-Math.round(iX/oWidth);
			
			var ds=-(iX/oWidth);
			
			if((num-ds)<-0.3){
				
				num++;
				
				}
				else if((num-ds)>0.3)
				{
					num--;
				}
			if(num<0)
			{
				num=0;
			}else if(num>tabLi.length-1){
				
				num=tabLi.length-1;
				
				}
			
			
			
			$(".tabPic").css("transition","1s");
			
			autoPlay();
			
			oTimer=setInterval(function(){
		
				num++;
				
				autoPlay();
				
				},4000);
			
			}
		
	})
	
})(); //图片切换与轮播

(function(){
	var onOff=false;
	var onOff2=false;
	var aA1=$(".score").find("nav").eq(0).children();
	var aA2=$(".score").find("nav").eq(1).children();	
	var aA3=$(".score").find("nav").eq(2).children();
	var oBtn=$("#index").find(".btn");
	var oInfo=$("#index").find(".info").get(0);
	if(!window.Binit)
	{
		init();
		window.Binit=true;
	}
	function init(){
		aBind(aA1);
		aBind(aA2);
		aBind(aA3);
		flagsCheck();
		iSub();
		}
	function aBind(obj){
		for(var i=0;i<obj.length;i++){
			obj.get(i).index=i;
		}
		obj.bind("touchend",function(){
		obj.removeClass("active");
		for(var i=0;i<=this.index;i++){
			obj.get(i).className="active";	
			}	
		obj.parent().next().attr("value",this.index+1);
		checked();
		})
	}	
	function flagsCheck(){	
		var aSpan=$(".flags").find("span");	
		for(var i=0;i<aSpan.length;i++){		
			aSpan.eq(i).bind("touchend",function(){
					checked();
					setTimeout(checked,50);
				})
			}
		}		
	function checked()
	{
		var aInput=$(".score").find("input");
		
		onOff=bInput();
		
		if(onOff)
		{
			if(bTag())
			{
				oBtn.addClass("submit");
				hide(oInfo);
				onOff2=true;
			}
			else
			{
				oInfo.innerHTML="您还未选择景区印象";
				show(oInfo);
			}
		}
		else
		{
			oInfo.innerHTML="请为景区做个评价吧~";
			show(oInfo)
		}
		
	}
	
	function bInput()
	{	
		var aInput=$(".score").find("input");
		for(var i=0;i<aInput.length;i++)
		{
			if(aInput.get(i).value==0)
			{
				return false;	
			}	
		}
		return true;
	}	
	function bTag()
	{
		var aFlags=$(".flags").find("input");
		
		for(var i=0;i<aFlags.length;i++)
		{	
			if(aFlags.get(i).checked)
			{
				return true;
			}
		}
		return false;
		
	}
	
	function iSub()
	{	
		oBtn.bind("touchend",function(){
				checked();
				if(onOff2){
					indexOut();
					onOff2=false;
				}
				
			});
	}

	
})();  
 //评分
function show(obj)
{
	obj.style.opacity="1";
	obj.style.WebkitTransform="scale(1)";
}
function hide(obj)
{
	obj.innerHTML="谢谢您的支持~";
	setTimeout(function(){
		
		obj.style.opacity="0";
		obj.style.WebkitTransform="scale(0)";
		
		},2000);
}

function indexOut()
{
	
	$("#mask").addClass("pageShow");
	
	var oIndex=$("#index").get(0);
	
	oIndex.style.WebkitFilter=oIndex.style.filter="blur(10px)";
	
	$("#mask").animate({"opacity":1},2000);
	
	setTimeout(function(){
		
			$("#mask").removeClass("pageShow");
			
			$("#mask").animate({"opacity":0},14,function(){
				
				$("#news").addClass("pageShow").animate({"opacity":1},14);
				
				news();
				
				});
			
			oIndex.style.WebkitFilter=oIndex.style.filter="blur(0px)";
		
			$("#index").removeClass("pageShow");
			
		},3000);
	
}

function news(){
	
	var oInfo=$("#news").find(".info").get(0);
	
	var oNews=document.getElementById("news");
	
	var aInput=oNews.getElementsByTagName("input");
	
	aInput[0].onchange=function(){
			if(this.files[0].type.split("/")[0]=="video")
			{
				newsPageOut();
			}
			else
			{
				oInfo.innerHTML="请上传视频";	
				newShowHide(oInfo);
			}
			
		}
	aInput[1].onchange=function(){
			if(this.files[0].type.split("/")[0]=="image")
			{
				newsPageOut();
			}
			else
			{
				oInfo.innerHTML="请上传图片";	
				newShowHide(oInfo);
			}
			
		}
	
	} //news
function newShowHide(obj){
	
		obj.style.opacity="1";
		obj.style.WebkitTransform="scale(1)";
		setTimeout(function(){
			obj.style.opacity="0";
			obj.style.WebkitTransform="scale(0)";	 
		},2000);
	
	}
	
function newsPageOut()
{
	$("#news").removeClass("pageShow");
	
	$("#form").addClass("pageShow");
	
	form();
	
}

function form(){
	
	var aFlags=$(".formFlags").find("input");
	
	var aFlagSpan=$(".formFlags").find("span");
	
	var oBtn=$("#btn");
	
	var oInfo=$("#form").find(".info");
	
	var onOff=false;
	
	for(var i=0;i<aFlags.length;i++)
	{
		aFlags.get(i).checked=false;
	}
	
	for(var i=0;i<aFlagSpan.length;i++)
	{
		aFlagSpan.eq(i).bind("touchend",function(){
				onOff=true;
				oInfo.html("");
				setInterval(function(){
					oBtn.addClass("submit");
					},50);
		});	
	}
	
	
	oBtn.bind("touchend",function(){
			if(onOff)
			{
				$("#form").removeClass("pageShow");
				$("#load").addClass("pageShow");
				reLoad();
				onOff=false;
			}
			else
			{
				oInfo.html("您还未选择景区印象").animate({"opacity":1},1000);
			}
		})
	
}//form

function reLoad(){

	$("#load").find(".btn").bind("touchend",function(){

		$("#load").removeClass("pageShow");
		$("#index").addClass("pageShow");
			
	});

} 