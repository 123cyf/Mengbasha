jQuery(function($){


    // var danjia = document.querySelector(".shop_s1");
    // var zongjia = document.querySelector(".shop_s2");

    // var jia = document.querySelector(".carList");
    // var jian = document.querySelector("#jian");
    // var val = document.querySelector(".val");

    // jia.onclick = function(e){
        
    //     if(e.target.className=="jia"){
    //         var num = e.target.previousElementSibling.value;
    //         num++;
    //         e.target.previousElementSibling.value = num;
    //         e.target.parent.nextElementSibling.children[1].innerHTML = e.target.parent.nextElementSibling.children[0].innerHTML *num;
    //     }
    // }
    $(".jia").on("click",function(){
        var $num = $(this).prev().val(Number($(this).prev().val())+1);
        // console.log($num);
        var $danjia = $(this).closest("li").find(".shop_s1");
        // console.log($danjia.html());
        var $zongjia = $danjia.next();
        $zongjia.html(Number($danjia.html()) * $num.val());
        
        // var $jiesuan = console.log($(".zongji").find(".zongji_s2"));
        // console.log($jiesuan);
        // $jiesuan.html($zongjia.html(Number($danjia.html()) * $num.val()));

    })
    $(".jian").on("click",function(){
        if($(this).next().val()>=1){
            var $num = $(this).next().val(Number($(this).next().val())-1);
            // console.log($num);
            var $danjia = $(this).closest("li").find(".shop_s1");
             // console.log($danjia.html());
             var $zongjia = $danjia.next();
             $zongjia.html(Number($danjia.html()) * $num.val());

        }  

    })








})
