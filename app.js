/**
 * Sets up the win and lose conditions for the players choices
 */

let choices = {
    rock: {
        wins: 'scissors', //set condition to make it so if choice.win = cpChoice, then you win
        loses: 'paper' //set condition to make it so if choice.lose = cpChoice, then you lose
    },
    paper: {
        wins: 'rock',
        loses: 'scissors'
    },
    scissors: {
        wins: 'paper',
        loses: 'rock'
    }
}

function play(playerChoice) {
    let choice = choices[playerChoice]
    let random = Object.keys(choices)
    let cpc = Math.floor(Math.random() * (random.length))
    let cpChoice = ''

    switch (cpc) {
        case 0:
            cpChoice = 'rock'
            break;
        case 1:
            cpChoice = 'paper'
            break;
        case 2:
            cpChoice = 'scissors'
            break;
    }

    console.log("The computor choose ", cpChoice)

    switch (cpChoice) {
        case playerChoice:
            console.log('You Drawed')
            break;
        case choice.wins:
            console.log('You WIN')
            break;
        case choice.loses:
            console.log('You LOST')
            break;
    }

    // NOTE Second rendition
    // if (cpChoice == playerChoice) {
    //     console.log('DRAW')
    // } else if (choice.wins == cpChoice) {
    //     console.log('WIN')
    // } else if (choice.loses == cpChoice) {
    //     console.log('LOSE')
    // }

    //NOTE Fisrt rendition
    // if (playerChoice == cpChoice){
    //     console.log('DRAW')
    // } else if (playerChoice == 'rock') {
    //     if (cpChoice == 'scissors') {
    //         console.log('WIN')
    //     } else if (cpChoice == 'paper') {
    //         console.log('LOSE')
    //     }
    // } else if (playerChoice == 'paper') {
    //     if (cpChoice == 'rock') {
    //         console.log('WIN')
    //     } else if (cpChoice == 'scissors') {
    //         console.log('LOSE')
    //     }
    // } else if (playerChoice == 'scissors') {
    //     if (cpChoice == 'paper') {
    //         console.log('WIN')
    //     } else if (cpChoice == 'rock') {
    //         console.log('LOSE')
    //     }
    // }
}
