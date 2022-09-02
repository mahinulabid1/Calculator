// ISSUES: EQUAL DOES NOT RESET THE ARRAY
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
const storeInfo = document.querySelectorAll('.js-store-info');



let inputAr = [];
let historyAr = [];
let opSignAr = [];
let NumberAr = [];


// number input
class DisplayNumber {
    constructor(inputArray) {
        // this.inputArray = inputArray;
    }
    displayNumber = (eventTarget) => {
        inputAr.push(eventTarget.textContent);
        Display.textContent = inputAr.join("");
    }
}

class Processing {
    constructor(opBtn, display) {
        this.opBtn = opBtn;
        this.display = display;
        // this.result = null;
    }

    StoringOperator(eventTarget) { //name should be storing information
        // for (let i = 0; i < this.opBtn.length; i++) {
        //     let btn = this.opBtn[i];
        //     btn.addEventListener('click', (event) => { //OPERATION BUTTON


        if (eventTarget.classList.contains("plus-sign")) {
            opSignAr.push("+");
        } else if (eventTarget.classList.contains("minus-sign")) {
            opSignAr.push("-");
        }
        else if (eventTarget.classList.contains("into-sign")) {
            opSignAr.push("*");
        }
        else if (eventTarget.classList.contains("divide-sign")) {
            opSignAr.push("/");
        }

        // RESET SECTION
        // let resetAr = new Reset(Display);
        // resetAr.resetDisplay();
        // resetAr.resetInputArray();
        // });
        // }
    }

    StoreNumberData = () => {
        let Number = inputAr.join("");
        Number = parseFloat(Number);
        NumberAr.push(Number);
    }

    StoreNumberDataInEqual = () => {
        // equalSign.addEventListener("click", () => {
        if (inputAr.length == 0) {
            return; //error handling
        }
        // let number = inputAr.join('');
        // number = parseFloat(number);
        // NumberAr.push(number);
        this.StoreNumberData();
        // });
    }


    Computation = () => {
        // equalSign.addEventListener("click", () => {
        let ShowResult = (result, firstNumber, opSign, SecondNumber) => {
            Display.textContent = result;
            console.info(`Operation Status: ${firstNumber} ${opSign} ${SecondNumber}`);
            // StorageReset.resetStorage();
        }

        //VALIDATION
        if (NumberAr.length == 1) {
            this.display.textContent = NumberAr[0];
        } else if (NumberAr.length == 0) {
            this.display.textContent = "0";
        }

        //COMPUTING
        for (let i = 0; i < NumberAr.length; i++) {
            if (opSignAr[i] == "+") {
                if (this.result == null) {
                    this.result = NumberAr[i] + NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                } else {
                    this.result = this.result + NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                }
            } else if (opSignAr[i] == "-") {
                if (this.result == null) {
                    this.result = NumberAr[i] - NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                } else {
                    this.result = this.result - NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                }
            } else if (opSignAr[i] == "*") {

                if (this.result == null) {
                    this.result = NumberAr[i] * NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                } else {
                    this.result = this.result * NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                }
            } else if (opSignAr[i] == "/") {

                if (this.result == null) {
                    this.result = NumberAr[i] / NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                } else {
                    this.result = this.result / NumberAr[i + 1];
                    ShowResult(this.result, NumberAr[i], opSignAr[i], NumberAr[i + 1]);
                }
            }
        }
        // });
    }
}


class History {
    constructor() {
        this.x = [];
    }
    storeHistory = () => {

        for (let i = 0; i < NumberAr.length; i++) {
            this.x.push(NumberAr[i]);
            if (opSignAr[i] != null || opSignAr[i] != undefined) {
                this.x.push(opSignAr[i]);
            }
        }
    }
    getHistory = () => {
        let resetStorage = new Reset(); //RESET
        equalSign.addEventListener("click", () => {
            this.storeHistory();
            console.info(this.x);
            historyAr.push(this.x.join(""));
            console.log(historyAr);
            resetStorage.resetStorage(); //RESET
        });
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
        console.info("Info: Reset Input Array")
        inputAr = [];
    }

    resetStorage = () => {
        opSignAr = [];
        NumberAr = [];
    }

    callAll = () => {
        console.info("reset is working");
        resetBtn.addEventListener("click", () => {
            this.resetDisplay();
            this.resetInputArray();
        });
    }
}

















//==========================================================
// RUN APPLICATION

// let testDisplay = new DisplayNumber(inputAr, NumberBtn);
// testDisplay.callAll();

// let testReset = new Reset(Display);
// testReset.callAll();

// let testProcessing = new Processing(OperatorBtn, Display);
// testProcessing.StoringOperator();
// // testProcessing.StoreNumberInfo();
// testProcessing.Computation();



// let testHistory = new History();
// // testHistory.storeHistory();

// testHistory.getHistory();



// RUN NUMBER INPUT
let testDisplay = new DisplayNumber(Display);
for (let i = 0; i < NumberBtn.length; i++) {
    let Btn = NumberBtn[i];
    Btn.addEventListener("click", (event) => {
        console.info("status: Button Operation Clicked");
        testDisplay.displayNumber(event.target);
    });
}


let testProcessing = new Processing();
// OPERATOR BUTTON CLICK EVENT
for (let i = 0; i < OperatorBtn.length; i++) {
    let btn = OperatorBtn[i];
    btn.addEventListener("click", (event) => {
        testProcessing.StoringOperator(event.target);
        testProcessing.StoreNumberData();
    });
}


// EQUAL BUTTON CLICK
for(let i = 0; i<equalSign.length; i++){
    let btn = equalSign[i];
    btn.addEventListener("click", ()=>{
        console.info("Status: Equal Button clicked");
    });
}