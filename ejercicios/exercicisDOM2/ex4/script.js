let jugadores = [
    {nombre : "Messi", puntuacion : 96},
    {nombre : "Cristiano", puntuacion : 91},
    {nombre : "Rodri", puntuacion : 92},
    {nombre : "Lamine Yamal", puntuacion : 89}
]

function ordenaJugadors(jugadores) {
    let jugadoresCopia = [...jugadores];
    return jugadoresCopia.sort((a, b) => b.puntuacion - a.puntuacion);
}

function crearTaula(jugadores) {
    jugadores = ordenaJugadors(jugadores);
    let taula = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    th1.textContent = "Nombre";
    th2.textContent = "Puntuación";
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);
    taula.appendChild(thead);
    jugadores.forEach(jugador => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.textContent = jugador.nombre;
        td2.textContent = jugador.puntuacion;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
    });
    taula.appendChild(tbody);
    document.body.appendChild(taula);
    return taula;

}

crearTaula(jugadores);