const user = {
    username: "mayank",
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Manku"
// user.welcomeMessage()
// console.log(this);

// function coffee(){
//     let username = "Manku Sharma"
//     console.log(this.username);
// }

// const coffee = function(){
//     let username = "Manku Sharma"
//     console.log(this.username);
// }

const coffee = () => {
    let username = "Manku Sharma"
    console.log(this);
}

// coffee()


//++++++++++++++ Arrow Functions +++++++++++++++

// const addNumbers = (num1, num2) => {
//     return num1 + num2
// } (Method -1 )

// const addNumbers = (num1, num2) => num1 + num2
// const addNumbers2 = (num1, num2) => (num1 + num2)

const userWelcome = () => ({username: "Maks"})

console.log(userWelcome());
// console.log(addNumbers(4, 8))
// console.log(addNumbers2(50, 8))

// const myArr = [2, 5, 7, 9, 1]

// myArr.forEach

