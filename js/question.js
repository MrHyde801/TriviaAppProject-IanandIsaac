window.onload = function() {
    let quizInfo = JSON.parse(localStorage.getItem('quizArray'))
    questionPop(quizInfo)
    activeScoreCard(scoreContainer)
    // console.log(quizInfo)

}; 
//questionPop() populates the questions based on the users selection from the first page, 
//ActiveScoreCard() is the function for the live counters on this page as the user answers question

let Scorecount = 0;
let Totalcount = 0;
let scoreContainer = document.getElementById('scoreContainer')

// this next section is the functionality of the timer in the upper righthand corner

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


//This function has a template literal which creates the bootstrap carousel
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

//mainfunction to populate template, the biggest learning curves was iterating through the JSON and adding it to the template literal, using a template literal
//was more of a headache then I originally thought it would. - Ian
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
    answers = answers.filter(function(x) {
        if(x[1] !== undefined) {
            return x
    }});
    //After we originally populated the questions we had a big issue
    //If the question was true/false it would still loaded the empty divs which looked wierd. So we added this filter method to delete the undefined divs.
    //Then made another template literal and added an if statement based on the type of question.


    // console.log(type)
    // console.log(answers)
    answers.sort(function(a, b){return 0.5 - Math.random()}) //randomizes the order of the answers

    //template literals for question type
    if(type[0][1] === 'multiple') {
        let multiTemp = `
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
                                <label for="answer1"><span>${(answers[0][1] !== undefined)? answers[0][1] : ''}</span></label>
                            </div>
                            <div class="col answers">
                                ${(answers[1][1] !== undefined) ? `<input type="radio" id="${answers[1][0]}"  name="question${index}" value="second">` : ''}
                                <label for="answer2"><span>${(answers[1][1] !== undefined)? answers[1][1] : ''}</span></label>
                            </div>
                            <div class="w-100"></div>
                            <div class="col answers">
                                ${(answers[2][1] !== undefined) ? `<input type="radio" id="${answers[2][0]}"  name="question${index}" value="third">`: ''}
                                <label for="answer3"><span>${(answers[2][1] !== undefined)? answers[2][1] : ''}</span></label>
                            </div>
                            <div class="col answers">
                                ${(answers[3][1] !== undefined) ? `<input type="radio" id="${answers[3][0]}" name="question${index}" value="fourth">` : ''}
                                <label for="answer4"><span>${(answers[3][1] !== undefined)? answers[3][1] : ''}</span></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    `

    return multiTemp
    } else 
    {
        let booleanTemp = `
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
                                <label for="answer1"><span>${(answers[0][1] !== undefined)? answers[0][1] : ''}</span></label>
                            </div>
                            <div class="col answers">
                                ${(answers[1][1] !== undefined) ? `<input type="radio" id="${answers[1][0]}" name="question${index}" value="second">` : ''}
                                <label for="answer2"><span>${(answers[1][1] !== undefined)? answers[1][1] : ''}</span></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        `
        return booleanTemp
    }
}


//the functionality for answering the questions,
//All of this functionality starts when the "Submit Answer" button is clicked for each question
//Each answerTheQuestion function has the same functionality
function answerTheQuestion1() {
    let category = document.getElementsByClassName('questionContent')[0].id
    let difficulty = document.getElementsByClassName('questionOptions')[0].id
    let question = document.querySelectorAll('#qText')[0].innerHTML
    let formDoc = document.querySelector('#form1') 
    let alert = document.getElementById('alert1')
    let radio = document.getElementsByName('question1')
    let selectedInput = formDoc.querySelector('input[type=radio]:checked')
    let theirAnswer = selectedInput.nextElementSibling.innerHTML
    let answer1 = new answerResults(1, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false ) //constructor function to store their answer info after the user chooses answer
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}` //template for response to show if user selects wrong answer

    if(selectedInput === null) {
        alert.classList.add('alert'); //alerts they haven't selected an answer
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert'); //removes alert if they forgot to select an answer before submitting
        alert.classList.add('correct'); //the rest of the statement adds correct alert, changes boolean in constructor, adds scoreCount and totalCount.
        alert.innerHTML = 'Correct!';
        answer1.correctAnswer = true;
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true //this disables the question from being changed after submitting
        }
        Scorecount += 1
        Totalcount += 1
        activeScoreCard(Scorecount) //updates scoreCard for each question
        localStorage.setItem('Scorecount', JSON.stringify(Scorecount)); //stores info
        totalScore(); 
    } else if (selectedInput.id === 'incorrect_answers') {
        alert.classList.remove('alert'); //similar functionality as correct answer if statement
        alert.classList.add('incorrect');
        alert.innerHTML = 'Incorrect.';
        formDoc.appendChild(spanT) //shows the correct answer if the user got it wrong
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    quizResults.push(answer1) //pushes the question response info to an array later to be stored in local storage for the stats page
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
    let answer2 = new answerResults(2, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`

    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer2.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer3 = new answerResults(3, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer3.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer4 = new answerResults(4, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer4.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer5 = new answerResults(5, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer5.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer6 = new answerResults(6, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer6.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer7 = new answerResults(7, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer7.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer8 = new answerResults(8, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer8.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer9 = new answerResults(9, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false )
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer9.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
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
    let answer10 = new answerResults(10, category, formDoc.firstElementChild.id, difficulty, question, theirAnswer, correctAnswer = false)
    let correctLabel = formDoc.querySelector('#correct_answer').nextElementSibling.innerHTML
    let spanT = document.createElement("SPAN")
    spanT.innerHTML = `- The correct answer is: ${correctLabel}`
    
    if(selectedInput === null) {
        alert.classList.add('alert');
        alert.innerHTML = '!Please Select Answer!'
    } else if (selectedInput.id === 'correct_answer') {
        alert.classList.remove('alert');
        alert.classList.add('correct');
        alert.innerHTML = 'Correct!'
        answer10.correctAnswer = true;
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
        formDoc.appendChild(spanT)
        for(let i = 0; i < radio.length; i++) {
            radio[i].disabled = true
        }
        Totalcount += 1
        activeScoreCard()
    }
    quizResults.push(answer10)
}

//If I have time this last weekend I'll try to condense the functions into 1. (unfortunately didn't have time to attemp this - Ian)


let quizResults = [] //array to store answer info


//stores quiz information and then loads next page
let totalSeconds = JSON.parse(localStorage.getItem('timeAverage'));
function submitQuiz() {
    if(Totalcount !== 10) { //This makes it impossible for the user to submit the quiz without answering all the questions / and if any question count errors occur(don't know if that second reason is good or not haha)
        return alert(`
        You haven't responded to all the questions
        Complete all 10 questions before submitting.`)
    }
    localStorage.setItem('quizScore', Scorecount)
    localStorage.setItem('quizResults', JSON.stringify(quizResults))
    

    console.log(minutesTime + ':' + timer);
    console.log('this part is working');
    totalSeconds += minutesTime * 60 + timer;
    localStorage.setItem('timeAverage', JSON.stringify(totalSeconds));

    let gamesPlayed = retrieve();
    gamesPlayed++
    save();
    console.log(retrieve());
    function save() {
        localStorage.setItem('playedGames', JSON.stringify(gamesPlayed));
    }
    function retrieve() {
        return JSON.parse(localStorage.getItem('playedGames'));
    }

    window.location.assign('stats.html'); //after running everying it loads the next page
}


//generator function to store the answer info
function answerResults (number, category, type, difficulty, question, theirAnswer, correctAnswer) {
    this.number = number
    this.category = category
    this.type = type
    this.difficulty = difficulty
    this.question = question
    this.theirAnswer = theirAnswer
    this.correctAnswer = false
}


//JS for the active counter when the user answers each question
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
    //The alert originally would pop up before the final question total would show. 
    //We added this so the alert would give the page time to change the active count before alerting the user his score
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





