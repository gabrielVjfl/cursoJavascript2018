const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach(function(nome, indice,) { // Pode colocar o Array
     console.log(`${indice + 1}) ${nome}`) // 1 Agata 2 Aldo 3 Daniel 4 Raquel
     //console.log(array)
}) // MELHOR ASSIM









// outro Exemplo, usar apenas o nome

aprovados.forEach(nome => console.log(nome)) // ForEach para cada


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)







const aprovados2 = ['Rafael','Ana','Flavia'] 

aprovados2.push('Walter')


aprovados2.forEach(function(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
})
console.log(JSON.stringify(aprovados2))





const cidades = ['porto alegre', 'blumenau','itajai']

cidades.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})