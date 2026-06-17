// Arithmetic Operator
console.log(2+5)
console.log(2-5)
console.log(2*5)
console.log(6/2)
console.log(5%2)
console.log(2**5)


// Assigment operator
let x = 20;
let y = 10;
x = x+y;
console.log(x);


// Comparison Operator
let x = 10
let y = "20"
console.log(x>y)
console.log(x>=y)
console.log(x==y)      // True because JS converts string into number
console.log(x===y)     // False
// dono same type ke hone chaiye then ===, will return true
let a = "abc45"
let b = Number(a)
console.log(b)         // return NaN -> Not a number because we can't convert mixture of string-number..



//-------------------------------------------------------------------------------------------------------


console.log(Number(null))          // return "0" as it converted into 0
console.log(Number(undefined))     // return "NaN"

//if >,<=,>=,< These used (then null ---> Number , undefined ---> NaN me convert ho jayega)
console.log(null>=0)   // True
console.log(null<=0)   // True
console.log(null<0)    // False
console.log(null>0)    // False
console.log(10>"10")   // False
console.log(10>="10")  // True
