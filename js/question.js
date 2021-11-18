window.onload = function() {
    let quizInfo = JSON.parse(localStorage.getItem('quizArray'))
    questionPop(quizInfo)
    console.log(quizInfo)
    activeScoreCard(scoreContainer)
};

let Scorecount = 0;
let Totalcount = 0;
let scoreContainer = document.getElementById('scoreContainer')





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

render() 


//This creates the bootstrap carousel, which is then populated by quizInnerTemplate()
function questionPop(element, index) {

    let quizContainer = document.getElementById("quizQuestions")
    let quizTemplate =
        `
            <div class="row g-4">
                <div id="carouselControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
                    <div class="carousel-inner">
                        ${element.map(quizInnerTemplate).join('')}
                    </div>
                    <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a> 
                </div>    
            </div>
        `

        quizContainer.innerHTML = quizTemplate;
        
}

// mainfunction to populate template
function quizInnerTemplate(quiz,index) {
    let answers = []
    let categories = []
    let difficulty = []
    let type = []
    for(let [key,value] of Object.entries(quiz)) { //this gets the answers to each question based on correct/incorrect key and populates it into an array
        // console.log(`${key}, ${value}`)
        if(key === 'correct_answer') {
            answers.push(['correct_answer', value])
        } if(key === 'incorrect_answers') {
            answers.push(['incorrect_answers', value[0]])
            answers.push(['incorrect_answers', value[1]])
            answers.push(['incorrect_answers', value[2]])
        } if(key === 'category') {
            categories.push(['category', value])
        } if (key === 'difficulty') {
            difficulty.push(['difficulty', value])
        } if (key === 'type') {
            type.push(['type', value])
        }
        
    }

    // console.log(answers)
    answers.sort(function(a, b){return 0.5 - Math.random()}) //randomizes the order of the answers

    //uses all the info from the populated arrays to create each question
    let innerTemp = `
        <div class="${(index === 0) ? `carousel-item active"` : 'carousel-item'}">
            <div class="questionContent" id="${categories[0][1]}">
                <div class="questionHead">
                    <h2>Question ${index += 1}/10</h2>
                    <h6 id="alert${index}"><h6>
                    <input type = "button" value="Submit Answer" id="submit-Answer" form="form${index}" onclick="answerTheQuestion${index}()">
                </div>
                <div class="question">
                    <p id="qText">${quiz.question}?</p>
                </div>
                <div class="questionOptions" id="${difficulty[0][1]}">
                    <form id="form${index}">
                        <div class="row g-3 type" id="${type[0][1]}">
                            <div class="col answers">
                                ${(answers[0][1] !== undefined) ? `<input type="radio" id="${answers[0][0]}" name="question${index}" value="first">`: ''}
                                <label for="answer1">${(answers[0][1] !== undefined)? answers[0][1] : ''}</label>
                            </div>
                            <div class="col answers">
                                ${(answers[1][1] !== undefined) ? `<input type="radio" id="${answers[1][0]}" name="question${index}" value="second">` : ''}
                                <label for="answer2">${(answers[1][1] !== undefined)? answers[1][1] : ''}</label>
                            </div>
                            <div class="w-100"></div>
                            <div class="col answers">
                                ${(answers[2][1] !== undefined) ? `<input type="radio" id="${answers[2][0]}" name="question${index}" value="third">`: ''}
                                <label for="answer3">${(answers[2][1] !== undefined)? answers[2][1] : ''}</label>
                            </div>
                            <div class="col answers">
                                ${(answers[3][1] !== undefined) ? `<input type="radio" id="${answers[3][0]}" name="question${index}" value="fourth">` : ''}
                                <label for="answer4">${(answers[3][1] !== undefined)? answers[3][1] : ''}</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    `
    return innerTemp

    
    //condense the 2 ternary operators into one eventually
    //Make it so that the true false questions populate into 1st and 2nd answer
}



function answerTheQuestion1() {
    let category = document.getElementsByClassName('questionContent')[0].id
    let difficulty = document.getElementsByClassName('questionOptions')[0].id
    let question = document.querySelectorAll('#qText')[0].innerHTML
    let formDoc = document.querySelector('#form1') 
    let alert = document.getElementById('alert1')
    let radio = document.getElementsByName('question1')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    console.log(selectedInput.nextElementSibling)
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        theirAnswer = theirAnswer + ' incorrect'
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer1 = new answerResults(1, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer1.correctAnswer = true
    }
    quizResults.push(answer1)
}

function answerTheQuestion2() {
    let category = document.getElementsByClassName('questionContent')[1].id
    let difficulty = document.getElementsByClassName('questionOptions')[1].id
    let question = document.querySelectorAll('#qText')[1].innerHTML
    let formDoc = document.querySelector('#form2') 
    let alert = document.getElementById('alert2')
    let radio = document.getElementsByName('question2')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer2 = new answerResults(2, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer2.correctAnswer = true
    }
    quizResults.push(answer2)
}

function answerTheQuestion3() {
    let category = document.getElementsByClassName('questionContent')[2].id
    let difficulty = document.getElementsByClassName('questionOptions')[2].id
    let question = document.querySelectorAll('#qText')[2].innerHTML
    let formDoc = document.querySelector('#form3') 
    let alert = document.getElementById('alert3')
    let radio = document.getElementsByName('question3')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer3 = new answerResults(3, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer3.correctAnswer = true
    }
    quizResults.push(answer3)
}

function answerTheQuestion4() {
    let category = document.getElementsByClassName('questionContent')[3].id
    let difficulty = document.getElementsByClassName('questionOptions')[3].id
    let question = document.querySelectorAll('#qText')[3].innerHTML
    let formDoc = document.querySelector('#form4') 
    let alert = document.getElementById('alert4')
    let radio = document.getElementsByName('question4')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer4 = new answerResults(4, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer4.correctAnswer = true
    }
    quizResults.push(answer4)
    
}

function answerTheQuestion5() {
    let category = document.getElementsByClassName('questionContent')[4].id
    let difficulty = document.getElementsByClassName('questionOptions')[4].id
    let question = document.querySelectorAll('#qText')[4].innerHTML
    let formDoc = document.querySelector('#form5') 
    let alert = document.getElementById('alert5')
    let radio = document.getElementsByName('question5')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer5 = new answerResults(5, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer5.correctAnswer = true
    }
    quizResults.push(answer5)
    
}

function answerTheQuestion6() {
    let category = document.getElementsByClassName('questionContent')[5].id
    let difficulty = document.getElementsByClassName('questionOptions')[5].id
    let question = document.querySelectorAll('#qText')[5].innerHTML
    let formDoc = document.querySelector('#form6') 
    let alert = document.getElementById('alert6')
    let radio = document.getElementsByName('question6')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer6 = new answerResults(6, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer6.correctAnswer = true
    }
    quizResults.push(answer6)
    
}

function answerTheQuestion7() {
    let category = document.getElementsByClassName('questionContent')[6].id
    let difficulty = document.getElementsByClassName('questionOptions')[6].id
    let question = document.querySelectorAll('#qText')[6].innerHTML
    let formDoc = document.querySelector('#form7') 
    let alert = document.getElementById('alert7')
    let radio = document.getElementsByName('question7')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer7 = new answerResults(7, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer7.correctAnswer = true
    }
    quizResults.push(answer7)
    
}

function answerTheQuestion8() {
    let category = document.getElementsByClassName('questionContent')[7].id
    let difficulty = document.getElementsByClassName('questionOptions')[7].id
    let question = document.querySelectorAll('#qText')[7].innerHTML
    let formDoc = document.querySelector('#form8') 
    let alert = document.getElementById('alert8')
    let radio = document.getElementsByName('question8')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer8 = new answerResults(8, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer8.correctAnswer = true
    }
    quizResults.push(answer8)
    
}

function answerTheQuestion9() {
    let category = document.getElementsByClassName('questionContent')[8].id
    let difficulty = document.getElementsByClassName('questionOptions')[8].id
    let question = document.querySelectorAll('#qText')[8].innerHTML
    let formDoc = document.querySelector('#form9') 
    let alert = document.getElementById('alert9')
    let radio = document.getElementsByName('question9')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer9 = new answerResults(9, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer9.correctAnswer = true
    }
    quizResults.push(answer9)
    
}

function answerTheQuestion10() {
    let category = document.getElementsByClassName('questionContent')[9].id
    let difficulty = document.getElementsByClassName('questionOptions')[9].id
    let question = document.querySelectorAll('#qText')[9].innerHTML
    let formDoc = document.querySelector('#form10')
    let alert = document.getElementById('alert10') 
    let radio = document.getElementsByName('question10') 
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount)
        localStorage.setItem('Scorecount', JSON.stringify(a));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    let answer10 = new answerResults(10, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    if(selectedInput.id === 'correct_answer') {
        answer10.correctAnswer = true
    }
    quizResults.push(answer10)
}


//If I have time try to condense the functions into 1 foreach. -
// - was difficult to figure out because the template literal was messing with -
// - the data types

let categoryGroup = document.getElementsByClassName('questionContent')
let difficultyGroup = document.getElementsByClassName('questionOptions') 
let typeGroup = document.getElementsByClassName('type')   
let quizResults = []


//stores quiz information and then loads next page
function submitQuiz() {
    if(Totalcount !== 10) {
        return alert(`
        You haven't responded to all the questions
        Complete all 10 questions before submitting.`)
    }
    localStorage.setItem('quizScore', Scorecount)
    localStorage.setItem('quizResults', JSON.stringify(quizResults))
    window.location.assign('stats.html')
}


function answerResults (number, category, type, difficulty, question, theirAnswer, correct) {
    this.number = number
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.theirAnswer = theirAnswer
    this.correctAnswer = false
}

function activeScoreCard () {
    let scoreCountTemp = 
    `
        <h3>${Totalcount} Question Answered</h3>
        <h3>${Scorecount} Out of ${Totalcount} Correct</h3>
    `
    ;
    scoreContainer.innerHTML = scoreCountTemp
    if (Totalcount == 10) {
        setTimeout(function() {
            alert(
            `
            You scored ${Scorecount} out of ${Totalcount}
            if you want to save your result, submit quiz
            and/or try your luck with a new quiz!`);
        }, 800)
    }
}

// JS for saving Scorecount to local storage
let scoreCount = retrievescore();
    function totalScore() {
        scoreCount ++;
        savescore();
        console.log(retrievescore());
        
        
    }
    function savescore() {
        localStorage.setItem('Scorecount', JSON.stringify(scoreCount));
    }
    function retrievescore() {
        return JSON.parse(localStorage.getItem('Scorecount'));
    }

    

let totalSeconds = JSON.parse(localStorage.getItem('timeAverage'));
function findTime() {
    console.log(minutesTime + ':' + timer);
    totalSeconds = minutesTime * 60 + timer;
    localStorage.setItem('timeAverage', JSON.stringify(totalSeconds));
    
} 

