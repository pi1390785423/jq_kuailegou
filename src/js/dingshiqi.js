function setTime() {
    var span = document.querySelector('.djs_time')
        .querySelectorAll("b");
 console.log(span);
    var time = 2000;
    var itemId = setInterval(function () {
        time--;

        if (time < 0) {
            clearInterval(itemId);
            return;
        }
        var h = Math.floor(time / 3600);
        var m = Math.floor(time % 3600 / 60);
        var s = time % 60;
        span[0].innerText = Math.floor(h / 10);
        span[1].innerText = h % 10;
        span[3].innerText = Math.floor(m / 10);
        span[4].innerText = m % 10;
        span[6].innerText = Math.floor(s / 10);
        span[7].innerText = s % 10;
    }, 1000);
}
setTime()














