const ejemplo = () => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            reject('la promesa no se cumplio')
        }, 1000);
    })
}

console.log(ejemplo().then(res => clg.log(res)));