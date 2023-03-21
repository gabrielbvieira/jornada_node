function imprimir (palavra) {
    console.log(palavra)
}

const printar = () => {
    imprimir('valor');
}


function escravo(funcao) {
    funcao();
}

//printar('123')
escravo (() => {
    printar(printar());
})