// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
// Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.


function getComputerChoice () {
    let RandomVar = Math.random()*100;
    if (RandomVar <= 33) return "rock";
    else if (RandomVar > 33 && RandomVar <= 66) return "paper";
    else return "scissors";
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

function getHumanChoice () {
  do {
            let humanInput = prompt("Pick one: rock, paper or scissors!");
            let lowerCaseHumanInput = humanInput.toLowerCase();
            if (lowerCaseHumanInput === "rock" || lowerCaseHumanInput === "scissors" || lowerCaseHumanInput === "paper")
                return lowerCaseHumanInput;
        }
        while (true);

}



// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.



// Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. 
// You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            humanScore++;
            computerScore++;
            console.log("It's a DRAW!");
        } 
        else if (humanChoice === "scissors" && computerChoice === "paper" ||
                 humanChoice === "paper"    && computerChoice === "rock" ||
                 humanChoice === "rock"     && computerChoice === "scissors") {
                    humanScore++;
                    console.log("You win! " + humanChoice.charAt(0).toUpperCase() +humanChoice.slice(1) + " beats " + computerChoice + "!");
                 } 
                 else {
                    computerScore++;
                    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() +computerChoice.slice(1) + " beats " + humanChoice + "!");
                }
                
    }

    for (i = 0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) {
        console.log("The game ends with a DRAW!");
    } else if (humanScore > computerScore) {
        console.log("You win! You beat Computer for " + humanScore + " to " + computerScore + "!");
    } else console.log("You lose! Computer beats you for " + computerScore + " to " + humanScore + "!");
}

playGame();