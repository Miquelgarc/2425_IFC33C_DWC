document.addEventListener("DOMContentLoaded", cargaDOM);

function cargaDOM() {
    let boton = document.querySelectorAll('#boton1')[0];
    boton.addEventListener('click', () => buttonClick(boton));
}

function buttonClick(event) {
    alert('El texto del botón cambiará');
    event.innerText = '¡Texto cambiado!';
} 