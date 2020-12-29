let cores = ['Vermelho','Azul','Roxo'];

function imprimirCores(item) {
    console.log(item)
}
cores.forEach(imprimirCores) // vermelho, azul e roxo


let colors = ['Green','Red','White'];

function verCores(mostrar) {
    console.log(mostrar)
}
colors.forEach(verCores)


////// Tabuada do 2

numbers = [1,2,3,4,5,6,7,8,9,10];

function Tabuadado2(item) {
    console.log(item*2);
}
numbers.forEach(Tabuadado2)

// Tabuada do 3

number2 = [1,2,3,4,5,6,7,8,9,10];

function Tabuadado3(item) {
    console.log(item*3)
}
number2.forEach(Tabuadado3)

// Tabuada do 4

number3 = [1,2,3,4,5,6,7,8,9,10];

function Tabuadado4(item) {
    console.log(item*4)
}
number3.forEach(Tabuadado4)
// forEach percorre os elementos do array


numbers4 = [1,2,3,4,5,6,7,8,9,10];

function Tabuada5(item) {
    console.log(item*5)
}
numbers4.forEach(Tabuada5)


// Somar
numeros = [66,78,91,85,71,80];
total = 0;

function soma(item) {
    total += item
}
numeros.forEach(soma)
console.log(total)

// tabuada do 8

let numerosi = [1,2,3,4,5,6,7,8,9,10]

function Tabuada8(indice) {
    console.log(indice*8)
}
numerosi.forEach(Tabuada8)

// Soma

numeros11 = [1,29,4,7,3,1,3]
totals = 0

function soma2(indice) {
    total += indice
}
numeros11.forEach(soma2)
console.log(total)

// Array retornando nomes com f

let cidades = ['curitiba','florianópolis',
'friburgo', 'caxias do sul',' Erechim']

marcascomc = []
newindice = 0

function selecao(item, indice) {
   if(cidades[indice].indexOf('c') == 0) {
       marcascomc[newindice] = cidades[indice]
       newindice++
   }
}
cidades.forEach(selecao)
console.log(marcascomc)
/////////////////////

let carros = ['onix','civic','corolla','Jetta']

comecacomC = []
indiceNovo = 0

function seletar(item, indice) {
    if (carros[indice].indexOf("c") == 0) {
        comecacomC[indiceNovo] = carros[indice]
       indiceNovo++ 
    }
}
    carros.forEach(seletar)
    console.log(comecacomC)


 let n1 = [1,2,3,4,5,6,7,8,9,10] 
  
 function tabuada1(indice) {
     console.log(indice*10)
 }
 n1.forEach(tabuada1)


 let n2 = [3,6,9]
 let t = 0

 function contar(item) {
     t += item
 }
 n2.forEach(contar) 
 console.log(t)


 let n3 = ['Toyota','Fiat','Ford','Mitsubishi']

 novoFiltro = []
 indicenovu = 0

 function selecionar(item, indice) {
     if(n3[indice].indexOf("F") == 0) {
         novoFiltro[indicenovu] = n3[indice]
         indicenovu++
     }
 }
 n3.forEach(selecionar)
 console.log(novoFiltro)
 console.log(JSON.stringify(n3)) // Passa para JSON


 let n4 = [11,12,13,14,15] 


 function maioresTabuda(indice) {
     console.log(indice*14)
 }
 n4.forEach(maioresTabuda)


 let n5 = [88,71,44,91,92,96]
 let t1 = 0

function somax(item) {
    t1 += item
}
n5.forEach(somax)
console.log(t1)

let n6 = [0,1,2,34,5,6,7,8,9,10,11,12,13]
let t4 = 0 

function somar(item, indice) {
    t4 += item
    n6[indice] = t4
}
n6.forEach(somar)
console.log(n6)


let nomes = ['Ana','Marcos','Rodrigo', 'Artur', 'Adão']

let comA = []

let indiceA = 0

function seletare(item, indice) {
    if (nomes[indice].indexOf("A") == 0) {
        comA[indiceA] = nomes[indice]
        indiceA++;
    }
}
nomes.forEach(seletare)
console.log(comA) // Ana artur e adão

let n10 = [34,81,91,112,183,71,89] 
let tt = 0

function somars(item) {
    tt += item
    
}
n10.forEach(somars)
console.log(tt)

let n11 = [1,2,3,4,5,6,7,8,9,10]

function tabu(item) {
    console.log(item*4)
}
n11.forEach(tabu)


let n12 = ['Jetta','civic','corolla']

function mostrare(ver) {
    console.log(ver)
}
n12.forEach(mostrare)
console.log(n12)


let n13 = ['amarok','s10','Ranger','hilux']

function ConverterMaiusculas(item, indice) {
    n13[indice] = n13[indice].toUpperCase()
}
n13.forEach(ConverterMaiusculas)
console.log(n13) // passou para maiusculo


let nomess = ['Ana','gustavo','Fernanda','Maria','Rafael']

let TamanhoNome = 0

let nome = ''

function maiorNome(item,indice) {
    if(nomess[indice].length > TamanhoNome) {
        nome = nomess[indice]
        TamanhoNome = nomess[indice].length
    }
}
nomess.forEach(maiorNome)
console.log(nome)


let names = ['Gabriel', 'Catia', 'joana','jeferson','eloisa', 'paulo']

let Tnome = 0

let nameNovo = ' '

function nomesMaiores(item, indice) {
    if(names[indice].length > Tnome) {
        nameNovo = names[indice]
        Tnome = names[indice].length
    }
}
names.forEach(nomesMaiores)
console.log(nameNovo)

let Ntabuadas = [1,2,3,4,5,6,7,8,9,10]

function verTabuada(indice) {
    console.log(indice*6)
}
Ntabuadas.forEach(verTabuada)

let marcas = ['nike','adidas', 'asics']

let tamNome = 0

let Nnovo = ' '

function VerMarca(item, indice) {
    if(marcas[indice].length > tamNome)
    Nnovo = marcas[indice]
    tamNome = marcas[indice].length
}
marcas.forEach(VerMarca)
console.log(Nnovo)

//
let tab2 = [1,2,3,4,5,6,7,8,9,10]


const taboada = function(indice) {
    console.log(indice*2)
}
tab2.forEach(taboada) // Taboada do 20


// 
let n20 = [59,88,70,67,75]
let = totalDeNotas = 0

const calcular = function(itens) {
    totalDeNotas += itens
}

n20.forEach(calcular)
console.log(totalDeNotas) // 359




let names2 = ['Rafael','Miguel','Jean','Gabriel']

let nMaior = []

let inova = 0



const verMaior = function(item, indice) {
     if(names[indice].length > nMaior)
     inova = names2[indice]
     nMaior = names2[indice].length

} 

names2.forEach(verMaior)
console.log(inova) // gabriel




let p12 = [1,2,3,4,5,6,7,8,9,10]

function tabu(item) {
    console.log(item * 2)
}
p12.forEach(tabu)



let nnx = [1,2,3,4,5,6,7,8,9,10]

function taboada2(item) {
    console.log(item*7)
}
nnx.forEach(taboada2)
