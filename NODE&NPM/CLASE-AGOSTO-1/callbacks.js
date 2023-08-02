const names = ["Hector", "Jonatan", "Salvador"];

function info (array, fn) {
    const index = array.push("David");
    console.log(index)

    fn(length)
}

console.log(info(names, (array, length) =>{
    console.log('le agregaron el array --> ${array[lenght-1]}')
}))