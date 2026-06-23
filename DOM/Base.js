// DOM 
// Haam HTML ke elements ko manupulate nahi kar pa rahe the with JS so We converted HTML element into DOM
// That called Document Object Model. Therefore, Browser creates

const temp = document.getElementById("HTML elemrnt ki ID")
// In this temp variable object get created
// example:like temp = {color: orange, text: hello world ------}

// if we want to change the text of that HTML element then
temp.innerText = "change it";    // selects what shown on screen.
temp.textContent = "change it";  // selects whole text ignore tags.


// Agar tag ke basis me select karna hai to
temp = document.queryselector("h1")

// also with class we can select
temp = document.queryselector(".className")

document.querySelectorAll("h2")
// Returns NodeList


// We can Also create its own element by JS like h1,h2
const newElement = document.createElement("h2")
newElement.textContent = "Hello World"
newElement.id = "second"
//for displaying element like we want to display after h1
const element = document.getElementById("first");
element.after(newElement);



// We can also do various things like
newElement.classList.add("third")    // this is better than, newElement.className = "third"
newElement.classList.add("fourth")   // that's why better, as we can assign multiple classes

newElement.style.backgroundColor = "pink"
newElement.style.fontSize = "20px"
