/* Ejercicio 1: Crear un listado de productos con información detallada
Simula un catálogo de productos de una tienda en línea.
Crea un array de objetos donde cada objeto representa un producto con propiedades como
nombre, precio, descripción y imagenURL.
Genera una estructura en el DOM que muestre cada producto con su nombre en <h3>, el
precio en un <p>, una breve descripción en otro <p> y la imagen en un <img>.
Organiza todos los productos en una cuadrícula con filas y columnas.
*/

// Array de objetos que representan productos
const productos = [
    {
        nombre: "Laptop",
        precio: 800,
        descripcion: "Laptop de última generación",
        imagenURL: "https://via.placeholder.com/150"
    },
    {
        nombre: "Teléfono",
        precio: 500,
        descripcion: "Teléfono móvil de gama media",
        imagenURL: "https://via.placeholder.com/150"
    },
    {
        nombre: "Monitor",
        precio: 150,
        descripcion: "Monitor de 24 pulgadas",
        imagenURL: "https://via.placeholder.com/150"
    }
];

// Función que crea la estructura en el DOM
function mostrarProductos(productos) {
    let div = document.createElement("div");
    div.style.display = "grid";
    div.style.gridTemplateColumns = "repeat(3, 1fr)";
    div.style.gap = "1rem";

    for (let producto of productos) {
        let card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "1rem";
        card.style.borderRadius = "5px";

        let h3 = document.createElement("h3");
        h3.innerText = producto.nombre;
        card.appendChild(h3);

        let pPrecio = document.createElement("p");
        pPrecio.textContent = `$${producto.precio}`;
        card.appendChild(pPrecio);

        let pDescripcion = document.createElement("p");
        pDescripcion.textContent = producto.descripcion;
        card.appendChild(pDescripcion);

        let img = document.createElement("img");
        img.src = producto.imagenURL;
        img.style.width = "100%";
        card.appendChild(img);

        div.appendChild(card);
    }

    document.body.appendChild(div);
}
mostrarProductos(productos);


/* Ejercicio 2: Construir un menú de navegación dinámico
Genera un menú de navegación para una página web a partir de un array de enlaces.
Crea un array de objetos donde cada objeto represente una sección del menú con
propiedades texto y url.
A partir de este array, genera un menú de navegación <nav> en el DOM que contenga una
lista <ul> con cada enlace <a> dentro de un <li>.
Asegúrate de estructurar el menú de forma limpia para que pueda integrarse en una página
web. */


// Array de objetos que representan enlaces
const enlaces = [
    { texto: "Inicio", url: "#" },
    { texto: "Productos", url: "#" },
    { texto: "Servicios", url: "#" },
    { texto: "Contacto", url: "#" }
];

// Función

function generarMenu(enlaces) {
    let nav = document.createElement("nav");
    let ul = document.createElement("ul");
    ul.style.display = "flex";
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    for (let enlace of enlaces) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", enlace.url);

        a.textContent = enlace.texto;
        a.style.textDecoration = "none";
        a.style.color = "#333";
        a.style.padding = "0.5rem";
        a.style.border = "1px solid #ccc";
        a.style.borderRadius = "5px";
        a.style.margin = "0.5rem";
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    document.body.firstElementChild.insertAdjacentElement("afterend", nav);
}
generarMenu(enlaces);


/* Ejercicio 3: Crear un resumen de artículos o noticias
Construye una sección de artículos destacados en el DOM a partir de datos de ejemplo.
Crea un array de objetos que represente artículos, cada uno con propiedades título, autor,
fecha y resumen.
Genera una sección en el DOM donde cada artículo se muestre en un contenedor con el
título en un <h3>, el autor y fecha en un <p> y el resumen en otro <p>.
Organiza los artículos en orden cronológico descendente, mostrando primero los más
recientes.
 */



// Array de objetos que representan artículos

const articulos = [
    {
        titulo: "Lorem ipsum dolor sit amet",
        autor: "Juan Pérez",
        fecha: "2021-06-01",
        resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero auctor, tincidunt eros sit amet, ultrices mi."
    },
    {
        titulo: "Sed ac libero auctor",
        autor: "Ana López",
        fecha: "2021-06-02",
        resumen: "Sed ac libero auctor, tincidunt eros sit amet, ultrices mi. Nullam nec nunc nec libero tincidunt ultrices."
    },
    {
        titulo: "Consectetur adipiscing elit",
        autor: "Pedro Gómez",
        fecha: "2021-06-03",
        resumen: "Consectetur adipiscing elit. Nullam nec nunc nec libero tincidunt ultrices. Nullam nec nunc  ultrices mi."
    }
];

// Función

function ordenarArticulos(articulos) {
    return articulos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function mostrarArticulos(articulos) {
    ordenarArticulos(articulos);
    let div = document.createElement("div");
    for (let articulo of articulos) {

        let card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "1rem";
        card.style.borderRadius = "5px";
        card.style.marginBottom = "1rem";
        card.style.color = "blue";

        let h3 = document.createElement("h3");
        h3.innerText = articulo.titulo;
        card.appendChild(h3);

        let pAutor = document.createElement("p");
        pAutor.textContent = `Autor: ${articulo.autor}`;
        card.appendChild(pAutor);

        let pFecha = document.createElement("p");
        pFecha.textContent = `Fecha: ${articulo.fecha}`;
        card.appendChild(pFecha);

        let pResumen = document.createElement("p");
        pResumen.textContent = articulo.resumen;
        card.appendChild(pResumen);

        div.appendChild(card);
    }

    document.body.appendChild(div);
}


mostrarArticulos(articulos);