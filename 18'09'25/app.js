/*funciones declarativa[genericas]:
La más común, siempre disponibles 
*/ 
function numeroAleatorio (min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(numeroAleatorio(1,11));

/*funcion expresada 
se ejecutan unicamente cuando son llamadas
utilizada normalmente para algo que no se nesesita constantemente
*/
const miNumero = function numeroAleatorio (min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(miNumero(2,20));

