const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const $userScore = document.querySelector("#user_score");
const $compScore = document.querySelector("#comp_score");
let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerHTML = `you win !,${userChoice} beats ${compChoice} `;
        userScore++;
        $userScore.innerHTML = userScore;
    }else{
        msg.innerHTML = `You lose ! , ${compChoice} beats ${userChoice}`;
        compScore++;
        $compScore.innerHTML = compScore;
    }
}
const drawGame = () => {
    msg.innerHTML = "Game Draw! ,play again...";
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
