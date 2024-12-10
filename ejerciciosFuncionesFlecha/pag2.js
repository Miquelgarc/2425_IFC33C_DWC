// EJERCICIO 1

let numeros = [3, 8, 133, 50, 2, 33, 7, 9, 10, 999, 36, 735];


let ordenar = (numeros) => {
    let arrayAsc = [...numeros].sort((a, b) => a - b);
    let arrayDesc = [...numeros].sort((a, b) => b - a);
    return [arrayAsc, arrayDesc];
}

for (let array of ordenar(numeros)) {
    let ul = document.createElement("ul");
    let p = document.createElement("p");
    p.innerText = array === ordenar(numeros)[0] ? "Ascendente" : "Descendente"; // Si L'array és el primero, el texto sera ascendente, sino, descendente
    document.body.appendChild(p);
    for (let numero of array) {
        let li = document.createElement("li");
        li.innerText = numero;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);

}

let mostrarNumeros = () => {

}
mostrarNumeros(numeros);



// EJERCICIO 2

let personas = [
    { nombre: "Juan", edad: 60 },
    { nombre: "Ana", edad: 33 },
    { nombre: "Pedro", edad: 4 },
    { nombre: "Maria", edad: 80 },
    { nombre: "Luis", edad: 10 }
]

let ordenarPersonas = (personas) => {
    return personas.sort((a, b) => a.edad - b.edad);
}

let mostrarPersonas = (personas) => {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let thNombre = document.createElement("th");
    let tdNombre;
    let thEdad = document.createElement("th");
    let tdEdad;
    thNombre.innerText = "Nombre";
    thEdad.innerText = "Edad";
    tr.appendChild(thNombre);
    tr.appendChild(thEdad);
    table.appendChild(tr);
    ordenarPersonas(personas);
    personas.forEach(persona => {
        tr = document.createElement("tr");
        tdNombre = document.createElement("td");
        tdNombre.innerText = persona.nombre;
        tr.appendChild(tdNombre);
        tdEdad = document.createElement("td");
        tdEdad.innerText = persona.edad;
        tr.appendChild(tdEdad);
        table.appendChild(tr);
    });
    document.body.appendChild(table);
}
mostrarPersonas(personas);


// EJERCICIO 3

let mostrarPropiedadesWindow = () => {
    let propiedades = Object.keys(window).sort((a, b) => a.localeCompare(b));
    let ul = document.createElement("ul");
    let li;
    propiedades.slice(0, 10).forEach(propiedad => {
        li = document.createElement("li");
        li.innerText = propiedad;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
mostrarPropiedadesWindow();