const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

const getPlayerSelection = () => {
    const buttons = document.querySelectorAll('.btn');

    let playerSelection = '';

    buttons.forEach((btn) => {
        btn.addEventListener('click',(e) => {
            playerSelection = e.target.textContent;
            
        });
    });
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (true) {
        case playerSelection === computerSelection:
            return "It's a tie!";
        case (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ):
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        default:
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

const game = () => {
    let playerWins = 0;
    let computerWins = 0;


}

game();
