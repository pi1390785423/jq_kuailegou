<?php
$name = isset($_POST['name']) ? $_POST['name'] : '';
$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';
include 'conn.php';//连接数据库

$sql = "SELECT * FROM user WHERE `phone`='$name' AND pad='$pwd'";
$res = $conn->query($sql);
    if($res->num_rows) {
        echo 'yes';
    }else{
        echo 'no';
    }
    $res->close();
    $conn->close();





?>