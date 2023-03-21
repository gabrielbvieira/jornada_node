function soma (a,b,c) {
    return(a+b+c)
}

const arrowSoma = (a,b,c) => {
    return soma(a,b,c)
}

function executadora (funcao) {
    funcao();
}

console.log(executadora(arrowSoma(1,2,3)));