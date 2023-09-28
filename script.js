const Player = (name, mark) => {
    return {
        name, mark
    }
}

const spots = [
    document.getElementById('spot-1'),
    document.getElementById('spot-2'),
    document.getElementById('spot-3'),
    document.getElementById('spot-4'),
    document.getElementById('spot-5'),
    document.getElementById('spot-6'),
    document.getElementById('spot-7'),
    document.getElementById('spot-8'),
    document.getElementById('spot-9')
]


const winningAxis = [
    [document.getElementById('spot-1'), document.getElementById('spot-2'), document.getElementById('spot-3')],
    [document.getElementById('spot-4'), document.getElementById('spot-5'), document.getElementById('spot-6')],
    [document.getElementById('spot-7'), document.getElementById('spot-8'),document.getElementById('spot-9')],
    [document.getElementById('spot-1'), document.getElementById('spot-4'),document.getElementById('spot-7') ],
    [document.getElementById('spot-2'), document.getElementById('spot-5'), document.getElementById('spot-8') ],
    [document.getElementById('spot-3'), document.getElementById('spot-6'), document.getElementById('spot-9')],
    [document.getElementById('spot-1'), document.getElementById('spot-5'), document.getElementById('spot-9') ],
    [document.getElementById('spot-3'), document.getElementById('spot-5'), document.getElementById('spot-7')],
    
]

const getName = (player) => {
    let name = ''
    do {
        name = prompt(`Player ${player} name?`)
    }
    while(name == '')
    return name;
}

const playerOne = Player(getName('One'), 'O')
const playerTwo = Player(getName('Two'), 'X')
let round = 0;
let turn = playerOne
let result = document.getElementById('result');
let turnText = document.getElementById('turn')
turnText.textContent = `Turn: ${playerOne.name}`




const checkWinner = (player)=> {
    for(let i = 0; i < winningAxis.length; i++) {
        let count = 0
       for(let j = 0; j < winningAxis[i].length; j++) {
            if(winningAxis[i][j].textContent == player.mark) {
                count++;
            }
       }
       if(count == 3) {
            return true;
       }
    }
    return false;
}

const placeMarker = (spot) => {
    if(turn == playerOne && spot.textContent == '') {
        spot.textContent = playerOne.mark
        turn = playerTwo
        turnText.textContent =`Turn: ${playerTwo.name}`
        round++
    }
    else if(turn == playerTwo && spot.textContent == '') {
        spot.textContent = playerTwo.mark
        turn = playerOne
        turnText.textContent = `Turn: ${playerOne.name}`
        round++
    }
}



spots.forEach(spot=> {
    spot.addEventListener('click', ()=> {
        if(round < 10 && !checkWinner(playerOne) && !checkWinner(playerTwo)) {
            placeMarker(spot)
            
            if(checkWinner(playerOne)) {
                turnText.style.color = 'black'
                result.textContent = `${playerOne.name} wins!`
    
            }
            else if(checkWinner(playerTwo)) {
                turnText.stylecolor = 'black' 
                result.textContent = `${playerTwo.name} wins!`
            }
        }
        else if(round == 9 ){
            result.textContent = 'Tie!'
        }
    })
})


