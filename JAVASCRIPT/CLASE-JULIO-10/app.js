//declaracion de variables

/*let nombre = "hector"
console.log(nombre)

nombre = 9 
console.log(nombre)

//practica I//errorres

//de tipo

//de sintaxys



//tres variables con tipo de dato diferente
let name = "Hector";
let year = 1993;
let novia = null;

//constante con valor booleano
const seMantiene = true;

//variable con mi edad y que sea modificable
let age = 30;*/


//practica II

//errorres

//de tipo

//de sintaxys

//de referencia

//metodos utiles


//practica

//Declara una variable llamada miRefrán.
let miRefran;

//asigna un refrán cualquiera a esa variable
miRefran = "no dejes para mañana lo que puedes hacer hoy";

//Declara una variable llamada longitudRefran y asigna a esa variable la cantidad de letras de miRefran.
let longitudRefran = miRefran.length
console.log(longitudRefran);

//En otra línea asigna a la variable novenaLetra el valor de la novena letra del refrán.
let novenaLetra = miRefran[8];
console.log(novenaLetra);

//En otra línea asigna a la variable ultimaLetra el valor de la última letra del refrán.
let ultimaLetra = miRefran[miRefran.length-1];
console.log(ultimaLetra);

/*Busca el índice de la cadena “que” en tu refrán y asignalo a la variable indicePalabra. 
Si el índice es menor que cero busca cualquier otra preposición hasta que sea mayor a 0.*/
let indicePalabra = miRefran.indexOf("que");
console.log(indicePalabra);

//Reemplaza la preposición encontrada por la cadena “(palabra robada)”
miRefran = miRefran.replace("que" , "(palabra robada)");
console.log(miRefran);

//Convierte a mayúsculas todos los caracteres de tu refrán.(*)
miRefran = miRefran.toUpperCase();
console.log(miRefran);



