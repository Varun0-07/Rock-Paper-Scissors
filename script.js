let userScore = 0;
let compScore = 0;

let moves = document.querySelectorAll(".Move");
let msg = document.querySelector("#MSG");
let score = document.querySelectorAll("matches");
let usrscr = document.querySelector("#you");
let cmpscr = document.querySelector("#comp");
let YourChoice = document.querySelector("#one");
let CompChoice = document.querySelector("#two");

moves.forEach((Move) => {
    Move.addEventListener("click",() =>{
        const playerMove = Move.getAttribute("class");
        compMove(playerMove);
    });   
});

const compChoices = () => {
    let options = ["Rock Move", "Paper Move","Scissors Move"];
    let random = Math.floor(Math.random() * 3);
    return options[random]
}

const compMove = (playerMove) => {
    console.log("PlayerChoice",playerMove);
    const pcMove = compChoices();
    console.log("CompuerChoice",pcMove);

    if(playerMove === pcMove) {
        drawGame();   
    } else {
        let userWin = true;
        if(playerMove === "Rock Move") {
            userWin = pcMove === "Paper Move" ? false:true;
        }else if(playerMove === "Paper Move"){
            userWin = pcMove === "Scissors move" ? false:true;
        }else {
            userWin = pcMove === "Rock Move" ? false:true;
        }
        Show(userWin,playerMove,pcMove);
    };
}

const Show = (userWin, playerMove , pcMove) => {
    if(userWin) {
        userScore++;
        usrscr.innerText = userScore;
        console.log("You WIN");
        msg.innerText = `You Win ${playerMove} Beats ${pcMove}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "black";
        YourChoice.innerText = "You";
    }else{
        compScore++;
        cmpscr.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose!${pcMove} Beats ${playerMove}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        CompChoice.innerText = "comp";
    }
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Its a draw";
}

