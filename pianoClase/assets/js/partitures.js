function Partitura(nombre, idioma) {
    this.nombre = nombre;
    this.idioma = idioma;
}

let partituras = [];
partituraLaBalaguera = new Partitura("La Balaguera", "Català");
partituras.push(partituraLaBalaguera);
partituraHappyBirthday = new Partitura("Happy Birthday", "Castellano");
partituras.push(partituraHappyBirthday);
partituraMerryChristmas = new Partitura("Merry Christmas", "English");
partituras.push(partituraMerryChristmas);
partituraSchöneWeihnachten = new Partitura("Schöne Weihnachten", "Deutsch");
partituras.push(partituraSchöneWeihnachten);
partituraJoyeuxNoël = new Partitura("Joyeux Noël", "Français");
partituras.push(partituraJoyeuxNoël);

function mostrarTaulaPartitures() {
    // HEAD TAULA
    let taula = document.createElement("table");
    taula.setAttribute("class", "score-table");
    let thead = document.createElement("thead");
    let columnes = ["Titol", "Idioma Original", "Accions"];
    for (let i = 0; i < columnes.length; i++) {
        let cel = document.createElement("th");
        cel.innerHTML = columnes[i];
        thead.appendChild(cel);
    }
    taula.appendChild(thead);

    // BODY TAULA
    let tbody = document.createElement("tbody");
    for (let partitura of partituras) {
        let fila = document.createElement("tr");
        fila.setAttribute("id", partitura.nombre);
        // TITOL
        let titol = document.createElement("td");
        titol.innerHTML = partitura.nombre;
        fila.appendChild(titol);
        // IDIOMA
        let idioma = document.createElement("td");
        idioma.innerHTML = partitura.idioma;
        fila.appendChild(idioma);
        // BOTO EDITAR
        let accions = document.createElement("td");
        let boto = document.createElement("button");
        boto.setAttribute("onclick", "editarPartitura('" + partitura.nombre + "')");
        let i = document.createElement("i");
        i.setAttribute("class", "fas fa-edit");
        boto.appendChild(i);
        boto.innerHTML += "Editar";
        accions.appendChild(boto);
        //BOTO BORRAR
        let boto2 = document.createElement("button");
        boto2.setAttribute("onclick", "borrarPartitura('" + partitura.nombre + "')");
        let i2 = document.createElement("i");
        i2.setAttribute("class", "fas fa-trash");
        boto2.appendChild(i2);
        boto2.innerHTML += "Esborrar";
        accions.appendChild(boto2);
        fila.appendChild(accions);
        tbody.appendChild(fila);
    }
    taula.appendChild(tbody);
    document.body.appendChild(taula);

}

function borrarPartitura(titol) {
    if (confirm("Estàs segur que vols esborrar aquesta partitura?")) {
        alert("Element esborrat");
        document.getElementById(titol).remove();
    } else {
        alert("Acció cancel·lada");
    }
}
mostrarTaulaPartitures();