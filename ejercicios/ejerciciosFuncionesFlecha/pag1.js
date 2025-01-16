// Exercici 1
let exercici1 = () => {
    let p = document.createElement("p");
    p.innerText = "Este es un párrafo dinámico";
    document.body.appendChild(p);
}

exercici1();

// Exercici 2
let elementosLista = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"];

let afegirElements = (elementosLista) => {
    let ul = document.createElement("ul");
    for (let element of elementosLista) {
        let li = document.createElement("li");
        li.innerText = element;
        ul.appendChild(li);
    }
    return ul;
}
document.body.appendChild(afegirElements(elementosLista));

// Exercici 3

let mostrarElementosWindow = () => {
    let width = window.innerWidth;
    let height = window.innerHeight; 
    let p = document.createElement("p");
    p.innerText = `El ancho de la ventana es ${width} y el alto es ${height}`;
    document.body.appendChild(p);
}

mostrarElementosWindow();

//EXERCICI 4

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let persones = [new Persona("Pepito", 20), new Persona("Juanito", 30), new Persona("Pablito", 40)];

let taula = document.createElement("table");

let crearFilas = (persones) => {
    let tr = document.createElement("tr");
    let tdnombre = document.createElement("td");
    tdnombre.innerText = "Nombre";
    tr.appendChild(tdnombre);
    let tdedad = document.createElement("td");
    tdedad.innerText = "Edad";
    tr.appendChild(tdedad);
    for (let persona of persones) {
        tr = document.createElement("tr");
        tdnombre = document.createElement("td");
        tdnombre.innerText = persona.nombre;
        tdedad = document.createElement("td");
        tdedad.innerText = persona.edad;
        tr.appendChild(tdnombre);
        tr.appendChild(tdedad);
        taula.appendChild(tr);
    }
}
crearFilas(persones);
document.body.appendChild(taula);


//EXERCICI 5

let frase = "En coquinhio, es molt dolent xerrant amb dones";

let contarParaules = (frase) => {
    let paraules = frase.split(" ");
    let p = document.createElement("p");
    p.innerText = `La frase "${frase}" tiene ${paraules.length} palabras`;
    document.body.appendChild(p);
}

contarParaules(frase);

//EXERCICI 6

let num = 5;
let table = document.createElement("table");
let crearTaulaMultiplicar = (num) => {
    let tr;
    let tdnum
    let tdmult
    let tdres
    for (let i = 0; i <= 10; i++) {
        tr = document.createElement("tr");
        tdnum = document.createElement("td");
        tdnum.innerText = num;
        tdmult = document.createElement("td");
        tdmult.innerText = `x ${i}`;
        tdres = document.createElement("td");
        tdres.innerText = `= ${num * i}`;
        tr.appendChild(tdnum);
        tr.appendChild(tdmult);
        tr.appendChild(tdres);
        table.appendChild(tr);        
    }
    document.body.appendChild(table);
}

crearTaulaMultiplicar(num);

// EXERCICI 7

let mostrarInfoNavegador = () => {
    let p = document.createElement("p");
    p.innerText = `Nombre navegador: ${navigator.userAgent}`;
    document.body.appendChild(p);
    p = document.createElement("p");
    p.innerText = `Idioma: ${navigator.language}`;
    document.body.appendChild(p);
}

mostrarInfoNavegador();

// EXERCICI 8

let ol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let crearLista = (ol) => {
    let olElement = document.createElement("ul");
    for (let element of ol) {
        let li = document.createElement("li");
        li.innerText = element;
        olElement.appendChild(li);
    }
    document.body.appendChild(olElement);
}

crearLista(ol);


// EXERCICI 9


let enlaces = [
    {nombre: "Google", url: "https://www.google.com"},
    {nombre: "Facebook", url: "https://www.facebook.com"},
    {nombre: "Instagram", url: "https://www.instagram.com"},
    {nombre: "Twitter", url: "https://www.twitter.com"},
    {nombre: "Youtube", url: "https://www.youtube.com"}
]

let crearEnlaces = (enlaces) => {
    let ul = document.createElement("ul");
    let li;
    let a;
    for (let enlace of enlaces) {
        li = document.createElement("li");
        a = document.createElement("a");
        a.innerText = enlace.nombre;
        a.setAttribute("href", enlace.url);
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

crearEnlaces(enlaces);


// EXERCICI 10

let numeros = [3, 8, 133, 50, 2, 33, 7, 9, 10, 999, 36, 735];


let calcularPromedio = (numeros) => {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    let p = document.createElement("p");
    p.innerText = `El promedio de los números es ${suma / numeros.length}`;
    document.body.appendChild(p);
}
calcularPromedio(numeros);

