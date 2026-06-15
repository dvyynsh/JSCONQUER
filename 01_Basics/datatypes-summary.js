//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100              // number
const scoreValue = 100.3       // number

const isLoggedIn = false       // boolean
const outsideTemp = null       // object => standalone value that represents "nothing" or "empty"
let userEmail;                 // undefined => a variable that has been declared but not assigned a value yet

const id = Symbol('123')           
const anotherId = Symbol('123')
console.log(id === anotherId);    // return false because each time we create a symbol, it is unique and different from any other symbol, even if they have the same description. 


// const bigNumber = 3456543576654356754n   


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);    // return (function or object) 

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object