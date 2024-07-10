//Task #26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.
//1st Version:
let alian_color:string="green";

if(alian_color==="green"){
    console.log("\n1st Version");
    console.log("Congratulations ! you just earned 5 points!");
}else{
    console.log("Congratulations ! you just earned 10 points!")
}
//2nd Version:

alian_color="red";

if(alian_color==="green"){
    console.log("Congratulations ! you just earned 5 points!");
}
else{
    console.log("\n2nd Version");
    console.log("Congratulations ! you just earned 10 points!")

}