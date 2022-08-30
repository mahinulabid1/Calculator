// WHAT TO MAINTAIN
// 1) ABSTRACTION
// 2) USE OF CLASS


// DOM SELECTOR
const NumberBtn = document.querySelectorAll(".number-input");
const Display = document.querySelector(".display-section");



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
}


class Reset{
    constructor(DisplayReset){
        this.displayReset = DisplayReset;
    }

    resetDisplay = ()=>{
        this.displayReset.textContent = 0;
    }
}





























let DisplayNumber = new DisplayNumber(inputAr, NumberBtn);
DisplayNumber.displayNumber();

let testReset = new Reset();
