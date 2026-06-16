// var se declare karege to do bar same variable create karne me No error Exp....
// also scope ke bahar bhi access if(){} wale ke 
var Yoo = "Divyansh"
var Yoo = "Divyansh"
console.log(Yoo)

if(true){
    var name = "Divyansh"
}
console.log(name)  // still prints
// Old method


// Variable ko kaise banate hai, but here let will not allow
let name = "Divyansh"
console.log(name)

let age1 = 20
age1 = 30
console.log(age1, name)

const age2 = 40
console.log(age2, name)
// Now you can't change

