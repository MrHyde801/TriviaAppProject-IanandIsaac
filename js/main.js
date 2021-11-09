let category;
let difficulty = 'any';

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
});
document.getElementById('easy').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Easy';
    difficulty = 'easy';
});
document.getElementById('medium').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Medium';
});
document.getElementById('hard').addEventListener('click', function() {
    document.getElementById('difficulty').innerHTML = 'Difficulty - Hard';
});

/*Question Type selection */
document.getElementById('typeAll').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - All'
});
document.getElementById('typeMultiple').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - Multiple Choice'
});
document.getElementById('typeBoolean').addEventListener('click', function() {
    document.getElementById('questionType').innerHTML = 'Question Type - True/False'
});



document.getElementById('startGame').addEventListener('click', function() {
    if(category == 'AnyCategory') {
        if(difficulty == 'easy') {
            console.log('AnyCategory Complete');
            let questionsPromise = getQuestionCategoryAny(easy);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else if(difficulty == 'medium') {
            console.log('AnyCategory Complete');
            let questionsPromise = getQuestionCategoryAny(medium);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else if(difficulty == 'hard') {
            console.log('AnyCategory Complete');
            let questionsPromise = getQuestionCategoryAny(hard);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else {
            console.log('AnyCategory Complete');
            let questionsPromise = getQuestionCategoryAny(any);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
    }
    if(category == 'GeneralKnowledge') {
        if(difficulty == 'easy') {
            console.log('GeneralKnowledge Complete');
            let questionsPromise = getQuestionCategoryGeneral(easy);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else if(difficulty == 'medium') {
            console.log('GeneralKnowledge Complete');
            let questionsPromise = getQuestionCategoryGeneral(medium);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else if(difficulty == 'hard') {
            console.log('GeneralKnowledge Complete');
            let questionsPromise = getQuestionCategoryGeneral(hard);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
        else {
            console.log('GeneralKnowledge Complete');
            let questionsPromise = getQuestionCategoryGeneral(any);
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
    }
    if(category == 'Sports') {
        if(difficulty == 'easy') {
            // if(questionType == 'all') {}    EXAMPLE for each of the difficulties have each of the question types.
            console.log('Sports Complete');
            let questionsPromise = getQuestionCategorySports(easy); // based on if statements pass in different things such as easy (for difficulty)
            questionsPromise.then((data) => {                       // do the same thing for question type in each of the difficulties. 
                const questions = data.results;
                console.log(questions);
            });
        } else if (difficulty == 'medium') {
            console.log('Sports Complete');
            let questionsPromise = getQuestionCategorySports(medium); 
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        } else if (difficulty == 'hard') {
            console.log('Sports Complete');
            let questionsPromise = getQuestionCategorySports(hard); 
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        } else {
            console.log('Sports Complete');
            let questionsPromise = getQuestionCategorySports(any); 
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
        }
    }
});


function getQuestionCategoryAny(difficulty) { 
    return fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function getQuestionCategoryGeneral(difficulty) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}

function getQuestionCategorySports(difficulty) {
    return fetch(`https://opentdb.com/api.php?amount=10&category=21&difficulty=${difficulty}`).then(
        (response) => response.json()
    );
}




    

