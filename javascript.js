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

const humanSelection = document.querySelectorAll("button");
const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

// function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            document.querySelector(".scoreboard-header").textContent = "You lose! Paper beats rock!";
            ++computerScore;
            document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            document.querySelector(".scoreboard-header").textContent = "You win! Rock beats scissors!";
            ++humanScore;
            document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            document.querySelector(".scoreboard-header").textContent = "You win! Paper beats rock!";
            ++humanScore;
            document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            document.querySelector(".scoreboard-header").textContent = "You lose! Scissors beats paper!";
            ++computerScore;
            document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            document.querySelector(".scoreboard-header").textContent = "You win! Scissors beats paper!";
            ++humanScore;
            document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            document.querySelector(".scoreboard-header").textContent = "You lose! Rock beats scissors!";
            ++computerScore;
            document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === computerChoice) {
            document.querySelector(".scoreboard-header").textContent = "It's a tie!";
        }
    };
    
    playRound(humanSelection, computerSelection);

// }

// for (i = 0; i < 5; i++) {
// playGame();
// }