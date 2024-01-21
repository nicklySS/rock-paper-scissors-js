const buttons = document.querySelectorAll(".btn");
const resultDiv = document.getElementById("round-result");

const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (pSel) => {
    const playerSelection = pSel.toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();

    switch (true) {
        case playerSelection === computerSelection:
            resultDiv.textContent = `It's a tie! Computer choice is ${computerSelection}`;
            return "tie";
            break;
        case (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper"):
            resultDiv.textContent = `You win, ${playerSelection} beats ${computerSelection}.`;
            return "win";
            break;
        default:
            resultDiv.textContent = `You lose, ${computerSelection} beats ${playerSelection}.`;
            return "lose";
            break;
    }
};

let playerWins = 0;
let computerWins = 0;
let i = 0;
const game = (pSel) => {
    if (computerWins <= 5 || playerWins <= 5) {
        const result = playRound(pSel);
        if (result == "win") {
            playerWins++;
        }
        if (result == "lose") {
            computerWins++;
        }
        document.getElementById(
            "score"
        ).textContent = `${playerWins} / ${computerWins}`;
    }
    if (playerWins == 5) {
        resultDiv.textContent = "Game over! Player wins!";
        buttons.forEach((btn) => btn.setAttribute("disabled", ""));
    }
    if (computerWins == 5) {
        resultDiv.textContent = "Game over! Computer wins!";
        buttons.forEach((btn) => btn.setAttribute("disabled", ""));
    }
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        game(e.target.textContent);
    });
});
