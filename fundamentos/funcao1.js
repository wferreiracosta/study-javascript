// Função sem retorno
/*
Uma função é um verbo, uma ação, ela executa um processo baseado nas sentenças de codigo
Ela define um bloco associado
O bloco é o corpo e possue as sentenças que seram executadas
Função é a coisa mais importante do Javascript
*/
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

/*
Vai pegar os dois primeiros e o resto vai ignorar
so tem duas variaveis então so usa dois numeros
*/
imprimirSoma(2, 3, 4, 5, 6)

// Função com retorno
// b = 0 define o valor "0" como padrão da variavel caso não seja informado
function soma(a, b = 0) {
  return a + b
}

console.log(soma(5, 6))
console.log(soma(5))
console.log(soma(5, 6, 7, 8))