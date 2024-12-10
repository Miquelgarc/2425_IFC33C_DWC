function tareaPrincipal(callback) {
    setTimeout(() => {
        console.log("Realizando una tarea...")
    }, 1000);
    callback();
}

function tareaSecundaria(callback) {
    setTimeout(() => {
        console.log("Realizando la segunda tarea...")
    }, 1000);
    callback();
}

function tareaTerciaria(callback) {
    setTimeout(() => {
        console.log("Realizando la tercera tarea...")
    }, 1000);
    callback();
}


tareaPrincipal(() => {
    tareaSecundaria(() => {
        tareaTerciaria(() => {
            console.log("Todas las tareas han sido completadas")
        });
    });
});

// CALLBACK HELL

// PROMESAS
function tareaPrincipal1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea proncipal controlada...");
            resolve();
        }, 1000);
    });
}

function tareaSecundaria2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea secundaria controlada...");
            resolve();
        }, 3000);
    });
}

function tareaTerciaria3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea terciaria controlada...");
            resolve();
        }, 1000);
    });
}

tareaPrincipal1()
    .then(tareaSecundaria2)
    .then(tareaTerciaria3)
    .then(() => console.log("Hemos acabado todas las tareas"));


// ASYNC/AWAIT


async function ejecutarTareas() {
    await tareaPrincipal1();
    await tareaSecundaria2();
    await tareaTerciaria3();
    console.log("Hemos acabado todas las tareas");
}

ejecutarTareas();