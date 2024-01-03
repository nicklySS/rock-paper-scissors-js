const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
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

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(`Computer chose: ${computerSelection}`);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerWins++;
        } else if (result.includes("lose")) {
            computerWins++;
        }
    }

    console.log("Game Over!");
    console.log(`Player wins: ${playerWins}, Computer wins: ${computerWins}`);
}

game();
