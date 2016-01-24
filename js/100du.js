$(function(){
	//搜索切换
	
	(function(){
		var oUl=$("#menu");
		var aLi=$("#menu li");
		var oText=$("#zSearch").find(".search_text");
		var arrText=["例如：荷棠鱼坊烤鱼 或 樱花日本料理","例如:大海啊都是水，千万别惹小学生","例如：小学生一秒可以跳7.3次","例如：扶老太太过马路","例如：今天天气越来越差估计要下雨"];
		var num=0;
		oText.val(arrText[num]);
		aLi.each(function(index){
				$(this).click(function(){
					aLi.attr("class","grad");
					$(this).attr("class","active");
					num=index;
					oText.val(arrText[num]);
				})
			})
		oText.focus(function(){
			if(oText.val()==arrText[num]){
				oText.val("");
				}
		})
		oText.blur(function(){
			if(oText.val()==""){
				oText.val(arrText[num]);
				}
		})
		
		var ad_search=$("#main_advice_search").find(".main_advice_search_text") ;
		//知道分子里面的search
		
		ad_search.focus(function(){
			if(ad_search.val()=="输入关键字"){
				ad_search.val("");
				}
			})
		ad_search.blur(function(){
			if(ad_search.val()==""){
				ad_search.val("输入关键字");
				}
			})
		})();
	
	
	//updata滚动
	
	(function(){
		var oUl=$("#update_news");
		var oUp=$(".update .up");
		var oDown=$(".update .down");
		var str="";
		var oDiv=$(".update");
		var num=0;
		var arrData=[
		{"name":"萱萱","time":1,"title":"那些灿烂华美的瞬间...","url":"http://www.baidu.com"},
		{"name":"小胖","time":2,"title":"有什么话好好说","url":"http://www.baidu.com"},
		{"name":"李松展","time":3,"title":"不要动手动脚","url":"http://www.baidu.com"},
		{"name":"蛋蛋","time":4,"title":"小学生你都敢惹？","url":"http://www.baidu.com"},
		{"name":"小胖","time":5,"title":"有什么话好好说","url":"http://www.baidu.com"},
		{"name":"李松展","time":6,"title":"不要动手动脚","url":"http://www.baidu.com"},
		{"name":"武则天","time":7,"title":"有什么话好好说","url":"http://www.baidu.com"},
		{"name":"李松展","time":8,"title":"不要动手动脚","url":"http://www.baidu.com"},
		{"name":"小小","time":9,"title":"有什么话好好说","url":"http://www.baidu.com"},
		{"name":"李松展","time":10,"title":"不要动手动脚","url":"http://www.baidu.com"},
		{"name":"小胖","time":11,"title":"有什么话好好说","url":"http://www.baidu.com"}
		]
		
		for(var i=0;i<arrData.length;i++){
			
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+'</a></li>'
			
			}
		oUl.html(str);
		var iH=$("#update_news li").height();
		var iLen=0;
		var timer=null;
		
		
		
		autoPlay();
		
		oDiv.hover(function(){
			clearInterval(timer);
			},autoPlay);	
		
		
		oUp.click(function(){
			move(-1);
			});	
		oDown.click(function(){
			move(1);
			});
					
		function move(num){
			iLen+=num;
			if(-(arrData.length-1)>iLen){
				iLen=0;
				}
			if(iLen>0){
				iLen=-(arrData.length-1);
				}	
			oUl.stop().animate({"top":iH*iLen},3000,"elasticOut");
			}
				
		function autoPlay(){
			timer=setInterval(function(){
				move(-1);
				},3000);	
			}
		
		})();
	
	
	//选项卡切换
	(function(){
		var oUl1=$("#options_one");
		var oUl2=$("#options_two");		
		var oUl3=$("#sider_tab");		
		var oUl4=$("#main_options_tab");
		var aLi1=$("#options_one").children();
		var aLi2=$("#options_two").children();
		var aLi3=$("#sider_tab").children();
		var aLi4=$("#main_options_tab").children();
		
		var aDiv1=$("#options_con_one").children();
		var aDiv2=$("#options_con_two").children();
		var aDiv3=$("#sider_list").children();
		var aDiv4=$("#main_advice_tab_list").children();
		
		/*aLi.each(function(index){
			$(this).click(function(){
				aLi.removeClass("active");
				$(this).addClass("active");
				aLi.find("a").removeClass("pic_down_red").addClass("pic_down_gray");
				$(this).find("a").removeClass("pic_down_gray").addClass("pic_down_red");
				});*/
				
		optionsTab(aLi1,aDiv1);
		optionsTab(aLi2,aDiv2);
		optionsTab1(aLi3,aDiv3);
		optionsTab1(aLi4,aDiv4);
		
		aDiv1.hide().eq(0).show();
		aDiv2.hide().eq(0).show();
		aDiv3.hide().eq(0).show();
		aDiv4.hide().eq(0).show();
		
		function optionsTab(obj,oCon){
			obj.each(function(index){
				$(this).click(function(){
					obj.removeClass("active");
					$(this).addClass("active");
					obj.find("a").removeClass("pic_down_red").addClass("pic_down_gray");
					$(this).find("a").removeClass("pic_down_gray").addClass("pic_down_red");
					oCon.hide().eq(index).show();
					});
				});
			};
		function optionsTab1(obj,oCon){
			obj.each(function(index){
				$(this).click(function(){
					obj.removeClass("active");
					$(this).addClass("active");
					obj.find("a").removeClass("pic_down_red1").addClass("pic_down_gray1");
					$(this).find("a").removeClass("pic_down_gray1").addClass("pic_down_red1");
					oCon.hide().eq(index).show();
					});
				});
			};
			
		
		})();
	
	//main_autoplay
	(function(){
		var aTab=$("#main_autoplay_tab").children();
		var aPic=$("#main_autoplay").children();
		var timer=null;
		var num=0;
		var oDiv=$(".best_part_autoplay");
		var aText=["爸爸去哪儿~~","爸爸去哪儿~~!!!","爸爸到底去哪儿？？？"]
		
		
		aTab.each(function(index){
			aTab.mouseover(function(){		
				aTab.removeClass("active");
				$(this).addClass("active");
				aPic.removeClass("active");
				aPic.eq($(this).index()).addClass("active");
				num=$(this).index();
				oDiv.find("p").html(aText[num]);
				});
			});
			
		autoPlay();
		
		oDiv.hover(function(){
			clearInterval(timer);
			},autoPlay);
		
		
		
		function autoPlay(){
			timer=setInterval(function(){
				num++;
				if(num==aPic.length){
					num=0;
					}
				aTab.removeClass("active");
				aTab.eq(num).addClass("active");	
				aPic.removeClass("active");
				aPic.eq(num).addClass("active");
				oDiv.find("p").html(aText[num]);
				},2000);	
			};
		
		
		})();
		
	//每日活动
	(function(){
		var aImg=$("#dataList").find(".spe");
		var oDiv=$("#info");
		var oImg=$("#info").find(".img1");
		var oP=$("#info").find("p");
		var oData=$("#info").find("h3 strong");
		var aWeek=$("#iWeek").children();
		
		aImg.hover(function(ev){
			var iTop=ev.pageY-$(this).height();
			var iIndex=$(this).parent().parent().index()%aWeek.length;
			var iLeft=ev.pageX+$(this).width();
			
			oDiv.stop().show(400).css("top",iTop).css("left",iLeft);
			
			oImg.attr("src",$(this).attr("src"));
			
			oP.html($(this).attr("info"));
			
			oData.html(aWeek.get(iIndex).innerHTML);
			
			
			
		},function(){
			
			oDiv.stop().hide(400);
			
			});
			
	//BBS论坛
	(function(){
		var oList=$("#main_BBS_list");
		var aLi=oList.children();
		aLi.mouseover(function(){
			
			aLi.attr("class","");
			$(this).attr("class","active");
			
			});
		
		})();
		
		
		
		})();
	
	//HOT图片高亮
	(function(){
		var oUl=$("#pic_hot");
		var aLi=$("#pic_hot").find("li").not(".normal");
		var aImg=oUl.find("img");
		var oDiv="";
		var iWidth=0;
		var iHeight=0;
		var aA=null;
		
		aLi.css("position","relative");
		
		aLi.hover(function(){
			oDiv=$("<div><p><a href='#'>用户："+$(this).index()+"<br/>区域"+$(this).index()+"<br/>人气"+$(this).index()+"</a></p></div>")
			iWidth=$(this).width();
			iHeight=$(this).height()-10;
			aA=oDiv.find("a");
			aA.css("color","#fff");
			oDiv.css({
				"position":"absolute",
				"width":iWidth,
				"height":iHeight,
				"background":"rgba(0,0,0,0.2)",
				"top":0,
				"left":0,
				"text-align":"center",
				"padding-top":10,
				"font-weight":"bold"
				});
				
			$(this).append(oDiv);
			},function(){
				
				$(this).find("div").remove();
				
				});
		
		
		
		})();
	

	
	
	})