// Closure ????
// A function that Remembers Variable from its outer scope even when fuction is done. 
function outerFunction() {
    let counter = 0; // private variable

    function innerFunction() {
        counter++;
        console.log(counter);
    }

    return innerFunction;
}

const increment = outerFunction(); // outerFunction executes and returns innerFunction

increment(); // 1
increment(); // 2
increment(); // 3

// Rather than stating from "0" As we see still It goes on 1,2,3 




//--------------------------------------------------------------------------------------------
// Closure can be used to make variables private.



//let balance = 500                 don't directly give access otherwise user can change this ep: let balance = "dvyynsh"

function createBankAccount(){
    let balance = 500;             // Actually we made privately.

    return{
        deposit: function(amount){
            if(typeof amount==="number" && amount>0){
                balance+=amount;
                return balance;
            }
        },

        withdraw: function(amount){
            if(typeof amount==="number" && amount>=balance){
                balance-=amount;
                return balance;
            }
        }
    }
}