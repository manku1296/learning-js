//if
const isUserloggedIn = true
const temprature = 41

// if(temprature === 40){
//     console.log("Temprature is less than 40");
// }else{
//     console.log("Temprature is greater than 40");
// }

// (Less than)- <, (Greater Than)- >,(Less than Equal to)- <=,(Greater than Equal to)- >=,(Equal to)- ==
// (Not Equal to)- !=,(Equal to and Data type check)- ===,( Not Equal to and Check data types)- !== 
// && -> And, || -> OR

const score = 200

// if(score > 120){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // Not use this method as professional terms

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}