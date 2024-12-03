function Partitura(nombre, idioma) {
    this.nombre = nombre;
    this.idioma = idioma;
}

let partituras = [];

// Función para generar nombres e idiomas de forma dinámica
function generarPartituras(cantidad) {
    let nombresBase = [
        "La Balaguera", "Happy Birthday", "Merry Christmas", 
        "Schöne Weihnachten", "Joyeux Noël", "Frère Jacques", 
        "O Tannenbaum", "Silent Night", "Feliz Navidad", 
        "Auld Lang Syne"
    ];
    let idiomas = ["Català", "Castellano", "English", "Deutsch", "Français", "Italiano", "Português", "Nederlands", "Русский", "中文"];

    for (let i = 0; i < cantidad; i++) {
        // Seleccionar un nombre e idioma al azar
        let nombre = nombresBase[i % nombresBase.length] + ` ${i + 1}`;
        let idioma = idiomas[i % idiomas.length];

        // Crear y agregar la partitura al array
        let partitura = new Partitura(nombre, idioma);
        partituras.push(partitura);
    }
}

// Generar 100 partituras
generarPartituras(100);

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
        boto2.setAttribute("onclick", "borrarPartitura()");
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

function borrarPartitura() {
    if (confirm("Estàs segur que vols esborrar aquesta partitura?")) {
        event.target.parentElement.parentElement.remove();
        alert("Element esborrat");
    } else {
        alert("Acció cancel·lada");
    }
}

function mostrarLogin() {
    window.open("login.html", "up", "width=600, height=400");
}
mostrarTaulaPartitures();