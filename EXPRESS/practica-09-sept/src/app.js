const express = require("express");
const validateBody = require("./middlewares/validateBody");

const app = express();

app.use(express.json());
app.use(validateBody)

app.post("/crear", (res, res) => {
    const info = req.body
    res.status(200).json(info)
})

const port  = 3000;

app.listen(port, () => {});
