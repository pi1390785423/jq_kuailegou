$(function(){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    //接收URL中的参数booksId
    var id = getUrlParam('booksId');
    $.ajax({
     type:'get',
     url:'http://localhost:1818/kuailegou/src/api/getdata4.php',
     dataType:'json',
     success:function(res,status){
         $.each(res, function(idx,val) {
             //根据id获取详情数据
            
             if(id == val.gid){
                $('.divw>img').attr('src',val.src);
                $('.ul-w li img').attr('src',val.src);
                $('.detail_tit ').html(val.name);
                $('.i_sign').html(val.price);
                $('.i_sign2').html('￥'+val.price2);
                $('.big_i img').attr('src',val.src);
                $('.mianmo_i').html(val.name);


             }
       
         });
     }
    })

//    // 2 执行动画
//         $(".s3_sf").animate({
//           bottom: 260,
//           left: 360,
//           width: 207
//         }, 2000, function () {
//           // 3 
//           $(".s3_size1,.s3_cart1").fadeOut(500);
//           $(".s3_size2,.s3_cart2").fadeIn(500);
//           // 显示下一页
//           $(".next").fadeIn(500);
//         });




// 放大镜




  // 鼠标移入移出 hover()
  $('.divw').hover(function(){
    $('.big_i').css('display','block');
    $('.mask').css('display','block');
},function(){
    $('.big_i').css('display','none');
    $('.mask').css('display','none');
}).mousemove(function(ev){
    // 算出鼠标在遮罩中心时遮罩的left、top值
    var x = ev.pageX - $('.divw').offset().left - $('.mask').width() / 2;
    var y = ev.pageY - $('.divw').offset().top - $('.mask').height() / 2;

    // 限制遮罩范围
    if(x < 0){
        x = 0;
    }else if(x > $('.divw').width() - $('.mask').width()){
        x = $('.divw').width() - $('.mask').width();
    }
    if(y < 0){
        y = 0;
    }else if(y > $('.divw').height() - $('.mask').height()){
        y = $('.divw').height() - $('.mask').height();
    }
    // 遮罩位置
    $('.mask').css({
        'left' : x + 'px',
        'top' : y + 'px'
    });

    // 放大镜比例系数
    var scalX = ($('.big_i img').width() - $('.big_i').width()) / ($('.divw').width() - $('.mask').width());
    var scalY = ($('.big_i img').height() - $('.big_i').height()) / ($('.divw').height() - $('.mask').height());

    // 大图的位置
    $('.big_i img').css({
        'left' : -scalX * x + 'px',
        'top' : -scalY * y + 'px'
    });
});



 //数量加减
 let addNum = $(".btn-add");
 let reduceNum = $(".btn-reduce");
 let buy_num = $(".text221");
 buy_num.blur(function () {
     let num = parseInt(buy_num.val());
     if (num > 0) {
         buy_num.val(num)
     } else if (num <= 0) {
         buy_num.val(1)
     } else {
         buy_num.val(1)
     }
     
 })
 addNum.click(function () {
     buy_num.val(buy_num.val() * 1 + 1);
 })
 reduceNum.click(function () {
     console.log(buy_num.val() * 1);

     if (buy_num.val() * 1 - 1 > 0) {
         buy_num.val(buy_num.val() * 1 - 1);
     } else {
         buy_num.val(1)
     }

 })



//  console.log($('.text221').val());


    //加入购物车

    let initCart = $(".btn-scanbuy");
    initCart.click(function (event) {
            let num = $('.text221').val();
        event.preventDefault();

        $.get({
            url:"http://localhost:1818/kuailegou/src/api/goods.php",
            data:`id=${id}&num=${num}`,
            success:str=>{
                console.log(str);
              
            }   
        });
             
        
        // window.location.href  = 'http://localhost:1818/kuailegou/src/html/shop.html?key1='+id+'&key2='+key22+'';
        // $.ajax({
        //     url: "http://localhost:1818/kuailegou/src/api/goods.php",
        //     data: `id=${id}`,




    //         success(val) {
    
    //             let arr1213 = JSON.parse(val);
    //   console.log(arr1213);
    //             let html2313 =`<div class="item_form">
                 
    //                 <div class="cell p_checkbox">
    //                  <input type="checkbox" name="" id=""   class="cb_s_goods">
    //                 </div>
    //                 <div class="cell p_goods">
    //                     <div class="p_img">
    //                  <img src="${val.src}" alt="">
    //                     </div>
    //                     <div class="p_name">
    //                         <a href="#">${val.name} </a>
    //                     </div>
        
        
    //                 </div>
    //                 <div class="cell p_prices">
    //                         <p class="p_prices2">${val.price}</p>
                        
    //                 </div>
    //                 <div class="cell p_quantity">
    //                         <div class="quantity_form">
    //                             <a class="a_decrease"  href="javascript:void(0);">
    //                                -
    //                             </a>
    //                          <input type="text"class = 'itxt' value = ''>
        
    //                             <a href="javascript:void(0);" class="a_add">+</a>
        
        
    //                         </div>
        
    //                 </div>
    //                 <div class="cell p_sum">
    //                     <strong>
    //                         ￥${val.price}
    //                     </strong>
    //                 </div>
    //                 <div class="cell p_ops">
    //                     <a  class="car_remove" href="javascript:void(0);">
    //                         删除
    //                     </a>
    //                 </div>
        
    //             </div>`;
         
    //               let item_list = $('.item_list');
    //               item_list.append(html2313); //数据渲染





    //             // let top_num = $("#top_num");
    //             // let right_num = $("#right_num");
    //             // let i_data = JSON.parse(response);
    //             // let n = $("#buy-num").val();
    //             // console.log(p_id);
    //             // addcart(p_id, i_data, n); //更新数据
    //             // updata(top_num); //更新页面
    //             // updata(right_num); //更新页面

    //         }
        // })





     
    })





});
