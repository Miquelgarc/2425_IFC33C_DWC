const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];

let ul = document.createElement("ul");
let li;
for (let nombre of nombres) {
    li = document.createElement("li");
    li.innerHTML = nombre;
    ul.appendChild(li);
}

document.body.appendChild(ul);
