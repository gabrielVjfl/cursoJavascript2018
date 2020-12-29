let numeros = [1,2,3,4,5,6,7,8,9,10]



let dobrar = t => t * 2
ver = numeros.map(dobrar)
console.log(ver)

let tres = t => t * 3
ver = numeros.map(tres)
console.log(ver)

//////////////////////////////////////////////

const loja = [
    {nome: 'Notebook dell 14', preco: 3199},
    {nome: 'Galaxy s10', preco: 4899},
    {nome: 'Apple macbook air', preco: 8299}
]



const verPreco = produto => produto.preco
const verResultado = loja.map(verPreco)
console.log(verResultado)

total = 0

function somar(item) {
    return total += item
}
verResultado.forEach(somar)
console.log(total)


const verMarca = produto => produto.nome

const verResultado2 = loja.map(verMarca)
console.log(verResultado2)

const dobrarValor = produto => produto.preco * 2 // se quiser dobrar o valor
const verResultado3 = loja.map(dobrarValor)
console.log(verResultado3)



const importados = [
{nome: 'Honda civic touring', valor: 28.000},
{nome: 'Bmw serie 3', valor: 40.200},
{nome: 'Sentra S', valor: 18.500},
{nome: 'rav4 hybrid', valor: 32.900},
{nome: 'Ranger 2.3 T', valor: 38.900},
{nome: 'Prius', valor: 24.900}
]

const verCotacao  = produto => produto.valor * 4.16.toFixed(0)
const verResultado4 = importados.map(verCotacao)
console.log(verResultado4)


const importadosUsados = [
    {nome: 'Sentra s 2014', valor: 8.399},
    {nome: 'Carnival 2009', valor: 4.199},
    {nome: 'Focus 2.0 2014', valor: 7.999},
    {nome: 'Serie 3 2014', valor: 15.300},
    {nome: 'Sentra Sl 2015', valor: 10.200},
    {nome: 'Sentra Sv 2008', valor: 3.400}
]

let santaCatarina = importadosUsados.map(function(produto){  // Tem q usar let
    return produto
})

const verCotacao2 = produto => produto.valor * 4.16.toFixed(0)
santaCatarina = importadosUsados.map(verCotacao2)
console.log(santaCatarina)






const digitos = [1,2,3,4,5,6,7,8,9,10]

let rs = digitos.map(function(n){
    return n
})

const quintar = n => n * 5
rs = digitos.map(quintar)
console.log(rs)


const acresentar = n => n + 100
rs = digitos.map(acresentar)
console.log(rs)



const real = n => `R$ ${parseFloat(n).toFixed(2).replace(',','.')}`
rs = digitos.map(real)
console.log(rs)


// Pegar só os preços

const amazon = [
  {produto: 'Redmi 7', preco: 1299},
  {produto: 'Iphone 11', preco: 8499},
  {produto: 'Galaxy s10', preco: 4899},
  {produto: 'Notebook miBook ultra',preco: 5199}
]

let guardar = amazon.map(function(produto){
    return produto
})

let verPrecoo = produto => produto.preco
guardar = amazon.map(verPrecoo)
console.log(' Os preços na amazon são esses', guardar)


let imposto = produto => produto.preco + 82
guardar = amazon.map(imposto)
console.log('Com imposto',guardar)


const submarino = [
    {nome: 'Motorola moto G', categoria: 'Celulares', valor: 1899},
    {nome: 'Tv lg 48p', categoria: 'Televisões', valor: 4899},
    {nome: 'Notebook dell ispiron 14', categoria: 'Notebook', valor: 3699},
    {nome: 'Fone  Jbl tune110', categoria: 'Musica', valor: 89},
]

let teste = submarino.map(function(produto){
    return produto
})

let verCategoria = produto => produto.valor
teste = submarino.map(verCategoria)
console.log(teste)

ttotal = 0

function somarx(item) {
    return ttotal += item
}
teste.forEach(somarx)
console.log('O valor total deu',ttotal,'R$') // Total de dinheiro















