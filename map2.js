const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 43.90 }',
    '{"nome": "Caneta", "preco": 7.50 }',
] 

// reformar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

// somar

total = 0;

function soma(item) {
    total += item
}
resultado.forEach(soma)
console.log(total)



const carrinho2 = [
    '{ "nome": "Iphone11", "preco": 9299}',
    '{"nome": "MacbookproX", "preco": 17990}',
    '{"nome": "AppleWatch4", "preco": 5499}',
]

const paraObjeto2 = json => JSON.parse(json)

const verPreco = product => product.preco

const final = carrinho2.map(paraObjeto2).map(verPreco)
console.log(final)

te = 0

function somarr(items) {
    te += items
}
final.forEach(somarr)
console.log(te.toFixed(0), 'Na loja da Apple')











const samsungStore = [
    {nome: 'Galaxys10', preco: 5899},
    {nome: 'Galaxy book xe', preco: 10990},
    {nome: 'Galaxy watch S', preco: 2999}
]

const olharPreco = produ => produ.preco

const resultado2 = samsungStore.map(olharPreco)
console.log(resultado2)


tr = 0

const somax = function(item) {
    tr += item
}
resultado2.forEach(somax)
console.log(tr,'Na loja da Samsung')





const lojaAsus = [
    {nome: 'Zenfone 6', preco: 4399},
    {nome: 'Zenbook Xd800', preco: 8799},
    {nome: ' Zenwatch 6', preco: 2399}
]
const soPrecos = produtos => produtos.preco

const resultados3 = lojaAsus.map(soPrecos)
console.log(resultados3)

xs = 0

const s = function(item) {
    xs += item
}
resultados3.forEach(s)
console.log(xs)





const lojaPontoFrio = [
    {nome: 'Tv lg 48 p', valor: 5799},
    {nome: 'Notebook dell inspiron 15', valor: 4399},
    {nome: 'Iphone xs plus', valor: 7899},
    {nome: 'S10' , valor: 5499}
]
const verOPreco = produto => produto.valor
const resultado5 = lojaPontoFrio.map(verOPreco)
console.log(resultado5)

TotalValor = 0 

function somarTudo(itens) {
    TotalValor += itens
}
resultado5.forEach(somarTudo)
console.log('O preço é de ',TotalValor)




