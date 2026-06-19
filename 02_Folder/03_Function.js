function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // 15



// Different variety
function AddNumber(a, b, c=0, d=0){
    const sum = a+b+c+d;
    return sum;
}
AddNumber(1, 3)
AddNumber(3, 6, 3, 6)
// what we do if arguments kept increasing how do we make flexible

// rest operator
function AddNumberNew(...num){   // it create an array of all arguments passed
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum)
}



// New way to create Function
// we can hold function in a variable
const ADD = function(num1, num2){
    return num1+num2;
}
console.log(ADD(3,4))


// arrow function
// ()=>{

// }

const ADD = ()=> {
    console.log("Hello Ji")
}
// This is how we pass arguments
const ADD = (ADD1, ADD2)=> {
    console.log("Hello Ji")
}

// WOW syntax
// if only have one parametre then
const squareNumber = (num) => num*num;
// This Blunder
const squareNumber = num => num*num;



// IIFE
// That automatically Calls 
(function greeting(){
    console.log("Hello JI")
}) ();


/* ------------------------------------------------------------------------------------------- */
//CALLBACK()
// Heart of JS
// We can Pass argument as a fuction


function greet(){
    console.log("HELLO")
}

function meet(callback){
    console.log("BYE-BYE")
    callback();
}

meet(greet);       
// returns
// HELLO
// BYE-BYE