function handleClick(){
    const temp = document.getElementById("first")
    temp.textContent = "You clicked I changed"
}


// But we use another method this one
const temp = document.getElementById("first")
temp.addEventListener('click',()=>{
    temp.textContent = "You clicked I changed";
})

// also about 'e' - This event object contains information about an event that has occurred
// in the web browser such as a mouse click, a keyboard press, or a user interaction.
temp.addEventListener('click',(e)=>{
    e.target.textContent = "You clicked I changed"
})