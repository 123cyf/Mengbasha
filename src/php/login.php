<?php
    $account1 = isset($_GET["account1"])?$_GET["account1"]:null;
    $psword = isset($_GET["psword"])?$_GET["psword"]:null;
    
    $register = isset($_GET["register"])?$_GET["register"]:null;

    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mengbasha';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }

    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from denglu where account ="'.$account1.'" and password ="'.$psword.'"');

    if($res->num_rows > 0){
        // echo "yes";
        $res = $res->fetch_all(MYSQLI_ASSOC);
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }else{
        echo "用户名和密码错误";
    }


    // else{
    //     if($register){
    //         if($account == ""||$password1 == ""||$password2==""||$Code!=$CodeText){
    //             echo "请输入用户名和密码,验证码不能为空";
                
    //         }else{
    //             if(($password1 == $password2)&&$password1!=""){
    //                 $res = $conn->query('insert into denglu (account,password) values ("'.$account.'","'.$password1.'")');
    //                     if($res){
    //                         echo "插入成功";
    //                     }else{
    //                     echo "插入失败";
    //                 }
    //             }else{
    //                 echo "两次请输入相同密码";
    //             }
                     
    //         }      
    //     }else{
           
    //         if ($account == ""){
    //             echo "请输入可用用户名";
                        
    //         }else{

    //             echo "该用户名可用";
    //         }
           
    //     }
    // }




?>