let category;
let difficulty = 'any';
let questionType = 'any';

/* Category Selection */
document.getElementById('any').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Any Category';
    category = 'AnyCategory';
    console.log(category);
});
document.getElementById('general').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - General Knowledge';
    category = 'GeneralKnowledge';
    console.log(category);
});
document.getElementById('sports').addEventListener('click', function() {
    document.getElementById('categories').innerHTML = 'Category - Sports';
    category = 'Sports';
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


/*This is where it gets info from the api and send them to functions */
document.getElementById('startGame').addEventListener('click', function() {
    // AnyCategory selection section
    if(category == 'AnyCategory') {
        if(difficulty == 'any') {
            if(questionType=='any') {
            console.log('AnyCategory Complete');
            let questionsPromise = getQuestionCategoryAnyNones();      //make seperate function for when there is no input for difficulty or its put on any
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = getQuestionCategoryAnyNoDiff(questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
        else {
            if(questionType=='any') {
                console.log('AnyCategory Complete');
                let questionsPromise = getQuestionCategoryAnyNoType(difficulty);     //has a difficulty but no question type
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = getQuestionCategoryAny(difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
    }
    // General Knowledge selection section
    if(category == 'GeneralKnowledge') {
        if(difficulty == 'any') {
            if(questionType=='any') {
            let questionsPromise = getQuestionCategoryGeneralNones();      //make seperate function for when there is no input for difficulty or its put on any
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
            }
            else {
                let questionsPromise = getQuestionCategoryGeneralNoDiff(questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
        else {
            if(questionType=='any') {
                let questionsPromise = getQuestionCategoryGeneralNoType(difficulty);     //has a difficulty but no question type
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
            else {
                let questionsPromise = getQuestionCategoryGeneral(difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
    }

    // sport selection section
    if(category == 'Sports') {
        if(difficulty == 'any') {
            if(questionType=='any') {
            let questionsPromise = getQuestionCategorySportsNones();      //make seperate function for when there is no input for difficulty or its put on any
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
            }
            else {
                let questionsPromise = getQuestionCategorySportsNoDiff(questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
        else {
            if(questionType=='any') {
                let questionsPromise = getQuestionCategorySportsNoType(difficulty);     //has a difficulty but no question type
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
            else {
                let questionsPromise = getQuestionCategorySports(difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
    }
});



// ANY CATEGORY SECTION OF FUNCTIONS
function getQuestionCategoryAnyNones() { 
    return fetch(`https://opentdb.com/api.php?amount=10`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryAnyNoDiff(type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&type=${type}`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryAnyNoType(difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryAny(difficulty,type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=${type}`).then(
        (response) => response.json()
    );
}

// GENERAL KNOWLEDGE CATEGORY SECTION OF FUNCTIONS
function getQuestionCategoryGeneralNones() { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=9`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryGeneralNoDiff(type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=9&type=${type}`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryGeneralNoType(difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryGeneral(difficulty,type) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}&type=${type}`).then(
        (response) => response.json()
    );
}

// SPORTS CATEGORY SECTION OF FUNCTIONS
function getQuestionCategorySportsNones() { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=21`).then(
        (response) => response.json()
    );
}

function getQuestionCategorySportsNoDiff(type) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=21&type=${type}`).then(
        (response) => response.json()
    );
}

function getQuestionCategorySportsNoType(difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function getQuestionCategorySports(difficulty,type) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=${difficulty}&type=${type}`).then(
        (response) => response.json()
    );
}




    

