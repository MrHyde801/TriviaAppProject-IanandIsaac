// let timer = "0" + 0
// let minutesTime = "0" + 0
// let t
// let timer_is_on = 0;
// let minutes = document.getElementById('minutes')
// let seconds = document.getElementById('seconds')



// function render() {
//     timedCount()
// }

// console.log(seconds.innerHTML)

// function timedCount() {
//     seconds.innerHTML = timer
//     minutes.innerHTML = minutesTime
//     timer++;
//     parseInt(timer)
//     t = setTimeout(timedCount, 1000);
//     if(timer < 10) {
//         timer = "0" + timer;
//     }
//     if(timer == 60) {
//         minutesTime++;
//         minutesTime = "0" + minutesTime;
//         timer = "0" + 0
//     }
//     if(minutesTime >= 10) {
//         minutesTime = minutesTime - '0'
//     }
// }


// function startCount() {
//     if(!timer_is_on) {
//         timer_is_on = 1
//         timedCount()
//     }
// }

// function submitQuiz() {

// }

// render()

let category;
let difficulty = 'any';
let questionType = 'any';
let questionArray = [];

/* Category Selection */
document.getElementById('any').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Any Category';
    category = null;
});
document.getElementById('general').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - General Knowledge';
    category = 9;
    console.log(category);
});
document.getElementById('books').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Books';
    category = 10;
    console.log(category);
});
document.getElementById('film').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Film';
    category = 11;
    console.log(category);
});
document.getElementById('music').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Music';
    category = 12;
    console.log(category);
});
document.getElementById('musicTheatres').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Musicals & Theatres';
    category = 13;
    console.log(category);
});
document.getElementById('television').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Television';
    category = 14;
    console.log(category);
});
document.getElementById('videoGames').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Video Games';
    category = 15;
    console.log(category);
});
document.getElementById('boardGames').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:boardGames';
    category = 16;
    console.log(category);
});
document.getElementById('comics').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Comics';
    category = 29;
    console.log(category);
});
document.getElementById('anime').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Japanese Anime & Manga';
    category = 31;
    console.log(category);
});
document.getElementById('cartoons').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Entertainment:Cartoons & Animations';
    category = 32;
    console.log(category);
});
document.getElementById('scienceNature').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Science:Nature';
    category = 17;
    console.log(category);
});
document.getElementById('computers').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Science:Computers';
    category = 18;
    console.log(category);
});
document.getElementById('math').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Science:Mathematics';
    category = 19;
    console.log(category);
});
document.getElementById('gadgets').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Science:Gadgets';
    category = 30;
    console.log(category);
});
document.getElementById('mythology').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Mythology';
    category = 20;
    console.log(category);
});
document.getElementById('mythology').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Mythology';
    category = 21;
    console.log(category);
});
document.getElementById('geography').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Geography';
    category = 22;
    console.log(category);
});
document.getElementById('history').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - History';
    category = 23;
    console.log(category);
});
document.getElementById('politics').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Politics';
    category = 24;
    console.log(category);
});
document.getElementById('art').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Art';
    category = 25;
    console.log(category);
});
document.getElementById('celebrities').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Celebrities';
    category = 26;
    console.log(category);
});
document.getElementById('animals').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Animals';
    category = 27;
    console.log(category);
});
document.getElementById('vehicles').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Vehicles';
    category = 28;
    console.log(category);
});



/* Difficulty seleciton */
document.getElementById('diffAny').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Any';
    difficulty='any';
});
document.getElementById('easy').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Easy';
    difficulty = 'easy';
});
document.getElementById('medium').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Medium';
    difficulty='medium';
});
document.getElementById('hard').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Hard';
    difficulty='hard';
});

/*Question Type selection */
document.getElementById('typeAll').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - All'
    questionType='any';
    console.log('QuestionType:ANY');
});
document.getElementById('typeMultiple').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - Multiple Choice'
    questionType='multiple';
    console.log(questionType);
});
document.getElementById('typeBoolean').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - True/False'
    questionType='boolean';
    console.log('QuestionType:BOOLEAN');
});

/* calls the correct function based on the selected choices */
document.getElementById('startGame').addEventListener('click', function() {
    if(category) {
        if(difficulty == 'any') {
            if(questionType=='any') {  // runs when there is a selected category but no selected difficulty or question type
            console.log('1');
            let questionsPromise = Nones(category);
            questionsPromise.then((data) => {
                const questions = data.results;
                questionArray = [...questions];
                console.log(questionArray);
                testingQuestionPop(questionArray);
                // document.getElementById('test').innerHTML += questionArray[0].question; EXAMPLE OF HOW TO ACCESS THE QUESTIONS
            });
            }
            else { // runs when there is a selected category and a selected question type but no selected difficulty
                console.log('AnyCategory Complete');
                let questionsPromise = NoDiff(category,questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
        }
        else { 
            if(questionType=='any') { // runs when there is a selected category and a selected category and a selected difficulty but no selected question type
                console.log('AnyCategory Complete');
                let questionsPromise = NoType(category,difficulty);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
            else { // runs when there is a selected category, difficulty, and question type
                console.log('AnyCategory Complete');
                let questionsPromise = HasBoth(category,difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
        }
    } else {
        if(difficulty == 'any') {
            if(questionType=='any') { // runs when nothing has been selected
            console.log('AnyCategory Complete');
            let questionsPromise = NonesAny();
            questionsPromise.then((data) => {
                const questions = data.results;
                questionArray = [...questions];
                console.log(questionArray);
                testingQuestionPop(questionArray);
            });
            }
            else { // runs when only question type has been selected
                console.log('AnyCategory Complete');
                let questionsPromise = NoDiffAny(questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
        }
        else {
            if(questionType=='any') { // runs when only difficulty has been selected
                console.log('AnyCategory Complete');
                let questionsPromise = NoTypeAny(difficulty);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
            else {
                console.log('AnyCategory Complete'); // runs when difficulty and quesion type have been selected but not category
                let questionsPromise = HasBothAny(difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    questionArray = [...questions];
                    console.log(questionArray);
                    testingQuestionPop(questionArray);
                });
            }
        }
    }
});


/* The functions that call the correct API link depending on selections */
function Nones(category) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}`).then(
        (response) => response.json()
    );
}

function NoDiff(category,type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&type=${type}`).then(
        (response) => response.json()
    );
}

function NoType(category,difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function HasBoth(category,difficulty,type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`).then(
        (response) => response.json()
    );
}

function NonesAny() { 
    return fetch(`https://opentdb.com/api.php?amount=10`).then(
        (response) => response.json()
    );
}

function NoDiffAny(type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&type=${type}`).then(
        (response) => response.json()
    );
}

function NoTypeAny(difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function HasBothAny(difficulty,type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${type}`).then(
        (response) => response.json()
    );
}


function quizTemplate(quiz,index) {
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

function testingQuestionPop() {
document.getElementById("testing-questions").innerHTML =
    `<div id="testing-questions">
       <div class="row g-4">
       ${questionArray.map(quizTemplate).join('')}  
        </div>
    </div>`
}




// Start of stats JS

function toggleShow() {
    var x = document.getElementById('selectContainer');
    var y = document.getElementById('statsContainer');
    var z = document.getElementById('statsPage');
    if(x.style.display === 'none') {
        y.style.display = 'none';
        x.style.display = 'block';
        z.innerHTML = 'Stats';
    } else {
        y.style.display = 'block';
        x.style.display = 'none';
        z.innerHTML = 'New Quiz';
    }
}









