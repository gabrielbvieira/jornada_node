const cidades = ['Marília', 'Garça', 'Pompeia', 'Bauru', 'Avencas']

function filtra_cidades(cidades) {
    let cidades_filtradas = cidades.filter((item) => {
        return item != 'Bauru'
    }).forEach((item) => {
        console.log(item)
    })
}

filtra_cidades(cidades)