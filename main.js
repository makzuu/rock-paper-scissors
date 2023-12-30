function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']

    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'Rock':
            switch (computerSelection) {
                case 'Rock':
                    return TIE
                    break
                case 'Paper':
                    return COMPUTER_ROUND
                    break
                case 'Scissors':
                    return PLAYER_ROUND
                    break
            }
            break
        case 'Paper':
            switch (computerSelection) {
                case 'Rock':
                    return PLAYER_ROUND
                    break
                case 'Paper':
                    return TIE
                    break
                case 'Scissors':
                    return COMPUTER_ROUND
                    break
            }
            break
        case 'Scissors':
            switch (computerSelection) {
                case 'Rock':
                    return COMPUTER_ROUND
                    break
                case 'Paper':
                    return PLAYER_ROUND
                    break
                case 'Scissors':
                    return TIE
                    break
            }
            break
    }
}

const PLAYER_ROUND = 0
const COMPUTER_ROUND = 1
const TIE = 2

const buttons = document.querySelector("#buttons");
const resultDisplay = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (event) => {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);
    switch (roundResult) {
        case PLAYER_ROUND:
            resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            if (playerScore === 5) {
                playerScore = 0;
                computerScore = 0;
                resultDisplay.textContent = "Player wins! press any button to play again...";
            }
            break;

        case COMPUTER_ROUND:
            resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
            if (computerScore === 5) {
                playerScore = 0;
                computerScore = 0;
                resultDisplay.textContent = "Computer wins! press any button to play again...";
            }
            break;

        case TIE:
            resultDisplay.textContent = "Tie";
            break;
    }
    scoreDisplay.textContent = `player: ${playerScore} - computer: ${computerScore}`;
});
