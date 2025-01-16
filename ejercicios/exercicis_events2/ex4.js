document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let enlace = document.querySelector("a");
    enlace.addEventListener("click", clicarEnlace);

    let div = document.getElementById("div");
    div.addEventListener("click", clicarDiv);
}

function clicarEnlace(e) {
    e.preventDefault();
    alert("click en el enlace");
    e.stopPropagation();
}

function clicarDiv(e) {
    alert("Clicaste en el div.");
}