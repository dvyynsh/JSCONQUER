// Dates

let myDate = new Date()                     //generate date and we can't able to write
// console.log(myDate.toString());          //Now able to read the date  
// console.log(myDate.toDateString());      //Another different method
// console.log(myDate.toLocaleString());   
// console.log(typeof myDate);              //return object

// let myCreatedDate = new Date(2023, 0, 23)          //months starts from 0 to 11
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()   // return current date, But // return the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {    
    weekday: "long",
    
})
