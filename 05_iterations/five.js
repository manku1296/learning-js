const coding = ["js", "ruby", "java", "python", "cpp"]

//Method-1
// coding.forEach( function(val){
//     console.log(val);
// })  


//Method - 2
// coding.forEach((item) => {
//     console.log(item);
// })


//Method-3
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


//Method-4
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


//Method-5

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})