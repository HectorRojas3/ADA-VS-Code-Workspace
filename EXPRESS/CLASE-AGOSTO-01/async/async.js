const premio = require('./premio.js')

//solicitud resuelta
/* async function asincrona (params) {
    const a = await premio (17);
    console.log(a)
}

asincrona() */

//solicitud rechazada
async function asincrona() {
    try {
        const a = await premio(1);
        console.log(a);
    } catch (error) {
        console.log('error :>>', error)
    } finally {
        console.log('se termino la ejecucion')
    }
}

asincrona();