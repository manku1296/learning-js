const marvelHeros = ["CaptainAmerica", "Hulk",  "BlackWidow", "IronMan"]
const dcHeros = ["Superman", "Batman", "Flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); // Output => ["CaptainAmerica", "Hulk",  "BlackWidow", "IronMan", ["Superman", "Batman", "Flash"]]

// const allHeros= marvelHeros.concat(dcHeros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeros); // Output => ["CaptainAmerica", "Hulk",  "BlackWidow", "IronMan", "Superman", "Batman", "Flash"]

//Spread Operator
// const allNewHeros = [...marvelHeros, ...dcHeros] //Spread Operator combines all array data inside one array.
// console.log(allNewHeros); // ["CaptainAmerica", "Hulk",  "BlackWidow", "IronMan", "Superman", "Batman", "Flash"]

//Flat Method
// const nestedArr = [1, 2, 3, 4, [5, 6, 7], 8, 9, [3, 5, 7, [1, 3, 5]]]
// const newCombineArr = nestedArr.flat(Infinity)// Flate method remove all nested arrays and covert it into one arrays to all elements
// console.log(newCombineArr); // Output [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 7, 1, 3, 5]

//Array Methos ( creating an array by use of "from method")
// console.log(Array.is("Mayank")) // I'm Asking that is this array or not?
// console.log(Array.from("MayankSharma")) // Output it is creating my name into array.
// console.log(Array.from({name: "Mayank"})) // interesting

//Of Method:- Variable to Array conversion

let value1 = 10
let value2 = 20
let value3 = 30
let value4 = 40

console.log(Array.of(value1, value2, value3, value4)) // Output => [10, 20, 30, 40] Note Array.of() creating array from variables