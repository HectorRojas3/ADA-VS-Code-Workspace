const validarBody = (req, res, next) => {
    const info = req.body

    if (Object.values(info). length === 0) {
        res.status(400).send("se necesita un payload")
    } else {
        req.informacion = info
        next();
    }
}

module.exports = validarBody