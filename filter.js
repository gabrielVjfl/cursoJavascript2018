// Map tem um array e transorma em outro..... mantém o original!, Obs só preços, só o dobro

// Filter filtra um array!, ex preços maiores do que 2500

const axios = require('axios')

const produtos = [
    {nome: 'Notebook dell', preco: 2899, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false}

]
///// Filtrar

console.log(produtos.filter(function(p) {
    // return p.nome == 'Copo de vidro', retorna os copos de vidro, return p.preco > 500
    return false 
}))

// Filtrar só os caros e frageis

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil // ele retorna só o fragil

console.log(produtos.filter(caro).filter(fragil)) // Notebook e ipad, mostra os caros e frageis apenas





const produtos2 = [
    {nomes: 'Notebook acer aspire3', valor: 3199},
    {nomes: 'Ipad air', valor: 5299},
    {nomes: 'Notebook Positivo', valor: 899},
    {nomes: 'galaxy s8', valor: 2299}
]

console.log(produtos2.filter(function(k) {
 
}))

const maisCaro = produtos => produtos.valor >= 3199

console.log('Os mais caros são', produtos2.filter(maisCaro))

const maisBarato = produtos => produtos.valor <= 2299
console.log('Os mais baratos são', produtos2.filter(maisBarato))


const xc60 = [
    {modelo: 'T5', valor: 272.990},
    {modelo: 'T6', valor: 317.990},
    {modelo: 'D5', valor: 324.990},
    {modelo: 'T8 Polstar', valor: 384.990}
]

const volvoBarato = carros => carros.valor <= 300.000

console.log('Os volvos mais baratos são', xc60.filter(volvoBarato))




 axios.get('http://localhost:8240/api/produto/list').then(response => {
     

let json = response.data

console.log('Json', json)

// Filter menor quantidade
const menasQuantidade = json.filter(p => p.quantidade <=3)

console.log('Pouca quantidade', menasQuantidade)


// Filter pelo nome
const appleWatch = json.filter(p => p.name == 'apple watch 46mm')

console.log('Meu apple watch', appleWatch)

// filter, menores preços

const menoresPreços = json.filter(c => c.preco < 2.900)

console.log('Menores preços', menoresPreços)


// Reduce, acumulador de preço
const acumularPreco = json.map(p => p.preco).reduce((acumulador, atual) => {
    return acumulador + atual
})
console.log('R$', acumularPreco)

// só os names, map
let sonames = json.map(p => p.name)

console.log('Só os names', sonames)

 }).catch(err => {
     console.log(err)
 })


 



    
   


