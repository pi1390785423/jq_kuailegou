<?php
$page = isset($_POST['phone']) ? $_POST['phone'] : 'errornum';
$num = isset($_POST['pwd']) ? $_POST['pwd'] : 'errornum';

    //增  insert into 表名(字段名) values(具体的值)  注册


    include './conn.php';
    $sql = "INSERT INTO user(phone,pad) VALUES($page,'$num')";
    $res = $conn->query($sql);
    

    if($res) {
        echo 'yes';//插入成功
    }else {
        echo 'no';//插入失败
    }


//  $content = $res->fetch_all(MYSQLI_ASSOC);

//   echo json_encode($content,JSON_UNESCAPED_UNICODE);



?>