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



// mainfunction to populate template
function testingQuestionPop(element) {

    let elementTest = document.getElementById("quizQuestions")
    let quizTemplate =
        `<div id="quiz-question">
            <div class="row g-4">
                ${element.map(quizInnerTemplate).join('')}  
            </div>
        </div>`
        elementTest.innerHTML = quizTemplate;
        
}

function quizInnerTemplate(quiz,index) {
    let answers = []
    for(let [key,value] of Object.entries(quiz)) { //this gets the answers based on correct/incorrect key and populates it into an array
        // console.log(`${key}, ${value}`)
        if(key === 'correct_answer') {
            answers.push(['correct_answer', value])
        } if(key === 'incorrect_answers') {
            answers.push(['incorrect_answers', value[0]])
            answers.push(['incorrect_answers', value[1]])
            answers.push(['incorrect_answers', value[2]])
        } 
    }


    answers.sort(function(a, b){return 0.5 - Math.random()}) //randomizes the order of the answers
    // console.log(answers)

    return `
        <div class="questionContent">
            <div class="questionHead">
                <h2>Question ${index += 1}</h2>
                <div id="question${index}">
                    <h3 id="incorrect">Incorrect!</h3>
                    <input type = "submit" value="submitAnswer" id="submit-Answer" form="form${index}">
                </div>
            </div>
            <div class="question">
                <p id="qText">${quiz.question}?</p>
            </div>
            <div class="questionOptions">
                <form id="form${index}">
                    <div class="row g-3">
                        <div class="col answers">
                            ${(answers[0][1] !== undefined) ? `<input type="radio" id="${answers[0][0]}" name="answer" value="first">`: ''}
                            <label for="answer1">${(answers[0][1] !== undefined)? answers[0][1] : ''}</label><br>
                        </div>
                        <div class="col answers">
                            ${(answers[1][1] !== undefined) ? `<input type="radio" id="${answers[1][0]}" name="answer" value="second">` : ''}
                            <label for="answer2">${(answers[1][1] !== undefined)? answers[1][1] : ''}</label><br>
                        </div>
                        <div class="w-100"></div>
                        <div class="col answers">
                            ${(answers[2][1] !== undefined) ? `<input type="radio" id="${answers[2][0]}" name="answer" value="third">`: ''}
                            <label for="answer3">${(answers[2][1] !== undefined)? answers[2][1] : ''}</label>
                        </div>
                        <div class="col answers">
                            ${(answers[3][1] !== undefined) ? `<input type="radio" id="${answers[3][0]}" name="answer" value="fourth">` : ''}
                            <label for="answer4">${(answers[3][1] !== undefined)? answers[3][1] : ''}</label>
                        </div>
                    </div>
                  </form>
            </div>
        </div>
    `
    //condense the 2 ternary operators into one eventually
}