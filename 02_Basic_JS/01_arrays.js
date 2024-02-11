// arrays

const firstArr = [0, 1, 2, 3, 4, 5]
const myMovies = ["3 Idiots", "Bhagat Singh", "MS Dhoni"]
// console.log(firstArr[1]);// Output => 1
// console.log(firstArr); // Output => [ 0, 1, 2, 3, 4, 5]
// console.table(myMovies);// Output => [ '3 Idiots', 'Bhagat Singh', 'MS Dhoni' ]


//Array Methods
// firstArr.push(9)
// firstArr.push(7)
// console.log(firstArr); // Output => [ 0, 1, 2, 3, 4, 5, 9 ] Add 9 in Existing Array

// firstArr.pop()
// console.log(firstArr); // Output => [ 0, 1, 2, 3, 4 ] Remove 5 from Array

// firstArr.unshift(9) //Unshift:- Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(firstArr); //Output => [ 9, 0, 1, 2, 3, 4, 5 ]

// firstArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not
// console.log(firstArr); // Output => [ 1, 2, 3, 4, 5 ]

// console.log(firstArr.includes(2)); //The element to search for. Determines whether an array includes a certain element, returning true or false as appropriate.
// console.log(firstArr.indexOf(30)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = firstArr.join()
// console.log(firstArr);
// console.log(newArr); //Array convert into String
// console.log(typeof newArr); // Check the type of the Array


//slice, splice

console.log("A", firstArr);

const myf1 = firstArr.slice(1, 3)
console.log(myf1);

console.log("B", firstArr)

const myf2 = firstArr.splice(1, 3)// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("C", firstArr);
console.log(myf2);