//importar modulo 
const http = require('http')

//port: por buena practica debe crearse en una constante indepediente aparte
const PORT = 8080

//instancia
const server = http.createServer((req, res) => {
    
    if (req.method === "GET" && req.url === "/users") {
        console.log("hola, esta solicitando en la ruta get");
    }
    if (req.method === "POST" && req.url === "/users/admins") {
        console.log("hola, esta solicitando en la ruta post");
    }
    if (req.method === "PUT" && req.url === "/users") {
        console.log("hola, esta solicitando en la ruta put");
    }

})
//req: { body , metodo(GET, POST)} / URL / localhost = 127.0.0.1 / users
//res: http status code / datos / informacion

//listen
server.listen(PORT, ()=> {
    console.log(`El servidor esta en el puerto ` + PORT);
    });