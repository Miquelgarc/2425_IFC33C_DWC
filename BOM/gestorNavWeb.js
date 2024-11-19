function mostrarURLActual() {
    alert(window.location.href);
}

function irAtras() {
    window.history.back();
}
function irAdelante() {
    window.history.forward();
}

function mostrarInfoNavegador() {
    var info = "Nombre del navegador: " + navigator.appName + "\n";
    info += "Lenguaje del navegador: " + navigator.language + "\n";
    info += "Navegador en linea: " + navigator.onLine + "\n";
    alert(info);
}

function redirigirURL() {
    var url = document.getElementById('urlInput').value;
    if (!url) {
        alert("Introduce una URL");
        return;
    } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
        alert("URL no válida");
        return;
    } else {
        window.location.assign(url);
    }
}

var myWindow;
function abrirPopup() {
    myWindow = window.open("https://www.w3schools.com/js/js_window.asp", "myWindow", "width=800,height=600");
}

function cerrarPopup() {
    myWindow.close();
}