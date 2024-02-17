let val1 = 500

if(true){
    let val1 = 10
    const val2 = 20
    // console.log("INNER: ",val1);
    var val3 = 30
}

// console.log(val1); //It is working fine
// console.log(val2); //It is working fine
// console.log(val3);// This is wrong for giving output


function one(){
    const username = "Mayank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Manku"

    if(username === "Manku"){
        const website = " youtube Channel"
        // console.log( username + website);
    }
    // console.log(website);
}
// console.log(username);


//++++++++++++++++++++++ Interesting +++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

// addtwo(7)
const addtwo = function(num){
    return num + 2
}
