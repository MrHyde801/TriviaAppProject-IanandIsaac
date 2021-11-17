window.onload = function() {
    let quizInfo = JSON.parse(localStorage.getItem('quizArray'))
    questionPop(quizInfo)
    console.log(quizInfo)
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
function questionPop(element, index) {

    let quizContainer = document.getElementById("quizQuestions")
    let quizTemplate =
        `
            <div class="row g-4">
                ${element.map(quizInnerTemplate).join('')}  
            </div>
        `
        quizContainer.innerHTML = quizTemplate;


        
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

    let innerTemp = `
        <div class="questionContent">
            <div class="questionHead">
                <h2>Question ${index += 1}</h2>
                <h6 id="alert${index}"><h6>
                <input type = "button" value="submitAnswer" id="submit-Answer" form="form${index}" onclick="answerTheQuestion${index}()">
            </div>
            <div class="question">
                <p id="qText">${quiz.question}?</p>
            </div>
            <div class="questionOptions">
                <form id="form${index}">
                    <div class="row g-3">
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
    `
    
    return innerTemp

    
    //condense the 2 ternary operators into one eventually
}

let Scorecount = 0;

function answerTheQuestion1() {
    let formDoc = document.querySelector('#form1') 
    let alert = document.getElementById('alert1')
    let radio = document.getElementsByName('question1')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion2() {
    let formDoc = document.querySelector('#form2') 
    let alert = document.getElementById('alert2')
    let radio = document.getElementsByName('question2')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion3() {
    let formDoc = document.querySelector('#form3') 
    let alert = document.getElementById('alert3')
    let radio = document.getElementsByName('question3')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion4() {
    let formDoc = document.querySelector('#form4') 
    let alert = document.getElementById('alert4')
    let radio = document.getElementsByName('question4')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
        totalScore();
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion5() {
    let formDoc = document.querySelector('#form5') 
    let alert = document.getElementById('alert5')
    let radio = document.getElementsByName('question5')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion6() {
    let formDoc = document.querySelector('#form6') 
    let alert = document.getElementById('alert6')
    let radio = document.getElementsByName('question6')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion7() {
    let formDoc = document.querySelector('#form7') 
    let alert = document.getElementById('alert7')
    let radio = document.getElementsByName('question7')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion8() {
    let formDoc = document.querySelector('#form8') 
    let alert = document.getElementById('alert8')
    let radio = document.getElementsByName('question8')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion9() {
    let formDoc = document.querySelector('#form9') 
    let alert = document.getElementById('alert9')
    let radio = document.getElementsByName('question9')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
    }
}

function answerTheQuestion10() {
    let formDoc = document.querySelector('#form10') 
    let alert = document.getElementById('alert10')
    let radio = document.getElementsByName('question10')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
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
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount));
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert');
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.'
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
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

    


//things to do later -->> make it so if there are answers left unchecked it will not submit pages