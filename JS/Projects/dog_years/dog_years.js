//my age
const myAge = 30;
//value saved to it will change
let earlyYears = 2;
earlyYears *= 10.5;
//Since we already accounted for the first two years, 2 is subtracted from myAge. We'll be changing this value later.
let laterYears = myAge-2;
//Calculates the number of dog years accounted for by my later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//my age in dog years
myAgeInDogYears = earlyYears + laterYears;
//My name in lower case.
const myName = 'Arka Roy'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
