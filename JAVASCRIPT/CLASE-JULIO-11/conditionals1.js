//if, if...else
/*let estaLloviendo = true;

if(estaLloviendo == true){
    console.log("llevo sombrilla");
} else {
    console.log("llevo gafas de sol");
}*/

//practica

//Escribe un condicional que dados dos números indique cuál es el mayor.
let valor1 = 12;
let valor2 = 20;

if(valor2 > valor1){
    console.log(valor2 + " es mayor que " + valor1);
}else{
    console.log(valor1 + " es mayor que " + valor2)
}
//Escribe un condicional que dado un nombre determine si su longitud es mayor a 5 o no
let nombre = "Lidia";

if(nombre.length > 5){
    console.log("La longitud es mayor a 5")
}else{
    console.log("La longitud del nombre no es mayor que 5") 
}

//Escribe un condicional que determina si una frase tiene la subcadena “si”.
let frase = "si nos dejan";

if(frase.includes("si")){
    console.log("la frase " + frase + " incluye la palabra si");
}else{
    console.log("la frase " + frase + " no incluye la palabra si");
}


//practica array

let myString = 'JavaScript+es+muy+cool';

let myArray = myString.split('+');
console.log(myArray);

let arrayLenght = myArray.length;
console.log(arrayLenght);

let lastItem = myArray[arrayLenght-1];
console.log(lastItem);