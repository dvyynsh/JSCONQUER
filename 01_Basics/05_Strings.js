const name = "hitesh"
const repoCount = 50
// console.log(name + repoCount + " Value"); ----> hitesh50 Value ----> {outdated syntax}
// console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);
// ${ } for injecting variables


const gameName = new String('hiteshhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);   


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)   // return "hite" 
console.log(newString);

const anotherString = gameName.slice(-8, 5)  // return "hites"
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));