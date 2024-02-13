// const tinderUser = new Object() //Has Singleton

const tinderUser = {} //Has no singleton

tinderUser.id = "456mno"
tinderUser.name = "Mayank"
tinderUser.isLoggedIn = false

// console.log(tinderUser); //Output => { id: '456mno', name: 'Mayank', isLoggedIn: false }

const regularUser = {
    email: "mayanksharma@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //Output => Mayank

const obj1 = {1: "m", 2: "n"}
const obj2 = {3: "m", 4: "n"}
const obj4 = {5: "m", 6: "n"}


// const obj3 = { obj1, obj2} //Output => { obj1: { '1': 'm', '2': 'n' }, obj2: { '3': 'm', '4': 'n' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // Assigning Object Output => { '1': 'm', '2': 'n', '3': 'm', '4': 'n' }
// console.log(obj3);

// const obj3 = {...obj1, ...obj2} //Spread Operator for Combine Data of Objects
// console.log(obj3); // Output => { '1': 'm', '2': 'n', '3': 'm', '4': 'n' }

const users = [
    {
        id: 1,
        email: "Rohit@gmail.com"
    },
    {
        id: 2,
        email: "hitesh@gmail.com"
    },
    {
        id: 3,
        email: "mayank@gmail.com"
    },
]

// console.log(users[2].email); //Output => mayank@gmail.com

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Output => [ '456mno', 'Mayank', false ]
console.log(Object.entries(tinderUser)); // Output => [ [ 'id', '456mno' ], [ 'name', 'Mayank' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true