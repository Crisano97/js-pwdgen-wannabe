// Chiediamo all'utente il suo nome;
const userName = prompt('Nome');

console.log(userName);

document.getElementById('user-name').innerHTML = userName;


//Chiediamo all'utente il suo cognome;
const userSurname = prompt('Cognome');

console.log(userSurname);

document.getElementById('user-surname').innerHTML = userSurname;            

//Chiediamo all'utente il suo colore preferito;
const userFavouriteColor = prompt('Colore preferito');

console.log(userFavouriteColor);

document.getElementById('user-favourite-color').innerHTML = userFavouriteColor;

// Chiediamo all'utente quanti anni ha;
const userAge = prompt('Anni');

console.log(userAge);

document.getElementById('user-age').innerHTML = userAge;

//Generiamo una password dai valori espressi dall'utente;

let userPassword = userName + userSurname + userFavouriteColor + userAge;

document.getElementById('user-password').innerHTML = userPassword