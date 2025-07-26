// Computer will return "rock", "paper", "scissors"
function getComputerChoice() {
    let computerPlays = Math.floor(Math.random() * 3); // Return 3 random numbers    
    // Assign "rock", "paper", or "scissors"
    if (computerPlays == 0) {  // If 0 assign "rock"
        return "rock";
    } else if (computerPlays == 1) { // If 1 assign "paper"
        return "paper";
    } else { // If 2 assign "scissors"
        return "scissors";
    }
}

// Prompt user for choice
function getHumanChoice() {
    let humanPlays = prompt("Choose rock, paper, or scissors.");
    return humanPlays.toLowerCase();
}

// Create two variables to track human and computer scores
let humanScore = 0;
let computerScore = 0;

// Track scores for each round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!");
        ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors!");
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer wins! Scissors beats paper!");
        ++computerScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!");
        ++humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer wins! Scissors beats rock!");
        ++computerScore;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
    // Take human and computer choice as arguments
    // Increment round winner's score
    // Return winner announcement