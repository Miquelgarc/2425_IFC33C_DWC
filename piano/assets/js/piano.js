var cerca = ["DO", "DO", "RE", "DO"];
var partitures = [
    { nom: "La Balanguera", notes: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
    { nom: "Happy Birthday", notes: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] }
];
function Nota(nom, tipus) {
    this.nom = nom;
    this.tipus = tipus;
}
function Partitura(nom, melodia) {
    this.nom = nom;
    this.melodia = melodia;
}

let melodiaLaBalaguera = [
    new Nota("DO", ""),
    new Nota("RE", ""),
    new Nota("MI", ""),
    new Nota("FA", ""),
    new Nota("FA", ""),
    new Nota("SOL", ""),
    new Nota("SOL", ""),
    new Nota("LA", "#"),
    new Nota("LA", "#")
];
let melodiaHappyBirthday = [
    new Nota("DO", ""),
    new Nota("DO", ""),
    new Nota("RE", ""),
    new Nota("DO", ""),
    new Nota("FA", ""),
    new Nota("MI", ""),
    new Nota("DO", ""),
    new Nota("DO", ""),
    new Nota("RE", ""),
    new Nota("DO", ""),
    new Nota("SOL", ""),
    new Nota("FA", "")
];
function addcerca(nom, tipus) {
    var novaNota = new Nota(nom, tipus);
    cerca.push(novaNota.nom + novaNota.tipus);
}
cercador1();
function cercador1() {
    var resultats = [];
    console.log("RESULTATS:")
    for (var partitura of partitures) {
        if (comparar(partitura, cerca)) {
            resultats.push(partitura.nom);
        }

    }

    if (resultats.length > 0) {
        console.log("Partitures trobades: " + resultats);
    } else {
        console.log("Sense resultats");
    }
}

function comparar(partitura, cerca) {
    var notesPartitura = partitura.notes;
    var longitudCerca = cerca.length;

    for (var y = 0; y <= notesPartitura.length - longitudCerca; y++) {
        var trobat = true
        for (var i = 0; i < longitudCerca; i++) {
            if (cerca[i] !== notesPartitura[i + y]) {
                trobat = false;
                break;
            }
        }
        if (trobat) {
            return true;
        }

    }
    return false;
}