// Task # 21
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
type information={
     name:string,
     age:number,
     profession:string,
};
let biodata:information={
    name:"SADIA",
    age:27,
    profession:"Teacher",

};

console.log("\nObject Containing Information About ME :\n");
console.log(`My name is : ${biodata.name}.\n`);
console.log(`I am ${biodata.age} Year Old.\n`);
console.log(`I am a ${biodata.profession}.\n`);





