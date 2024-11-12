let jugadores = [
    {nombre : "Messi", puntuacion : 96},
    {nombre : "Cristiano", puntuacion : 91},
    {nombre : "Rodri", puntuacion : 92},
    {nombre : "Lamine Yamal", puntuacion : 89}
]

function ordenaJugadors(jugadores) {
    let jugadoresOrdenados = [];
    for (let jugador of jugadores) {
        for (let i = 0;i<jugadores.length;i++) {
            if (jugador.puntuacion < jugadores[i].puntuacion)
                break;
        }
    }
    return jugadoresOrdenados;
}
console.log(ordenaJugadors(jugadores));