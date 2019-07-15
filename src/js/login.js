$(function () {

    // console.log($('.radio_box span input').eq(0));

    $('.radio_box span input').eq(0).attr("checked",true); 

    $('.radio_box').off().on('click','span',function () {
     
    
        $(this).children().find('input').attr("checked",true).siblings().attr("checked",false);
            let index = $(this).index();
            $(".body").children().eq(index).css('display', 'block').siblings().css('display', 'none')
    })




// 点击登录
//    let username = $('.item1')[1];
//    let pwdVal = $('.item2_io')[1];

//    console.log(pwdVal);
//    console.log(username);
$('.item5_it ').click(function () {
    // $.trim($("#title").val());
    let name = $('.item1').eq(1).val().trim();
    let pwd = $('.item2_io').eq(1).val().trim();
        $.ajax({
            type : 'post',
            url : 'http://localhost:1818/kuailegou/src/api/login.php',
            data : 'name=' + name + '&pwd=' + pwd,
            success:str =>{
                let url = getCookie('url');

                console.log(str);
                    if (str == 'yes' ) {
                        window.location.href = 'http://localhost:1818/kuailegou/index1.html';
                        if(url) {
                            //拿到就跳转到上一页
                            location.href = url;
                        }else{
                            //拿不到跳转到首页
                            console.log(666);
                            location.href = 'http://localhost:1818/kuailegou/index1.html';
                        }
                        setCookie('name',name,1);
                    }else{
                        alert('登陆失败');
                    }
                   
                    }

               


        })








})





  




});