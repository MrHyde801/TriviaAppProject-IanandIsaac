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

document.getElementById('statQuestionOne').innerHTML = 'Q1--' + quizResultTest[0].question;
document.getElementById('statAnswerOne').innerHTML = 'Q' + quizResultTest[0].number + '--Your Answer:' + quizResultTest[0].theirAnswer;
document.getElementById('statCorrectOne').innerHTML = 'Q1--Correct Answer:' + quizResultTest[0].correctAnswer;

document.getElementById('statQuestionTwo').innerHTML = 'Q2--' + quizResultTest[1].question;
document.getElementById('statAnswerTwo').innerHTML = 'Q' + quizResultTest[1].number + '--Your Answer:' + quizResultTest[1].theirAnswer;
document.getElementById('statCorrectTwo').innerHTML = 'Q2--Correct Answer:' + quizResultTest[1].correctAnswer;

document.getElementById('statQuestionThree').innerHTML = 'Q3--' + quizResultTest[2].question;
document.getElementById('statAnswerThree').innerHTML = 'Q' + quizResultTest[2].number + '--Your Answer:' + quizResultTest[2].theirAnswer;
document.getElementById('statCorrectThree').innerHTML = 'Q3--Correct Answer:' + quizResultTest[2].correctAnswer;

document.getElementById('statQuestionFour').innerHTML = 'Q3--' + quizResultTest[3].question;
document.getElementById('statAnswerFour').innerHTML = 'Q' + quizResultTest[3].number + '--Your Answer:' + quizResultTest[3].theirAnswer;
document.getElementById('statCorrectFour').innerHTML = 'Q3--Correct Answer:' + quizResultTest[3].correctAnswer;

document.getElementById('statQuestionFive').innerHTML = 'Q5--' + quizResultTest[4].question;
document.getElementById('statAnswerFive').innerHTML = 'Q' + quizResultTest[4].number + '--Your Answer:' + quizResultTest[4].theirAnswer;
document.getElementById('statCorrectFive').innerHTML = 'Q5--Correct Answer:' + quizResultTest[4].correctAnswer;

document.getElementById('statQuestionSix').innerHTML = 'Q6--' + quizResultTest[5].question;
document.getElementById('statAnswerSix').innerHTML = 'Q' + quizResultTest[5].number + '--Your Answer:' + quizResultTest[5].theirAnswer;
document.getElementById('statCorrectSix').innerHTML = 'Q6--Correct Answer:' + quizResultTest[5].correctAnswer;

document.getElementById('statQuestionSeven').innerHTML = 'Q7--' + quizResultTest[6].question;
document.getElementById('statAnswerSeven').innerHTML = 'Q' + quizResultTest[6].number + '--Your Answer:' + quizResultTest[4].theirAnswer;
document.getElementById('statCorrectSeven').innerHTML = 'Q7--Correct Answer:' + quizResultTest[6].correctAnswer;

document.getElementById('statQuestionEight').innerHTML = 'Q8--' + quizResultTest[7].question;
document.getElementById('statAnswerEight').innerHTML = 'Q' + quizResultTest[7].number + '--Your Answer:' + quizResultTest[7].theirAnswer;
document.getElementById('statCorrectEight').innerHTML = 'Q8--Correct Answer:' + quizResultTest[7].correctAnswer;

document.getElementById('statQuestionNine').innerHTML = 'Q9--' + quizResultTest[8].question;
document.getElementById('statAnswerNine').innerHTML = 'Q' + quizResultTest[8].number + '--Your Answer:' + quizResultTest[8].theirAnswer;
document.getElementById('statCorrectNine').innerHTML = 'Q9--Correct Answer:' + quizResultTest[8].correctAnswer;

document.getElementById('statQuestionTen').innerHTML = 'Q10--' + quizResultTest[9].question;
document.getElementById('statAnswerTen').innerHTML = 'Q' + quizResultTest[9].number + '--Your Answer:' + quizResultTest[9].theirAnswer;
document.getElementById('statCorrectTen').innerHTML = 'Q10--Correct Answer:' + quizResultTest[9].correctAnswer;