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
    document.getElementById('stat').innerHTML = 'You have played ' + answer + ' games';
    let totalScore = JSON.parse(localStorage.getItem('Scorecount'));
    document.getElementById('questionsCorrect').innerHTML = 'You have gotten a total of ' + totalScore + ' questions correct!';
    let percentage = (totalScore/(answer * 10)) *100;
    document.getElementById('percentage').innerHTML = 'That is ' + percentage + '% of all questions you have answered';
});


// Need to do most played category stat
    // Check how many times each category has been played
    // Push the one that has the most
        // Use the same format as the games played stat
    // If it's a tie probably just pick the first one



// Need to do stat for total time played
    // Save the time of each quiz
        // Get these numbers from the timer function in the questions.js
        // minutesTime and timer I think then multiply minutesTime by 60 add timer(seconds) then convert back to minutes and seconds
    // Add them all up and push to stat

// Need to show three most recent quizzes on stats page
    // Have the score on a mini makeup
        // Three small squares or rectangles at the bottom of the stats page
    // When the quiz is clicked it will enlarge and show full quiz
        // Not quite sure how to do this yet
    // Get all of the most recent quiz info and push the three most recent
        // Get all of this from questions.js I think

