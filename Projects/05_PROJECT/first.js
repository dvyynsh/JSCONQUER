
const div = document.querySelector('div');

setInterval(()=>{      // setInterval function live dikhega change hote
   let time = new Date();
   div.textContent = time.toLocaleTimeString();   // sirf time wala part chaiye
},1000)   // It takes in milli-Second (every 1 sec me run karega)