const getUserChoice = userInput=>{
  userInput = userInput.toLowerCase();
  if(userInput==='rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error! Wrong choice!');
  }
};
// console.log(getUserChoice('Paper'));
const getComputerChoice = () =>{
  let choice  =  Math.floor(Math.random() * 3);
  switch(choice){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return "Game was a tie!";
  } else if(userChoice === 'bomb'){
    return "User Won!";
  } else if(userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Computer Won!";
    }else{
      return "User Won!";
    }
  } else if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return "Computer Won!";
    }else{
      return "User Won!";
    }
  } else if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return "Computer Won!";
    }else{
      return "User Won!";
    }
  }
};
// console.log(determineWinner(getUserChoice('Paper'), getComputerChoice()));

const playGame = () =>{
  let userChoice = getUserChoice('Bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
