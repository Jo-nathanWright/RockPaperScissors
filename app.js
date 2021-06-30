
function play(playerChoice) {
    let cpChoice = 'scissors'

    if (cpChoice == playerChoice) {
        console.log('Draw')
    } else if (playerChoice == 'rock') {
        if (cpChoice == 'scissors') {
            console.log('WIN')
        } else if (cpChoice == 'paper') {
            console.log('LOSE')
        }
    } else if (playerChoice == 'paper') {
        if (cpChoice == 'rock') {
            console.log('WIN')
        } else if (cpChoice == 'scissors') {
            console.log('LOSE')
        }
    } else if (playerChoice == 'scissors') {
        if (cpChoice == 'paper') {
            console.log('WIN')
        } else if (cpChoice == 'rock') {
            console.log('LOSE')
        }
    }
}

function computorChoice() {

}