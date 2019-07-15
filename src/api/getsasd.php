<?php

// $page = isset($_GET['page']) ? $_GET['page'] : 'error';
$page = isset($_GET['page']) ? $_GET['page'] : 'errornum';
$num = isset($_GET['num']) ? $_GET['num'] : 'errornum';
// var_dump($num);
// echo  1;

    // $sql = "SELECT * FROM sheet2";
    // $res = $conn->query($sql);
    // var_dump(  $res)
    // $content = $res->fetch_all(MYSQLI_ASSOC);

    include './conn.php';
      /*
        需求：传过来的page=1，num=10 :查询第一页数据给前端，一页数据有10条
        SELECT * FROM goodslist LIMIT 起始下标,条数;
    
        page(哪一页)   num（每页条数）   index(下标)
        1              10               0
        2              10               10
        3              10               20                       
        4              10               30

        公式：index = (page - 1) * num
    */

    //sql语句
    $index = ($page - 1) * $num;
    $sql = "SELECT * FROM sheet2 LIMIT  $index ,$num";
    //SELECT * FROM goodslist ORDER BY price desc LIMIT 0,10;

    //执行sql语句
    $res = $conn->query($sql);//得到结果集

    // var_dump($res);

    //读取结果集的内容部分传给前端
    $content = $res->fetch_all(MYSQLI_ASSOC);//对象  [{},{},{}]

    //将数据转成字符串传给前端
    // echo json_encode($content,JSON_UNESCAPED_UNICODE);


    //查询总条数
    $sql2 = 'SELECT * FROM sheet2';

    //执行语句
    $res2 = $conn->query($sql2);

    // var_dump($res2);

    //一个页面不要出现两次echo。否则前端拿到的数据不方便处理

    $data = array(
        'data' => $content,//想要的10条数据
        'pages' => $res2->num_rows,//总条数
        'page' => $page,
        'num' => $num
    );

    //传给前端：先转成字符串
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
?>
