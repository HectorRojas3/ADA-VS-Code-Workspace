//ejemplo while
let num = 0;
while (num < 5){
    console.log(num);
    num++//num+=1
}

let num1 = 5;
while (num1 > 0){
    console.log(num1);
    num1--//num-=1
}

//for...
console.log(" ")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//recorrido por arreglo con ciclo for
let myArray = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < 5; i++) {
    console.log(myArray[i]);
}

//for... of
console.log(" ")
for (let e of myArray) {
    console.log(e+1);
}

//functions

//declaration
function suma(a,b) {
    return a+b;
}

console.log(suma('hola', ' mundo'));

//expression
const resta = function(a,b){
    return a-b;
}

console.log(resta(667,666));

//arrow function
const multiplicar = (num3, num4) => {
    return num3*num4
}

console.log(multiplicar(suma(5,7), resta(8,3)));

//alt + shift + a = comentar en bloque
