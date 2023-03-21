const gabrielTocaBola = new Promise((resolve, reject) => {
    console.log("realizando");

    const sucesso = true;

    if(sucesso)
        setTimeout(() => {
            resolve()
        },10000);
    else {
        const reason = {
            message: 'pé torto',
            period: 'desde sempre'
        }
        reject(reason);
    }
});

//console.log(gabrielTocaBola);

gabrielTocaBola.then(()=> {
    console.log('message')
})
.catch((error) => {
    console.log(`motivo: ${error.message} ${error.period}`)
})

console.log('continuando')