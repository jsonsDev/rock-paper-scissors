// Computer will return "rock", "paper", "scissors"

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); // Return 3 random numbers    
    // Assign "rock", "paper", or "scissors"
    if (computerChoice == 0) {  // If 0 assign "rock"
        return "Rock";
    } else if (computerChoice == 1) { // If 1 assign "paper"
        return "Paper";
    } else { // If 2 assign "scissors"
        return "Scissors";
    }
}
   
// Prompt user for choice 
// Create two variables to track human and computer scores
// Track scores for each round
    // Take human and computer choice as arguments
    // Increment round winner's score
    // Return winner announcement