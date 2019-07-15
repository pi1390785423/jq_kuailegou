$(function () {

    let phone_v = false;
    let pwd_v1 = false;
    let pwd_v2 = false;
    let code_v = false;



//    表单验证

let phoneReg = /^1[34578]\d{9}$/;
let pwdReg = /^[\w_-]{6,20}$/;

$("#phone_io").blur(function () {
    if (phoneReg.test($(this).val())) {
        $(this).parent().find('.err_msg2').css("display", "none");
        phone_v = true;
    }
    else {
        $(this).parent().find('.err_msg2').css("display", "block").text("请输入正确手机号码");
        phone_v = false;
    }
})




// 获取验证码



  let getcode = $(".item3>a");
    let syscheckCode = $(".item3>p")
    getcode.click(function (event) {
        event.preventDefault();
        $.get("http://localhost:1818/kuailegou/src/api/code.php", function (data) {
            syscheckCode.html(data);
        })
    })

$('#itxt_input').blur(function () {
   if ( $(this).val() == syscheckCode.html() ) {
    $(this).parent().find('.err_msg2').css("display", "none");
    code_v = true;
   }else{
        $(this).parent().find('.err_msg2').css("display", "block").text("请输入正确的验证码");
        code_v = false;
   }
})



// 密码验证

$("#it_pwd1").blur(function () {
    if (pwdReg.test($(this).val())) {
        $(this).parent().find('.err_msg2').css("display", "none");
        pwd_v1 = true;
    
    } else {
        $(this).parent().find('.err_msg2').css("display", "block").text("请输入密码");
        pwd_v1 = false;
    }

})
// $("#pwdtext").focus(focus_info);

$("#it_pwd2").blur(function () {
   
    if ($("#it_pwd1").val() == $("#it_pwd2").val()) {
        $(this).parent().find('.err_msg2').css("display", "none");
        pwd_v2 = true;
    } else {
        $(this).parent().find('.err_msg2').css("display", "block").text("二次密码不一致");
        pwd_v2 = false;
    }
})


    $(".item .itxt").focus(function(){
            $(this).parent().find('.err_msg2').css('display',"block");
            $(this).parent().siblings().find('.err_msg2').css('display',"none")
      });


   

    //发送请求，php保存数据

        $('.login-btn').click(function () {
            let cellPhone = $("#phone_io").val().trim();
            let pwdtext = $("#it_pwd1").val().trim();
                  
            if (phone_v &&pwd_v1 && pwd_v2 &&code_v) {
                $.ajax({
                    type: "post",
                    url: "http://localhost:1818/kuailegou/src/api/usp.php",
                    data: {
                        "phone": cellPhone,
                        "pwd": pwdtext,
                    },
                    success : function(str) {
                        if(str == 'yes') {
                           window.location.href = 'http://localhost:1818/kuailegou/src/html/login.html?name=' + cellPhone;
                        }else{
                            alert('注册失败');
                        }
                    }

                })
    
            } else {
                alert("请确认输入完整");
            }

        })








});