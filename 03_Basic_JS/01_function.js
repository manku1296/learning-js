function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2)
// }

// addTwoNumbers(5, 4) // Output => 9

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)

    /* let result = number1 + number2
    return result */ // Method 1 for return

    return number1 + number2 //Method 2 for return parameters
}

// const result = addTwoNumbers(3,5)
// console.log("Result: ",result)

// console.log(addTwoNumbers(3,4));


// console.log(addTwoNumbers(2,3))
// const result = addTwoNumbers(2, 5)
// console.log(result);// Output => 7

function loginUserMessage(username = "mayank"){
    if(username === undefined){
        console.log("Please enter your username.");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Mayank"));// Method-1
console.log(loginUserMessage());