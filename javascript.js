function getComputerChoice() {
    const computerPlays = Math.floor(Math.random() * 3);     
    if (computerPlays == 0) { 
        return "rock";
    } else if (computerPlays == 1) { 
        return "paper";
    } else { 
        return "scissors";
    }
}

const playerBtns = document.querySelectorAll("button");

playerBtns.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.className;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

document.addEventListener("click", e => {
    if (e.target.matches(".rock")) {
        console.log("rock");
    } else if (e.target.matches(".paper")) {
        console.log("paper");
    } else if (e.target.matches(".scissors")) {
        console.log("scissors");
    }
});

let humanScore = 0;
let computerScore = 0;

// function playGame() {

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
    };

    const humanSelection = document.querySelectorAll("button");
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    console.log("Current score:", "You:", humanScore, "Computer:", computerScore);
// }

// for (i = 0; i < 5; i++) {
// playGame();
// }

    

    
