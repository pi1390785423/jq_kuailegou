$(function () {

//     function getUrlParam(name) {
//         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
//         var r = window.location.search.substr(1).match(reg);  //匹配目标参数
//         if (r != null) return unescape(r[2]); return null; //返回参数值
//     }

//     let key1 = getUrlParam('key1');
//     let key2 = getUrlParam('key2');
//    console.log(key1);
//    console.log(key2);
    
            $.ajax({
                url: "http://localhost:1818/kuailegou/src/api/goods.php",
                
                success(val) {
                    
                    let arr = JSON.parse(val);
    
                    let html23 = arr.map((item, index) => {
                        return `<div class="item_form" data-id = ${item.gid} >
                     
                            <div class="cell p_checkbox">
                             <input type="checkbox" name="" id=""   class="cb_s_goods">
                            </div>
                            <div class="cell p_goods">
                                <div class="p_img">
                             <img src="${item.src}" alt="">
                                </div>
                                <div class="p_name">
                                    <a href="#">${item.name} </a>
                                </div>
                            </div>
                            <div class="cell p_prices">
                                    <p class="p_prices2">${item.price}</p>
                                
                            </div>
                            <div class="cell p_quantity">
                                    <div class="quantity_form">
                                        <a class="a_decrease"  href="javascript:;">
                                           -
                                        </a>
                                     <input type="text"class = 'itxt'  data-num="6"  value = '${item.num}'>
                
                                        <a href="javascript:;" class="a_add">+</a>
                
                
                                    </div>
                
                            </div>
                            <div class="cell p_sum">
                    <strong class="p_sum_io" >￥${item.price}</strong>
                            </div>
                            <div class="cell p_ops">
                                <a  class="car_remove" href="javascript:;">
                                    删除
                                </a>
                            </div>
                
                        </div>`;
                      }).join('');

            
             
                      let item_list = $('.item_list');
                      item_list.append(html23); //数据渲染

                }
            })
    












//    购物车




            let  lqs = $('.itxt').val();

            goodTotal(lqs);





$('.item_list').on('click', ".a_add", function () {
    //点击加号：数量增1
 
    let num = $(this).prev().val();
    let kucun = $(this).prev().data('num');

    num++;
    if (num >= kucun) {
        num = kucun;
    }
    $(this).prev().val(num);
    goodTotal($(this));//把点击当前的那个按钮传到函数，通过节点的关系查找其他节点
});

//数量的减
$('.item_list').on('click', '.a_decrease', function () {
    let num = $(this).next().val();
    num--;
    if (num <= 1) {
        num = 1;
    }
    $(this).next().val(num);
    goodTotal($(this));
});


//手动输入数量的变化
$('.item_list').on('input', '.itxt', function () {
    let num = $(this).val();
    let kucun = $(this).data('num');
    if (num <= 1) {
        num = 1;
    } else if (num >= kucun) {
        num = kucun;
    }
    $(this).val(num);
    goodTotal($(this));//小计变化
});

    //2.小计=单价*数量
    function goodTotal(now) {
        //单价
         let price =$(now).parent().parent().prev().find(".p_prices2").text();
  
          let num = $(now).parent().parent().find('input').val();

        //获取到单价是有单位，去掉多余的单位
        //数量
       
        let total = (price * num).toFixed(2);//保留两位小数
        $(now).parent().parent().next().find("strong").text('￥'+total);
        numAndToal();//总数量和总价变化
        // console.log(price,num,total);
    }

    //3.删除当行商品；
    $('.item_list').on('click', '.car_remove', function () {
        let res = confirm('您要删除我吗？');
        if (res) {
            $(this).parent().parent().remove();
        }
        update();
        numAndToal();


         let id  =  $('.car_remove').parent().parent().data('id')



         $.ajax({
            url:"http://localhost:1818/kuailegou/src/api/car.php",
            data:`id=${id}`,
            success:str=>{
                console.log(str);
              
            }   
        });




    function update() {
        let num =$('.a_add').length;
        console.log(num);
        if (num == 0) {
            //证明已经没有商品了。就可以隐藏
            // $('#del').css('display','none');
            $('.h81').hide();
        } else {
            $('.h81').show();
        }
    }


   //全选
   $('.cbox_djj input').on('click', function () {
    let now = $(this).prop('checked');
    $('.cell input').prop('checked', now);
    numAndToal();
});



   //总数量和总价格的变化
   function checkedRows() {
    let arr = [];//存被勾选的下标
    $('.p_checkbox  input').each(function (i, item) {
        if ($(item).prop('checked')) {
            //被勾选的复选框把他的下标存起来
            arr.unshift(i);
        }
    });
    arr.sort(function (a, b) {
        return b - a;
    });
     console.log(arr);
    return arr;
}




function numAndToal() {
    //判断哪一行是被勾选的
    let arr = checkedRows();
    // console.log(arr);
    //计算总数量和总价格
    let sum = 0;//总数量
    let priceAll = 0;
    arr.forEach(function (item) {
        sum += $('.itxt').eq(item).val() * 1;
        priceAll += $('.p_sum_io').eq(item).text().slice(1)* 1;
    });
    $('#sunm').html(sum);
    $('#cartTotal').html(priceAll);

}

 
   //点击每一行复选框反过来控制全选按钮
   $('.item_list').on('click', '.p_checkbox  input', function () {
    //被勾选的个数==本来集合的个数  全选
    let checkedNum = $('.p_checkbox  input:checked').length;
    let num = $('.p_checkbox  input').length;
    if (checkedNum == num) {
        $('.cbox_djj input').prop('checked', true);
    } else {
        $('.cbox_djj input').prop('checked', false);
    }
    numAndToal();//总数量和总价跟着变
});


    // //全删
    // $('#delall a').on('click', function () {
    //     let arr = checkedRows();//被勾选的行对应的下标
    //     let res = confirm('您要删除我们吗？');
    //     if (res) {
    //         arr.forEach(function (item) {
    //             $('.goods').eq(item).remove();
    //         });
    //     }
    //     update();
    //     numAndToal();//总数量和总价跟着变
    // });




});