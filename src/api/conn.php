<?php
    header('Content-type:text/html;charset=utf-8');//防止中文乱码

    $severname = 'localhost';//或者写：http://127.0.0.1
    $username = 'root';
    $psw = '';
    $dbname = 'wde';
    $conn = new mysqli($severname,$username,$psw,$dbname) or die('error');


//     if($conn->connect_error) {
//         die('连接错误：'.$conn->connect_error);
//     }
//   echo '连接成功';

    
?>