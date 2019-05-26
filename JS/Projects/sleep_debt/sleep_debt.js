const getSleepHours = day =>{
  if (day.toLowerCase() === 'monday'){
    return 8;
  } else if (day.toLowerCase() === 'tuesday'){
    return 7;
  } else if (day.toLowerCase() === 'wednesday'){
    return 7;
  } else if (day.toLowerCase() === 'thursday'){
    return 9;
  } else if (day.toLowerCase() === 'friday'){
    return 6;
  } else if (day.toLowerCase() === 'saturday'){
    return 9;
  } else if (day.toLowerCase() === 'sunday'){
    return 7;
  } else{
    console.log("Wrong day!")
  }
};

const getActualSleepHours =()=>{
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Friday')
};

const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log("User gets the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours){
    console.log("User gets more sleep than needed!");
  } else if (actualSleepHours < idealSleepHours){
    console.log("User should get some rest!");
  }
};

calculateSleepDebt();
