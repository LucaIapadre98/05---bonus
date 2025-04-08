/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const userGreeting = prompt("Fai un saluto:")
console.log(userGreeting);

const greetingMorning = ("fino alle 13 :buongiorno!")
const greetingAfternon = ("fino alle 17:buonpomeriggio!")
const greetingDinner = ("oltre le 17: buonasera!")


// Dichiara la funzione qui.
function greetingName(buongiorno, buonpomeriggio, buonasera){
   let currentGreeting = greetingName [i];
    console.log(currentGreeting);

    for (let i = 0; i < greeting.length; i++) {
        if (userGreeting === greetingMorning){
            alert("buongiorno!");
            return true;
        }
        if (userGreeting === greetingAfternon){
            alert("buon pomeriggio!");
            return true;
        }
        else if(userGreeting === greetingMorning){
            alert("buonasera!");
            return true;
        }
    } 
}


// Invoca la funzione qui e stampa il risultato in console
greetingName();
console.log(greetingName[i]);

 



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.