//Task #30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
let user_name = ["admin", "Sadia", "Saira", "Ayesha", "Yamna", "Wania"];
//Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
for (let i = 0; i < user_name.length; i++) {
    //• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if (user_name[i] === "admin") {
        console.log("\nHello admin, Would you like to see a status report? \n");
    }
    //• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log(`Hello ${user_name[i]}, Thank you for logging in again.\n`);
    }
}
export {};
