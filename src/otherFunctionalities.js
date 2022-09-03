const HistoryButton = document.querySelector(".button-history");
const HistorySection = document.querySelector(".history-section");
const CloseHistoryBtn = document.querySelector(".close-history");

HistoryButton.addEventListener("click",()=>{
    HistorySection.classList.toggle("history-no-display");
});

CloseHistoryBtn.addEventListener("click",()=>{
    HistorySection.classList.toggle("history-no-display");
});