let tareas = [
    {nombre : "Colada", categoria : "Casa"},
    {nombre : "Reunión", categoria : "Trabajo"},
    {nombre : "Ejercicios js", categoria : "Estudio"},
    {nombre : "Arreglar la mery", categoria : "Trabajo"},
    {nombre : "Repassar python", categoria : "Estudio"},
    {nombre : "Pasear perro", categoria : "Casa"}
]
let categorias = ["Casa", "Trabajo", "Estudio"];
let h2;
let ul
let li;
for (let categoria of categorias) {
    h2 = document.createElement("h2");
    h2.innerHTML = categoria;
    ul = document.createElement("ul");
    for (let tarea of tareas){
        li = document.createElement("li");
        if (tarea.categoria == categoria){
            li.innerHTML = tarea.nombre;
            ul.append(li);
        }
    }
    document.body.append(h2, ul);
}

