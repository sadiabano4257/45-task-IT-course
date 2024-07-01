//Task#16

/*More Guests: You just found a bigger dinner table, 
so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

//Invitation to Guest for Dinner
let guestList:string[]=["Ayesha","Saira","Yamna"]
for(let i=0;i<guestList.length;i++){
    console.log(`Dear ${guestList[i]}!\n You are invited to Dinner.\n`);
}
//Guest# 2 has not come due to some problems..
console.log(`"Unfortunately ${guestList[1]} can't come due to some problems"`);
//Modify new Guest in replace of Guest 2
guestList[1]="Wania";
//New list of Invitation
console.log(`\nNew list of invitation are :\n`);
for(let j=0;j<guestList.length;j++){
    console.log(`Dear ${guestList[j]}!\n You are invited to Dinner.\n`);
}
//We have found bigger dinner table so more space is available now 3 more Guests to invite to dinner....
console.log("\nGood News! we have found bigger dinner table so more space is available now 3 more Guests to invite to dinner\n");
//Add an element at the biginning of an array..(For this purpose we Use .Unshift() method of an Array)
guestList.unshift("samreen");
//Add an element to the middle of an Array
guestList.splice(2,0,"Nida");
//Add an element at the end of an Array.
guestList.push("Maria");
//Print a new set of invitation messages for each person.
console.log(`\nNew list of invitation are :\n`);
for(let k=0;k<guestList.length;k++){
    console.log(`Dear ${guestList[k]}!\n You are invited to Dinner.\n`);
}





