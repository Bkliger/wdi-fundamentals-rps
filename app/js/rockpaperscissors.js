////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
   // console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
    };
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
}

var playerTotal = 0;
var computerTotal = 0;
var playerWins = 0;
var computerWins = 0;
console.log('Let\'s play Rock Paper Scissors');
while (playerTotal != 5 && computerTotal != 5) {
    var playerMove = getInput();
    var computerMove = randomPlay();
    playGame(playerMove,computerMove);
    playerTotal = playerTotal + playerWins;
    computerTotal = computerTotal + computerWins;
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerTotal + ' to ' + computerTotal + '\n');    
    
}

function playGame(playerMove,computerMove) {
    playerWins = 0;
    computerWins = 0;
    switch (playerMove) {
        case "rock":
         if (computerMove === "rock") {
        }
        else if (computerMove === "scissors") {
            playerWins += 1;
        }
        else {
            computerWins += 1;
        }
        break;
    
        case "paper":
         if (computerMove === "rock") {
            playerWins += 1;
        }
        else if (computerMove === "scissors") {
            computerWins += 1;
        }
        break;
        
        case "scissors":
         if (computerMove === "rock") {
            computerWins += 1;
        }
        else if (computerMove === "paper") {
            playerWins += 1;
        }

        break;
    }

    
  return [playerWins, computerWins];
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


