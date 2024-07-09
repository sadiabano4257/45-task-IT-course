//Conditional Tests: Write a series of conditional tests.
//Print a statement describing each test and your prediction for the results of each test. 
//Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Test #1
let car = 'sabaru';
console.log("\nEvalute 5 test to True");
//Test #1:
console.log("Is car =='sabaru'? I predict True.");
console.log(car === 'sabaru');
//Test #2:
console.log("Is car!=='toyota'? I predict True.");
console.log(car !== 'toyota');
//Test #3:
console.log("Is the length of car is >4 ?I predict True.");
console.log(car.length > 4);
//Test #4:
console.log("Is the length of car is <=6 ?I predict True.");
console.log(car.length <= 6);
//Test #5:
console.log("Does Car Start with 's'?I predict True.");
console.log(car.startsWith('s'));
console.log("\nEvalute 5 test to False");
//Test #1:
console.log("Is car =='Honda'? I predict False.");
console.log(car === 'Honda');
//Test #2:
console.log("Is car in Uppercase ? I predict False.");
console.log(car.toUpperCase() === car);
//Test #3:
console.log("Is car =='Sabaru'? I predict False.");
console.log(car === 'Sabaru');
//Test #4:
console.log("Is car=='Audi' ? I predict False.");
console.log(car === 'Audi');
//Test #5:
console.log("Is the length of car ===7 ? I predict False.");
console.log(car.length === 7);
export {};
