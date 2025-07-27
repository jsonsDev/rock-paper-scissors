// Computer will return "rock", "paper", "scissors"
function getComputerChoice() {
    const computerPlays = Math.floor(Math.random() * 3); // Return 3 random numbers    
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
    const humanPlays = prompt("Choose rock, paper, or scissors.");
    return humanPlays.toLowerCase();
}

// Track scores for each round
    let humanScore = 0;
    let computerScore = 0;

// Create function to play 5 rounds
function playGame() {

    // Create function to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            return computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors!");
            return humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock!");
            return humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Computer wins! Scissors beats paper!");
            return computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            return humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("Computer wins! Rock beats scissors!");
            return computerScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    console.log("Current score:", "You:", humanScore, "Computer:", computerScore);
}

// Play 5 rounds by calling playRound 5 times
for (i = 0; i < 5; i++) {
playGame();
}

    

    
