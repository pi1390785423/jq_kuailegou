$(function () {

    let wel = $('#wel');
    let quit = $('#quit');
    let login = $('#login');


      let name = getCookie('name');
        if (name) {
          wel.html(name + '欢迎你!') ;
        } else{
          wel.html('欢迎你!');
        }


  //   $(document).on('click', $('#quit'),function(){
  //    console.log('123');
  // });
    quit.click(function () {
      console.log('123');
    removeCookie('name');
    wel.html ('欢迎你');
   })

   login.click(function () {
    setCookie('url',location.href,1);
      location.href = 'http://localhost:1818/kuailegou/src/html/login.html';
   })
$('.f_c_list').click(function () {
  if(name) {
    window.location.href = 'http://localhost:1818/kuailegou/src/html/shop.html';
}else{
    location.href = 'http://localhost:1818/kuailegou/src/html/login.html';
}

})











});