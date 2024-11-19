let galeria = [
    {url : "img/image1.jpg", descripcion : "adsadsad"},
    {url : "img/image2.jpg", descripcion : "ascii"},
    {url : "img/image3.jpg", descripcion : "saefesa"},
    {url : "img/image4.jpg", descripcion : "fewg"}
]

let div;
let img;
let p;
for (let element of galeria) {
    div = document.createElement("div");
    img = document.createElement("img");
    img.setAttribute("src", element.url);
    p = document.createElement("p");
    p.innerHTML = element.descripcion;
    div.append(img, p);
    document.body.append(div);
}
