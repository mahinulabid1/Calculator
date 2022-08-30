// WHAT TO MAINTAIN
// 1) ABSTRACTION
// 2) USE OF CLASS
// DISPLAY REST CALCULATIONS HISTORY

// DOM SELECTOR
const NumberBtn = document.querySelectorAll(".number-input");
const Display = document.querySelector(".display-section");
const resetBtn = document.querySelector(".button-reset");
const OperatorBtn = document.querySelectorAll("")



let inputAr = [];

// number input
class DisplayNumber {
    constructor(inputArray, numberInput) {
        this.inputArray = inputArray;
        this.NumberInput = numberInput;
    }

    displayNumber = () => {
        for (let i = 0; i < this.NumberInput.length; i++) {
            let Btn = this.NumberInput[i];
            Btn.addEventListener("click", (event) => {
                inputAr.push(event.target.textContent);
                Display.textContent = inputAr.join("");
            });
        }
    }
    callAll = () => {
        this.displayNumber();
    }
}


class Reset {
    constructor(DisplayReset) {
        this.displayReset = DisplayReset;
    }

    resetDisplay = () => {
        this.displayReset.textContent = 0;
    }

    resetArray = () => {
        inputAr = [];
    }

    callAll = () => {
        resetBtn.addEventListener("click", () => {
            this.resetDisplay();
            this.resetArray();
        });
    }
}





























let testDisplay = new DisplayNumber(inputAr, NumberBtn);
testDisplay.callAll();

let testReset = new Reset(Display);
testReset.callAll();
