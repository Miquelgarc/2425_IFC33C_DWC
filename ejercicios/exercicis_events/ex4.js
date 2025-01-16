document.addEventListener("DOMContentLoaded", (event) => {
    let i = document.getElementById("i");
    let r = document.getElementById("r");

    i.addEventListener("click", incrementar);
    r.addEventListener("click", reiniciar);
});

let contador = 0;

function incrementar() {
    contador++;
    document.getElementById('contador').innerText = contador;
}
function reiniciar() {
    contador = 0;
    document.getElementById('contador').innerText = contador;
}