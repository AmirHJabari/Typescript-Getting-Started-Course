import * as Utilities from "./utility";
import { Game } from "./game";
import Player from "./player";
import { Scoreboard } from "./scoreboard";

let scoreboard: Scoreboard = new Scoreboard();
let newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = Utilities.getValue('playername');

    const problemCount: number = Number(Utilities.getValue('problemCount'));
    const factor: number = Number(Utilities.getValue('factor'));

    newGame = new Game(player, problemCount, factor, scoreboard);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => newGame.calculateScore());