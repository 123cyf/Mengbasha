jQuery(function($){
	// 轮播图效果
	$(".banner").lmCarousel({imgs:["images/list_lunbo.jpg","images/list_lunbo1.jpg","images/list_pp1.jpg","images/list_pp2.jpg","images/list_hd1.jpg"]})
	// 返回顶部效果
	$(".Top").on("mouseover",function(){
		$(".toTop").css("display","block");
	})
	var scroTop = $(window).scrollTop();
	$(".Top").on("mousedown",function(){

		$(".toTop").css("display","none");
		 // $("html").parent.scrollTo(0,0);
	})
	 $(".toTop").on("mousedown",function(){
		this.css("display",none);

			// clearInterval($toTop.timer);
			// $toTop.timer = setInterval(function(){
			//     var $top = $("window").scrollY();
			//     $top -= 1000;
			//     if($top <= 0){
			//         clearInterval($totop.timer);
			//     }
			//     $("window").scrollBy(0,-1000);
			// },30)
	})
	

	// 封装cookie的设置、获取、删除
var Cookie = {
	// 设置cookie
	//  * name cookie名
	//  * val cookie值
	//  * date 时间对象
	//  * path 路径
	setCookie : function(name,val,date,path){
		var str = name+"="+val;
		if(date){
			str += "; expires="+date.toUTCString();
		}
		if(path){
			str += "; path="+path;
		}
		document.cookie = str;
	},
	// 获取cookie
	getCookie : function(name){
		var cookie = document.cookie;//"left=300; age=17"   
		if(cookie == ""){
			return "";
		}else{
			var cookieArr = cookie.split("; ");
			// var res = "";
			// cookieArr.forEach(function(item){
			//     var arr = item.split("=");
			//     if(arr[0] == name){
			//         res =  arr[1];
			//     }
			// })
			// return res;
			for(var i=0;i<cookieArr.length;i++){
				var arr = cookieArr[i].split("=");
				if(arr[0] == name){
					return arr[1];
				}
			}
			return "";
		}
	},
	// 删除某条cookie
	delCookie : function(name,path){
		var d = new Date();
		d.setDate(d.getDate()-1);
		Cookie.setCookie(name,"",d,path);
	}
}
			// tab标签切换
		//     "use strict";
	   
		//     var tab = document.getElementsByClassName('main_r')[0];
		//     var tabItems = tab.children[0].children;
		//     var tabContent = tab.children[1].children;

		//     for(var i=0;i<tabItems.length;i++){
		//         if(i===0){
		//         tabItems[i].className = 'active';
		//         }else{
		//             tabContent[i].style.display = 'none';
		//         }
		//         (function(i){
		//             var timer;
		//             tabItems[i].onmouseover =function(){
		//                 timer = setTimeout(function(){
		//                 for(var j=0;j<tabItems.length;j++){
		//                     if(i===j){
		//                         tabItems[j].className = 'active';
		//                         tabContent[j].style.display = 'block';
		//                     }else{
		//                         tabItems[j].className = '';
		//                         tabContent[j].style.display = 'none';
		//                     }
		//                 }
		//             },300)
		//         }

		//         tabItems[i].onmouseout = function(){
		//             clearTimeout(timer);
		//         }
		//     })(i);   
		// }
// console.log(Cookie.getCookie("Yonghu"));
	 // ajax发送请求参数
	  var xhr = new XMLHttpRequest();
			var res;
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && (xhr.status==200 || xhr.status==304)){
					res = JSON.parse(xhr.responseText);
					// console.log(res.data1);
					// console.log(res.data2);
					// render1(res.goodlist1);
					// render2(res.goodlist3);
					// render3(res.goodlist2);
					// return res;
					render1(res.data1);
					render2(res.data2);
				}
			
			}
			xhr.open("get","../php/index.php",true);
			xhr.send(null);

		// var yonghuArr = JSON.parse(Cookie.getCookie("Yonghu"));
		// var yonghuArr = JSON.parse(Cookie.getCookie("Yonghu"))
		// console.log(yonghuArr[0].account,yonghuArr[0].password);
		// 拿到存储的Cookie发送请求给后端返回相应的记录并渲染到页面顶部
		// var xhr1 = new XMLHttpRequest();
		//     var res;
		//     xhr.onreadystatechange = function(){
		//         if(xhr1.readyState == 4 && (xhr1.status==200 || xhr1.status==304)){
				   
		//         }
			
		//     }
		//     xhr1.open("get",`../php/index.php?Uname=${yonghuArr[0].account}&PW=${yonghuArr[0].password}`,true);
		//     xhr1.send(null);
		// 页面渲染
		var shangpin1 = document.getElementById("mshangpin1");
		var mshopping = document.getElementById("mshopping");
		function render1(res){
			shangpin1.innerHTML = res.map(function(item){
			
			return `<li data-guid="${item.id}">
						<img src="${item.imgurl}" />
						<p>${item.info1}</p>
						<h2>${item.info2}</h2>
						<span>￥${item.yuanjia}</span><br />
						<input type="button" id="goumai" value="立即购买"/>
					</li>`
			}).join("");
		}
			// 给Button按钮绑定点击事件
		$(".shangpin1").on("click","li input",function(){
			var $guid = $(this).parent().attr("data-guid");
			console.log($guid);
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && (xhr.status==200 || xhr.status==304)){
					// var res = JSON.parse(xhr.responseText);
					var res = JSON.parse(xhr.responseText).length;
					if(res>0){
						location.href = "../html/details.html?guid="+$guid;
					}
					

					// render1(res.data1);
					// render2(res.data2);
				}
			
			}
			xhr.open("get","../php/index.php?guid="+$guid,true);
			xhr.send(null);
		})
	  

		 function render2(res){
			mshopping.innerHTML = res.map(function(item){
			
			return `<li>
						<img src="${item.imgurl}" alt="" />
						<p>
							${item.info1}
						</p>
						<span class="s1">￥${item.xianjia}</span>
						<span class="s2">￥${item.yuanjia}</span>
					</li>`
			}).join("");
		}

// 左右轮播图
		
		

})


