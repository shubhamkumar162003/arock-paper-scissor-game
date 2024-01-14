let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//computer choice
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};
const drawGame = () => {
    msg.innerText = "Game is draw.Play again.";
    msg.style.background = "linear-gradient(rgb(106, 221, 227),rgb(223, 183, 183))";
};
const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.background = "linear-gradient(rgb(242, 176, 176),rgb(118, 243, 118))";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userchoice}`;
        msg.style.background = "linear-gradient(#faf9f9,rgb(231, 26, 53))";
    };
}
//userChoice
const playGame = (userchoice) => {
    const compChoice = genComputerChoice();

    if (userchoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //scissor,rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});
