// forEach, filter, reducer, map, set

const arr = [10,20,30,40,50];

arr.forEach((number)=>{
    console.log(number);     // It will Print 10, 20, 30 "Rohit" like wise
})


arr.forEach((number, index)=>{
    console.log(number, index);  // It will print index also just adjacently
})


arr.forEach((number, index, arr)=>{
    console.log(number, index, arr);     // It will print arr also
})


// If we want to find Sum?
const arr2 = [10,20,30,40,50];
let sum = 0;
arr.forEach((number)=>{
    sum += number;
})
console.log(sum);

//-------------------------------------------------------------------------------------------------
// filter - returns new array

const arr3 = [10,20,30,40,50,5,78];
const newArr = arr.filter((number)=> number>25);    // and this is how one line kind of function created in JS
console.log(newArr);


// Map - The map() method in JavaScript creates a new array by applying a function to each element of the original array. It does not modify the original array and skips empty elements.
const numbers = [1, 4, 9];
const roots = numbers.map(num => Math.sqrt(num));
console.log(roots); // Output: [1, 2, 3]



// **************************************************************************************************************
// Best real World Case
// Sample array of product objects
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shoes", price: 150, category: "Fashion" },
    { name: "Watch", price: 250, category: "Fashion" },
    { name: "Book", price: 20, category: "Education" }
];

// Method chaining: filter → sort → map
const result = products
    .filter(product => product.price > 100) // Keep products priced above 100
    .sort((a, b) => a.price - b.price)      // Sort by price (ascending)
    .map(product => `${product.name} - ${product.price}`); // returns [ 'Shoes - $150', 'Watch - $250', 'Phone - $800', 'Laptop - $1200' ]

    console.log(result);



// set Data Structure
// is a list that have unique elements, duplicacy not allowed

// This is how we create set
const arr = [10,20,30,30,30,40,40,50,60]
const S1 = new Set(arr);          // returns [10,20,30,40,50,60]

S1.has(34)       // return true or false
S1.delete(50) 



// Map
const m1 = new Map([
    ["Rohit", 40],
    [true, 11],
    [[10,30,11], "dvyynsh"]
]);

console.log(m1)

// if Want to add new element in Map
m1.set({name:"Divyansh", age:20}, false)
