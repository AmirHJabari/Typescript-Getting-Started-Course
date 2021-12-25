export {getInputValue as getValue, logger}

function getInputValue(id: string): string {
    const inputElemnt: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    return inputElemnt.value;
}

function logger(message: string): void {
    console.log(message);
}