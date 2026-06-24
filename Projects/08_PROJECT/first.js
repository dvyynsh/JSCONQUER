// clicker 

const body = document.querySelector('body');

body.addEventListener('click',(e)=>{           // body ke upar event listner to get details where we clicked
  console.log(e.clientX , e.clientY);          // By this we get Coordinate
  
  const circleElement = document.createElement('div');
  circleElement.classList.add('circle');      // circle name ki class defied hai
  circleElement.textContent = "HI";

  const color = ['red','blue','orange','green','pink','purple'];
  circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

  circleElement.style.top = `${e.clientY-25}px`;    // ${e.clientY}px  but in this Jaha par haam clcik kar rahe circl is not comming there
  circleElement.style.left = `${e.clientX-25}px`;   // ${e.clientX}px  thats why we shifted half of radius that was 50px


  body.append(circleElement);

  // Par wo hate nahi hai body se Opacity bass 0 hui hai
  setTimeout(()=>{
    circleElement.remove(); 
  },5000);

})