const names = ["Batman", "Superman", "Flash", "Linterna Verde"];
// agregando elemento a un array de manera convencional 
/* function info(array, fn) {

    array.push("HawkGirl");
    console.log(array)
    
    
    //si el llamado no recibe un parametro la ejecucion da error porque recibe un valor undefined
    info(names)
}; */

//agragando un nuevo elemento y hacer uso de un callback
function info(array, fn){
    //primer evento a realizar
    const length = array.push("Detective Marciano");
    console.log(length)
    //callback cuando ya se realizo el primer evento
    fn(array, length)
};

console.log(info(names, (array, length) =>{
    console.log(`Entro un nuevo miembro --> ${array[length-1]}`);
}))