let category;

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


document.getElementById('startGame').addEventListener('click', function() {
    if(category == 'AnyCategory') {
        console.log('AnyCategory Complete');
        let questionsPromise = getQuestionCategoryAny();
        questionsPromise.then((data) => {
            const questions = data.results;
            console.log(questions);
        });
    }
    if(category == 'GeneralKnowledge') {
        console.log('GeneralKnowledge Complete');
        let questionsPromise = getQuestionCategoryGeneral();
        questionsPromise.then((data) => {
            const questions = data.results;
            console.log(questions);
        });
    }
    if(category == 'Sports') {
        console.log('Sports Complete');
        let questionsPromise = getQuestionCategorySports();
        questionsPromise.then((data) => {
            const questions = data.results;
            console.log(questions);
        });
    }
    
});


 
function getQuestionCategoryAny() {
    return fetch('https://opentdb.com/api.php?amount=10').then(
        (response) => response.json()
    );
}

function getQuestionCategoryGeneral() {
    return fetch('https://opentdb.com/api.php?amount=10&category=9').then(
        (response) => response.json()
    );
}

function getQuestionCategorySports() {
    return fetch('https://opentdb.com/api.php?amount=10&category=21').then(
        (response) => response.json()
    );
}




    

