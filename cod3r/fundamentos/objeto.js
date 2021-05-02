/*
Objeto é uma coleção de pares chave e valor
os valores podem ser numericos, textuais, array ou logicos

{ nome: 'Celular Ultra Mega', preco: 4998.9 }

chave = nome
valor = Celular Ultra Mega
*/

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Não é recomendado usar espaços

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.00,
  obj : {
    blabla: 1,
    obj: {
      blabla: 2,
    }
  }
}

console.log(prod2)

const prod3 = "{ nome: 'Celular Ultra Mega', preco: 4998.9 }" // Está criando uma string não um object
console.log(prod3)

console.log(typeof prod1)
console.log(typeof prod2)
console.log(typeof prod3)