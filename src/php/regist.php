<?php
    $account = isset($_GET["account"])?$_GET["account"]:null;
    $password1 = isset($_GET["password1"])?$_GET["password1"]:null;
    $password2 = isset($_GET["password2"])?$_GET["password2"]:null;
    $Code = isset($_GET["Code"])?$_GET["Code"]:null;
    $check = isset($_GET["check"])?$_GET["check"]:null;
    $CodeText = isset($_GET["CodeText"])?$_GET["CodeText"]:null;
    // $gender = isset($_GET["gender"])?$_GET["gender"]:null;
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
    $res = $conn->query('select * from denglu where account="'.$account.'"');
    if($res->num_rows > 0){
        echo "该用户名已被注册";
    }else{
        if($register){
            if($account == ""||$password1 == ""||$password2==""){
                echo "请输入用户名和密码,验证码不能为空";
                // ||$Code==""||$check!="checked"
                // else{
                //     if($Code==$CodeText&&$check=="checked"||$password1 == $password2)&&$password1!=""){
                //         $res = $conn->query('insert into denglu (account,password) values ("'.$account.'","'.$password1.'")');
                //         if($res){
                //             echo "插入成功";
                //         }else{
                //         echo "插入失败";
                //     }
                //     }
                // }else{
                //      echo "两次请输入相同密码,请勾选条款";
                // }

            }else{
                if(($password1 == $password2)&&$password1!=""){
                    $res = $conn->query('insert into denglu (account,password) values ("'.$account.'","'.$password1.'")');
                        if($res){
                            echo "插入成功";
                        }else{
                        echo "插入失败";
                    }
                }else{
                    echo "两次请输入相同密码";
                }
                     
            }
            
            // $res = $conn->query('insert into denglu (account,password) values ("'.$account.'","'.$password1.'")');
            //     if($res){
            //             echo "插入成功";
            //         }else{
            //             echo "插入失败";
            //     }
            
        }else{
           
            if ($account == ""){
                echo "请输入可用用户名";
                        
            }else{

                echo "该用户名可用";
            }
                // echo "该用户名可用";
        }
    }




?>