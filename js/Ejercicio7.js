const agenda = [];
const max = 10;

function agendallena() {
  return agenda.length === max;
}

function huecoslibres() {
  return max - agenda.length;
}

function existecontacto(nombre) {
  const encontrado = agenda.find((contacto) => {
    return contacto.nombre.toLowerCase() === nombre.toLowerCase();
  });

  if (encontrado === undefined) {
    return false;
  } 
  else {
    return true;
  }
}

function añadircontacto(nombre, telefono) {
  if (agendallena()) {
    console.log("Error: La agenda está llena.");
  } 
  else if (existecontacto(nombre)) {
    console.log("Error: El contacto ya existe.");
  } 
  else {
    const contacto = { nombre: nombre, telefono: telefono };
    agenda.push(contacto);
    console.log("Contacto guardado.");
  }
}

function listarcontactos() {
  if (agenda.length === 0) {
    console.log("La agenda está vacía.");
  } 
  else {
    console.log("--- Lista de Contactos ---");
    for (i = 0; i < agenda.length; i++) {
      console.log(`${i}- ${agenda[i].nombre}`);
    }
  }
}

function buscarContacto(nombre) {
    const encontrado = agenda.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
    if (encontrado) {
        console.log(`El teléfono de ${encontrado.nombre} es: ${encontrado.telefono}`);
    } else {
        console.log("Contacto no encontrado.");
    }
}

function eliminarContacto(nombre) {
    const indice = agenda.findIndex(c => c.nombre.toLowerCase() === nombre.toLowerCase());
    if (indice !== -1) {
        agenda.splice(indice, 1);
        console.log("Contacto eliminado correctamente.");
    } 
    else {
        console.log("No se encontró el contacto para eliminar.");
    }
}

do{
    const opcion = prompt("Seleccione una opción:\n1. Añadir contacto\n2. Listar contactos\n3. Buscar contacto\n4. Eliminar contacto\n5. Ver espacio disponible");

    switch (opcion) {
        case "1":
            const nombre = prompt("Ingrese el nombre del contacto:");
            const telefono = prompt("Ingrese el teléfono del contacto:");
            añadircontacto(nombre, telefono);
            break;
        case "2":
            listarcontactos();
            break;
        case "3":
            const nombrebuscar = prompt("Ingrese el nombre del contacto a buscar:");
            buscarContacto(nombrebuscar);
            break;
        case "4":
            const nombreeliminar = prompt("Ingrese el nombre del contacto a eliminar:");
            eliminarContacto(nombreeliminar);
            break;
        case "5":
            console.log(`Espacio disponible: ${huecoslibres()}`);
            break;
    }
} while (confirm("¿Desea realizar otra acción?"));