exports.premio = (cant) => {
    return new Promise ((res, rej)=>{
        setTimeout(() => {
            if (cant >= 10) {
                res("todos vamos a pasar")
            }else {
                rej("todos a clase de refuerzo")
            }
        }, 2000);
    })
}

console.log(premio(23).then(res => console.log(res)));