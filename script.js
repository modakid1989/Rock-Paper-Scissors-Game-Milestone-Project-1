let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'Tie'
    }


if ( 
(playerSelection === 'Rock' && computerSelection === 'Scissors') ||
(playerSelection === 'Scissors' && computerSelection === 'Paper') ||
(playerSelection === 'Paper' && computerSelection === 'Rock') 
) 
{
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

rockBtn.addEventListener('click', () => handleClick('Rock'))
rockBtn.addEventListener('click', () => handleClick('Paper'))
rockBtn.addEventListener('click', () => handleClick('Scissors'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
if (isGameOver()) {
openEndgameModal()
return
}
const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)
updateChoices(playerSelection, computerSelection)
updateScore()

if (isGameOver()) {
openEndgameModal()
setFinalMessage()
}
}
      



function updateChoices(playerSelection, computerSelection) {
switch (playerSelection) {
case 'Rock':
playerSign.textContent ='&#9994;&#127998;'
break
case 'Paper':
playerSign.textContent ='&#9995;&#127998;'
break
case 'Scissors':
playerSign.textContent ='&#9996;&#127998;'
break
}

switch (computerSelection) {
case 'Rock':
computerSign.textContent ='&#9994;&#127998;'
break
case 'PAPER':
      computerSign.textContent = '&#9995;&#127998;'
      break
    case 'SCISSORS':
      computerSign.textContent = '&#9996;&#127998;'
      break
}
}

function updateScore() {
if (roundWinner === 'tie') {
scoreInfo.textContent = "It's a tie!"
} else if (roundWinner === 'player') {
scoreInfo.textContent = 'Winner,Winner!'
} else if (roundWinner === 'computer') {
scoreInfo.textContent = 'You lost! Try Again!'
}
playerScorePara.textContent = `Player: ${playerScore}`
computerScorePara.textContent = `Computer: ${computerScore}`
}
function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  
  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }
  
  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }
  
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Make A Selection'
    scoreMessage.textContent = '1st to 5 is the winner'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
