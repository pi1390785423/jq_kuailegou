$(function () {
// 列表页懒加载


let ipage = 1; //第一页数据
let num = 4;
let allpages = 0;
let pages_btn12 = $('.sl_list_ul');
let loading12 = $('#mydog_i');
let curpage_i   =  $('#curpage_i');
function init4() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:1818/kuailegou/src/api/getsasd.php',
      data: 'page=' + ipage + '&num=' + num,
      success: function (res) {
  
        let arr = JSON.parse(res);
        creat4(arr.data);
        allpages = Math.ceil(arr.pages / arr.num);//页数
        let   allpagesall =    arr.pages;
        $('#pageisa').html(allpagesall);
        $('.totalpage').html(allpages);
        curpage_i.html(ipage);
  
      }
    });
  }

  function creat4(arr) {
    let html23 = arr.map((item, index) => {
      return `    <li>
        <a href="goods.html?booksId=${item.gid}" style = '
        width: 100%;
        height: 100%;
        float: left;
        margin: auto;
    '>
        <div class="sl_goods_img">
        <img src="${item.src}" alt="" style = "
        width: 100%;
        height: 100%;
    ">
      </div>
      <div class="sl_goods_info">
        <div class="sl_price">
          <em class="sl_price1">
            <span style="color:#DF0010">
              ￥${item.price}
            </span>
          </em>
          <em class="sl_price2">
            <del>¥${item.price2}</del>
          </em>
          <a href='goods.html?booksId=${item.gid}' class="sl_title" title="${item.name} " >${item.name} </a>
        </div>

      </div>
        </a>

    </li>`;
    }).join('');
  
    pages_btn12.append(html23); //数据渲染
    isok = true;//当新数据完成渲染到页面，才把开关打开，才允许加载下一页
  }
  init4();
  let isok = true;
  
  
  $(document).scroll(function () {
  
    let scrollTop =$(document).scrollTop();
  
    let iH = pages_btn12.get(0).offsetHeight + pages_btn12.get(0).offsetTop -$(window).outerHeight();
  
    if(scrollTop >= iH) {
      //临界点：加载新数据
      // console.log('应该加载数据了');
      if(ipage == allpages) {
          //已经滚动到最后一页
          loading12.hide();
      }else{
          //还没有到达最后一页，可以加载新数据
          if(isok) {
              isok = false;//关闭开关
              loading12.show();
              setTimeout(function() {
         
                  loading12.hide();//两秒后隐藏动图
                  ipage++;
                  init4();//渲染新数据
              },1500);
          }
      }
  }
  
  })
  
  
  // 列表页懒加载结束



// 价格排序
let switchNum = 0;
let s1_jiage = $('#s1_jiage');

s1_jiage.click (function () {
  event.preventDefault();
  console.log(switchNum);
  ++switchNum;

  init5();

  // <a href='goodsDetail.html?booksId="+${item.gid}+"' class='lp_li_a'>  </a>

})



function init5() {
  $.ajax({
    type: 'post',
    url: 'http://localhost:1818/kuailegou/src/api/getdata3.php',
    data: 'switchNum=' + switchNum,
    success: function (res) {
      let arr = JSON.parse(res);
      console.log(arr);
      // <a href="goodsDetail.html?booksId="+${item.gid}+"">  
        let html234 = arr.map((item, index) => {
          return `   <li>  
          <div class="sl_goods_img">
            <img src="${item.src}" alt="">
          </div>
          <div class="sl_goods_info">
            <div class="sl_price">
              <em class="sl_price1">
                <span style="color:#DF0010">
                  ￥${item.price}
                </span>
              </em>
              <em class="sl_price2">
              
                <del>¥${item.price2}</del>
              </em>
              <a href='goods.html?booksId=${item.gid}' class="sl_title" title="${item.name} " >${item.name} </a>
            </div>
          </div>
        </li> `;
        }).join('');
        pages_btn12.html(html234); //数据渲染
      
    }
  });


}



//   $(document).on('click', $('#quit'),function(){
//    console.log('123');
// });



});