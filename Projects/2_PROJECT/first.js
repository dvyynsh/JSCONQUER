const parent = document.getElementById('parent');


// e = (event-listner) "e.target" the HTML element we clicked
parent.addEventListener('click',(e)=>{     // parent me event-listner that cover whole div
   const child = e.target;
   const body = document.querySelector('body');     // Now we can manupulate body 
   body.style.backgroundColor = child.id ;
}) 
