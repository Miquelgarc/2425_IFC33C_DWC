/**
 * Calcula el subtotal para un producto.
 * @param {Object} producto - El objeto producto para calcular el subtotal.
 * @param {string} producto.nombre - El nombre del producto.
 * @param {number} producto.precio - El precio del producto.
 * @param {number} producto.cantidad - La cantidad del producto.
 * @returns {number} El subtotal del producto (precio * cantidad).
 */
function calcularSubtotal(producto) {
    return producto.precio * producto.cantidad;
}

// Creamos algunos productos como objetos literales
const producto1 = { nombre: "Laptop", precio: 800, cantidad: 2 };
const producto2 = { nombre: "Teléfono", precio: 500, cantidad: 1 };
const producto3 = { nombre: "Monitor", precio: 150, cantidad: 3 };
const producto4 = { nombre: "Teclado", precio: 50, cantidad: 4 };
const producto5 = { nombre: "Ratón", precio: 30, cantidad: 5 };
const producto6 = { nombre: "Impresora", precio: 200, cantidad: 1 };
const producto7 = { nombre: "Cámara", precio: 300, cantidad: 1 };
const producto8 = { nombre: "Auriculares", precio: 80, cantidad: 2 };
const producto9 = { nombre: "Micrófono", precio: 100, cantidad: 1 };
const producto10 = { nombre: "Tablet", precio: 400, cantidad: 2 };

// Creamos varios recibos, cada uno como un array de productos
const recibos = [
    [producto1, producto2, producto3], // Recibo 1
    [producto4, producto5, producto6], // Recibo 2
    [producto7, producto8, producto9, producto10], // Recibo 3
    [producto1, producto4, producto10] // Recibo 4
];


/**
 * Genera un recibo en formato tabla a partir de un array de productos.
 * @param {Object[]} recibo - Un array de objetos que conforman el recibo.
 */

function generarRecibo(recibo) {
    let total = 0;
    console.log("---- RECIBO ----");
    console.log("Producto        | Cantidad | Precio Unitario | Subtotal ");
    console.log("--------------------------------------------------------");

    // Recorremos el array 'recibo' y generamos el recibo
    // AÑADIR EL CÓDIGO DEL PUNTO 1 AQUÍ!!!
    let taula = [];
    for (let producto of recibo) {
        let nombre = producto.nombre.padEnd(16, ' ') + "|";
        let cantidad = String(producto.cantidad).padEnd(10, ' ') + "|";
        let precio = String(producto.precio).padEnd(17, ' ') + "|";
        let subtotal = String(calcularSubtotal(producto)).padEnd(10, ' ');
        total += calcularSubtotal(producto);
        let fila = nombre + cantidad + precio + subtotal;
        taula.push(fila);
    }

    for (let fila of taula) {
        console.log(fila);
    }


    // Imprimimos el total en una fila separada
    console.log("--------------------------------------------------------");
    console.log(`TOTAL A PAGAR: $${total}`);
    console.log("--------------------------------------------------------");
}

// Llamamos a la función para generar los recibos
for (let recibo of recibos) {
    generarRecibo(recibo);
}
// AÑADIR CÓDIGO DEL PUNTO 2 AQUÍ