const carrito =[];

const fruta = prompt ("Feria de fruta: Desea gregar una fruta al carrito?");

carrito.push(fruta);

while(confirm("Quieres agregar otra fruta")){
    const fruta = prompt("Agrege su fruta");
    carrito.push(fruta);
}

console.log("Usted compro: ");
for (let frutas of carrito){
    console.log(frutas);
}



