// Array of 10 original, safe quotes
const quotes = [
  "Success is built on small, consistent actions.", 
  "Learning never stops; curiosity is the fuel.", 
  "A problem well-defined is a problem half-solved.", 
  "Discipline beats motivation every single time.", 
  "Your future is shaped by what you do today.", 
  "Simplicity is the ultimate form of sophistication.", 
  "Every expert was once a beginner.", 
  "Small progress is still progress.", 
  "Focus on being productive, not busy.", 
  "Consistency turns average into excellence."
];


// Try to select HTML elements 
const button = document.querySelector("button");
const quote = document.querySelector("h1");
// Now we can manupulate button and h1 tag...

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*10);
    quote.textContent = quotes[index];
})