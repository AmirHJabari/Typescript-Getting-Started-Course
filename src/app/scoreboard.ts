import { Result } from "./result";
import * as _ from "lodash";

export class Scoreboard {
    private _result: Result[] = [];
    
    addResult(newResult: Result): void {
        this._result.push(newResult)
        let allCapsName: string = _.upperCase(newResult.playerName);
        console.log(`${allCapsName}: ${newResult.score}`);
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