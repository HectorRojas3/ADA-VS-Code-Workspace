//declaracion de una funcion
function showMessage() {
    console.log("Soy un mensaje, gracias a una funcion declarada")
}

showMessage();

//declaracion de una return function
function calcularPromedio(num1, num2, num3) {
    let promedio = (num1 + num2 + num3)/3;
    return "El promedio es: " + promedio + " Lempiras";
    //`El promedio es: $(promedio) dolares`; /* me da undefined */
}

console.log(calcularPromedio(25, 5, 4));  

/* asignando la function a una variable */
const calcula = calcularPromedio;
console.log(calcula(45, 35, 62));

/* expression function */
const calculaArea = function(ancho, alto) {
    const area = ancho * alto;
    return area;
}

console.log(calculaArea(25, 10));

/* arrow function */
//const calculaArea = (ancho, alto) =>{}

/* arrow function con un solo parametro */
const multiplicaNumero = x => x ** 3;
console.log(multiplicaNumero(10));

/* function como parametro */

/* const warnUser = (fun,  x) =>{
    alert(fun(x));
}

const greetUser = (randomName = 'buddy') => {
    return "hey " + randomName + "!";
}

warnUser(greetUser, "Hector"); */ //me da error

