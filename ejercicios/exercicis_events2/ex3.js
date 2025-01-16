document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let listaLi = document.querySelectorAll("li");

    listaLi.forEach((li) => {
        li.addEventListener('click', addListener);
    });

    let boton = document.getElementById("boton");
    boton.addEventListener('click', () => {
        let ul = document.querySelector("ul");
        let nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `Tarea ${ul.children.length + 1}`;
        nuevaTarea.addEventListener('click', addListener);
        ul.appendChild(nuevaTarea);
    });
};

function addListener(e) {
    if (e.target.tagName === "LI") {
        alert(`Seleccionaste: ${e.target.textContent}`);
    };
};
