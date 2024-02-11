const mydate = new Date()
// console.log(mydate);
// console.log(mydate.toDateString()); //Output => Sun Feb 11 2024
// console.log(mydate.toISOString()); //Output => 2024-02-11T12:29:49.022Z
// console.log(mydate.toJSON()); //Output => 2024-02-11T12:30:24.575Z
// console.log(mydate.toLocaleDateString()); //Output => 2/11/2024

// console.log(mydate.toLocaleString()); //Output => 2/11/2024, 12:41:26 PM

// console.log(mydate.toLocaleTimeString()); //Output => 12:42:20 PM

// console.log(mydate.toString()); // Output => Sun Feb 11 2024 12:43:16 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toTimeString()); // Output => 12:52:32 GMT+0000 (Coordinated Universal Time)

// console.log(typeof mydate);// Returns => Object

// let newCreatedDate = new Date(2024, 0, 11)

// console.log(newCreatedDate); // Output => 2024-01-11T00:00:00.000Z

// let myCreatedDate = new Date(2024, 0, 25, 8, 10)
// console.log(myCreatedDate.toLocaleString()); //Output => 1/25/2024, 8:10:00 AM

let myCreatedDate = new Date("02-10-2024")
// console.log(myCreatedDate.toDateString()); //Output => Sat Feb 10 2024

let myTimeStamp = Date.now()
// console.log(myTimeStamp);// Output => 1707662899073
// console.log(Math.floor(myTimeStamp/1000));// Output => 1707662942

let newDate = new Date()
// console.log(newDate.getMonth());// note month is start with 0 => January; 1 => February and so on....
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',
{
    month: "long",
    weekday: "long",
    day: "2-digit"
}
));