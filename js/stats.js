/* Stats Page JS */ 



let gamesPlayed = retrieve();



document.getElementById('startGame').addEventListener('click', function() {
    gamesPlayed++;
    save();
    let answer = retrieve();
    numQuestionsPop(answer);
});
function save() {
    localStorage.setItem('gamesPlayed', JSON.stringify(gamesPlayed));
}
function retrieve() {
    return JSON.parse(localStorage.getItem('gamesPlayed'));
}
function numQuestionsPop(answer) {
    console.log(answer);
    let output = ('You have played: ' + answer + ' quizzes');
    document.getElementById('stat').innerHTML = output;
}


