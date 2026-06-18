// Generate String
const str1 = "Divyansh"   // next line me le jaoge to throws an error.
const str2 = 'Divyansh'
const str3 = `Divyansh`   // Most Modern Tareeka, will not raises error if next line.  

// Even More
let age = 20;
const str4 = `Divyansh ${age}`;

// String Functions
console.log(str1.length())
console.log(str1[0])
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
console.log(str3.indexOf('ya'))    // if "ya" present then return its index = 3 here if not then -1
console.log(str3.includes('Div'))  // If hai to True otherwise False
console.log(str3.slice(2,5))       // Returns sliced string
// don't need to memorize these, just search google.....


