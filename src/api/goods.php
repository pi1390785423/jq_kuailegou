<?php

header("Content-Type:text/html;charset=UTF-8");
include 'conn.php';
$gid  = isset($_REQUEST["id"])?$_REQUEST["id"]:"";

$num  = isset($_REQUEST["num"])?$_REQUEST["num"]:0;


$res2 = $conn->query("INSERT INTO cart(gid,num) VALUES($gid,$num)");


$res3 = $conn->query("SELECT * from cart,sheet2 WHERE  cart.gid = sheet2.gid");
$content = $res3->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
// if($res2){
//     $main = $conn->query("SELECT * FROM shop WHERE gid='$gid'")->fetch_all(MYSQLI_ASSOC);
//     echo  json_encode($main);
// }




















// $res1 = $coon->query("SELECT * FROM shop WHERE name='$name'")->num_rows;
// echo $res1;
// $res2 = $conn->query("SELECT * FROM shop  WHERE gid = $gid'")->num_rows;
// echo $res2;
// $sql = "SELECT * FROM shop  WHERE gid = $gid";
// $res = $conn->query($sql);
// $content = $res->num_rows(MYSQLI_ASSOC);
// // echo $content;
// echo json_encode($content,JSON_UNESCAPED_UNICODE);



?>