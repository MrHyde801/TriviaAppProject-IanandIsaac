let category;
let difficulty = 'any';
let questionType = 'any';

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


document.getElementById('startGame').addEventListener('click', function() {
    if(category) {
        if(difficulty == 'any') {
            if(questionType=='any') {
            console.log('1');
            let questionsPromise = Nones(category);      //make seperate function for when there is no input for difficulty or its put on any
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = NoDiff(category,questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
        else {
            if(questionType=='any') {
                console.log('AnyCategory Complete');
                let questionsPromise = NoType(category,difficulty);     //has a difficulty but no question type
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = HasBoth(category,difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
    } else {
        if(difficulty == 'any') {
            if(questionType=='any') {
            console.log('AnyCategory Complete');
            let questionsPromise = NonesAny();      //make seperate function for when there is no input for difficulty or its put on any
            questionsPromise.then((data) => {
                const questions = data.results;
                console.log(questions);
            });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = NoDiffAny(questionType);
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
        else {
            if(questionType=='any') {
                console.log('AnyCategory Complete');
                let questionsPromise = NoTypeAny(difficulty);     //has a difficulty but no question type
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
            else {
                console.log('AnyCategory Complete');
                let questionsPromise = HasBothAny(difficulty,questionType);     
                questionsPromise.then((data) => {
                    const questions = data.results;
                    console.log(questions);
                });
            }
        }
    }
});



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
