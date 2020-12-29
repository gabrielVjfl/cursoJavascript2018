const produtos = [
    {modelo: 'Honda civic lx', preco: 19500},
    {modelo: 'Honda hrv 1.5 T', preco: 27800},
    {modelo: 'Sentra S', preco: 18000},
    {modelo: 'Armada premier', preco: 48900},
]

const produtosEmReais = produtos.map(p => p.preco * 4.20).reduce((a,b) => a + b, 0) // Soma com valor em dolares ja

console.log(produtosEmReais)



//////// OOOOOOOOUUUUUUUUUUU

let resultados1 = produtos.map(function(item){
    return item
})

let soReais = item => item.preco * 4.20
resultados1 = produtos.map(soReais).reduce((a,b) => a + b,0)
console.log('Os preços são',resultados1)


const usados = [
{nome: 'Jetta 2.0T', preco: 4200, ano: 2009},
{nome: 'Sentra S', preco: 3250, ano: 2008},
{nome: 'serie 3', preco: 6100, ano: 2008},
]

const soPrecosConvertidos = usados.map(a => a.preco * 4.20).reduce((x,y) => x + y, 0)

console.log(soPrecosConvertidos)







const usados2 = [
    {nome: 'carnival', preco: 4500, ano: 2009},
    {nome: 'Sentra Sl', preco: 7600, ano: 2013},
    {nome: 'serie 3', preco: 14000, ano: 2013},
    ]
 
    let resultadosDigitais = usados2.map(function(item){
        return item
    })
    let verImport = item => item.preco * 4.20
    resultadosDigitais = usados2.map(verImport)
    console.log(resultadosDigitais)


    let Soma = usados2.map(c => c.preco).reduce(function(a,b){
        return a += b
    })
    console.log('A soma é de', Soma)

    // filter

    let filtro = item => item.ano == 2013
    console.log(usados2.filter(filtro))


    
    const gerentes = [
        {nome: 'Fernando bastos', salario: 21200},
        {nome: 'Ana oliva shultz', salario: 22000},
        {nome: 'André bonetto', salario: 17000},
    ]

      const resultados10 = gerentes.map(teste => teste.salario - 450).reduce((a,b) => a+b)

      console.log('Novos salarios',resultados10) // mostra os salarios menos 450

      const resultados11 = gerentes.map(e => e.salario).reduce(function(x,y) {
          return x+=y
      })
      console.log(resultados11)