function Carta(valor, palo) {
    this.valor = valor;
    this.palo = palo;
}
let cheat = false;
let baraja = [
    new Carta("ace", "clubs"), new Carta("2", "clubs"), new Carta("3", "clubs"), new Carta("4", "clubs"), new Carta("5", "clubs"), new Carta("6", "clubs"), new Carta("7", "clubs"), new Carta("8", "clubs"), new Carta("9", "clubs"), new Carta("10", "clubs"), new Carta("jack", "clubs"), new Carta("queen", "clubs"), new Carta("king", "clubs"),
    new Carta("ace", "hearts"), new Carta("2", "hearts"), new Carta("3", "hearts"), new Carta("4", "hearts"), new Carta("5", "hearts"), new Carta("6", "hearts"), new Carta("7", "hearts"), new Carta("8", "hearts"), new Carta("9", "hearts"), new Carta("10", "hearts"), new Carta("jack", "hearts"), new Carta("queen", "hearts"), new Carta("king", "hearts"),
    new Carta("ace", "spades"), new Carta("2", "spades"), new Carta("3", "spades"), new Carta("4", "spades"), new Carta("5", "spades"), new Carta("6", "spades"), new Carta("7", "spades"), new Carta("8", "spades"), new Carta("9", "spades"), new Carta("10", "spades"), new Carta("jack", "spades"), new Carta("queen", "spades"), new Carta("king", "spades"),
    new Carta("ace", "diamonds"), new Carta("2", "diamonds"), new Carta("3", "diamonds"), new Carta("4", "diamonds"), new Carta("5", "diamonds"), new Carta("6", "diamonds"), new Carta("7", "diamonds"), new Carta("8", "diamonds"), new Carta("9", "diamonds"), new Carta("10", "diamonds"), new Carta("jack", "diamonds"), new Carta("queen", "diamonds"), new Carta("king", "diamonds")
];

function barajar(baraja) {
    let copiaBaraja = baraja.slice();
    return copiaBaraja.sort((a, b) => 0.5 - Math.random());
}

function repartirRiver(baraja) {
    let river = [];
    for (let i = 0; i < 5; i++) {
        river[i] = baraja.pop(i);
    }
    return river;
}

function repartirMano() {
    let mano = [];
    for (let i = 0; i < 2; i++) {
        mano[i] = baraja.pop(i);
    }
    return mano;
}

function borrarRiver() {
    let element = document.querySelectorAll("img");
    for (let img of element) {
        img.remove();
    }
}

function jugar() {
    let resposta = window.prompt("Vols fer trampes?");
    if (resposta === "si") {
        cheat = true;
    }
    let barajada = barajar(baraja);
    let river = repartirRiver(barajada);
    
    window.open("resultat.html", "_blank", "width=800, height=300");
    
    parejas = comprovarParella(river);

    let p = document.querySelector(".result");

    if (parejas) {
        p.innerHTML = "TENS UNA PARELLA, HAS GUANYAT!";
    } else {
        p.innerHTML = "NO TENS CAP PARELLA, HAS PERDUT!";
    }
    if (cheat) {
        p.innerHTML = "HAS FET TRAMPA, HAS GUANYAT!";
        alert("Estas fent trampa guanyaras sempre");
        return;
    } else {
        alert("No has fet trampa");
    }
}

function comprovarParella(river) {
    let parejas = false;
    for (let i = 0; i < river.length - 1; i++) {
        for (let j = i + 1; j < river.length; j++) {
            if (river[i].valor === river[j].valor) {
                parejas = true;
                break;
            }
        }
        if (parejas) {
            break;
        }
    }
    return parejas;
}


function mostrarRiver(river) {
    let x;
    div = document.querySelector(".river");
    for (let carta of river) {
        valor = carta.valor;
        palo = carta.palo;
        x = document.createElement("img");
        x.setAttribute("src", "cards/" + valor + "_of_" + palo + ".png");
        div.appendChild(x);
    }
}