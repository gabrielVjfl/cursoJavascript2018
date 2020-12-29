const walmart = [
    {nome: 'Iphone 11', preco: 999},
    {nome: 'Note 10', preco: 829},
    {nome: 'Redmi 7', preco: 279}
]
let resultados5 = walmart.map(function(produto){
    return produto
})

let nome = produto => produto.nome
resultado5 = walmart.map(nome)
console.log(resultado5)

let verComImposto = produto => produto.preco * 4.16.toFixed(0)
resultados5 = walmart.map(verComImposto)
console.log(resultados5)

total = 0

const somar = function(item) {
    return total += item
}
resultados5.forEach(somar)
console.log(total) // 8428 soma o preco ja calculando com imposto de 4.16


const amazon = [
    {nome: 'Iphone 11 pro', preco: 1199},
    {nome: 'Macbook pro X', preco: 4399},
    {nome: 'Apple watch series 4Pro', preco: 729}
]
let resultados6 = amazon.map(function(item){
    return item
})
let nomesy = item => item.nome
resultados6 = amazon.map(nomesy)
console.log(resultados6)

let impostos = item => (item.preco * 4.16 + 120).toFixed(0) // dolar + imposto de 120
resultados6 = amazon.map(impostos)
console.log(resultados6)


const comImposto = [
    {nome: 'Iphone 11 pro', preco: 5108},
    {nome: 'Macbook pro x', preco: 18420},
    {nome: 'Apple watch serieds 4pro', preco: 3153}
]
let resultados7 = comImposto.map(function(produto){
    return produto
})
let dobrar = produto => produto.preco * 2
resultados7 = comImposto.map(dobrar)
console.log(resultados7)

totalg = 0

const somarValor = function(item) {
    return totalg += item 
}
resultados7.forEach(somarValor)
console.log('Total =',totalg)


const semestres = [
    {nome: 'Portugues', nota: 70},
    {nome: 'Matematica', nota: 65},
    {nome: 'Ingles', nota: 81},
    {nome: 'Geografia', nota: 92},
    {nome: 'Ciencias', nota: 77},
]

let resultados20 = semestres.map(function(item){
    return item
})


totall = 0

const somarre = function(item) {
    return totall += item
}
resultados20.forEach(somarre)
console.log(totall)

const comprasEua = [
{nome: 'Iphone 11 pro', preco: 1100},
{nome: 'Apple watch 44m', preco: 500},
{nome: 'Macbook pro e', preco: 2300},
{nome: 'Galaxy note 10', preco: 729},
{nome: 'Civic lx', preco: 27800},
]
const resultadoos50 = comprasEua.map(function(item) {
   return item
})
const nomess = item => item.nome
resultados50 = comprasEua.map(nomess)
console.log(resultados50)


const converter = item => item.preco * 4.20
resultados50 = comprasEua.map(converter)
console.table(resultados50)


const maisBaratos10 = item => item.preco <= 2800
console.log(comprasEua.filter(maisBaratos10))







const ebay = [
    {nome: 'iphone 11', preco: 829, desconto: false},
    {nome: 'Galaxy s10', preco: 710, desconto: true}
]
let resultados61 = ebay.map(function(item){
    return item
})

let verValor = item => item.preco
resultados61 = ebay.map(verValor)
console.log(resultados61) //  829, 710

let verDesconto = item => item.desconto
console.log(ebay.filter(verDesconto)) // só o s10






