// JS was a single threaded synchronous language.
// means it execute one task at a time.

// asyn Await
async function greeting() {
    return "dvyynsh";
}
// Always Return a promise
// returns Promise {'dvyynsh'}


// How we Fetch API as its async Task Becuase it will going to take some time
fetch("https://api.example.com")
.then((response)=>response.json())   // convert it into JS object
.then((data)=>console.log(data))
// But not a Familar Format Not Good Anymore


// But this will throght error as it unable to fetch because of Async
const response = fetch("https://api.example.com")
const data = response.json();
console.log(data);
// And JS will not wait for fetch so that why it throw an error

//------------------------------------------------------------------------------------------------------------

// So we use "await"
const response = await fetch("https://api.example.com")
const data = await response.json();
console.log(data);
// await means dont move to next line until its done.
// But one problem Jo Baki ke task Program ke ruk Gaye isse
// So how we need to figure this one out...


// Now it will Run Cool by Putting in async Function.
// So if it will take time then this func will not execute
async function github(){
    const response = fetch("https://api.example.com")
    const data = response.json();
    console.log(data);
} 
// Moral Don't Leave await in open...


