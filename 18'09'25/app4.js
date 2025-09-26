var productos = [
    { nombre: 'camisa', precio: 300 },
    { nombre: 'pantalon', precio: 500 },
    { nombre: 'zapatos', precio: 400 },
    { nombre: 'sombrero', precio: 200 }
];

var carrito = [];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Menú Administrador\n";
    menu += (productos.length + 3) + ". Salir\n";

    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);

        // Ofrecer menú para modificar el carrito
        var opcion = prompt("1. Eliminar producto\n2. Volver");
        if (opcion == "1") {
            var eliminar = prompt("Ingrese el número del producto a eliminar:");
            eliminar = Number(eliminar);
            if (!isNaN(eliminar) && eliminar >= 1 && eliminar <= carrito.length) {
                var eliminado = carrito.splice(eliminar - 1, 1);
                console.log("Producto eliminado: " + eliminado[0].nombre);
            } else {
                console.log("Opción inválida.");
            }
        }
    }
}

// Menú administrador
function menuAdministrador() {
    var opcion = prompt("Menú Administrador:\n1. Agregar producto\n2. Volver");
    if (opcion == "1") {
        var nombre = prompt("Ingrese el nombre del nuevo producto:");
        var precio = prompt("Ingrese el precio del producto:");
        precio = Number(precio);
        if (nombre && !isNaN(precio) && precio > 0) {
            productos.push({ nombre: nombre, precio: precio });
            console.log("Producto agregado: " + nombre + " - $" + precio);
        } else {
            console.log("Datos inválidos, no se agregó el producto.");
        }
    }
}

// Función principal (en lugar del do...while)
function iniciarTienda() {
    var opcion = 0;
    while (opcion !== productos.length + 3) {
        opcion = prompt(mostrarMenu());
        opcion = Number(opcion);

        if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
            console.log("Opción no válida, por favor intenta de nuevo.");
        } else if (opcion >= 1 && opcion <= productos.length) {
            agregarAlCarrito(opcion - 1);
        } else if (opcion === productos.length + 1) {
            mostrarCarritoYTotal();
        } else if (opcion === productos.length + 2) {
            menuAdministrador();
        }
    }

    console.log("Gracias por visitar la tienda.");
}

// Ejecutar la tienda
iniciarTienda();