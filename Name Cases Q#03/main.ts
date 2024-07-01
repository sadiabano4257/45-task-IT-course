//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//print into lower case
let personname:string="SADIA";
console.log(personname.toLowerCase());
//print into uppercase
let pnname:string="sadia";
console.log(personname.toUpperCase());
//print into titlecase
let pername:string="sADIA";
let b=pername[0].toUpperCase()+pername.slice(1).toLowerCase();
console.log(b);
