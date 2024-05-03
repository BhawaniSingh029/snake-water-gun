let options = ["Snake", "Water", "Gun"];

const normalizeInput = (input) => {
  const lowerCaseInput = input.toLowerCase();

  if (lowerCaseInput === "snake" || lowerCaseInput === "snakes") {
    return "Snake"
  } else if (lowerCaseInput === "water" || lowerCaseInput === "waters") {
    return "Water"
  } else if (lowerCaseInput === "gun" || lowerCaseInput === "guns") {
    return "Gun"
  } else {
    return null;
  }
}

const getRandomOption = () => {
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex];
}

const declareWinner = (userChoice, computerChoice) => {
  if (userChoice === "Snake" && computerChoice === "Water" || userChoice === "Water" && computerChoice === "Gun" || userChoice === "Gun" && computerChoice === "Snake") {
    return "User";
  } else if (userChoice === computerChoice) {
    return "Tie"
  } else {
    return "Computer"
  }
}

const playGame = () => {
  let playAgain = true;

  while (playAgain) {

    let userInput = prompt("Please choose one of: Snake, Water, Gun");

    let userChoice = normalizeInput(userInput);

    if (!userChoice) {
      alert("Please choose a valid option: Snake, Water, or Gun.")
      continue; // Skips the rest of the loop's body and starts the next iteration
    }

    let computerChoice = getRandomOption();

    let winner = declareWinner(userChoice, computerChoice);

    alert(`User: ${userChoice}\nComputer: ${computerChoice}\nResult: ${winner}`)
    // console.log(computerChoice);

    playAgain = confirm("Do you want to play Again?")
  }
}
playGame();
