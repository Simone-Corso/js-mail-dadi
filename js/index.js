// Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

// gioco dei dadi :
// creare una logica per realizzare numeri a caso dal 1 al 6, sia per il giocatore e per il computer
//SE il giocatore lancia il dado, ed esce il 24 
//SE il computer lancia il dado, ed esce il 15
//in questo caso il giocatore vince, perchè ha fatto uscire il numero più grande rispetto di quello che ha lanciato il computer.
//Altrimenti : se usciva 15 per il giocatore e 24 per il computer ---> vince il computer.

//1.- creare una variabile per generare il numero casuale per il giocatore
//  - andrò ad assegnare un numero randomico alla varibile"giocatore".
//  - quindi userò la funzione del math.random, come dice l'esercizio dal 1 al 6.
let x = Math.random();

console.log(x);

//  - per far si che funzioni il numero a random, dovremmo creare un input di tipo "button" nell'HTML che genera un numero randomico.

//2.- creare una variabile per generare il numero casuale per il computer
//  - andrò ad assegnare un numero randomico alla varibile"computer".
//  - quindi userò la funzione del math.random, come dice l'esercizio dal 1 al 6.
//  - per far si che funzioni il numero a random, dovremmo creare un input di tipo "button" nell'HTML che genera un numero randomico.