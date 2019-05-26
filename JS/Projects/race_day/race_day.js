let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 25;
if (runnerAge>18 && registeredEarly){
  raceNumber += 1000;
}
if (runnerAge>18 && registeredEarly){
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`)
} else if (runnerAge>18 && !registeredEarly){
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`)
} else if (runnerAge<18){
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`)
} else{
  console.log("Please see the registration desk.")
}
