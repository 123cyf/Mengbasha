<?php

    $guid = isset($_GET["guid"])?$_GET["guid"]:null;

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
   
            $res = $conn -> query('select * from shouye where id="'.$guid.'"'); 
              if($res->num_rows > 0){
              $content = $res->fetch_all(MYSQLI_ASSOC);
                // var_dump($content);
              echo json_encode($content,JSON_UNESCAPED_UNICODE);
            }else{
                    echo "没有满足条件的数据";
            }

    
        $res->close();
        $conn->close();

?>

