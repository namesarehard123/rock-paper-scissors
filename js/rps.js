function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3);
    switch (randNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissor";
        case 2:
            return "paper";
        default:
            return "something went wrong";
    }
}

function getHumanChoice() {
    // assumes correct input for now, so no handling
    let humanChoice = prompt("Rock, Paper or Scissor?");
    return humanChoice.toLowerCase();
}



function playRound(humanChoice, computerChoice) {
    const isTied = humanChoice === computerChoice;
    const playerWins = (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "paper");

    if (isTied) {
        console.log("It's a TIE!");
        return "tied";
    } else if (playerWins) {
        console.log(`You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`);
        return "player";
    } else {
        console.log(`You lost! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        return "computer";
    }
   
}

// function playGame(roundCount) {

//     for (let i = 0; i < roundCount; i++) {
//         let humanChoice = getHumanChoice();
//         let compChoice = getComputerChoice();
//         let winner = playRound(humanChoice, compChoice);
//         if (winner === "player") {
//             humanScore += 1;
//         } else if (winner === "computer") {
//             computerScore += 1;
//         }
//     }
// }

// playGame(5);
// console.log(humanScore);
// console.log(computerScore);

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1,);
}

function updateScore(playerScore, computerScore) {
    const scoreSpan = document.querySelector("#score");
    scoreSpan.textContent = `${playerScore} : ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;
const compHandDiv = document.querySelector(".computer-hand");
const playerHandDiv = document.querySelector(".player-hand");
const finalResultDiv = document.querySelector(".final-result");
const resetBtn = document.querySelector("#reset-btn");
const rpsButtons = Array.from(document.querySelectorAll(".rps"))

function displayHands(playerHand, computerHand) {
    const compMsg = "Computer played ";
    const playerMsg = "Player played ";
    if (!playerHand || !computerHand) {
        playerHandDiv.textContent = "Player Hand";
        compHandDiv.textContent = "Computer Hand"; 
    } else {
        playerHandDiv.textContent = playerMsg + capitalize(playerHand);
        compHandDiv.textContent = compMsg + capitalize(computerHand);
    }
}


function displayWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        finalResultDiv.textContent = "Player won the game!";
    } else {
        finalResultDiv.textContent = "Computer won the game!";
    }
}

function resetGame() {
    resetBtn.classList.remove("hidden");
    rpsButtons.forEach((btn) => btn.disabled = true);
    // game value resets in a diff func (startGame)
}

function startGame() {
    finalResultDiv.textContent = "";
    playerScore = 0;
    computerScore = 0;
    displayHands();
    updateScore(playerScore, computerScore);
    rpsButtons.forEach((btn) => btn.disabled = false);
    resetBtn.classList.add("hidden")

}


function playGame(playerChoice) {
    const compChoice = getComputerChoice();
    displayHands(playerChoice, compChoice);
    const roundWinner = playRound(playerChoice, compChoice);
    
    if (roundWinner === "computer") {
        computerScore += 1;
    } else if (roundWinner === "player") {
        playerScore += 1;
    }

    updateScore(playerScore, computerScore);
    if (playerScore === 5 || computerScore === 5) {
        displayWinner(playerScore, computerScore);
        resetGame();
    }

}


function handleRpsClick(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    playGame(event.target.textContent.toLowerCase());
} 



// listeners
const rpsContainer = document.querySelector(".rps-container");
rpsContainer.addEventListener("click", handleRpsClick);
resetBtn.addEventListener("click", startGame);