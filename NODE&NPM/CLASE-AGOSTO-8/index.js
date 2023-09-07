//importar modulo 
const http = require('http');

//port: por buena practica debe crearse en una constante indepediente aparte
const port = 3000;

//instancia
const server = http.createServer((req, res) =>{
    
})
//req: { body , metodo(GET, POST)} / URL / localhost = 127.0.0.1 / users
//res: http status code / datos / informacion

//listen
server.listen(port, ()=> {
console.log(`El servidor esta en el puerto ` + port)
});