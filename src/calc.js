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
        this.result = null;
    }

    StoringOperator(eventTarget) { //name should be storing information
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
    }

    StoreNumberData = () => {
        let Number = inputAr.join("");
        Number = parseFloat(Number);
        NumberAr.push(Number);
    }

    StoreNumberDataInEqual = () => {
        if (inputAr.length == 0) {
            return; //error handling
        }
        this.StoreNumberData();
    }


    Computation = () => {
        console.log("starting computation");
        let ShowResult = (result, firstNumber, opSign, SecondNumber) => {
            Display.textContent = result;
            console.info(`Operation Status: ${firstNumber} ${opSign} ${SecondNumber} ${result}`);
        }

        //VALIDATION
        if (NumberAr.length == 1) {
            this.display.textContent = NumberAr[0];
            return;
        } else if (NumberAr.length == 0) {
            this.display.textContent = "0";
            return;
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





class Reset {
    constructor(DisplayReset) {
        this.displayReset = DisplayReset;
    }

    resetDisplay = () => {
        this.displayReset.textContent = 0;
    }

    ReadyToTakeNextNumber = () => {
        this.displayReset.textContent = ">>";
    }

    resetInputArray = () => {
        console.info("Info: Reset Input Array");
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















//==========================================================
// RUN APPLICATION
// =================================================
// RUN NUMBER INPUT
let testDisplay = new DisplayNumber(Display);
for (let i = 0; i < NumberBtn.length; i++) {
    let Btn = NumberBtn[i];
    Btn.addEventListener("click", (event) => {
        console.info("status: Button Operation Clicked");
        testDisplay.displayNumber(event.target);
    });
}

let testProcessing = new Processing(OperatorBtn, Display);
let testReset = new Reset(Display);
// OPERATOR BUTTON CLICK EVENT
for (let i = 0; i < OperatorBtn.length; i++) {
    let btn = OperatorBtn[i];
    btn.addEventListener("click", (event) => {
        testProcessing.StoringOperator(event.target);
        testProcessing.StoreNumberData();
        testReset.ReadyToTakeNextNumber(); //SHOW NEXT >> SIGN
        testReset.resetInputArray(); //RESET INPUT ARRAY
    });
}

// EQUAL BUTTON CLICK
equalSign.addEventListener("click", (event) => {
    console.info("Status: Equal Button clicked");
    testProcessing.StoreNumberDataInEqual();
    testProcessing.Computation();
    console.log(inputAr);
    console.log(NumberAr);
    console.log(opSignAr);
    testProcessing.result=null; //another reset 
});

// RESET FUNCTIONALITIES
resetBtn.addEventListener("click", ()=>{
    console.info("Status: Reset Functionalities working");
    testReset.resetInputArray();
    testReset.resetStorage();
    testReset.resetDisplay();
    console.log(inputAr);
    console.log(NumberAr);
    console.log(opSignAr);
    testProcessing.result=null; //another reset 
});


// HISTORY FUNCTIONALITIES

