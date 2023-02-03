let winnerCount = 0;
let loserCount = 0;

let clickSound = document.querySelector("#click-sound");

const img = document.querySelector("img");

function logWin() {
    document.getElementById("Result").innerHTML = "You Won!";
    winnerCount += 1;
}

function logLoss() {
    document.getElementById("Result").innerHTML = "You Lose!";
    loserCount += 1;
}

function tieResult() {
    document.getElementById("Result").innerHTML = "Tie! Try Again.";
    document.getElementById("Result-Explained").innerHTML = "Draw";
    img.src =
    img.alt =
}

function logCounter() {
    document.getElementById("User-Total Score").textContent = winnerCount;
    document.getElementById("Computer-Total Score").textContent = loserCount;
}

function rockCrushesScissors() {
    document.getElementById("Result-Explained").innerHTML = "Rock Crushes Scissors";
    img.src = ""
    img.alt = ""
}

function paperCoversRock() {
    document.getElementById("Results-Explained").innerHTML = "Paper Covers Rock";
    img.src =""
    img.alt =""
}

