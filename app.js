let cpChoice = {}
let cpIcon = {}
/**
 * Sets up the win and lose conditions for the players choices
 */
let choices = {
    rock: {
        wins: ['scissors', 'lizard'], //set condition to make it so if choice.win = cpChoice, then you win
        loses: ['paper', 'spock'], //set condition to make it so if choice.lose = cpChoice, then you lose
        icon: 'mdi mdi-circle'
    },
    paper: {
        wins: ['rock', 'spock'],
        loses: ['scissors', 'lizard'],
        icon: 'mdi mdi-file-outline'
    },
    scissors: {
        wins: ['paper', 'lizard'],
        loses: ['rock', 'spock'],
        icon: 'mdi mdi-content-cut'
    },
    lizard: {
        wins: ['spock', 'paper'],
        loses: ['rock', 'scissors'],
        icon: 'mdi mdi-google-downasaur'
    },
    spock: {
        wins: ['scissors', 'rock'],
        loses: ['paper', 'lizard'],
        icon: 'mdi mdi-hand-right'
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
            cpIcon = 'mdi mdi-circle'
            break;
        case 1:
            cpChoice = 'paper'
            cpIcon = 'mdi mdi-file-outline'
            break;
        case 2:
            cpChoice = 'scissors'
            cpIcon = 'mdi mdi-content-cut'
            break;
        case 3:
            cpChoice = 'spock'
            cpIcon = 'mdi mdi-hand-right'
            break;
        case 4:
            cpChoice = 'snake'
            cpIcon = 'mdi mdi-google-downasaur'
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
    let choice = choices[playerChoice]
    computorsPlay()
    document.getElementById('choice').innerHTML = `<p>You choosed ${playerChoice} <i class="${choice.icon}"></i></p>`
    document.getElementById('cpChoice').innerHTML = `<p>The Computor choose ${cpChoice} <i class="${cpIcon}"></i></p>`

    //#region Does the player win?
    //NOTE use find to search through an array to see if the computors choice is in your choice!
    //let victory = choice.find(Element => Element = cpChoice)
    //console.log('Testing', victory)


    switch (cpChoice) {
        case playerChoice:
            document.getElementById('result').innerHTML = `You Drawed`
            console.log('You Drawed')
            break;
        case choice.wins:
            document.getElementById('result').innerHTML = `You Won`
            console.log('You WIN')
            break;
        default:
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