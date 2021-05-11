// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studenti =
[
    {
        nome: "Stefano",
        cognome: "Zina",
        eta: 29,
    },

    {
        nome: "Giovanni" ,
        cognome: "Rana",
        eta: 83,
    },

    {
        nome: "Danny",
        cognome: "DeVito",
        eta: 76,
    },

    {
        nome: "Aldo",
        cognome: "Baglio",
        eta: 62,
    }
];
console.log("Mostra ciò che è contenuto in [studenti]:");
console.log(studenti);

var names = [];
for(var key in studenti) {
 names.push(key + ": " + studenti[key]);
}


// questo ciclo for in è specifico per ricercare una key all'interno del "studenti". Nel caso specifico di un array con un solo oggetto va bene, nel caso di un array con più oggetti al "for-in" mi darà l'index. Quindi da recuperare l'oggetto  facendo esempio.nomi => variabile . Console.log(variabile).


// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var arrayNomi = [];
var arrayCognomi = [];
var arrayEta = [];

for (i = 0; i < studenti.length ; i++) {
    var totaleOggetti = studenti[i];
    console.log("Proprietà oggetto stampate:")
    console.log(totaleOggetti);

    // Creare un array di oggetti di studenti.
    var totaleNomi = studenti[i].nome;
    console.log("Nomi singoli da mettere in array: " + totaleNomi);
    arrayNomi.push(totaleNomi);

    var totaleCognomi = studenti[i].cognome;
    console.log("Cognomi singoli da mettere in array: " + totaleCognomi);
    arrayCognomi.push(totaleCognomi);

    var totaleEta = studenti[i].eta;
    console.log("Eta singole da mettere in array: " + totaleEta + "\n ");
    arrayEta.push(totaleEta);
  
}
console.log(arrayNomi);
console.log(arrayCognomi);
console.log(arrayEta);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i = 0; i < studenti.length; i++){
    var nomiCognomi = studenti[i].nome + " " + studenti[i].cognome;
    console.log(nomiCognomi);  
};

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
var newInput = {
    nome: prompt("Inserisci qui un nome:"),
    cognome: prompt("Inserisci qui un cognome:"),
    eta: parseInt(prompt("Inserisci qui l'eta:")),
};
studenti.push(newInput)

//controllo di ciò che ho nel primo array di oggetti
console.log(newInput)
console.log(studenti)
