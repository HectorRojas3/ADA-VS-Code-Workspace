/* Ejemplo */

console.log("Hola Mundo!");

console.log("Primero");

/* Funcion para determnar en que tiempo se ejecuta un bloque de codigo */

setTimeout(() => {
console.log("Segundo");
}, 
//timeout debe incluirse el tiempo en milisegundos
2000
);

console.log("Tercero");

/* Aunque demore 0 segundos en ejecutar, respeta el orden de los valores que dependen de una funcion setTimeout */
// Se ejecutara inmediatamente despues de haber ejecutado lo que esta asignado de manera sincrona
setTimeout(() => {
    console.log("Cuarto");
}, 0);

/* EventLoop
Tiene que ver con todo lo que se mantienen ejecutando detras de node en forma asincrona
*/