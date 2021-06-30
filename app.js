let cpChoice = {}
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

/**
 * Randomizes the computors move.
 */
function computorsPlay() {
    let options = Object.keys(choices)
    let computorChoice = Math.floor(Math.random() * (options.length))
    switch (computorChoice) {
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
}

/**
 * Sets up the buttons and their base functionality in HTML
 */
function drawButtons() {
    let template = ''
    for (let prop in choices) {
        let choice = choices[prop]
        template += `<button class="btn btn-outline-danger mx-1" onclick="play('${prop}')">${prop}</button>`
    }
    document.getElementById('buttons').innerHTML = template
}

/**
 * Sets up the player and the players win/lose conditions
 * @param {string} playerChoice 
 */
function play(playerChoice) {
    computorsPlay()
    document.getElementById('choice').innerHTML = `You choosed ${playerChoice}`
    document.getElementById('cpChoice').innerHTML = `The Computor choose ${cpChoice}`

    //#region Does the player win?
    let choice = choices[playerChoice]
    switch (cpChoice) {
        case playerChoice:
            document.getElementById('result').innerHTML = `You Drawed`
            console.log('You Drawed')
            break;
        case choice.wins:
            document.getElementById('result').innerHTML = `You Won`
            console.log('You WIN')
            break;
        case choice.loses:
            document.getElementById('result').innerHTML = `You Lost`
            console.log('You LOST')
            break;
    }
    //#endregion

    //#region Second Rendition
    // if (cpChoice == playerChoice) {
    //     console.log('DRAW')
    // } else if (choice.wins == cpChoice) {
    //     console.log('WIN')
    // } else if (choice.loses == cpChoice) {
    //     console.log('LOSE')
    // }
    //#endregion

    //#region First Rendition
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
    //#endregion
}

drawButtons();