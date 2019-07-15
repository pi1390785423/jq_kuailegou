$(function () {


    // 所有分类
    $('.li_all_type').hover(function () {
        $('.index_type_ul').css('display', 'block');
    })
    $('.li_all_type').mouseleave(function () {
        $('.index_type_ul').css('display', 'none');
    })
    let index_type_7 = $('.index_type_ul').children();
    index_type_7.on('mouseenter', $('.index_type_ul>li'), function () {
        let index_7 = $(this).index();
        $('.nav_type_list').eq(index_7).css('display', 'block');
    })
    index_type_7.on('mouseleave', $('.index_type_ul>li'), function () {
        let index_7 = $(this).index();
        $('.nav_type_list').eq(index_7).css('display', 'none');
    })
    $('.index_type_ul').mouseenter(function () {
        $('.index_type_ul').css('display', 'block');
    })
    $('.index_type_ul').mouseleave(function () {
        $('.index_type_ul').css('display', 'none');
    })


    // $('.index_type_ul li a').click(function () {
    //     console.log('123');
    // })


$('.index_type_ul').on('click','a', function () {
    location.href = 'http://localhost:1818/kuailegou/src/html/list.html';
})
    
});