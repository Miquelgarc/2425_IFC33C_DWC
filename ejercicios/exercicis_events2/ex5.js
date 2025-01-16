document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    let contenedor = document.getElementById("contenedor");
    let seccion = document.getElementById("seccion");
    let boton = document.getElementById("boton");

    contenedor.addEventListener("click", () => { console.log("div - captura") }, true);
    seccion.addEventListener("click", () => { console.log("seccion -  burbuja") }, false);
    boton.addEventListener("click", (e) => {
        console.log("boton - burbuja")
        e.stopPropagation();
    });
}