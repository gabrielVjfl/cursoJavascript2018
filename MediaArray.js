let c = [3,9,11,19,24,29,34,71]

const somar = c.reduce(function(x, y) {
    return x+=y
})
console.log(somar) // 200

let media = somar / 8
console.log(media) // 25


const comprasAmazon = [
    {nome: 'Redmi 7', preco: 1299},
    {nome: 'Macbook', preco: 2899},
    {nome: 'Iptv', preco: 400},
]
const somar2 = comprasAmazon.map(a => a.preco).reduce(function(x,y) {
    return x+=y
})
console.log(somar2)

const media2 = Math.round(somar2 / 3)
console.log(media2) // 1533



let cc = [4,6,2]

cc[3] = 'Sandra'
console.log(cc)

for(let cx in cc) {
    console.log(`${cx}, ${cc[cx]}`)
}


// MÉDIA!!!!!!!!!!!!!!!!!!

let a2 = [5,11,23,1,21,31,24]

let somar3 = a2.reduce(function(x,y) {
    return x+=y
})
console.log(`A soma é de ${somar3}`)

let media10 = somar3 / a2.length
console.log(`Sua média é de ${Math.round(media10)}`) // media 17



// MÉDIA ARRAY COM OBJETOS

const blackFriday = [
    {nome: 'Sentra s', valor: 14800},
    {nome: 'Tracker premier', valor: 23500},
    {nome: 'Sentra premier', valor: 25000}
]
let pegarNome = blackFriday.map(a => a.nome)

let pegaremDolar = blackFriday.map(c => c.valor * 4.20)
console.log(`${pegarNome}, ${pegaremDolar}`)



