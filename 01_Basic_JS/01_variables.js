const accountNumber = 14523

// accountNumber = 4512 // Not Allowed

let emailId = "mayank@gmail.com"
//emailId = "mayanksharma@gmail.com" // Allowed

var accountPassword = "12345"
//accountPassword = "45689" //Allowed

accountCity = "Delhi" // This is not in right way.

let accountState; //Gives output as an undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



console.log(accountState);

console.table([accountNumber, emailId, accountPassword, accountState, accountCity ])