setInterval(()=>{
const result = document.getElementById('result');

const currentTime = Date.now();                       // ajj ka time
const olympicTime = new Date(2028,6,14).getTime();    // iss time pe chalu hoga olympic

let timer = olympicTime-currentTime;                  // subtract karege to kitna time bacha chalu hone me pata chal jayega

// millsecond se hours-days-min saab me convert kar sakte hai...
// 1000 - will convert Milli to Sec
// 60 - Will Convert Sec to Min
// 60 - Will Convert Min to Hour
// 24 - Will Convert Hour to Days
const day = Math.floor((timer)/(1000*60*60*24));  
timer%=1000*60*60*24;   // ussi ka mod ki kitna bacha milli-sec
const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;
const second = Math.floor((timer)/(1000));
timer%=1000;

result.textContent = `${day}:Days ${hour}:Hour  ${minute}:Minute ${second}:Second`;
},1000);
