console.log("Armazenando função em variavel")
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma()
imprimirSoma(2, 3, 4, 5, 6)

console.log("Armazenando uma função arrow em uma variavel")
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
console.log(soma(2, 3, 4, 5, 6))

console.log("Retorno implicito")
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))
console.log(subtracao(2))
console.log(subtracao())
console.log(subtracao(2, 3, 4, 5, 6))