window.onload = function() {
    let quizInfo = JSON.parse(localStorage.getItem('quizArray'))
    testingQuestionPop(quizInfo)
};

let timer = "0" + 0
let minutesTime = "0" + 0
let t
let timer_is_on = 0;
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

//lookup date object to calculate

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

function quizInnerTemplate(quiz,index) {
    return `
        <div class="questionContent">
            <div class="questionHead">
                <h2 id="questionTitle">Question ${index +=1}</h2>
            </div>
            <div class="question">
                <p id="qText">${quiz.question}?</p>
            </div>
            <div class="questionOptions">
                <form>
                    <div class="row g-3">
                        <div class="col answers">
                            <input type="radio" id="answer1" name="answer" value="first">
                            <label for="answer1">${quiz.correct_answer}</label><br>
                        </div>
                        <div class="col answers">
                            <input type="radio" id="answer2" name="answer" value="second">
                            <label for="answer2">${quiz.incorrect_answer}</label><br>
                        </div>
                        <div class="w-100"></div>
                        <div class="col answers">
                            <input type="radio" id="answer3" name="answer" value="third">
                            <label for="answer3">${quiz.incorrect_answer}</label>
                        </div>
                        <div class="col answers">
                            <input type="radio" id="answer4" name="answer" value="fourth">
                            <label for="answer4">${quiz.incorrect_answer}</label>
                        </div>
                    </div>
                    <div class="row">
                            <div class="col">
                                <input type="submit" value="submit">
                            </div>
                    </div>
                  </form>
            </div>
        </div>
    `
}

// mainvpage that works
function testingQuestionPop(quizInfo) {
    console.log(quizInfo)
let elementTest = document.getElementById("quizQuestions")
let quizTemplate =
    `<div id="quiz-question">
       <div class="row g-4">
       ${quizInfo.map(quizInnerTemplate).join('')}  
        </div>
    </div>`
    elementTest.innerHTML = quizTemplate;
}

// function testingQuestionPop(quizInfo) {
//     let quizTemplate =
//         `<div id="quiz-question">
//            <div class="row g-4">
//            ${quizInfo.map(quizInnerTemplate).join('')}  
//             </div>
//         </div>`
//         saveData(quizTemplate)
//     }