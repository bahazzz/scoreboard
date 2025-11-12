let team1Points = 0
let team2Points = 0
let team1Score = document.getElementById('team1-score')
let team2Score = document.getElementById('team2-score')

// Team one

function add1PointT1() {
    team1Points++
    team1Score.textContent = team1Points
    highlightLeader()
}
function add2PointT1() {
    team1Points += 2
    team1Score.textContent = team1Points
    highlightLeader()
}
function add3PointT1() {
    team1Points += 3
    team1Score.textContent = team1Points
    highlightLeader()
}

// Team two

function add1PointT2() {
    team2Points++
    team2Score.textContent = team2Points
    highlightLeader()
}
function add2PointT2() {
    team2Points += 2
    team2Score.textContent = team2Points
    highlightLeader()
}
function add3PointT2() {
    team2Points += 3
    team2Score.textContent = team2Points
    highlightLeader()
}

// Highlight the Leader

const teamOne = document.querySelector('.chicago-bulls')
const teamTwo = document.querySelector('.boston-celtics')

function highlightLeader() {

    if (team1Points > team2Points) {
        teamOne.classList.add('highlightOne')
        teamTwo.classList.remove('highlightTwo')
    } else if (team2Points > team1Points) {
        teamTwo.classList.add('highlightTwo')
        teamOne.classList.remove('highlightOne')
    } else if (team1Points === team2Points) {
        teamOne.classList.add('highlightOne')
        teamTwo.classList.add('highlightTwo')
    }
}

// reset-btn

function reset() {
    team1Points = 0
    team2Points = 0
    team1Score.textContent = team1Points
    team2Score.textContent = team2Points
    teamOne.classList.remove('highlightOne')
    teamTwo.classList.remove('highlightTwo')
    
}
    

