// objects how we create
const user = {
    name: "Rohit",
    age: 20,
    email: "divyansh205044@gmail.com",
    amount: 4000
}

// update
user.aadhar = 1234;
// Now in User aadhar also gets added



// delete 
delete user.email;



// How we use loop
for( let keys in user){
    console.log(keys, value[keys])
}



// object ko destructing karna
const {name: userName, age: userAge} = user;
// Now we can also use "userName" in place of name



// For of loop Arrays (better than that previouse)
const tempArr = Object.keys(user)        // also use Object.values(user)    Also Object.entries(user)
console.log(tempArr)                     // ['name','age','email','amount']
for (let keys of tempArr){
    console.log(keys)
}


// we can also create Function inside object
const Yep = {
    name: "Rohit",
    age: 20,
    email: "divyansh205044@gmail.com",
    amount: 4000,
    greeting: function(){
        console.log(`HELLO WORLD ${this.name}`)      // "user.name" creates an problem you know
    }
}

Yep.greeting();



// we can also create nested object 
const Yep = {
    name: "Rohit",
    age: 20,
    email: "divyansh205044@gmail.com",
    amount: 4000,
    address: {
        planet: "Earth",
        Day: 12
    }
}


// we can also create independent copies
const user2 = structuredClone(user);

