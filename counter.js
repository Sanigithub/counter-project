//button and counter text 
const counter = document.querySelector(".counter");
//initialize count variable
let count = 0;
//
function changeCounter(button){
 if(button == increase){
     count +=1;
 }
 else if(button == decrease){
     count -=1;
 }
 else if(button == reset){
     count = 0;
 }
 counter.innerHTML = count;
}




