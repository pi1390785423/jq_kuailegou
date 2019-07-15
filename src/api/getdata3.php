<?php



    include './conn.php';
    $switchNum = isset($_POST['switchNum']) ? $_POST['switchNum'] : 'errornum';
    $sql = " SELECT * FROM sheet2 ORDER BY price DESC";

    $res = $conn->query($sql);

    $content = $res->fetch_all(MYSQLI_ASSOC);


    $sql2 = " SELECT * FROM sheet2 ORDER BY price ASC";
    
        $res2 = $conn->query($sql2);
    
        $content2 = $res2->fetch_all(MYSQLI_ASSOC);


  if ($switchNum % 2 == 0) {
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
                } else {
                    echo json_encode($content2,JSON_UNESCAPED_UNICODE);
                    }
?>
