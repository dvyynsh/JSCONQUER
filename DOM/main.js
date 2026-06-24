const list = document.createElement("li");  // listitem created actually empty list cretated
list.textContent = "milk" // first element added

// ul wala element selected jiska id = "listing" hai
const unorderedElement = document.getElementById("listing")
unorderedElement.append(list)



// By using Loop we putting all element in once
const arr = ["milk", "Halwa", "Paneer", "tofu"]
const unorderedElement = document.getElementById("listing")
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    unorderedElement.append(list);
}
// its not an optimized method because if list is big 1000 then UI will change several times



// Best practice we create fragment
const arr = ["milk", "Halwa", "Paneer", "tofu"]
const unorderedElement = document.getElementById("listing")
const frag = createDocumentFragment()
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    unorderedElement.append(frag);
}
unorderedElement.append(Frag)