//Task #24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
let str1 = 'SADIA';
let str2 = "ABDULLAH";
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
//• Tests for equality and inequality with strings
//Have at least one True and one False result for each of the following:
console.log("\nTests for Equality and Inquality with Strings:\n");
console.log(str1 === 'SADIA'); //True
console.log(str1 === str2); //False
//• Tests using the lower case function
//Have at least one True and one False result for each of the following:
console.log("\nTests Using the Lower Case Function:\n");
console.log(str1.toLowerCase() === 'sadia'); //True
console.log(str2.toLowerCase() !== 'abdullah'); //False
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to...
//Have at least one True and one False result for each of the following:
console.group("\nNumerical Tests:\n");
console.log(1 < 2); //True
console.log(3 > 4); //False
console.log(num2 >= num1); //True
console.log(num1 >= num2); //False
console.log(num1 === 5); //True
console.log(num2 !== 10); //false
//• Tests using "and" and "or" operators
//Have at least one True and one False result for each of the following:
console.log("\nTests Using 'and' and 'or' Operators:");
console.log(num1 < 10 && num2 > 5); //True
console.log(num1 < 3 || num2 > 15); //False
//• Test whether an item is in a array
//Have at least one True and one False result for each of the following:
console.log("\nTests Whether an Item is in an Array:");
console.log(Arr.includes(2)); //True
console.log(Arr.includes(6)); //False
//• Test whether an item is not in a array
//Have at least one True and one False result for each of the following:
console.log("\nTests Whether an Item is NOT in an Array:");
console.log(!Arr.includes(6)); //True
console.log(!Arr.includes(2)); //False
export {};
