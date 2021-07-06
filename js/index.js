var surnamesList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var message = "";
var resultPlaceHolder = document.getElementById("result");

var surnameUser;
do {
    do {
        surnameUser = prompt("Inserire un cognome");
    } while (!surnameUser);

    surnamesList.push(surnameUser);
    surnamesList.sort();

    for (var i=0; i<surnamesList.length; i++) {
        console.log(i+1, surnamesList[i]);
        message += i+1 + ": " + surnamesList[i] + "<br>";
    }

    console.log("Il tuo cognome si trova in posizione: ", surnamesList.indexOf(surnameUser)+1);
    message += "Il cognome inserito si trova in posizione: " + (surnamesList.indexOf(surnameUser)+1) + "<br>";

    do {
        var keepGoing = prompt("Si vuole aggiungere un altro cognome in lista?");
    } while (keepGoing!= "si" && keepGoing!= "no");
} while(keepGoing!= "no");

resultPlaceHolder.innerHTML = message;