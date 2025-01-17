document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    crearTabla(json);
}
let json = [
    { "id": 1, "nombre": "Camisa", "precio": 20.99 },
    { "id": 2, "nombre": "Pantalón", "precio": 35.50 },
    { "id": 3, "nombre": "Zapatos", "precio": 50.00 }
]


function crearTabla(json) {
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("style", "border-collapse: collapse;");

    let cabecera = document.createElement("tr");
    for (let key in json[0]) {
        let th = document.createElement("th");
        th.textContent = key;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for (let i = 0; i < json.length; i++) {
        let fila = document.createElement("tr");
        for (let key in json[i]) {
            let td = document.createElement("td");
            td.textContent = json[i][key];
            fila.appendChild(td);
        }
        let boton = document.createElement("button");
        boton.addEventListener("click", destacarFila);
        boton.textContent = "Destacar";
        fila.appendChild(boton);
        tabla.appendChild(fila);
    }
    document.body.append(tabla);
}

let destacarFila = () => {
    let fila = event.target.parentNode;
    fila.style.backgroundColor = "yellow";
}

