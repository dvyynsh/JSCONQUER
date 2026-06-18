let a = 10;
let b = 345.6821;

let c = b.tofixed(1);
// returns 345.7 and returns in "string"

let d = b.toPrecision(5)
// 345.68

let d = b.toPrecision(6)
// 345.682

let e = b.toPrecision(4)
// 345.7

let f = b.toString()
// returns 345.6821 in string format

let o = new Number(20);  // faltu method
// returns [Number: 20] and type is object

Math.abs()
Math.LN10
Math.PI
Math.SQRT2
Math.ceil
Math.floor

//-------------------------------------------------------------------------------------------------------------------


// Generate random Numbers
// 0-9 takk generate karna hai
console.log(Math.floor(Math.random()*10))

// 0-6 takk
console.log(Math.floor(Math.random()*6))

// 1-6 takk
console.log(Math.floor(Math.random()*6) + 1)

// format
Math.floor(Math.random()*TotalNumberOfOutcome) + shift

// 15-25 takk
console.log(Math.floor(Math.random()*11) + 15)

// Also Formula
console.log(Math.floor(Math.random()*(max-min+1))+ min)
