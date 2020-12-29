// Implementar um FOREACH PRÓPRIO
Array.prototype.forEach2 = function(florianopolis) {
      for(let i = 0; i < this.length; i++) { // percorrendo os indices
        florianopolis(this[i], i, this)

      }

}
const aprovados = ['Agata','Also','Daniel','Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
})

const aprovadosConcurso = ['Maria','Tiago','Flavia']
aprovadosConcurso.forEach2(function(nome, indice) {
    console.log(`${indice + 1}, ${nome}`) // 1 Maria, 2 Tiago, 3 Flavia

})

const aprovadosEnem = ['Manuel','Gerson','Patricia','Ana']

aprovadosEnem.forEach(function(nome, indice) {
  console.log(`${indice + 1}, ${nome}`)
})




const aprovadosTrf4 = ['Agata','Jose','Marcelo','Rodrigo','Ana cecilia']

aprovadosTrf4.forEach(function(nome, indice) {
  console.log(`${indice + 1}, ${nome}`)
})

const nomes = ['Rogerio','Ana']

nomes.forEach(function(nome, indice){
  console.log(`${indice + 2}, ${nome}`)
})


const aprovadosFurg = ['manuel','jose','marcelo','rodrigo']

aprovadosFurg.forEach(function(nome, indice) {
     console.log(`${indice + 5}, ${nome}`)
})
