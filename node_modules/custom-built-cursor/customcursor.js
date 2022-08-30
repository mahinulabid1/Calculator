//creating an element
(() => {
    const defaultCursorPath = "https://onavyint.sirv.com/customcursor%2Cjs/Cursordefault/";
    const cursor = document.createElement("img");
    cursor.classList.add("cursor");

    const Cur_Arr = ["cursor1", "cursor2", "cursor3", "cursor4", "cursor5", "cursor6", "cursor7", "cursor8", "cursor9", "cursor10", "cursor11"];
    let cmd_element = document.querySelector(".create_cursor");
    Cur_Arr.map((el)=>{
        let checkCursorClass =cmd_element.classList.contains(el);
        console.log(checkCursorClass);
        if(checkCursorClass == true){
            cursor.setAttribute("src", `${defaultCursorPath}${el}.png`);
        }
    });
    document.body.appendChild(cursor);
})();
const select_cursor = document.querySelector(".cursor");
// ===========================================================================================================================

// SOME CSS STUFF
(()=>{
    const Cursor = document.querySelector(".cursor");
    Cursor.style.height =  "40px";
    Cursor.style.width =  "40px";
    Cursor.style.position =  "absolute";
    Cursor.style.zIndex =  "300";
    Cursor.style.pointerEvents =  "none";


    let AllSelectorInit = document.querySelectorAll("*");
    for(let i = 0; i < AllSelectorInit.length; i++){
        let AllSelector = AllSelectorInit[i];
        AllSelector.style.cursor = "none";
    }
})();



// cursor movement handler
(() => {
    let cursorState = {
        cursor_X_coordination: "",
        cursor_Y_coordination: ""
    }

    document.body.addEventListener("mousemove", (event) => {
        let cursor_Y_position = window.pageYOffset + event.clientY;
        select_cursor.style.top = `${cursor_Y_position}px`;
        select_cursor.style.left = `${event.clientX}px`;
        cursorState.cursor_X_coordination = event.clientX;
        cursorState.cursor_Y_coordination = event.clientY;
    });

    window.addEventListener("scroll", () => {
        let howMuchScrolled = window.pageYOffset;
        let both = howMuchScrolled + cursorState.cursor_Y_coordination;
        select_cursor.style.top = `${both}px`;
    });
})();
// =============================================================================================================================





// cursor display handler
(() => {
    document.body.addEventListener("mouseenter", () => {
        select_cursor.style.display = "block";

    });
    document.body.addEventListener("mouseleave", () => {
        select_cursor.style.display = "none";
    });
})();
// =============================================================================================================================


