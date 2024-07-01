//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//print into lower case
var personname = "SADIA";
console.log(personname.toLowerCase());
//print into uppercase
var pnname = "sadia";
console.log(personname.toUpperCase());
//print into titlecase
var pername = "sADIA";
var b = pername[0].toUpperCase() + pername.slice(1).toLowerCase();
console.log(b);
