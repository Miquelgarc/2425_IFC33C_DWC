let personas = [
    {nombre: "TONI", edat: 9, email: "tonimonti@gmail.com", telefon: "3829484723982"},
    {nombre: "MIQUEL", edat: 19, email: "miquelgarcia@gmail.com", telefon: "654653465463"},
    {nombre: "BERNAT", edat: 29, email: "bernihacker@gmail.com", telefon: "54252354235425"},
    {nombre: "FRANCESC", edat: 99, email: "franelpan@gmail.com", telefon: "58325425425"},
    {nombre: "SAMUEL", edat: 49, email: "samelmuel@gmail.com", telefon: "435432532453245"},
    {nombre: "MATEO", edat: 12, email: "mateopeo@gmail.com", telefon: "547282822543"}
];

let table = document.createElement("table");

let thead = ["nombre", "edat", "email", "telefon"];
let td;
let tr;

for (let persona of personas) {
    tr = document.createElement("tr");
    for (let propietat of thead) {
        td = document.createElement("td");
        td.innerHTML = String(persona[propietat]);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.body.appendChild(table);
console.log(table);