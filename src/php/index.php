<?php
    $account = isset($_GET["Uname"])?$_GET["Uname"]:null;
    $guid = isset($_GET["guid"])?$_GET["guid"]:null;
     // var_dump($guid);
    // var_dump($account);
    $psword = isset($_GET["PW"])?$_GET["PW"]:null;
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'mengbasha';
// 1.创建连接,测试是否连接成功
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    }
    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    if($guid==null){
            $res = $conn -> query('select * from shouye');  
              if($res->num_rows > 0){
              $content = $res->fetch_all(MYSQLI_ASSOC);
        
              $content1 = array_slice($content,0, 8);
              $content2 = array_slice($content,8,20);
        
               $RES = array(
              "data1" => $content1,
              "data2" => $content2,
              
              );
               // var_dump($RES);
                    echo json_encode($RES,JSON_UNESCAPED_UNICODE);
            }else{
                    echo "没有满足条件的数据";
            }

    }else{
         $shopres = $conn -> query('select * from shouye where id='.$guid.' ');
         if($shopres->num_rows > 0){
            $content = $shopres->fetch_all(MYSQLI_ASSOC);
            echo json_encode($content,JSON_UNESCAPED_UNICODE);
            // var_dump($content);
        }else{
            echo "没有满足条件的数据";
    }
    // $res = $conn -> query('select * from shouye');
    // $shopres = $conn -> query('select * from shouye where id= '.$guid.' ');
    // 查询数据库中的Cookie
    // $cookieRes = $conn -> query('select * from denglu where account='.$account.' and password = '.$psword.'');
    // var_dump($res1);
    // 
} 
    // $res->close();
    $conn->close();

?>


 
