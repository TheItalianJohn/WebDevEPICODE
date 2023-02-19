/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA
let Num = [12, 20];
let MaxNum = Math.max(...Num);
console.log(MaxNum);
 */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let Num = 5
if (Num != 5) {
  console.log("equal")
} else {
  console.log("not equal")
}
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA

let num = 25
if (num % 5 == 0) {
  console.log("divisible by 5")
} else {
  console.log("not divisible by 5")
}
 */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA

let num1 = 2;
let num2 = 7;
    if (num1 == 8 || num2 == 8) {
        console.log("Uno dei valori è uguale a 8");
    }  else if (num1 + num2 == 8 || num1 - num2 == 8){
        console.log("La somma o la sottrazione è uguale a 8");
    } else {
        console.log("Nessun valore è uguale ad 8 e nemmeno la loro somma/sottrazione");
    } 
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

const ShippingCost = 10;
let ShoppingCart = 49;
let totalShoppingCart;
if (ShoppingCart >= 50) {
  totalShoppingCart = ShoppingCart;
} else {
 totalShoppingCart = ShoppingCart + ShippingCost;
}
console.log(totalShoppingCart);
*/


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA

const ShippingCost = 10;
let ShoppingCart = 100;
let promo = (ShoppingCart*50/100);
let totalShoppingCart;
if (ShoppingCart - promo >= 50) {
  totalShoppingCart = ShoppingCart - promo;
} else {
 totalShoppingCart = ShoppingCart - promo + ShippingCost;
}
console.log(totalShoppingCart);
 */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num1 = 1;
let num2 = 3;
let num3 = 2;
let array = [num1,num2,num3];
for (j=0;j < array.length; j++)
  for (i=0;i < (array.length - j - 1); i++){
    if (array[i] < array[i + 1]) {
      let tmp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = tmp;
    }
}
console.log(array)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/




/* SCRIVI QUI LA TUA RISPOSTA 

let int = 1
let notint = 1.2
console.log(Number.isInteger(int))
console.log(Number.isInteger(notint))

*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA

let num = -1
if (num % 2 === 0){
  console.log("il numero " + num + " è pari")
} else {
  console.log("il numero " + num + " è dispari")
}
 */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/




/* SCRIVI QUI LA TUA RISPOSTA 

  let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
    
*/

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione. 
  num < 5 - mostra in console "Tiny"
num < 10 - mostra in console "Small"
num < 15 - mostra in console "Medium"
num < 20 - mostra in console "Large"
num >= 20 - mostra in console "Huge"*/

/* SCRIVI QUI LA TUA RISPOSTA 

let num = 21;
if (num < 5) {
  console.log("Tiny") 
} else if  (num < 10){
  console.log("Small")
} else if (num < 15){
  console.log("Medium")
} else if  (num < 20){
  console.log("Large")
} else if  (num >= 20){
  console.log("Huge")
}
*/

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let isMale = "Si"
gender = (isMale=="Si")?"male":"female";
console.log(gender)
*/

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/




/* SCRIVI QUI LA TUA RISPOSTA 
let n = 0
 while (n <= 5){
  console.log(n)
  n++
 }
 */

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

for (i=0;i<=10;i++){
  console.log(i)
}
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA

for (i=0;i<=10;i++){
  if (i!=3 && i!=8){
    console.log(i)
  }  
}
 */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

for (i=0;i<=15;i++){
  if (i % 2 === 0){
    console.log(i + ": pari")
  } else {
    console.log(i + ": dispari")
  }
}
*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for(i=1;i<=100;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log(i + ": FizzBuzz")
  } else if(i % 5 === 0){
    console.log(i + ": Buzz")
  } else if(i % 3 === 0){
    console.log(i + ": Fizz")
  } else {
    console.log(i)
  }
}
*/

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let day = 5
switch(day){
  case 1:
    console.log("lunedì")
  break
  case 2:
    console.log("martedì")
  break
  case 3:
    console.log("mercoledì")
  break
  case 4:
    console.log("giovedì")
  break
  case 5:
    console.log("venerdì")
  break
  case 6:
    console.log("sabato")
  break
  case 7:
    console.log("domenica")
  break
  default:
  console.log("valore non corretto")
  break
}
*/