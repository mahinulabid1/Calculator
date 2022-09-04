const HistoryButton = document.querySelector(".button-history");
const HistorySection = document.querySelector(".history-section");
const CloseHistoryBtn = document.querySelector(".close-history");
const closeCalc= document.querySelector(".buton-turnOff");

HistoryButton.addEventListener("click",()=>{
    HistorySection.classList.toggle("history-no-display");
});

CloseHistoryBtn.addEventListener("click",()=>{
    HistorySection.classList.toggle("history-no-display");
});

// close calculator
closeCalc.addEventListener("click",()=>{
    window.close();
});