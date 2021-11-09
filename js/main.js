let timer = 50
let minutesTime = 00
let t
let timer_is_on = 0;
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

function render() {
    timedCount()
}

console.log(seconds.innerHTML)

function timedCount() {
    seconds.innerHTML = timer
    minutes.innerHTML = minutesTime
    timer += 1;
    t = setTimeout(timedCount, 1000);
    if(timer == 60) {
        minutesTime +=1;   
        timer = 0
    }
}


function startCount() {
    if(!timer_is_on) {
        timer_is_on = 1
        timedCount()
    }
}

function submitQuiz() {
    
}



render()