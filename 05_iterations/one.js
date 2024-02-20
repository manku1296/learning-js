//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i == 3) {
        // console.log("Lucky Number 3");
    }
    // console.log(`Counting ${i}`)
}

// console.log(i);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log( i + '*' + j + ' = ' + i*j);        
    }
    
}


let friendsArray = ["Bhanu", "Rohit", "Pavan", "Yash"]
// console.log(friendsArray.length);

for (let i = 0; i < friendsArray.length; i++) {
    const element = friendsArray[i];
    // console.log(element.toLocaleUpperCase());
    
}

// break and continue

// for (let index = 1; index <= 10; index++) {
//     if( index == 3){
//         console.log('Detected number 3');
//         break
//     }
//     console.log(`Value of index is ${index}`);
    
// }


for (let index = 1; index <= 10; index++) {
    if( index == 3){
        console.log('Detected number 3');
        continue
    }
    console.log(`Value of index is ${index}`);
    
}