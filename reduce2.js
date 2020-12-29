const alunos = [ // Os alunos são objetos
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// Todos os Alunos são bolsistas??
const todosBolsista = alunos.map(c => c.bolsista).reduce(function(acumulador, bolsa){
    return acumulador && bolsa
})
 console.log(todosBolsista)  // FALSE

// Algum aluno é bolsista

const algumBolsista = alunos.map(f => f.bolsista).reduce(function(acumulador, bolsa){
    return acumulador || bolsa
})
console.log(algumBolsista) // TRUE



const carros = [
    {modelo: 'Honda civic lxs', preco: 32000, ano: 2009, automatico: false},
    {modelo: 'Toyota corolla xei', preco: 39000, ano: 2009, automatico: true},
    {modelo: 'Honda fit ex', preco: 38000, ano: 2011, automatico: false},
    {modelo: 'Jetta Trendline', preco: 59900, ano: 2017, automatico: true}
]

let soAutomatcos = carros => carros.automatico
console.log(carros.filter(soAutomatcos))

let ano = carro => carro.ano == 2009
console.log(carros.filter(ano))

let maisBaratos = carro => carro.preco < 35000
console.log(carros.filter(maisBaratos))


const resultados79 = carros.map(v => v.preco).reduce(function(carro, aut){
    return carro += aut
})
console.log('My result',resultados79)



const resultados99 = carros.map(l => l.ano === 2009).reduce(function(x,y){
    return x || y // tem algum 2009, && => todos são 2009
})
console.log('O  resultado e ',resultados99) // true





