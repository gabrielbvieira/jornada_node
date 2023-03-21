const listaJogadores = ['Allan', 'Felipe', 'André', 'Gabriel'];

listaJogadores.forEach((item) => {
    console.log(item)
});

let resultado = listaJogadores.filter((item) => {
    return item == 'Gabriel'
})

resultado.forEach((item) => {
    console.log(item);
})