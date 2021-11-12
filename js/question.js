window.onload = function() {
    let quizInfo = JSON.parse(localStorage.getItem('quizArray'))
    testingQuestionPop(quizInfo)
};

// lookup date object to calculate seconds into time

let timer = "0" + 0
let minutesTime = "0" + 0
let t
let timer_is_on = 0;
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

function render() {
    timedCount()
}

function timedCount() {
    seconds.innerHTML = timer
    minutes.innerHTML = minutesTime
    timer++;
    parseInt(timer)
    t = setTimeout(timedCount, 1000);
    if(timer < 10) {
        timer = "0" + timer;
    }
    if(timer == 60) {
        minutesTime++;
        minutesTime = "0" + minutesTime;
        timer = "0" + 0
    }
    if(minutesTime >= 10) {
        minutesTime = minutesTime - '0'
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

// let end;
// let start

// start = new Date()

// for(var i = 0; i < 1000; i++) {
//     Math.sqrt=(i)
// }
// end = new Date() 
// console.log('timer took' + (end.getTime() - start.getTimezoneOffset()) + 'sec')
//Use something like this to when the user clicks submit quiz it will take the time and 

function quizInnerTemplate(quiz,index) {
    // console.log(quiz) no longer an array of objects the output is just the 10 objects
    let answers = []
    for(let [key,value] of Object.entries(quiz)) {
        // console.log(`${key}, ${value}`)
        if(key == 'correct_answer') {
            answers.push(value)
        } if(key == 'incorrect_answers') {
            answers.push(value[0])
            answers.unshift(value[1])
            answers.push(value[2])
        }
    }
    return `
        <div class="questionContent">
            <div class="questionHead">
                <h2 id="questionTitle">Question ${index +=1}</h2>
                <input type = "submit" value="submit answer" id="submit-Answer">
            </div>
            <div class="question">
                <p id="qText">${quiz.question}?</p>
            </div>
            <div class="questionOptions">
                <form>
                    <div class="row g-3">
                        <div class="col answers">
                            <input type="radio" id="answer1" name="answer" value="first">
                            <label for="answer1">${answers[0]}</label><br>
                        </div>
                        <div class="col answers">
                            <input type="radio" id="answer2" name="answer" value="second">
                            <label for="answer2">${answers[1]}</label><br>
                        </div>
                        <div class="w-100"></div>
                        <div class="col answers">
                            <input type="radio" id="answer3" name="answer" value="third">
                            <label for="answer3">${answers[2]}</label>
                        </div>
                        <div class="col answers">
                            <input type="radio" id="answer4" name="answer" value="fourth">
                            <label for="answer4">${answers[3]}</label>
                        </div>
                    </div>
                  </form>
            </div>
        </div>
    `
    
}

// mainvpage that works
function testingQuestionPop(element) {
    // console.log(element) same as console log in line 4
    let answerReturn = pushrandomAnswers(element)
    answerShuffler(answerReturn)
    let please = answerReturn
    //creates answers in random order shows array with

    let elementTest = document.getElementById("quizQuestions")
    let quizTemplate =
        `<div id="quiz-question">
            <div class="row g-4">
                ${element.map(quizInnerTemplate).join('')}  
            </div>
        </div>`
        elementTest.innerHTML = quizTemplate;
        console.log(please)
}

function pushrandomAnswers(element) {
    let arrays = []
    for(answer of element) {
        let array = []
       array.push(answer.correct_answer)
       array.push(answer.incorrect_answers[0])
       array.push(answer.incorrect_answers[1])
       array.push(answer.incorrect_answers[2])
       arrays.push(array)
    //    console.log(answer) same as quiz inside innerTemplate
    }
    return arrays
}

function answerShuffler(element) {
    element = element.map(answers => {
        return answers.sort((a, b) => {return 0.5 - Math.random()})
      })
}
