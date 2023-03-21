function garcom(pedido) {
    console.log('Cozinheiro, chegou novo pedido: '+pedido+'!');
}

function banheirista() {
    console.log('Esperando bola');
}

function soma(a,b) {
    return a+b;
}

function quadratica (valor) {
    let quadrado = valor * valor;
    console.log('O valor '+valor+' elevado ao quadrado é: '+quadrado);
    console.log(soma(valor, quadrado))
}

//garcom('Pizza')
//banheirista();
/*let valorSomado = soma(4,5);
valorSomado = soma(9, 5);
console.log('A soma dos valores é: '+valorSomado);*/

quadratica(5)