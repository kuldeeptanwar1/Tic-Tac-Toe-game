let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
let winPattern = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8],];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count = count + 1;
        checkDraw();
        
    })
})

const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = (nwi) => {
    for( pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                count = 0;
                showWinner(pos1Val);
            }
        }
    }
}

const checkDraw = () => {
    if (count === 9){
        msg.innerText = "Game is Draw";
        messageContainer.classList.remove("hide");
        disableBoxes();
        count = 0;
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add("hide");
}

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
