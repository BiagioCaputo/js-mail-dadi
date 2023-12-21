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

