// Criar um ARRAY

Array.prototype.map2 = function(callback) { // MAP GERA UM NOVO ARRAY
   const newArray = []
   for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
   }
   return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 43.90 }',
    '{"nome": "Caneta", "preco": 7.50 }',
] 

// reformar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)


total = 0

function soma(item) {
    total += item
}
resultado.forEach(soma)
console.log(total.toFixed(0))



const lojaApple = [
    {nome: ' Iphone 11 pro', preco: 9299},
    {nome: ' Apple watch 4v', preco: 6899},
    {nome: ' Macbook pro', preco: 14990},
]
const verPreco = produto => produto.preco

const verResultado2 = lojaApple.map(verPreco)
console.log(verResultado2)

t = 0

function somar(item) {
    t += item
}
verResultado2.forEach(somar)
console.log(' O total de compra ficou em', t)

const lojaPontoFrio = [
    {nome: ' Tv lg 58p', preco: 5799},
    {nome: ' Galaxy s10', preco: 5299},
    {nome: ' Notebook dell 14', preco: 4899}
]

const verOpreco = produto => produto.preco

const resultado5 = lojaPontoFrio.map(verOpreco)
console.log(resultado5)

