const alunos = [ // Os alunos são objetos
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
// Aplicar uma função reduce

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) // Colocou aqui mais não é preciso, só para ver o comportamento
    return acumulador + atual

},10) // Se quiser passar um valor inicial EX 10 OU colocar um array }, [16,47,52,81] )

console.log('Valor somado', resultado) // 45


const litoral = [
    {nome: 'Itajai', populacao: 365},
    {nome: 'Balneario camboriu', populacao: 162},
    {nome: 'Camboriu', populacao: 91},
    {nome: 'Guaratuba', populacao: 112},
    {nome: 'Itapoa', populacao: 38},
    {nome: 'Antonina', populacao: 22},
    {nome: 'Morretes', populacao: 42},
    {nome: 'Tijucas', populacao: 78},
    {nome: 'Guaratuba', populacao: 71},
]
const resultado2 = litoral.map(c => c.populacao).reduce(function(acumulador, atual){
    return acumulador + atual
})
console.log(resultado2)

const semestres = [
    {nome: 'Portugues', nota: 70},
    {nome: 'Matematica', nota: 65},
    {nome: 'Ingles', nota: 81},
    {nome: 'Geografia', nota: 92},
    {nome: 'Ciencias', nota: 77}
]
const resultados3 = semestres.map(s => s.nota).reduce(function(acumulador, indice){
    return acumulador += indice
} )
console.log(resultados3) // 385


const pessoass = [
    {nome: 'Rafael', salario: 3500},
    {nome: 'Paula', salario: 4200},
    {nome: 'Sandro', salario: 5800},
    {nome: 'Ana', salario: 2900}
]
const menoresSalario = pessoass.filter(c => c.salario < 3700) // vai filtrar os menores
console.log(menoresSalario) 



