const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// Output is 100.00 (This methon, Basically use for E-Commerce)

const otherValue = 123.399

// console.log(otherValue.toPrecision(4)) //Output will be 123.9 It's give you precise value.

const rupees = 1000000

// console.log(rupees.toLocaleString('en-IN')); //Output will be 10,00,000 in this format


//++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);// Output => object[Math]{}
// console.log(Math.abs(-4)); // Output => 4
// console.log(Math.round(4.6)); // Output will be round(4.6) => 5; round(4.3) => 4
// console.log(Math.ceil(4.9)); // Output will be ceil(4.1/2/3/4/5/6/7/8/9) => 5
// console.log(Math.floor(5.855)); // output will be floor(5.1/2/3/4/5/6/7/8/9) => 5
// console.log(Math.min(3, 5, 2, 9)); // Output will be min(3,5,2,9) => 2
// console.log(Math.max(5,17,8,9)); // Output will be max(5,17,8,9) => 17
// console.log(Math.random()); // Output will be 0.12146846
// console.log((Math.random()*10) + 1); // Output will be 2.161464646
// console.log(Math.floor(Math.random()* 10) + 1); // Output will be in without point.

const min = 10
const max = 20

// console.log(Math.floor(Math.random()*(max - min + 1)) + min) // Output will be without point 10 Or se upper aati hai..