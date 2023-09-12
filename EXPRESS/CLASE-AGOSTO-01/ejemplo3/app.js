async function pokeApi() {
    
    try {
        const res = await fetch("http://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
      /* console.log(data) */ //el contenido completo
        return data.results[13]; //un resultado especifico
    } catch (error) {
        console.log("error :>>", error);
    }

};

pokeApi(pokeApi())

