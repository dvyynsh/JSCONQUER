let marks = [1,2,3,4,5,6,7,8,9]


// Also We can put different data in single array
let arr = [100, 30, "Rohit", true]
// Also they are mutable we can update element


// Functionality
arr[1] = 0;
arr.push(9);
arr.pop()
arr.unshift(10)    // 10 gets added in begenning
arr.shift()        // first element got deleted
// but using these Shift, unshift decreases performance



arr.slice(0,5)     // returns new array
arr.splice(0,4)    // (start, kitne elements hatne hai), orignal arrays se wo 4 elemnts haat gaye 
arr.splice(0,4,"dvyynsh",34)    // (start, kitne elements hatne hai, add elem1, add elem2, ect)


// how we join these "+" will not work
const arr1 = [10,30,50,90,11]
const arr2 = ["dvyynsh",11,true]

arr1.push(arr2);
// But returns [10,30,50,90,11,["dvyynsh",11,true]]

arr1.concat(arr2);
// returns a new array

const arr3 = [...arr1, ...arr2]
// returns [10,30,50,90,11,"dvyynsh",11,true]

const a = [101,90,80,32,91];
a.sort();
a.reverse();
// returns [101,32,80,90,91]
// because it checks step-by-step
// Also if string then compare charactor-by-charactor

arr.sort((a,b)=>a-b)
// Now this function will return Correct
// a-b ---- if negative then returns 1st
// a-b ---- if positive then returns 2nd

arr.sort((a,b)=>b-a)
// decending order

arr.flat(Infinity)   // Saab ko flat kar do
