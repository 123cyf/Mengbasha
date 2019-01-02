document.addEventListener("DOMContentLoaded", function(){
    var phone1 = document.querySelector(".int1");
    var ps = document.querySelector(".in3");

    var btn3 = document.querySelector(".btn3");
    // 无密码登录
    var btn4 = document.querySelector(".btn4");
    var status = [200,304];
            var res;
            btn3.onclick = function(){
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                        res = JSON.parse(xhr.responseText);
                        console.log(res);
                        // alert(res);
                        // tips.innerHTML = xhr.responseText;
                        if(res.length>0){
                            Cookie.setCookie("Yonghu",JSON.stringify(res),"","/");
            
                                location.href="../index.html";
                        }
                    }
                }
                xhr.open("get",`../php/login.php?account1=${phone1.value}&psword=${ps.value}`,true);
                xhr.send(null);
            }

            btn4.onclick = function(){
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                        res = xhr.responseText;
                        // console.log(res);
                        // tips.innerHTML = xhr.responseText;
                        if(res.length>0){
                            Cookie.setCookie("Yonghu",JSON.stringify(res),"","/");
                                
                                location.href="../index.html";
                                console.log(Cookie.getCookie("Yonghu"));
                        }
                    }
                }
                xhr.open("get",`../php/login.php?account1=${phone1.value}`,true);
                xhr.send(null);
            }





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
            "use strict";
       
            var tab = document.getElementsByClassName('main_r')[0];
            var tabItems = tab.children[0].children;
            var tabContent = tab.children[1].children;

            for(var i=0;i<tabItems.length;i++){
                if(i===0){
                tabItems[i].className = 'active';
                }else{
                    tabContent[i].style.display = 'none';
                }
                (function(i){
                    var timer;
                    tabItems[i].onmouseover =function(){
                        timer = setTimeout(function(){
                        for(var j=0;j<tabItems.length;j++){
                            if(i===j){
                                tabItems[j].className = 'active';
                                tabContent[j].style.display = 'block';
                            }else{
                                tabItems[j].className = '';
                                tabContent[j].style.display = 'none';
                            }
                        }
                    },300)
                }

                tabItems[i].onmouseout = function(){
                    clearTimeout(timer);
                }
            })(i);   
        }
    

})