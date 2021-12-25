function startGame() {
    // Start the game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName)

    let messagesElement = document.getElementById('messages')
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'

    postScore(100, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(id: string): string | undefined {
    const inputElemnt: HTMLInputElement = document.getElementById(id) as HTMLInputElement;

    if (inputElemnt == undefined || inputElemnt.value === '')
        return undefined;
    else
        return inputElemnt.value;
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    const scoreElement = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame)