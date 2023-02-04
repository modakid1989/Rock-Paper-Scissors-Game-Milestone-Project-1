let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie'
    }
}

if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')
) {
    playerScore++
    roundWinner = 'Player'
}

if (
    (computerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (computerSelection === 'Paper' && computerSelection === 'Rock') 
) {
    computerScore++
    roundWinner = 'Computer'
}
updateScoreMessage(roundWinner, playerSelection, computerSelection)

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
    return 'Rock'
    case 1:
    return 'Paper'
    case 2:
    return 'Scissors'
    }
}
function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


const scoreInformation = document.getElementById('ScoreInformation')
const scoreMessage = document.getElementById('SoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')



