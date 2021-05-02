/*
undefined = Não foi atribuido nada para a variavel, ela ainda não foi inicializada
*/
let valor // não inicializada
console.log(valor)

/*
null = A variavel foi inicializada mas não possue valor e nem aponta para um endereço com valor
*/
valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco) // vai retornar undefined porque o objeto já foi definido

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)