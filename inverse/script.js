console.log("فایل JS با موفقیت لود شد");

var onloadtime = function()  {
    counter = Number(Cookies.get('counter'));
    if (isNaN(counter)) {
        counter = 2 * 60;
        Cookies.set('counter', counter);
    }

    document.querySelector('.number').innerHTML = formatTime(counter);

    var previousState = Cookies.get('state');
    if (previousState === 'started') {
        start();
    }
}

function formatTime(sec) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')
    );
}

var counter = 2 * 60;
var inverse;

function start() {
    inverse = setInterval(function () {
        if (counter > 0) {
            counter--;
            Cookies.set('counter', counter);
            Cookies.set('state', 'started');
            document.querySelector('.number').innerHTML = formatTime(counter);
            document.getElementsByClassName('start')[0].disabled = true;
            document.getElementsByClassName('pause')[0].disabled = false
            document.getElementsByClassName('reset')[0].disabled = false
        } else {
            clearInterval(inverse);
            document.querySelector('.number').innerHTML = "00:00:00";
        }
    }, 1000);
}

var pause = function () {
    Cookies.set('state', 'pause')
    clearInterval(inverse)
    document.getElementsByClassName('start')[0].disabled = false
    document.getElementsByClassName('pause')[0].disabled = true
}

var reset = function () {
    pause()
    counter = 2 * 60;
    document.querySelector('.number').innerHTML = formatTime(counter);
    Cookies.set('counter', counter)
    Cookies.set('state', 'reset')
    document.getElementsByClassName('reset')[0].disabled = true
}
