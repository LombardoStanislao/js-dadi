// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.


// var numeriDado ['1', '2' , '3', '4', '5', '6'];

var giocatoreUno = Math.floor(Math.random() * 6) + 1 ;

var giocatoreDue = Math.floor(Math.random() * 6) + 1 ;

console.log(giocatoreUno);
console.log(giocatoreDue);

if (giocatoreUno > giocatoreDue) {

  console.log('Vincotore: Giocatore 1');

} else if (giocatoreDue > giocatoreUno ) {

  console.log('Vincotore: Giocatore 2');

} else if (giocatoreUno == giocatoreDue) {

  console.log('Parità');
}

// var array = [];
//
// for (var i = 0; i < 2; i++) {
//   array.push(giocatoreUno);
//
//   console.log(array);
// }
