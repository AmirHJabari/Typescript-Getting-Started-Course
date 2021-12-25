/// <reference path="player.ts" />
/// <reference path="game.ts" />
/// <reference path="scoreboard.ts" />

let scoreboard: Scoreboard = new Scoreboard();
let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor, scoreboard);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => newGame.calculateScore());