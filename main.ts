//Task #17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16.
 Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program.*/

 //Repeat Q#16
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
//print a new message the new dinner table won't arrive in time so we can only invite two peoples for dinner
console.log("\n Unfortunately the dinner table won't in time so we can only invite two peoples for dinner\n" );
//Total guests are: 
console.log(guestList)
//Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//we can also use splice method but here we have to print out one by one so we use while loop.
//guestList.splice(2,5);
while (guestList.length>2){
    let notinvited =guestList.pop()
    console.log(`Sorry due to limited space we can't invite you to dinner Ms.${notinvited}\n`)
    
}

console.log(guestList);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//guestList.length=2
for(let k=0;k<guestList.length;k++){
    console.log(`Dear ${guestList[k]}!\n You are  still invited to Dinner.\n`);
}
//Remove the last two names from your list, so you have an empty list.
//Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop()
guestList.pop()
console.log(guestList);







