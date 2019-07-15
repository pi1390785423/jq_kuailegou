<?php
include 'conn.php';
$sql = "SELECT * FROM sheet1";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>