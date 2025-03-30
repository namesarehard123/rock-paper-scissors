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
    let userChoice = prompt("Rock, Paper or Scissor?");
    return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

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

function playGame(roundCount) {

    for (let i = 0; i < roundCount; i++) {
        let userChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        let winner = playRound(userChoice, compChoice);
        if (winner === "player") {
            humanScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        }
    }
}

playGame(5);
console.log(humanScore);
console.log(computerScore);

