document.addEventListener("DOMContentLoaded", (event) => {
    let elementos = document.querySelectorAll("li");

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].addEventListener("click", () => mostrarTexto(elementos[i]));
    }
});

function mostrarTexto(elemento) {
    alert(`Has hecho clic en: ${elemento.innerText}`);
    elemento.innerText = 'Seleccionado';
}