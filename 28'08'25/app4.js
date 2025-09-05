
let numUno = parseInt(prompt("Ingresa tres numeros"))
let numDos = parseInt(prompt("Ingresa tres numeros"))
let numTres = parseInt(prompt("Ingresa tres numeros"))

if(numUno =! numDos){
    if (numUno > numDos){
        if(numUno > numTres){
            console.log("El primer numero es mayor");
        }else{
            console.log("El tercer numero es mayor");
        }
    }else if (numDos > numTres) {
        console.log("el segundo numero es mayor")
    } else {
        console.log("numero tres es el mayor ")
    }
}