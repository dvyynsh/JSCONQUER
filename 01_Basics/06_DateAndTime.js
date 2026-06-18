// Date kaise nikalte hai
// UTC wala Time dikhayega(universal time coordinate)
const Now = new Date();
console.log(Now);

// Now it will show in correct format
console.log(Now.toString())

// Similary We have 
console.log(Now.getDate())
console.log(Now.getDay())
console.log(Now.getHours())

// Days: Mon-Tue(1 2 3 based)
// Months: (0 1 2 based)

const now = Date.now();
// returns miliseconds from 1 Jan 1970