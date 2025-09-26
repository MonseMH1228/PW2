var miCarrito = new Object();
miCarrito.marca = 'Toyota';
miCarrito.modelo = 'Supra';
miCarrito.color = 'Rojo'

console.log(miCarrito);

//Preferentemente se declaran de esta manera
var miCarrito={
    marca: 'Toyota',
    modelo : 'Supra',
    color : 'Rojo'
}

var perro ={
    nombre: 'Shayla',
    color: 'sal pimienta',
    edad: '5 años',
    talla: 'mediana',
    enemigos: ["Otro perro", "cartero"]
}

console.log(perro);
console.log(perro.nombre);
console.log(perro.enemigos[1]);

//agregar
perro.raza='schnauzar'
console.log(perro)

//Actualizar
perro.edad = '35';
console.log(perro)

//Eliminar
delete perro.edad;
console.log(perro)