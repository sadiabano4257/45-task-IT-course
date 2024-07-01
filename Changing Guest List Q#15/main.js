//Task # 15
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//Invitation to Guest for Dinner
var guestList = ["Ayesha", "Saira", "Yamna"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], "!\n You are invited to Dinner.\n"));
}
//Guest# 2 has not come due to some problems..
console.log("\"Unfortunately ".concat(guestList[1], " can't come due to some problems\""));
//Modify new Guest in replace of Guest 2
guestList[1] = "Wania";
//New list of Invitation
console.log("\nNew list of invitation are :\n");
for (var j = 0; j < guestList.length; j++) {
    console.log("Dear ".concat(guestList[j], "!\n You are invited to Dinner.\n"));
}
