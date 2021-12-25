class Utility {
    static getInputValue(id: string): string {
        const inputElemnt: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
        return inputElemnt.value;
    }
}