// primitive data types(Non-Mutable We can't change like str[0]='B')
// string, number, boolean, null, undefined, symbol, bigint
let name = "dvyynsh";
let age = 30;
let isStudent = true;
// Important Thing null ka Type cheack Karoge to Object ayga because 10 din me language bana he LMAO
let address = null;      // intensionally set to have no value  (ep. unable to provide)
let phoneNumber;
let uniqueId = Symbol("id");
let bigNumber = 1234567890123456789012345678901234567890n;  // n at the end indicates it's a BigInt

/*-------------------------------------------------------------------------------------------------------------- */

// non-primitive data types(They Are Mutable means we can change like arr[0]=2)
// object, array, function
let person = {
    name: "Divyansh",
    age: 20,
    isStudent: true
}; // This is OBJECT

let arrays = [1, 2, "roger", 4, 5];

function greet() {
    console.log("Hello, " + name);
}

// Also We can store function in a variable
let x = function greet() {
    console.log("Hello, " + name);
};