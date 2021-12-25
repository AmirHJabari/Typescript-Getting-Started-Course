function startGame() {
    // Start the game
    let playerName: string = 'Amir';
    logPlayer(playerName)

    let messagesElement = document.getElementById('messages')
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame)