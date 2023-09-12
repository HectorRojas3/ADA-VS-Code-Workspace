//es una funcion que recibe otra funcion como parametro
const primero = () => {
    setTimeout(() => {
        console.log("primero")
    }, 500);
};

const segundo = () => {
    console.log("segundo")
};

function llamados (cb) {

    primero()
    /* segundo() */

    setTimeout(() => {
        cb();
    }, 1000);

};

llamados(segundo());