/* Descrizione:
- Un alert() espone 5 numeri generati casualmente.
- Da li parte un timer di 30 secondi.
- Dopo 30 secondi l'utente deve inserire, uno alla volta, i     numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

/* strumenti
-alert()
-Math random
-setInterval() + clearInterval()
-prompt
-if/else
*/


let alertNumbers;
let counter = 5;
let seconds = 30;
let timer;
let insertNumbers;
const randomListNumbers = [];
const userAddNumbers = [];

const randomelement = document.getElementById("random");
const startElement = document.getElementById("start");

const showRandomNumber = setInterval(showNumbers, 2000);
const hideRandomNumber = setInterval(hideNumbers, 4000);




function generateRandomNumbers() {
    for (let i = 0; i < 5; i++) {
   alertNumbers = Math.floor(Math.random() * 100);
   //console.log(alertNumbers)
   if(!randomListNumbers.includes(alertNumbers)) {
        randomListNumbers.push(alertNumbers)
        //console.log(randomListNumbers);
    } 
    
  }
  return randomListNumbers
}

const randomNumbers = generateRandomNumbers()
console.log(randomNumbers);
//alert(randomNumbers);

function showNumbers() {
    randomelement.innerHTML = randomNumbers
}

function hideNumbers() {
    randomelement.style.display = "none"
}


startElement.addEventListener("click", function() {
    timer = setInterval(function (){
     seconds--
    // console.log(seconds);
    document.getElementById("seconds").innerHTML = seconds

    if(seconds == 0) {
       clearInterval(timer)
        document.getElementById("seconds").innerHTML = ""
        addUserNumbers()
    }

}, 1000)
 });  
 
 
 function addUserNumbers() {
    for (let i = 0; i < 5; i++) {
   insertNumbers = Number(prompt("inserisci ogni numero che hai visto"));
   if(!userAddNumbers.includes(insertNumbers)) {
        userAddNumbers.push(insertNumbers)
        console.log(userAddNumbers);
    }
    
}
}