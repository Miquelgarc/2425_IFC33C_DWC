/* Ejercicio 1: Monitorización de Actividad del Usuario
En una empresa se necesita una herramienta para detectar si el usuario está activo en una
página web y registrar la duración de su actividad.
Para ello:
1. Usa el evento mousemove y keypress para detectar actividad del usuario.
2. Si el usuario no realiza ninguna acción durante 1 minuto, muestra una alerta
preguntando si sigue activo.
3. Registra el tiempo total de actividad y muestra un mensaje al usuario al cerrar la
pestaña utilizando el evento beforeunload. */
let lastActivityTime = Date.now();
let totalActiveTime = 0;
let activityInterval;

function updateActivityTime() {
    lastActivityTime = Date.now();
}

function checkActivity() {
    const currentTime = Date.now();
    if (currentTime - lastActivityTime > 60000) {
        alert("Are you still active?");
    } else {
        totalActiveTime += 1000;
    }
}

window.addEventListener('mousemove', updateActivityTime);
window.addEventListener('keypress', updateActivityTime);

activityInterval = setInterval(checkActivity, 1000);

window.addEventListener('beforeunload', function (event) {
    clearInterval(activityInterval);
    alert(`Total active time: ${totalActiveTime / 1000} seconds`);
});





/* Ejercicio 2: Personalización de Páginas de Ventas
Una empresa de e-commerce quiere personalizar las páginas de producto según el idioma
del navegador del usuario.
Para ello:
1. Usa el objeto navigator.language para detectar el idioma del navegador.
2. Crea un mensaje de bienvenida que se muestre en el idioma detectado (por ejemplo,
"Welcome" en inglés, "Bienvenido" en español).
3. Si el idioma no es reconocido, muestra un mensaje genérico en inglés. */

let welcomeMessage = document.createElement("h1");
let language = navigator.language;

if (language.startsWith("es")) {
    welcomeMessage.textContent = "Bienvenido";
} else {
    welcomeMessage.textContent = "Welcome";
}

document.body.appendChild(welcomeMessage);

