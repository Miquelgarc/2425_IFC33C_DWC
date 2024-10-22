// EXERCICI 1
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// EXERCICI 2
for (let i = 1; i < 10; i++) {
    console.log("Taula del " + i);
    for (let y = 1; y < 10; y++) {
        
        resultat = i * y;
        console.log(i + " x " + y + " = " + resultat);
    }
}

// ExERCICI 3
let lengthOnKm = 10;

function quilòmetresAMilles(distancia) {
    return distancia * 0.621371;
}

console.log("quilometres: " + lengthOnKm + "\n" + "milles: " + quilòmetresAMilles(lengthOnKm));

// EXERCICI 4
