//Task # 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
let fav_places = ["Makkah", "Neelum valley", "Kaghan Valley", "Newyork", "Switzerland"];
//• Print your array in its original order.;
console.log("In Original Order:" + " " + fav_places + "\n");
//• Print your array in alphabetical order without modifying the actual list.
console.log("In Alphabetical Order:" + " " + [...fav_places].sort() + "\n");
//• Show that your array is still in its original order by printing it.
console.log("In Original Order:" + " " + fav_places + "\n");
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("In Reverse Alphabetical Order:" + " " + [...fav_places].reverse() + "\n");
//• Show that your array is still in its original order by printing it again.
console.log("In Original Order:" + " " + fav_places + "\n");
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order of List:" + " " + fav_places.reverse() + "\n");
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order of List:" + " " + fav_places.reverse() + "\n");
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("In Alphabetical Order:" + " " + fav_places.sort() + "\n");
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("In Alphabetical Order:" + " " + fav_places.sort().reverse() + "\n");
export {};
