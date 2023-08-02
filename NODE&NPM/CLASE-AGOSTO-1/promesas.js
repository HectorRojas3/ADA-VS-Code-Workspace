const ejemplo = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve('la promesa se cumplio')
        }, 1000);
    })
}

console.log(ejemplo().then(res => clg.log(res)));