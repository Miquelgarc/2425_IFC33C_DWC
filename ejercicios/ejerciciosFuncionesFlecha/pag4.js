// Ejercicio 1
/* 
Dado un arreglo de objetos que representan comentarios (con propiedades usuario, fecha,
    contenido), genera dinámicamente una lista de comentarios en el DOM, ordenados por
    fecha (más recientes primero) usando sort. Usa forEach para recorrer los comentarios y
    mostrar los datos.
    Contexto laboral: Administración de contenido generado por usuarios en un blog o
    plataforma.
 */

let comentarios = [
    { usuario: "Juan", fecha: "2021-06-03", contenido: "Muy buen artículo" },
    { usuario: "Ana", fecha: "2021-06-01", contenido: "No estoy de acuerdo" },
    { usuario: "Pedro", fecha: "2021-06-02", contenido: "Excelente explicación" },
    { usuario: "Maria", fecha: "2021-06-04", contenido: "Gracias por la información" },
    { usuario: "Luis", fecha: "2021-06-05", contenido: "No me ha quedado claro" }
]

let ordenarComentarios = (comentarios) => { return comentarios.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)); }


let mostrarComentarios = (comentarios) => {
    let ul = document.createElement("ul");
    ordenarComentarios(comentarios);
    comentarios.forEach(comentario => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${comentario.usuario}</strong> (${comentario.fecha}): ${comentario.contenido}`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
mostrarComentarios(comentarios);



