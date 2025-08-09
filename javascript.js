function getComputerChoice() {
    const computerPlays = Math.floor(Math.random() * 3);     
    if (computerPlays == 0) { 
        return "rock";
    } else if (computerPlays == 1) { 
        return "paper";
    } else { 
        return "scissors";
    };
};

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

function resetGame() {
    let humanScore = 0;
    let computerScore = 0;
    document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
    document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
    document.querySelector(".human-display").textContent = "🙂";
    document.querySelector(".computer-display").textContent = "🤖";
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        document.querySelector(".scoreboard-header").textContent = "You lose! Paper beats rock!";
        ++computerScore;
        document.querySelector(".human-display").textContent = "🪨";
        document.querySelector(".computer-display").textContent = "📄";
        document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        document.querySelector(".scoreboard-header").textContent = "You win! Rock beats scissors!";
        ++humanScore;
        document.querySelector(".human-display").textContent = "🪨";
        document.querySelector(".computer-display").textContent = "✂️";            
        document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        document.querySelector(".scoreboard-header").textContent = "You win! Paper beats rock!";
        ++humanScore;
        document.querySelector(".human-display").textContent = "📄";
        document.querySelector(".computer-display").textContent = "🪨";
        document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        document.querySelector(".scoreboard-header").textContent = "You lose! Scissors beats paper!";
        ++computerScore;
        document.querySelector(".human-display").textContent = "📄";
        document.querySelector(".computer-display").textContent = "✂️";
        document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        document.querySelector(".scoreboard-header").textContent = "You win! Scissors beats paper!";
        ++humanScore;
        document.querySelector(".human-display").textContent = "✂️";
        document.querySelector(".computer-display").textContent = "📄";
        document.querySelector(".human-score").textContent = `Your score: ${humanScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        document.querySelector(".scoreboard-header").textContent = "You lose! Rock beats scissors!";
        ++computerScore;
        document.querySelector(".human-display").textContent = "✂️";
        document.querySelector(".computer-display").textContent = "🪨";
        document.querySelector(".computer-score").textContent = `Computer score: ${computerScore}`;
    } else if (humanChoice === computerChoice) {
            if (humanChoice == "rock") {
                document.querySelector(".human-display").textContent = "🪨";
                document.querySelector(".computer-display").textContent = "🪨";
            } else if (humanChoice == "paper") {
                document.querySelector(".human-display").textContent = "📄";
                document.querySelector(".computer-display").textContent = "📄";
            } else {
                document.querySelector(".human-display").textContent = "✂️";
                document.querySelector(".computer-display").textContent = "✂️";
            }
        document.querySelector(".scoreboard-header").textContent = "It's a tie!";
    };

    if (humanScore === 5) {
        gameWinner = alert("You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        gameWinner = alert("Computer won the game. Better luck next time!");
        resetGame;
    };
};
playRound(humanSelection, computerSelection);