<?php
    // 接收js前段传输过来的数据
    $qty = isset($_GET["qty"])? $_GET["qty"]: 5;
    $currentPage = isset($_GET["currentPage"])? $_GET["currentPage"]: 1;
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
    $res = $conn -> query('select * from shoppingList');
    // $res1 = $conn -> query('select * from goodsList2');
    // $res2 = $conn -> query('select * from goodsList3');
    // var_dump($res1);
    if($res->num_rows > 0){
        $content = $res->fetch_all(MYSQLI_ASSOC);
       

        $len = count($content);
        $data = array_slice($content,($currentPage-1)*$qty,$qty);
        // var_dump($data);
        $res = array(
        "data" => $data,
        "len" => $len,
        "qty" => $qty,
        "currentPage" => $currentPage
    );
     echo json_encode($res,JSON_UNESCAPED_UNICODE);

        // echo json_encode($content,JSON_UNESCAPED_UNICODE);
       
         
    }else{
        echo "没有满足条件的数据";
    }
    
    
    // $res->close();
    $conn->close();

?>

