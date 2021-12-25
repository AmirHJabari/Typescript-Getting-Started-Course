import { Result } from "./result";
import Player from "./player";
import { Scoreboard } from "./scoreboard";

export class Game {
    constructor(public player: Player,
        public problemCount: number,
        public factor: number,
        private _scoreboard: Scoreboard = new Scoreboard()) {
    }

    displayGame(): void {
        // create the html for the current game
        let gameBoard = '';

        for (let i = 1; i <= this.problemCount; i++) {
            gameBoard += `
            <div class="form-group">
                <label for="answer${i}" class="col-sm-2 control-label">
                    ${this.factor} x ${i} = 
                </label>
                <div class="col-sm-1"><input type="text" class="form-control" id="answer${i}" size="5" /></div>
            </div>`;
        }

        // add the new game to the page
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameBoard;

        // enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        // loop through the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            const answerElm = document.getElementById(`answer${i}`)! as HTMLInputElement;
            const answer: number = Number(answerElm.value);

            if (i * this.factor === answer) 
            {
                score++;
            }
            else
            {
                answerElm.style.boxShadow = 'inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px red';
                answerElm.style.backgroundColor = 'red';
            }
            answerElm.setAttribute('readonly', 'true');
        }

        // create a new result object to pass to the scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        // add the result and update the scoreboard
        this._scoreboard.addResult(result);
        this._scoreboard.updateScoreboard();

        // disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}