const express = require("express")

const app = express()

//mw a nivel de aplicacion
app.use((_req, res, next) => {
    //hace validaciones
    console.log("pasando por el mw general");
    next();//indica que puede seguir con la siguiente solicitud
});

app.get("/user", (_req, res) => {
    res.send("lista de usuarios");
});

app.post("/user", (_req, res) => {
    const info = req.body
    console.log(info);
    res.send("usuario creado");
});

app.put("/user", (_req, res) => {

    res.send("usuario modificado");
});

app.delete("/user", (_req, res) => {
    res.send("usuario eliminado");
});
app.listen(3000, () => console.log("server en puerto 3000"))