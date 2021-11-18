// Start of stats JS

let gamesPlayed = retrieve();
function playedGames() {
    gamesPlayed++
    save();
    console.log(retrieve());
    
}
function save() {
    localStorage.setItem('playedGames', JSON.stringify(gamesPlayed));
}
function retrieve() {
    return JSON.parse(localStorage.getItem('playedGames'));
}
window.addEventListener('load', (evt) => {
    console.log('page is fully loaded');
    save();
    let answer = retrieve();
    // games played stat
    document.getElementById('stat').innerHTML = 'You have played ' + answer + ' games';
    let totalScore = JSON.parse(localStorage.getItem('Scorecount'));
    // questions correct stat
    document.getElementById('questionsCorrect').innerHTML = 'You have gotten a total of ' + totalScore + ' questions correct!';
    let percentage = ((totalScore/(answer * 10)) *100).toFixed(0);
    // percentage stat
    document.getElementById('percentage').innerHTML = 'That is ' + percentage + '% of all questions you have answered';
    // average time per quiz stat
    let totalSeconds = JSON.parse(localStorage.getItem('timeAverage'));
    // convert seconds back into minutes and seconds
    let averageTime = totalSeconds/answer;
    let minutes = Math.floor(averageTime / 60);
    let seconds = (averageTime % 60).toFixed(0);
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById('averageTime').innerHTML = 'On average it takes you ' + minutes + ':' + seconds + ' to finish a quiz';
});


// Gets the info from most recent game
let quizResultTest = JSON.parse(localStorage.getItem('quizResults'));
console.log(quizResultTest);

// document.getElementById('recentGameTest').innerHTML = quizResultTest[0].number;

let recentQuizScore = JSON.parse(localStorage.getItem('quizScore'));
document.getElementById('recentGameHeader').innerHTML = 'Most Recent Game - Score:' + recentQuizScore + '/10';

document.getElementById('statQuestionOne').innerHTML = quizResultTest[0].question;
document.getElementById('statAnswerOne').innerHTML = 'Your Answer:' + quizResultTest[0].theirAnswer;
document.getElementById('statCategoryOne').innerHTML = 'Category:' + quizResultTest[0].category;
document.getElementById('statDifficultyOne').innerHTML = 'Difficulty: ' + quizResultTest[0].difficulty;
if(quizResultTest[0].correctAnswer === true) {
    document.getElementById('statCorrectOne').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectOne').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionTwo').innerHTML = quizResultTest[1].question;
document.getElementById('statAnswerTwo').innerHTML = 'Your Answer:' + quizResultTest[1].theirAnswer;
document.getElementById('statCategoryTwo').innerHTML = 'Category:' + quizResultTest[1].category;
document.getElementById('statDifficultyTwo').innerHTML = 'Difficulty: ' + quizResultTest[1].difficulty;
if(quizResultTest[1].correctAnswer === true) {
    document.getElementById('statCorrectTwo').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectTwo').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionThree').innerHTML = quizResultTest[2].question;
document.getElementById('statAnswerThree').innerHTML = 'Your Answer:' + quizResultTest[2].theirAnswer;
document.getElementById('statCategoryThree').innerHTML = 'Category:' + quizResultTest[2].category;
document.getElementById('statDifficultyThree').innerHTML = 'Difficulty: ' + quizResultTest[2].difficulty;
if(quizResultTest[2].correctAnswer === true) {
    document.getElementById('statCorrectThree').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectThree').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionFour').innerHTML = quizResultTest[3].question;
document.getElementById('statAnswerFour').innerHTML = 'Your Answer:' + quizResultTest[3].theirAnswer;
document.getElementById('statCategoryFour').innerHTML = 'Category:' + quizResultTest[3].category;
document.getElementById('statDifficultyFour').innerHTML = 'Difficulty: ' + quizResultTest[3].difficulty;
if(quizResultTest[3].correctAnswer === true) {
    document.getElementById('statCorrectFour').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectFour').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionFive').innerHTML = quizResultTest[4].question;
document.getElementById('statAnswerFive').innerHTML = 'Your Answer:' + quizResultTest[4].theirAnswer;
document.getElementById('statCategoryFive').innerHTML = 'Category:' + quizResultTest[4].category;
document.getElementById('statDifficultyFive').innerHTML = 'Difficulty: ' + quizResultTest[4].difficulty;
if(quizResultTest[4].correctAnswer === true) {
    document.getElementById('statCorrectFive').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectFive').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionSix').innerHTML = quizResultTest[5].question;
document.getElementById('statAnswerSix').innerHTML = 'Your Answer:' + quizResultTest[5].theirAnswer;
document.getElementById('statCategorySix').innerHTML = 'Category:' + quizResultTest[5].category;
document.getElementById('statDifficultySix').innerHTML = 'Difficulty: ' + quizResultTest[5].difficulty;
if(quizResultTest[5].correctAnswer === true) {
    document.getElementById('statCorrectSix').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectSix').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionSeven').innerHTML = quizResultTest[6].question;
document.getElementById('statAnswerSeven').innerHTML = 'Your Answer:' + quizResultTest[6].theirAnswer;
document.getElementById('statCategorySeven').innerHTML = 'Category:' + quizResultTest[6].category;
document.getElementById('statDifficultySeven').innerHTML = 'Difficulty: ' + quizResultTest[6].difficulty;
if(quizResultTest[6].correctAnswer === true) {
    document.getElementById('statCorrectSeven').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectSeven').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionEight').innerHTML = quizResultTest[7].question;
document.getElementById('statAnswerEight').innerHTML = 'Your Answer:' + quizResultTest[7].theirAnswer;
document.getElementById('statCategoryEight').innerHTML = 'Category:' + quizResultTest[7].category;
document.getElementById('statDifficultyEight').innerHTML = 'Difficulty: ' + quizResultTest[7].difficulty;
if(quizResultTest[7].correctAnswer === true) {
    document.getElementById('statCorrectEight').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectEight').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionNine').innerHTML = quizResultTest[8].question;
document.getElementById('statAnswerNine').innerHTML = 'Your Answer:' + quizResultTest[8].theirAnswer;
document.getElementById('statCategoryNine').innerHTML = 'Category:' + quizResultTest[8].category;
document.getElementById('statDifficultyNine').innerHTML = 'Difficulty: ' + quizResultTest[8].difficulty;
if(quizResultTest[8].correctAnswer === true) {
    document.getElementById('statCorrectNine').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectNine').innerHTML = 'You got this one wrong';
}

document.getElementById('statQuestionTen').innerHTML = quizResultTest[9].question;
document.getElementById('statAnswerTen').innerHTML = 'Your Answer:' + quizResultTest[9].theirAnswer;
document.getElementById('statCategoryTen').innerHTML = 'Category:' + quizResultTest[9].category;
document.getElementById('statDifficultyTen').innerHTML = 'Difficulty: ' + quizResultTest[9].difficulty;
if(quizResultTest[9].correctAnswer === true) {
    document.getElementById('statCorrectTen').innerHTML = 'You got it correct';
} else {
    document.getElementById('statCorrectTen').innerHTML = 'You got this one wrong';
}