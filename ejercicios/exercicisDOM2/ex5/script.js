let titulos = ["TITULO 1", "TITULO 2", "TITULO 3", "TITULO 4", "TITULO 5"];

let parrafos  = [
    "parrafo 1",
    "parrafo 2",
    "parrafo 3",
    "parrafo 4", 
    "parrafo 5"];

for (let i = 0; i < titulos.length; i++) {
    let h3 = document.createElement("h3");
    h3.textContent = titulos[Math.random() * titulos.length | 0];
    document.body.appendChild(h3);
    let p = document.createElement("p");
    p.textContent = parrafos[Math.random() * parrafos.length | 0];
    document.body.appendChild(p);
}



