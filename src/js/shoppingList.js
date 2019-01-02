jQuery(function($){
    var ulBox = document.querySelector(".chapList").children[0];
    var page = document.querySelector(".pageList");

    var price = document.querySelector(".price");
    var qty = 10;
    var currentPage = 1;
// ajax发送请求参数
      var xhr = new XMLHttpRequest();
            var res;
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && (xhr.status==200 || xhr.status==304)){
                    res = JSON.parse(xhr.responseText);
                    console.log(res.data);
                    // console.log(JSON.parse(xhr.responseText).data);
                    render(res.data);
                    // 生成分页页码
                    var totalPage = Math.ceil(res.len/res.qty);
                    console.log(totalPage);
                    page.innerHTML = "";
                    for(var i=1;i<=totalPage;i++){
                        var span = document.createElement("span");
                        span.innerHTML = i;
                        if(i == res.currentPage){
                            span.classList.add("active");
                        }
                        page.appendChild(span);
                    }
                }
            
            }
            xhr.open("get","../php/shoppingList.php?qty="+qty+"&currentPage="+currentPage,true);
            xhr.send(null);

             //2.点击page，获取当前页码，再次发起请求
            page.onclick = function(e){
                if(e.target.tagName == "SPAN"){
                    currentPage = e.target.innerHTML;
                    xhr.open("get","../php/shoppingList.php?qty="+qty+"&currentPage="+currentPage,true);
                    xhr.send(null);
                }
            }

        function render(res){
            ulBox.innerHTML = res.map(function(item){
                return`<li>
                    <a href="#">
                        <img src="../${item.imgurl}" alt="" />
                    </a>
                    <p class="chap_p1">
                        <span class="chap_s1">￥${item.xianjia}</span>
                        <span class="chap_s2">￥${item.yuanjia}</span>
                    </p>
                    <p class="chap_p2">${item.info1}</p>
                </li>`
            }).join("");
        }

        // 价格排序
        var show = true;
            price.onclick=function(){
                // console.log(res);
                if(show){
                    res.data.sort(function(a,b){
                    return a.xianjia-b.xianjia;
                    })
                    show = !show;
                }else if(!show){
                    res.data.sort(function(b,a){
                    return a.xianjia-b.xianjia;
                    })
                    show = true;
                }
                // list(res);
                render(res.data);
                // setmsg();
            }
})