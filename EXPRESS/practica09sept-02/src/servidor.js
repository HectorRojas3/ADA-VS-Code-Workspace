//
const express = require('express');

/* const servidor = require("./middleware/servidor"); */
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});
