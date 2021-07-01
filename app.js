let cpChoice = {}
let cpIcon = {}
/**
 * Sets up the win conditions for the players choices as well as the custom icon for their move
 */
let choices = {
    rock: {
        wins: ['scissors', 'lizard'], //set condition to make it so if choice.win = cpChoice, then you win
        icon: 'mdi mdi-circle' //sets icon for the choice the player makes
    },
    paper: {
        wins: ['rock', 'spock'],
        icon: 'mdi mdi-file-outline'
    },
    scissors: {
        wins: ['paper', 'lizard'],
        icon: 'mdi mdi-content-cut'
    },
    lizard: {
        wins: ['spock', 'paper'],
        icon: 'mdi mdi-google-downasaur'
    },
    spock: {
        wins: ['scissors', 'rock'],
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
            cpChoice = 'lizard'
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

    //#region Compairs the Computors choice to the values of the players win conditions
    console.log('Will win against ', choice.wins)
    console.log('The Computer Choose - ', cpChoice)
    let ifFound = choice.wins.find(Element => Element == cpChoice)
    //#endregion

    //#region Sets up the logic for if you win or not
    switch (cpChoice) {
        case playerChoice:
            document.getElementById('result').innerHTML = `You Drawed`
            console.log('You Drawed')
            break;
        case ifFound:
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