const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

/*
Caso tente acessar um indice que não existe no array ele retorna um undefined
*/

valores[4] = 10
console.log(valores[4])

console.log(valores) // Mostra o array inteiro
console.log(valores.length) // Tamnho do array

valores.push(20) // Adiciona valor no array
valores.push({id: 3}, false, null, 'teste') // Pode adicionar diversos tipos de valores no mesmo array

console.log(valores)

console.log(valores.pop()) // Remove o ultimo indice do array e retorna ele

delete valores[0] // Remove o indice informado
console.log(valores)

console.log(typeof valores)