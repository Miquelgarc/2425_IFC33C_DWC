function comprobarAnagrama(texto1, texto2) {
    var result = false;
    texto1 = texto1.split("").sort().join("");
    texto2 = texto1.split("").sort().join("");

    if (texto1 === texto2) {
        result = true;
    }

    return result;
}

console.log(comprobarAnagrama("estanco", "tabaco"));