// export named y export default
const sum = require('./3.suma');

//const res = require('./4.resta');
//const modulo = require("./res")

//desestructuracion
const {res} = require("./4.resta");
const {div} = require("./4.resta");

// export named y export default
console.log(sum(2, 3));

//por modulo
//console.log(modulo.div(20,10))

//desestructuracion
console.log(res(10, 5));
console.log(div(20, 2));