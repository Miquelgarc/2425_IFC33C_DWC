function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

var ford = new Marca("FORD");
var citroen = new Marca("Critroen");
var seat = new Marca("Seat");

var ffocus = new Modelo(ford, "FOCUS");
var fiesta = new Modelo(ford, "FIESTA");
var saxo = new Modelo(citroen, "SAXO");
var c4 = new Modelo(citroen, "C4");

var coches = [ffocus, fiesta, saxo, c4]
console.log(coches);

// var div = document.getElementById("app");
// var div = document.querySelector("body div:first-child");
var div = document.querySelector("#app")

// CREAR UNA TABLA
var table = document.createElement("TABLE");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var cabecreras = ["Marca", "Modelo"]

var th;
for (let cabecera of cabecreras) {
    th = document.createElement("th");
    th.innerText = cabecera;
    tr.appendChild(th);
}

// var th = document.createElement("th");
// th.innerText = "MARCA";
// tr.appendChild(th);
// var th = document.createElement("th");
// th.innerText = "MODELO";
// tr.appendChild(th);

var tbody = document.createElement("tbody");
table.appendChild(tbody);

var td;

for (var i = 0; i < coches.length; i++) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);
    
    for (var propiedad in coches[i]) {
        td = document.createElement("td");
        if (typeof coches[i][propiedad] === 'string') {
            td.innerText = coches[i][propiedad];
        } else {
            td.innerText = coches[i][propiedad].nombre
        }
        tr.appendChild(td);
    }
}


div.appendChild(table);

table.style.backgroundColor = "yellow";

console.log(table);