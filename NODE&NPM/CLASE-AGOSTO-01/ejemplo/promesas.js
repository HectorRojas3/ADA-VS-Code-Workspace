// se utilizan dentro de las funciones.
const ejemploPromesa = () => {
  //recibe dos parametros 'resuelto' 'rechazado'
  return new Promise((resolve, reject /* _reject */) => { /* el cuerpo de la funcion debe retornar un valor */
    /* guion bajo para indicar que ese parametro no se emplea en este momento */
    setTimeout(() => {
      //resolve("la promesa se cumplio"); /* respuesta resuelta */
      reject("la promesa no se cumplio");
    }, 1000);
  });
};

console.log(
    ejemploPromesa()
        .then((res) => console.log(res)) /* .then para pedir una respuesta resuelta */
        .catch((err) => console.log("error :>>", err)) /* .cathc para manejar errores cuando la accion es rechazada*/
        .finally(() => {
            console.log("No hay mas promesas que cumplir")
        }) /* se ejecuta hasta el final  */
);
