function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']

    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            playerSelection = 'Rock'
            switch (computerSelection) {
                case 'Rock':
                    return 'Tie!'
                    break
                case 'Paper':
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                    break
                case 'Scissors':
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                    break
            }
            break
        case 'paper':
            playerSelection = 'Paper'
            switch (computerSelection) {
                case 'Rock':
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                    break
                case 'Paper':
                    return 'Tie!'
                    break
                case 'Scissors':
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                    break
            }
            break
        case 'scissors':
            playerSelection = 'scissors'
            switch (computerSelection) {
                case 'Rock':
                    return `You Lose! ${computerSelection} beats ${playerSelection}`
                    break
                case 'Paper':
                    return `You Win! ${playerSelection} beats ${computerSelection}`
                    break
                case 'Scissors':
                    return 'Tie!'
                    break
            }
            break
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let roundsLeft = 5

    while (roundsLeft > 0) {
        const playerSelection = prompt('Your choice:')
        const computerSelection = getComputerChoice()

        const result = playRound(playerSelection, computerSelection)

        if (result.substring(0, 7) === 'You Win') {
            playerScore++
        } else if (result.substring(0, 8) === 'You Lose') {
            computerScore++
        }

        console.log(result)

        if (result !== 'Tie!') {
            roundsLeft--
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player Wins! (${playerScore} - ${computerScore})`)
    } else {
        console.log(`Computer Wins! (${computerScore} - ${playerScore})`)
    }
}

game()
