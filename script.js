const getComputerChoice = () => {
    const choice = ["Rock","Paper","Scissors"];
    return console.log(choice[Math.floor(Math.random()*choice.length)]);
}

