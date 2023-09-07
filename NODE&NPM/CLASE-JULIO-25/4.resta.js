//resta
//named export
//individual
/* exports.res = (a, b) => {
    return a - b;
};

exports.div = (a, b) => {
    return a/b;
}*/

//como objeto

res = (a,b) => {
    return a-b;
}

div = (a,b) => {
    return a/b;
}

module.exports = {
    res,
    div
}