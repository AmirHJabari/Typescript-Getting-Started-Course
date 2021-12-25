/// <reference path="result.ts" />
class Scoreboard {
    private _result: Result[] = [];
    
    addResult(newResult: Result): void {
        this._result.push(newResult)
    }

    updateScoreboard(): void {
        let output = '<h2>Scoreboard</h2>';
        for (const result of this._result) {
            output += `<h4>
            ${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}
            </h4>`;
        }
        document.getElementById('scores')!.innerHTML = output;
    }
}