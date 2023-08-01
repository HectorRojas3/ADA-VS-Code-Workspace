// step 1
let listaDeContactos = ["Lidia Dole", "Jonata Rojas", "Hada Rodriguez", "Salvador Ramos", "Pamela Ramos", "Axel Ramos",];

// step 2
function nuevoContacto (listaDeContactos, newElement ) {
    listaDeContactos.push(newElement);
}

nuevoContacto(listaDeContactos, "Hector Rojas");

// step 3
function borrarContacto (listaDeContactos) {
    if (listaDeContactos.length === 0) {
        console.log("no hay contacto para borrar")
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeContactos.length);
    listaDeContactos.splice(indiceAleatorio, 1)
}

borrarContacto(listaDeContactos);

// step 4
function mostrarEnConsola (listaDeContactos) {
    console.log("Lista de contactos actualizada", listaDeContactos.join(', '));
}

mostrarEnConsola(listaDeContactos);