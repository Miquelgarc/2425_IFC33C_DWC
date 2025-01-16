document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {

    document.getElementById('userForm').addEventListener('submit', (event) => {
        console.log('Formulario enviado.');
    });


    document.getElementById('submitButton').addEventListener('click', (event) => {
        console.log('Botón "Enviar" clickeado. Deteniendo propagación y envío.');
        event.stopPropagation();
        event.preventDefault();
    });
}