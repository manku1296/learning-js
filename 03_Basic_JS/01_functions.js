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
// console.log(loginUserMessage());


//+++++++++++++++++++++++ Rest Operator +++++++++++++++++++++++

function calculateCartPrice(val1, val2 ,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 500, 700, 1200)) //(...num1) Rest Operator Output => [ 200, 500, 700 ], (val1, val2,...num1) => [ 700, 1200 ]



/*Using Objects in Function*/
const user = {
    username: "Manku",
    price: 4500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // Method-1
// handleObject({  //Method-2
//     username: "Mayank",
//     price: 4000
// })



/*Using Arrays in Functions*/

const newArray = [200, 400, 600, 900]

function returnSecondValue(getArray){
    return(getArray[1])
}

// console.log(returnSecondValue(newArray))// Method-1 For printing output
console.log(returnSecondValue([200, 300, 500])); //Method-2 for printing output