// Create myAge variable
const myAge = 32;
// Create earlyYears variable
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
let myName = "Gabi".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);