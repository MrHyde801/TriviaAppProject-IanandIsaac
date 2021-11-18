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


