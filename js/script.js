console.log("JS OK");

// ESERCIZIO 1

// creo le mie variabili

const resultDiceUser = document.getElementById('dice-user');
const resultDicePc = document.getElementById('dice-pc');
const resultRollDices = document.getElementById('result-roll-dices')
let finalResult = '';

// genero i 2 numeri random

const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser);

const randomNumberPc = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberPc);

//controllo il risultato del confronto fra i 2 numeri usciti

if (randomNumberPc > randomNumberUser){
    finalResult = "Hai perso, ha vinto il pc!";
}

else if (randomNumberPc < randomNumberUser){
    finalResult = "Hai vinto, complimenti!";
}

else if (randomNumberPc === randomNumberUser){
    finalResult = "Hai pareggiato, riprova sarai più fortunato!";
}

//stampo il tutto nell'html

resultDiceUser.innerText = randomNumberUser;

resultDicePc.innerText = randomNumberPc;

resultRollDices.innerText = finalResult;

// ESERCIZIO 2

// creo le mie variabili e il mio array

const emailsAuthorized = [
    "ioposso@sium.lol",
    "iopossoancora@sium.lol",
    "iopossoeriposso@sium.lol",
    "iopossoetuno@sium.lol",
    "iopossoeccome@sium.lol",
]

const userEmail = document.getElementById("user-email");
const checkButton = document.getElementById("check-button");
const permissionMessage = document.getElementById("permission");

let valid = 'false'; // variabile per la validazione

//metto il button in ascolto
checkButton.addEventListener('click', function (){
    
    // controllo ogni elemento dell'array
    for(let i = 0; i < emailsAuthorized.length; i++){

        // Vedo se l'email è uguale ad un elemento dell'array
        if(emailsAuthorized[i] === userEmail.value){
            valid = "true";
        }

    }
    
    //stampo il risultato differente in base al valore della variabile di validazione
    if(valid === "true"){
        permissionMessage.innerText = "Sei autorizzato a procedere oltre";
    }

    else{
        permissionMessage.innerText = "Non sei autorizzato a procedere oltre, la tua email non è tra quelle selezionate";
    }
})