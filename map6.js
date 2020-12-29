const semestres = [
    {nome: 'Portugues', nota: 70},
    {nome: 'Matematica', nota: 65},
    {nome: 'Ingles', nota: 81},
    {nome: 'Geografia', nota: 92},
    {nome: 'Ciencias', nota: 77}
]
let resultados20 = semestres.map(function(numero){
    return numero
})

let verNotas = numero => numero.nota
resultados20 = semestres.map(verNotas)
console.log(resultados20) // Ira mostrar só as notas

total = 0

const somar = function(item) {
    return total += item / 2
}
resultados20.forEach(somar)
console.log(total) // Somar e dividi por 2, = 192


const onixs = [
    {modelo: 'S', preco: 48.990},
    {modelo: 'Sv', preco: 53.990},
    {modelo: 'Sv turbo', preco: 60.990},
    {modelo: 'Premier mec', preco: 65.990},
    {modelo: 'premier aut', preco: 70.990},
]

let resultadosDigitais = onixs.map(function(numero){
    return numero
})
let soValores = numero => numero.preco
resultadosDigitais = onixs.map(soValores)
console.log(resultadosDigitais)

let soModelos = numero => numero.modelo
resultadosDigitais = onixs.map(soModelos)
console.log(resultadosDigitais)

// Colocar um indice

resultadosDigitais.forEach(function(nome, indice){
     console.log(`${indice + 1}, ${nome}`)
})


console.log(JSON.stringify(onixs))

// [{"modelo":"S","preco":48.99},{"modelo":"Sv","preco":53.99},{"modelo":"Sv turbo","preco":60.99},{"modelo":"Premier mec","preco":65.99},{"modelo":"premier aut","preco":70.99}]

