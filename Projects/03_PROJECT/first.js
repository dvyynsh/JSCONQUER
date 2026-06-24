const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();                         // submit karte hi data gayab nahi hoga abb
    const Boy = document.getElementById("Boy");
    const Girl = document.getElementById("Girl");

    const l1 = Boy.value.length;
    const l2 = Girl.value.length;

    const result = Math.pow(l1+l2,3)%101;      // Any logic you create just a random love between 0-100 

    document.querySelector('h2').textContent = `Result: ${result}%`;
    form.reset();                              // supressed e.preventDefault();
})