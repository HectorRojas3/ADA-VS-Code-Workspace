const validateBody = (req, res, next) => {
    const info = req.body;

    if (req.method === "POST" && Object.values(info).length) {
        res.status(400).json("Se necesita payload");
    } else {
        next();
    } 


/*     if(Object.values(info).length === 0){
        res.status(400).json("Se necesita payload");
    } else {
        next();
    } */
};

module.exports = validateBody;