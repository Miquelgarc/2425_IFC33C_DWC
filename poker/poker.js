function Carta(nom, tipo, img) {
    this.nom = nom;
    this.tipo = tipo;
    this.img = img
}

let baraja = [
    new Carta("ace", "clubs"), new Carta("2", "clubs"), new Carta("3", "clubs"), new Carta("4", "clubs"), new Carta("5", "clubs"), new Carta("6", "clubs"), new Carta("7", "clubs"), new Carta("8", "clubs"), new Carta("9", "clubs"), new Carta("10", "clubs"), new Carta("jack", "clubs"), new Carta("queen", "clubs"), new Carta("king", "clubs"),
    new Carta("ace", "hearts"), new Carta("2", "hearts"), new Carta("3", "hearts"), new Carta("4", "hearts"), new Carta("5", "hearts"), new Carta("6", "hearts"), new Carta("7", "hearts"), new Carta("8", "hearts"), new Carta("9", "hearts"), new Carta("10", "hearts"), new Carta("jack", "hearts"), new Carta("queen", "hearts"), new Carta("king", "hearts"),
    new Carta("ace", "spades"), new Carta("2", "spades"), new Carta("3", "spades"), new Carta("4", "spades"), new Carta("5", "spades"), new Carta("6", "spades"), new Carta("7", "spades"), new Carta("8", "spades"), new Carta("9", "spades"), new Carta("10", "spades"), new Carta("jack", "spades"), new Carta("queen", "spades"), new Carta("king", "spades"),
    new Carta("ace", "diamonds"), new Carta("2", "diamonds"), new Carta("3", "diamonds"), new Carta("4", "diamonds"), new Carta("5", "diamonds"), new Carta("6", "diamonds"), new Carta("7", "diamonds"), new Carta("8", "diamonds"), new Carta("9", "diamonds"), new Carta("10", "diamonds"), new Carta("jack", "diamonds"), new Carta("queen", "diamonds"), new Carta("king", "diamonds"),
]

function barajar(baraja) {
    return baraja.sort((a, b) => 0.5 - Math.random());
}


function repartirRiver() {
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
    return mano
}
function borrarRiver() {
    let element = document.querySelectorAll("img")
    for (let img of element) {
        img.remove();
    }
}

function jugar() {
    barajar(baraja);
    let river = repartirRiver();
    borrarRiver()
    mostrarRiver(river);
    parejas = comprovarParella(river);

    let p = document.querySelector(".result");

    if (parejas) {
        p.innerHTML = "TENS UNA PARELLA";
    } else {
        p.innerHTML = "NO TENS CAP PARELLA";
    }
}

function comprovarParella(river) {
    let parejas = false;

    for (let i = 0; i < river.length - 1; i++) {
        for (let j = i + 1; j < river.length; j++) {
            if (river[i].nom === river[j].nom) {
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
        nom = carta.nom;
        tipo = carta.tipo;
        x = document.createElement("img");
        x.setAttribute("src", "cards/" + nom + "_of_" + tipo + ".png")
        div.appendChild(x);
    }



}