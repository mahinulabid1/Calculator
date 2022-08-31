// WHAT TO MAINTAIN
// 1) ABSTRACTION
// 2) USE OF CLASS
// DISPLAY REST CALCULATIONS HISTORY

// DOM SELECTOR
const NumberBtn = document.querySelectorAll(".number-input");
const Display = document.querySelector(".display-section");
const resetBtn = document.querySelector(".button-reset");
const OperatorBtn = document.querySelectorAll(".op-btn");
const plusSign = document.querySelector(".plus-sign");
const minusSign = document.querySelector(".minus-sign");
const intoSign = document.querySelector(".into-sign");
const divideSign = document.querySelector('.divide-sign');
const equalSign = document.querySelector(".equal-sign");



let inputAr = [];
let historyAr = [];
let opSignAr = [];
let NumberAr = [];

console.info(NumberAr.length)

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

    resetInputArray = () => {
        inputAr = [];
    }

    callAll = () => {
        console.info("reset is working");
        resetBtn.addEventListener("click", () => {
            this.resetDisplay();
            this.resetInputArray();
        });
    }
}


class Processing {
    constructor(opBtn, display) {
        this.opBtn = opBtn;
        this.display = display;
    }

    ProcessingNumber() { //name should be storing information
        for (let i = 0; i < this.opBtn.length; i++) {
            let btn = this.opBtn[i];
            btn.addEventListener('click', (event) => {
                let Number = inputAr.join("");
                Number = parseFloat(Number);
                NumberAr.push(Number);


                if (event.target.classList.contains("plus-sign")) {
                    opSignAr.push("+");
                } else if (event.target.classList.contains("minus-sign")) {
                    opSignAr.push("-");
                }
                else if (event.target.classList.contains("into-sign")) {
                    opSignAr.push("*");
                }
                else if (event.target.classList.contains("divide-sign")) {
                    opSignAr.push("/");
                }
                let resetAr = new Reset(Display);
                resetAr.resetDisplay();
                resetAr.resetInputArray();

            });

        }

    }


    EqualProcess = () => {
        equalSign.addEventListener("click", () => {
            if(inputAr.length == 0){
                return; //error handling
            }

            let number = inputAr.join('');
            number = parseFloat(number);
            NumberAr.push(number);
        });
    }


    Computation = () => {
        let junk = () => {
            if (opSignAr[0] == "+") {
                console.info("this is a plus operation");
                // let result = 
            } else if (opSignAr[0] == "-") {
                console.info("this is a minus operation");
            } else if (opSignAr[0] == "*") {
                console.info("this is a into operation");
            } else if (opSignAr[0] == "/") {
                console.info("this is a divide operation");
            }
        }

        equalSign.addEventListener("click", () => {
            //VALIDATION
            if (NumberAr.length == 1) {
                // do something
                this.display.textContent = NumberAr[0];
            } else if (NumberAr.length == 0) {
                this.display.textContent = "0";
            }

            // computation
            // for loop to go throuh an array

        });
    }





}
























let testDisplay = new DisplayNumber(inputAr, NumberBtn);
testDisplay.callAll();

// let testReset = new Reset(Display);
// testReset.callAll();

let testProcessing = new Processing(OperatorBtn, Display);
testProcessing.ProcessingNumber();
testProcessing.EqualProcess();
testProcessing.Computation();