//funcion

const middlwareMethod = (req, res, next) => {

    const metodo = req.methods //"PUT"
    
    if (metodo === "PATCH") {
        res.status(400).send("metodo no completado");
    }else{
        next();
    }
}

module.exports = middlwareMethod