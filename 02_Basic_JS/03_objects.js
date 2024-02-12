//Singleton
//object.create

//object literals

//Symbol
const mySym = Symbol("key1")

const fbUsers = {
    name: "Mayank",
    "full name" : "Mayank Sharma",
    [mySym]: "mykey1",
    age: 27,
    email: "mayanksharma@gmail.com",
    isLoggedIn: true,
    location: "Delhi"
}
// console.log(fbUsers.email)// Method-1 for Printing an object
// console.log(fbUsers["email"]) // Method-2 for Printing an object

// console.log(fbUsers["full name"]) //Output => Mayank Sharma
// console.log(fbUsers[mySym]);// Print Symbol

fbUsers.email = "mayank@gmail.com"

// Object.freeze(fbUsers)// Not override values

fbUsers.email = "mayank@chatgpt.com"
console.log(fbUsers);

fbUsers.greeting = function(){
    console.log("Hello JS user");
}
console.log(fbUsers.greeting());

fbUsers.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(fbUsers.greetingTwo());