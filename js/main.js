// Chiediamo all'utente il suo nome;
const userName = prompt('Inserisci il tuo nome');

console.log(userName)

document.getElementById('user-name').innerHTML = userName;


//Chiediamo all'utente il suo cognome;
const userSurname = prompt('Inserisci il tuo cognome');

console.log(userSurname)

document.getElementById('user-surname').innerHTML = userSurname;            

//Chiediamo all'utente il suo colore preferito;
const userFavouriteColor = prompt('Inserisci il tuo colore preferito');

console.log(userFavouriteColor)

document.getElementById('user-favourite-color').innerHTML = userFavouriteColor;