<?php

header("Content-Type:text/html;charset=UTF-8");
include 'conn.php';
$gid  = isset($_REQUEST["id"])?$_REQUEST["id"]:"";


$res2 = $conn->query("DELETE FROM cart WHERE  gid = $gid");





?>