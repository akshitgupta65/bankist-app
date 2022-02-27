'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

////////////////////////////////////////////

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

////////////////////////////////////////////

// Experimenting API

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long', // another option '2-digit'
//   year: 'numeric', // another option '2-digit'
//   weekday: 'short', // another option 'narrow'
// };
// const locale = navigator.language; // getting locales from the user browser
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

// new Intl - the name space for internationalization standard
// .DataTimeFormat(locale string(usually the language), options object)
//--- options object - used to customize how the date will be displayed and what all needs to be displayed
// .format(date that we want to format)

/////////////////////////////////////////////////

// math.floor is used to round off the input Loan amount.
// it also does type coercion. It converts strings to numbers

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// BASICS THINGS TO KNOW

// 1.
// all numbers in JS are represented as decimals
console.log(23 === 23.0); // both are same

//////////////////////

// 2.
// numbers are always stored in a 64 base 2 format

// binary format- only composed of 0s and 1s
console.log(0.1 + 0.2); // not 0.3
console.log(0.1 + 0.2 === 0.3); // is false. In-built error
// some operations like this one simply cannot mask the fact that they cannot represent certain fractions.
// precise scientific calculations cannot be done in JS

///////////////////////

// 3. Number()
// Converting a string into a number

console.log(Number('23')); //method 1: use Number().

console.log(+'23'); // method 2: type coercion by JS.
// as soon as it sees the + operator, it converts all operands to numbers.

// we just replaced Number() with +.

////////////////////////

// 4 IMPORTANT
// Parsing a number

// 4.1  parseInt() 
// takes out the number part of a string and converts it to a number
// only for INTEGERS

// gets 2 arguments
// 1. string
// 2. radix - base of the numeral system we are using. (we generally use 10)

console.log(Number.parseInt('30px', 10)); // works
console.log(Number.parseInt('e30', 10)); // not works
// must start with a number. Only then it works
// use-case: we get some unit from css and we need to get rid of the unit.

// 4.2  parseFloat()
// does the same thing. Works with DECIMALS NUMBERS (floating point number)

console.log(Number.parseFloat('2.5rem'));

//////////////////////////////

// 5. isNaN()
// check if a value 'is NaN'

console.log(Number.isNaN(20)); // false (is a number)
console.log(Number.isNaN('20')); // false (is a number)
console.log(Number.isNaN(+'20X')); // true (not a number)
console.log(Number.isNaN(23 / 0)); // false (Infinity is not NaN)

// not a perfect way to check if a value is a number.
// many cases where a it not a actual number but also not NaN.

///////////////////////////////

// 6. isFinite() (IMPORTANT)
// check if a value 'is finite'
// better way to check if it is a number

console.log(Number.isFinite(20)); // true (is actually a number)
console.log(Number.isFinite('20')); // false (not an actual number)
console.log(Number.isFinite(+'20X')); // false (not an actual number)
console.log(Number.isFinite(23 / 0)); // false (not an actual number)

////////////////////////////////

// 7. isInteger()
// check if a value is an integer

console.log(Number.isInteger(23));  // true
console.log(Number.isInteger('23'));  // false
console.log(Number.isInteger(23.8));  // false
console.log(Number.isInteger(23.0));  // true
*/
////////////////////////////////////////////////////////////////
/*
// MATH OPERATIONS

// square root
console.log(Math.sqrt(25));

// exponentiation
console.log(25 ** (1 / 2)); // 25 raises to power 1/2
console.log(8 ** (1 / 3)); // cubic root

// Maximum value
console.log(Math.max(5, 18, 23, 11));

// Minimum value
console.log(Math.min(5, 18, 23, 11));

///////////////////////////////////////

// PI
console.log(Math.PI);

//// area of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //perseFloat to take out the number. Exponentiation to calc the square

////////////////////////////////////////

// random ()
console.log(Math.random()); // gives a random number b/w 0 and 1

// use-case of random()

// random number generator function
const randomInt = (min, max) =>
  // used floor instead of trunc as it works with negative integers as well
  Math.floor(Math.random() * (max - min) + min);

console.log(randomInt(1, 6)); // below 6 (1,2,3,4,5)

/////////////////////////////////

// ROUNDING
console.log('---ROUNDING---');

////// rounding integers

// round (rounds to nearest integer)
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// ciel (rounds to nearest higher integer)
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// floor (rounds to nearest lower integer)
console.log(Math.ceil(23.3)); // 23
console.log(Math.ceil(23.9)); // 23

// trunc (removes the decimal part)
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23

// floor and trunc looks similar, but are not
console.log(Math.floor(-23.3)); // rounds to -24
console.log(Math.trunc(-23.3)); // removes .3 and gives -23

//////////////////////////

/////// rounding floating point numbers (decimals)

// toFixed () : we can specify how many decimal places we want
//---- returns a STRING
//---- VERY IMPORTANT

console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(2)); // '2.70'
console.log((5.385929).toFixed(3)); // '5.386'
console.log(+(5.385929).toFixed(5)); // 5.38593 (+ to convert to a number)
*/
///////////////////////////////////////////////////////////////////
/*
// THE REMAINDER OPERATOR
//--- when we want to do something every (n)th time, it can be used

console.log(5 % 2); // 5 = 2 * 2 + 1
console.log(8 % 3); // 8 = 2 * 3 + 2

////////////////////////

// odd and even number
console.log(6 % 2); // will be 0, therefore even
console.log(7 % 2); // will be 1, therefore odd

// function to check if a number is even or not
const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(45));
console.log(isEven(44));

/////////////////////

// Use-case
// Changing color of every second row of movements
// select all the rows of the movements and color every second row

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4...
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6...
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/
/////////////////////////////////////////////////////////////////
/*
// NUMERIC SEPARATOR (1_2) (ES2021)

//--- A large number(diameter of sun) is hard to read
//--- what is  this number. 28 million, billion, etc
// in english, we write is using commas (287,460,000,000)
// const diameter = 287460000000;

// we can do the same in JS using the Numeric Separator
//--- Numeric Separators are simple underscores
//--- we can place it anywhere between a number, it makes easier to understand and parse
//--- JS basically ignores this numeric separators. It is for us to developers.
const diameter = 287_460_000_000;
console.log(diameter);

//--- below, we place underscore to make it easier for us to understand that price is 345 dollars and 99 cents
//--- but at the same time, we are able to tell JS that price is 34 thousand and 599 cents
const priceCents = 345_99;
console.log(priceCents);

//--- both numbers are same (1500), but underscore gives it different meaning.
//--- fee1 looks like 15 dollars and 0 cents
//--- fee2 looks like 1500 dollars with a thousand separator
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// Restrictions
//--- cannot place it at the beginning and end of the number
//--- cannot place it before or after the decimal
//--- cannot place 2 underscores in a row
//--- ONY BETWEEN NUMBERS
// const PI = _3_._14__15_
*/
/////////////////////////////////////////////////////////////////
/*
// BIGINT (ES2020)
//--- BigInt allows us to interact with extremely large numbers.

// 64 bit base 2
// biggest safe number
console.log(2 ** 53 - 1); // out of 64, numbers are stored in only 53 bits, remaining are for positioning
console.log(Number.MAX_SAFE_INTEGER); //above this, numbers are not safe in JS

//why do we need bigInt?
//--- 1. we might need bigger numbers than these. For ex - for database IDs
//--- 2. when interacting with real 60 bit numbers (other languages can interact with them)
//--- 3. we might get large numbers from an API

// BigInt (a new primitive has been added)
// stands for Big Integers

console.log(473828589292347382248478229448);

// converting to BigInt using 'n'
console.log(473828589292347382248478229448n); // it gives exact result

// converting to BigInt using BigInt
console.log(BigInt(473828589292347382248478229448)); // not give exact result. must be used with smaller numbers

///////////////////////////////

// Operations
console.log(10000000000000000000n + 10000000000000000000n);

// cannot use bigInt and other type together

// console.log(294382034329010349n * 484394);
console.log(294382034329010349n * BigInt(484394)); // must convert into a bigInt

//////////////////////////////

// Exceptions

//--- 1. Logical Operations

console.log(20n > 15); // true
console.log(20n === 20); // false (as they are different primitive type)
console.log(20n == '20'); // true (== ignores the fact that they are different primitive type)

//--- 2. Divisions

console.log(10 / 3); // 3.333333
console.log(10n / 3n); // 3n
// it cuts off the decimal part and only returns the integer part.
// just like trunc.
*/
/////////////////////////////////////////////////////////////////
/*
// DATES AND TIMES

// Create a date: 4 different ways

// 1.
// Creating the current date and time
const now = new Date();
console.log(now);

// 2.
// Parsing (copy-pasting) the date from a source
console.log(new Date('Oct 29 2021 11:50:05'));
console.log(new Date('December 24, 2018'));
console.log(new Date(account1.movementsDates[0]));

// 3.
// writing the date in said order (comma separated)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // year, month(0-11), date, hours, mins, seconds, ms
console.log(new Date(2037, 10, 33, 15, 23, 5)); // as november only has 30 days, JS auto corrects the date nd makes it dec 3.

// 4.
// calculating date by passing amount of milliseconds passed
console.log(new Date(0)); // jan 1, 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 86400000 milliseconds in 1 day

//////////////////////////////

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

// acquiring information from a date (get methods)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 (nov) as it is 0 based (Jan:0, dec:11)
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 (thu) as it is 0 based (Sun:0, sat:6)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0

console.log(future.toISOString()); // follows international standard

console.log(future.getTime()); // gives us the time stamp. Amount of milliseconds passed
console.log(Date.now()); // gives the time Stamp for this time

//setting date (set methods)
future.setFullYear(2040);
future.setMonth(7);
future.setDate(21);

console.log(future);
*/
/////////////////////////////////////////////////////////////////
/*
// OPERATIONS WITH DATES

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

// this means if we substract one date from another, we get a number (date in milliseconds)
// we can then convert it into hours,date,etc

// function to calculate no of days between 2 random dates

const calcdaysPast = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcdaysPast(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);
*/
////////////////////////////////////////////////////////////////
/*
// FORMATTING NUMBERS USING INTERNATIONALIZATION (INTL)

const num = 48593949.32;

const options = {
  // style: 'unit',
  // unit: 'mile-per-hour',
  // unit: 'celsius',

  // style: 'percent',

  style: 'currency',
  currency: 'EUR', // we separtely define currency. It does not depend on the LOCALE. We can use euro sign in US as well, just the positioning will change
};

console.log(
  'US:         ',
  new Intl.NumberFormat('en-US', options).format(num)
);
console.log(
  'GERMANY:    ',
  new Intl.NumberFormat('de-DE', options).format(num)
);
console.log('AUS:      ', new Intl.NumberFormat('en-AU', options).format(num));
console.log(
  'BROWSER:    ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/
/////////////////////////////////////////////////////////////////
/*
// TIMERS in JS

// 2 types of timers:

// setTimeout(callback function, milliseconds)

//--- runs just once after a defined time
//--- can be used to execute a code at some point in future

// arguments
//--- callback function: we dont call this function ourselves. we pass it as an argument to setTimeout()
//--- milliseconds: time after which the timeout function will be called

// working
//--- as soon as the function is called, JS keeps counting the time in the background
//--- registers this callback function to be called after the time has past
//--- immediately moves on to the next line.
//--- This is known as ASYNCHRONUS JS

// how to pass arguments in the callback function
//--- when our callback function has parameters, we can pass in the arguments in the timeout function
//--- after the second argument (milliseconds) of timeout function, all the arguments passed (3rd, 4th) will become arguments for callback function

// example : ordering a Pizza
const ingredients = ['olives', 'spinach'];

const timerPizza = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
); // will be called after 3 seconds

if (ingredients.includes('spinach')) clearTimeout(timerPizza);

//////////////////////

// setInterval
//--- keeps running over and over again (every 5 sec, every 10 mins)

// example: create a clock

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 2000);

// Challenge: create a real clock with hh,mm,ss

setInterval(function () {
  const now = new Date();

  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);

  console.log(`${hour}:${min}:${sec}`);
}, 1000);
*/
