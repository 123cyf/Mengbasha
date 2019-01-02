$(document).ready(function(){
    // 放大镜效果
    // 图片上下滚动

    var count = $("#imageMenu li").length - 5; /* 显示 6 个 li标签内容 */

    var interval = $("#imageMenu li:first").width();

    var curIndex = 0;

    $('.scrollbutton').click(function(){

        if( $(this).hasClass('disabled') ) return false;
        if ($(this).hasClass('smallImgUp')) --curIndex;
        else ++curIndex;
        $('.scrollbutton').removeClass('disabled');
        if (curIndex == 0) $('.smallImgUp').addClass('disabled');
        if (curIndex == count-1) $('.smallImgDown').addClass('disabled');
        $("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);
    }); 

    // 解决 ie6 select框 问题

    $.fn.decorateIframe = function(options) {
        if ($.browser.msie && $.browser.version < 7) {
            var opts = $.extend({}, $.fn.decorateIframe.defaults, options);
            $(this).each(function() {
                var $myThis = $(this);
                //创建一个IFRAME
                var divIframe = $("<iframe />");

                divIframe.attr("id", opts.iframeId);

                divIframe.css("position", "absolute");

                divIframe.css("display", "none");

                divIframe.css("display", "block");

                divIframe.css("z-index", opts.iframeZIndex);

                divIframe.css("border");

                divIframe.css("top", "0");

                divIframe.css("left", "0");

                if (opts.width == 0) {

                    divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");

                }

                if (opts.height == 0) {

                    divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");

                }

                divIframe.css("filter", "mask(color=#fff)");

                $myThis.append(divIframe);

            });

        }

    }

    $.fn.decorateIframe.defaults = {

        iframeId: "decorateIframe1",

        iframeZIndex: -1,

        width: 0,

        height: 0

    }

    //放大镜视窗

    $("#bigView").decorateIframe();

    //点击到中图

    var midChangeHandler = null;

    $("#imageMenu li img").bind("click", function(){

        if ($(this).attr("id") != "onlickImg") {

            midChange($(this).attr("src").replace("small", "mid"));

            $("#imageMenu li").removeAttr("id");

            $(this).parent().attr("id", "onlickImg");

        }

    }).bind("mouseover", function(){

        if ($(this).attr("id") != "onlickImg") {

            window.clearTimeout(midChangeHandler);

            midChange($(this).attr("src").replace("small", "mid"));

            $(this).css({ "border": "3px solid #959595" });

        }

    }).bind("mouseout", function(){

        if($(this).attr("id") != "onlickImg"){

            $(this).removeAttr("style");

            midChangeHandler = window.setTimeout(function(){

                midChange($("#onlickImg img").attr("src").replace("small", "mid"));

            }, 1000);

        }

    });

    function midChange(src) {

        $("#midimg").attr("src", src).load(function() {

            changeViewImg();

        });

    }

    //大视窗看图

    function mouseover(e) {

        if ($("#winSelector").css("display") == "none") {

            $("#winSelector,#bigView").show();

        }

        $("#winSelector").css(fixedPosition(e));

        e.stopPropagation();

    }

    function mouseOut(e) {

        if ($("#winSelector").css("display") != "none") {

            $("#winSelector,#bigView").hide();

        }

        e.stopPropagation();

    }

    $("#midimg").mouseover(mouseover); //中图事件

    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



    var $divWidth = $("#winSelector").width(); //选择器宽度

    var $divHeight = $("#winSelector").height(); //选择器高度

    var $imgWidth = $("#midimg").width(); //中图宽度

    var $imgHeight = $("#midimg").height(); //中图高度

    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度



    function changeViewImg() {

        // $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

    }

    changeViewImg();

    $("#bigView").scrollLeft(0).scrollTop(0);

    function fixedPosition(e) {

        if (e == null) {

            return;

        }

        var $imgLeft = $("#midimg").offset().left; //中图左边距

        var $imgTop = $("#midimg").offset().top; //中图上边距

        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

        X = X < 0 ? 0 : X;

        Y = Y < 0 ? 0 : Y;

        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



        if ($viewImgWidth == null) {

            $viewImgWidth = $("#bigView img").outerWidth();

            $viewImgHeight = $("#bigView img").height();

            if ($viewImgWidth < 200 || $viewImgHeight < 200) {

                $viewImgWidth = $viewImgHeight = 800;

            }

            $height = $divHeight * $viewImgHeight / $imgHeight;

            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

            $("#bigView").height($height);

        }

        var scrollX = X * $viewImgWidth / $imgWidth;

        var scrollY = Y * $viewImgHeight / $imgHeight;

        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

        $("#bigView").css({ "top": 75, "left": $(".preview").offset().left + $(".preview").width() + 15 });



        return { left: X, top: Y };

    }

    // tab切换
        "use strict";
            var tab = document.getElementsByClassName('content_r')[0];
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

        var list= decodeURI(location.search.slice(1)); 
        // console.log(list);
        var goods={};
        var listArr=list.split("&");
        listArr.forEach(function(item){
            var commodityArr=item.split("=");
            goods[commodityArr[0]]=commodityArr[1];
        })
        var goodsId = goods.guid;
        console.log(goodsId);
        // 发送请求，渲染页面
         var xhr = new XMLHttpRequest();
            var res;
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && (xhr.status==200 || xhr.status==304)){
                    res = JSON.parse(xhr.responseText);
                    // console.log(res);
                    render1(res);
                    render2(res);
                    onsole.log(res[0].imgurl);
                    BigImage.src=`"../${res[0].imgurl}"`;
                      
                    var im2 = document.querySelector(".im2");
        
                     // 数量添加事件
       
                        c

                }
            
            }
            xhr.open("get","../php/details.php?guid="+goodsId,true);
            xhr.send(null);
            // 获取元素
            // console.log(res);
             var BigImage = document.querySelector(".bigImg").children[0];
             var shangpin = document.querySelector(".shangpin_c");
            function render1(res){
                // console.log(res.imgurl);
                // BigImage.src=`../${res.imgurl}`;
        }

         function render2(res){
                shangpin.innerHTML = res.map(function(item){
            
                    return  `<p class="p1">${item.info1}</p>
                    <div class="d1">
                        <span style="color:#E70065">￥</span><span class="p2">${item.xianjia}</span>
                        ￥<span class="s">${item.yuanjia}</span>

                    </div>
                    <p class="p3">
                        <span>颜色</span> 
                        <span><img src="../images/yanse1.png" alt="" /></span>
                    </p>
                    <p class="p4">
                        <span>尺码</span>
                        <span><img src="../images/chicun1.png" alt="" /></span>
                        <span><img src="../images/chicun2.png" alt="" /></span>
                        <span><img src="../images/chicun3.png" alt="" /></span>
                        <span><img src="../images/chicun4.png" alt="" /></span>
                    </p>
                    <!-- 数量 -->
                    <p class="p5">
                        <span>数量</span>
                        <span class="s1"><input class="number" type="text" value="5"/><img class="im1" src="../images/jia.png" alt="" /><img class="im2" src="../images/jian.png" alt="" /></span>
                        <span>现在有货</span>
                    </p>
                    <p class="p6">
                        <input type="button" class="bt1" value="立即购买"/><input type="button" class="bt2" value="加入购物车" />
                    </p>
                    <p class="p7">
                        <span><img src="../images/tui1.png"/>七天无理由退换货</span>
                        <span><img src="../images/mian1.png"/>满180包邮</span>
                        <span><img src="../images/tui1.png"/>梦芭莎发货</span>

                    </p>`

            }).join("");
        }

      
    });

