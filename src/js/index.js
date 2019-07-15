// 左边电梯导航栏

$(function () {



  // 点击换一批

  let ipage = 1; //第一页数据
  let num = 4;
  let allpages = 0;
  let pages_btn = $('#pages');
  let mryh_goods_io = $('#mryh_goods_io');

  let mryh_goods_io_5 = $('#mryh_goods_io_5');
  let loading = $('#myloading');

  

  function init2() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:1818/kuailegou/src/api/getsasd.php',
      data: 'page=' + ipage + '&num=' + num,
      success: function (res) {

        let arr = JSON.parse(res);

        creat2(arr.data);

        allpages = Math.ceil(arr.pages / arr.num); //页数


      }
    });
  }

  function creat2(arr) {
    let html2 = arr.map((item, index) => {
      return ` <li>
            <p class="p_img">
              <img src="${item.src}" alt="">
            </p>
            <p class="g_other_info"> ${item.dinggou}</p>
            <p class="p_title">  ${item.name}</p>
            <div class="p_p">
              <span class="price1">
                ￥
                <span>${item.price2}</span>
              </span>
              <span class="price2">
                <del>￥${item.price} </del>
              </span>
            </div>
          </li>`;
    }).join('');
    mryh_goods_io.html(html2); //数据渲染
  }

  init2();
  pages_btn.click(function () {
    setTimeout(() => {
      if (ipage == allpages) {
        ipage = 0;
      }
      ipage++;
      init2();
    }, 250);
   

  })




  // 点击换一批结束


  // 懒加载2

  function init3() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:1818/kuailegou/src/api/getsasd.php',
      data: 'page=' + ipage + '&num=' + num,
      success: function (res) {

        let arr = JSON.parse(res);
        creat3(arr.data);

      }
    });
  }


  function creat3(arr) {
    let html23 = arr.map((item, index) => {
      return `  <li>
      <p class="p_img">
        <img src="${item.src}" alt="">

      </p>
      <p class="g_other_info"> ${item.dinggou}</p>
      <p class="p_title"> ${item.name}</p>
      <div class="p_p">
      <span class="price1">
        ￥
        <span>${item.price2}</span>
      </span>
      <span class="price2">
        <del>￥${item.price} </del>
      </span>
    </div>
    </li>`;
    }).join('');

     mryh_goods_io_5.append(html23); //数据渲染
    isok = true;//当新数据完成渲染到页面，才把开关打开，才允许加载下一页
  }
  init3();
  let isok = true;


  $(document).scroll(function () {

    let scrollTop =$(document).scrollTop();
  
    let iH = mryh_goods_io_5.get(0).offsetHeight + mryh_goods_io_5.get(0).offsetTop -$(window).outerHeight();

    if(scrollTop >= iH) {
      //临界点：加载新数据
      // console.log('应该加载数据了');
      if(ipage == allpages) {
          //已经滚动到最后一页
          loading.hide();
      }else{
          //还没有到达最后一页，可以加载新数据
          if(isok) {
              isok = false;//关闭开关
              loading.show();
              setTimeout(function() {
                  loading.hide();//两秒后隐藏动图
                  ipage++;
                  init3();//渲染新数据
              },1500);
          }
      }
      
      
  }


  })

  // 懒加载2结束







  function init() {
    ajax2({
      type: 'get',
      url: 'api/01getdata.php',
      data: 'page=' + ipage + '&num=' + num,
      success: str => {
        // console.log(str);
        let arr = JSON.parse(str);
        // console.log(arr);
        //数据渲染
        creat(arr.data);

        //判断总共有多少页
        allpages = Math.ceil(arr.pages / arr.num); //页数
        if (allpages > 1 && ipage != allpages) {
          //2.如果总页数超过两页，就显示“加载更多”按钮
          pages.style.display = 'block';
        } else {
          pages.style.display = 'none';
        }
        // console.log(allpages);
      }
    });

    //数据渲染
    function creat(arr) {

      let html = arr.map((item, index) => {
        return ` <li data-id="${item.gid}">
                            <p class="title">${item.title}</p>
                            <p class="price">${item.price}</p>
                        </li>`;
      }).join('');
      list.innerHTML += html; //数据渲染
    }
  }





  // 获取元素高度
  let oM2 = $('.body_i').children();
  let oM2_0top = oM2.eq(0).offset().top;
  let oM2_1top = oM2.eq(1).offset().top;
  let oM2_2top = oM2.eq(2).offset().top;
  let oM2_3top = oM2.eq(3).offset().top;
  let search_top = $('.search_fixed').height();
  // 获取楼梯
  let f_nav = $(".leftmenu-box");
  let f_nav_list = $(".leftmenu-box ul li");


  // 滚动


  $(document).scroll(function () {
    let top = $(document).scrollTop();

    if (top >= oM2_3top - search_top && top < oM2_3top + oM2.eq(3).height() - search_top) {
      f_nav.show();
      f_nav_list.eq(3).addClass("cur").siblings().removeClass("cur");
    } else if (top >= oM2_2top - search_top) {
      f_nav.show();
      f_nav_list.eq(2).addClass("cur").siblings().removeClass("cur");
    } else if (top >= oM2_1top - search_top) {
      f_nav.show();
      f_nav_list.eq(1).addClass("cur").siblings().removeClass("cur");
    } else if (top >= oM2_0top - search_top) {
      f_nav.show();
      f_nav_list.eq(0).addClass("cur").siblings().removeClass("cur");
    } else {
      f_nav.hide();
    }
    if (top > oM2_3top + oM2.eq(3).height()) {
      f_nav.hide();
    }

    // 点击跳



  });


  f_nav_list.click(function () {
    let index = $(this).index();
    $(this).siblings().removeClass("cur").addClass("cur");
    // let top = oM2.eq(index).offset().top-search_top;
    $('html,body').animate({
      scrollTop: oM2.eq(index).offset().top - search_top
    }, 600);
    // $(document).animate({scrollTop: 'top'+'px'}, 800);
    // $(document).scrollTop(top);
  })

  //  ajax

  $.ajax({
    url: "http://localhost:1818/kuailegou/src/api/getdata.php",
    success: function (res) {
      var resl = JSON.parse(res);
      let html_1 = resl.map(function (item) {
        return `<li>
                <div class="pro_l">
                  <img src="${item.src}" alt="">
                </div>
                <span class="pro_text">${item.name}</span>
                <div class="price_l">
                  <div class="bigfont fl">
                    <span class="f_14">￥</span>
                    <span>${item.price}</span>
                    <del>￥${item.price2}</del>
                  </div>
                  <div class="btn_buy fr">
                    立即订购
                  </div>
                </div>
              </li>  `
      }).join("");

      $(".pro_con").html(html_1);

    }
  });






























});