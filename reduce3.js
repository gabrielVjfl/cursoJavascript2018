const numeros = [23,47,83,99,100,52]

const soma = (total, valor) => total + valor

console.log(numeros.reduce(soma)) // 404


const comprasAmazon = [
    {nome: 'Iphone 11', preco: 9.299},
    {nome: 'galaxy S10', preco: 6.299},
    {nome: 'Dell inspiron 15', preco: 5.799}
]

let resultados8 = comprasAmazon.map(function(item){
    return item
})

const soPrecos =  item => item.preco
resultados8 = comprasAmazon.map(soPrecos)
console.log('Os precos são', resultados8)


// Filter

const filtrar = item => item.preco <= 6.299
console.log(comprasAmazon.filter(filtrar))