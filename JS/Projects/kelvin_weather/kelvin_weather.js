//forecast for today in Kelvin
const kelvin = 0;
// Celsius is similar to Kelvin - the only difference is that Celsius is 273 degrees less than Kelvin.
//result in celsius
const celsius = kelvin - 273;
//Fahrenheit = Celsius*(9/5)+32
//Using Math.floor() method to round down the fahrenheit temperature .
const fahrenheit = Math.floor(celsius *(9/5)+32);
console.log(`The temperature is ${fahrenheit} in Fahrenheit.`);
//Newton = Celsius*(33/100)
//Rounding down the Newton temperature using the Math.floor() method
newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} in Newton.`)
