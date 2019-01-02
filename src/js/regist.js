document.addEventListener("DOMContentLoaded", function(){
    var phone = document.querySelector(".int1");
    var tips = document.querySelector(".tips");
    var span1 = document.querySelector("#span1");
    var span2 = document.querySelector("#span2");
    var in1 = document.querySelector(".in1");
    var in2 = document.querySelector(".in2");
    var btn1 = document.querySelector(".btn1");
    var password1 = document.querySelector(".in3");
    var password2 = document.querySelector(".in4");
    var btn2 = document.querySelector(".btn2");
    var in5 = document.querySelector(".in5");

    var status = [200,304];
            phone.onblur = function(){
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                        console.log(xhr.responseText);
                        tips.innerHTML = xhr.responseText;
                    }
                }
                xhr.open("get","../php/regist.php?account="+phone.value,true);
                xhr.send(null);
            }

            
            btn1.onclick = function(){
                function getRandom(){
                    var Random=""+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10)+parseInt(Math.random()*10);
                    return Random;
                }
                btn1.value = getRandom();
                
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                        // console.log(xhr.responseText);
                    }
                }
                xhr.open("get",`../php/regist.php?Code=${btn1.value}&CodeText=${in2.value}`,true);
                xhr.send(null);
            }

            btn2.onclick = function(){
                var register = true;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4 && status.indexOf(xhr.status)!=-1){
                        // console.log(xhr.responseText);
                        alert(xhr.responseText);
                        if(xhr.responseText=="插入成功"){
                            location.href="../html/login.html";
                        }
                    }
                }
                xhr.open("get",`../php/regist.php?account=${phone.value}&password1=${password1.value}&password2=${password2.value}&register=${register}&check=${in5.value}`,true);
                xhr.send(null);
            }







})