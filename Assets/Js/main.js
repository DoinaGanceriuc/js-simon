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

const randomNumber = setInterval(generateRandomNumbers, 1000);




function generateRandomNumbers() {
    alertNumbers = Math.floor(Math.random() * 100);
    alert(alertNumbers);
    counter--
    console.log(alertNumbers);
    //console.log(counter);
    if(counter == 0) {
       clearInterval(randomNumber)
    }

}
