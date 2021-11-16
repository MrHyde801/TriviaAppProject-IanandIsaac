// Start of stats JS

let gamesPlayed = retrieve();
function testFunction() {
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
    document.getElementById('stat').innerHTML = 'You have played: ' + answer + ' games';
});
