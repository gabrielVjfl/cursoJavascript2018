const produtos = [
{nome: 'galaxy s10', valor: 5899, marca: 'samsung'},
{nome: 'iphone xs', valor: 8499, marca: 'apple'},
{nome: 'Note 10', valor: 8799, marca: 'samsung'},
{nome: 'iphone 7', valor: 1899, marca: 'apple'},
{nome: 'galaxy s8', valor: 2099, marca: 'samsung'},
{nome: 'Notebook dell 14', valor: 4299, marca: 'dell'}
]

const caro = produto => produto.valor >= 5899

const samsung = produto => produto.marca == 'samsung' // os mais caros da samsung

console.log(produtos.filter(caro).filter(samsung)) // galaxy s10 e note 10



const barato = produto => produto.valor <= 4299
console.log('Os mais baratos são esses', produtos.filter(barato))



const onix = [
    {nome: 'Onix s 90 cv', preco: 48.990, turbo: false},
    {nome: 'Onix sv 90 cv', preco: 52.990, turbo: false},
    {nome: 'Onix sv 135 cv', preco: 59.990, turbo: true},
    {nome: 'Onix premier 135cv', preco: 64.990, turbo: true},
    {nome: 'Onix premier 135cv At', preco: 70.990, turbo: true}
]

const maisBaratos = automovel => automovel.preco <= 60.000
const turbao = automovel => automovel.turbo
console.log(onix.filter(maisBaratos).filter(turbao)) // Vai aparecer só os turbos menos de 60mil


const onixSedan = [
    {nome: 'S 1.4 108cv', preco: 53.990},
    {nome: 'Sv 1.4 108cv', preco: 58.990},
    {nome: 'Sv 1.0T 135 cv', preco: 64.990},
    {nome: 'Premier 1.0T 135cv', preco: 69.990},
    {nome: 'Premier 1.0T 135cv', preco: 75.990},
]

const maisBaratos2 = automovel => automovel.preco <= 65.000
console.log(onixSedan.filter(maisBaratos2))


const corolla = [
  {modelo: 'S 2.0 171cv', preco: 94.990},
  {modelo: 'Sv 2.0 171cv', preco: 109.990},
  {modelo: 'Premier 2.0 171 cv', preco: 121.990},
  {modelo: 'Premier hybrid 205cv', preco: 139.990},
]

const maisBaratos3 = automovel => automovel.preco <= 115.000
console.log(corolla.filter(maisBaratos3))


const cidades = [
    {nome: 'Curitiba', populacao: 1982, capital: true},
    {nome: 'Florianópolis', populacao: 501, capital: true},
    {nome: 'Maringa', populacao: 653, capital: false},
    {nome: 'Porto Alegre', populacao: 1483, capital: true},
    {nome: 'Caxias do sul', populacao: 432, capital: false},
    
]

// Fazer um Filtro

const ver1 = municipio => municipio.populacao >= 600
const ver2 = municipio => municipio.capital

console.log(cidades.filter(ver1).filter(ver2))


   // const c = (populacao) => {
     // if(populacao >= 800) {
         // console.log('Cidade grande')
      // }
    //  else if(populacao <= 700) {
         // console.log('Cidade pequena')
    //  }
 // }
  // c(610)
   
         

  const listaNotebook = [
      {nome: 'Dell inspiron 14', valor: 3.299, marca: 'Dell'},
      {nome: 'Acer aspire5s', valor: 2.999, marca: 'Acer'},
      {nome: 'Lenovo ideapad 340', valor: 2.799, marca: 'Lenovo'},
      {nome: 'Dell inspiron 15', valor: 3.699, marca: 'Dell'},
      {nome: 'Acer aspire 6', valor: 3.299, marca: 'Acer'},
      {nome: 'Lenovo yoga Y200', valor: 3.199, marca: 'Lenovo'},
  ]
  let apenasMarca = produto => produto.marca === 'Dell' // mostra só os dell
  console.log(listaNotebook.filter(apenasMarca))

  let menoresPrecos = produto => produto.valor <= 3.199
  console.log('Os menores preços são', listaNotebook.filter(menoresPrecos)) // os menores preços são

  let maioresPrecos = produto => produto.valor >= 3.299
  console.log('Os maiores preços são', listaNotebook.filter(maioresPrecos)) // Mostra os maiores precos

 

  // Filter tira os elementos de um arrayç

  const trailfull = [
   {modelo: 'S', preco: 119.990, automatica: false},
   {modelo: 'Sv', preco: 149.990, automatica: true},
   {modelo: 'Sx', preco: 172.900, automatica: true},
   {modelo: 'Trailhawalk', preco: 212.990, automatica: true},
  ]
     
  const verPreco = carro => carro.preco <= 150.000

  const automatica = carro => carro.automatica

console.log(trailfull.filter(verPreco).filter(automatica)) // SV 

const ciidade = [
  {cidade: 'Campo Grande', fundacao: '1930'},
  {cidade: 'Londrina', fundacao: '1948'},
]

const points = [
  {
    name: "Ponto de Reciclagem Cacupé",
    email: "Gabvoes.10@gmail.com",
    whatsapp: "48 91213577",
    endereco: "Rua das palmeiras",
    numero: 102,
    title: "Pilhas e Baterias"
  },
  {
    id: 1,
    name: "Ponto de Reciclagem Cacupé",
    email: "Gabvoes.10@gmail.com",
    whatsapp: "48 91213577",
    endereco: "Rua das palmeiras",
    numero: 102,
    title: "Papéis e Papelão"
  }
]
