let timer = 0
let t
let timer_is_on = 0;

window.onload() {
    startCount()
}

function timedCount() {
    document.getElementById('timer').innerHTML = timer
    timer += 1;
    t = setTimeout(timedCount, 1000);
}

function startCount() {
    if(!timer_is_on) {
        timer_is_on = 1
        timerdCount()
    }
}