function startGame() {
    // Start the game
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName)

    let messagesElement = document.getElementById('messages')
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...'

    postScore(100, playerName);
    postScore(0, playerName);
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
    let logger: (value: string) => void;
    if (score > 0)
        logger = logMessage;
    else
        logger = logError;

    const scoreElement = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    logger(`Score ${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

document.getElementById('startGame')!.addEventListener('click', startGame)