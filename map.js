const nums = [1,2,3,4,5]

// MAP é um FOR com proposito
let resultado = nums.map(function(teste) {
    return teste * 2 // de 2 em 2
})
console.table(resultado) // 2 4 6 8 10 


const soma10 = teste => teste + 10
const quadruplo = teste => teste * 4
const paraReal = teste => `R$ ${parseFloat(teste).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(quadruplo).map(paraReal)
console.table(resultado)


/////////////////////////////////////////

const numeros = [10,20,30,40,50]

let resultados2 = numeros.map(function(test) {
    return test * 2
})
console.table(resultados2) // 20, 40, 60, 80, 100

const soma20 = test => test + 20
resultados2 = numeros.map(soma20)
console.table(resultados2) // 30 40 50 60 70 

const multi = test => test * 8
resultados2 = numeros.map(multi)
console.table(resultados2)

const paraReals = test => `R$ ${parseFloat(test).toFixed(2).replace('.' , ',')}`
resultados2 = numeros.map(soma20).map(multi).map(paraReals) // resultado geral
console.table(resultados2)







const aleatorio = [3,9,11,17,21,29]

let resultados3 = aleatorio.map(function(teste2) {
    return teste2 * 3
}) 
console.table(resultados3)

let dobrar = teste2 => teste2 * 2
resultados3 = aleatorio.map(dobrar)
console.table(resultados3)

let divindi = teste2 => teste2 / 2
resultados3 = aleatorio.map(divindi)
console.table(resultados3)


const real = teste2 => `R$ ${parseFloat(teste2).toFixed(2).replace('.',',')}`
console.table(resultados3)


resultados3 = aleatorio.map(dobrar).map(real)
console.table(resultados3)




const numerys = [1,2,3,4,5,6,7,8,9,10]

let floripa = numerys.map(function(x){
    return x * 4
})
console.log(floripa)

numerys.push(200)


let minuir = x => x - 3 // diminui menos 3
floripa = numerys.map(minuir)
console.table(floripa)




const numeross = [1,2,3,4,5,6,7,8,9,10,11,12]

let sjose = numeross.map(function(sc) {
    return sc
})

let duplo = lc => lc * 5
sjose = numeross.map(duplo)
console.log(sjose)

let somas = sc => sc + 70
sjose = numeross.map(somas)
console.log(sjose)

let dim = sc => `R$ ${parseFloat(sc).toFixed(2).replace(',','.')}`
sjose = numeross.map(dim)
console.log(sjose)


const nx = [1,2,5,6,8,10,12]

let jrere = nx.map(function(pr) {
    return pr
})

let dobri = pr => pr * 2
jrere = nx.map(dobri)
console.table(jrere)


let reals = nx => `R$ ${parseFloat(nx).toFixed(2).replace('.',',')}`
jrere = nx.map(dobri).map(reals)
console.table(jrere)

let numerosxx = [1,2,3,4,5,6,7,8,9,10,11] 

let daniela = numerosxx.map(function(y){
     return y
})
    

let d = y => y * 2
daniela = numerosxx.map(d)
console.table(daniela)




let numberx = [1,2,3,4,5,6,7,8,9,10]

let ver = numberx.map(function(i){
    return i
})

let dobreu = i => i * 2
ver = numberx.map(dobreu)
console.log(ver)

let oito = i => i * 8
ver = numberx.map(oito)
console.log(ver)



let n1 = [40,60,80,100,120,140]

let verr = n1.map(function(l){
    return l
})
let dobrarr = l => l * 2
verr = n1.map(dobrarr)
console.log(verr)


let nove = l => l / 3
verr = n1.map(nove)
console.log(verr)



let numerosInt = [1,2,3,4,5,6,7,8,9,10]

let resultado10 = numerosInt.map(function(item){
    return item 
})

let sextoplar = item => item * 6
resultado10 = numerosInt.map(sextoplar)
console.log(resultado10)



const pessoas2 = [
    {nome: 'Amarildo', pais:'Espanha', cargo: 'Gerente'},
    {nome: 'Rafael', pais:'brasil', cargo: 'Analista bi'},
    {nome: 'Marcos', pais: 'Uruguai', cargo: 'Advogado'}
 ]

 let resultadosDigitais = pessoas2.map(function(teste){
     return teste
 })
 console.table(resultadosDigitais)
 const getNome = teste => teste.nome
resultadosDigitais = pessoas2.map(getNome)


 const getPais = teste => teste.pais
 resultadosDigitais = pessoas2.map(getPais)

resultadosDigitais = pessoas2.map(getNome).map(getPais)
console.log(resultadosDigitais)