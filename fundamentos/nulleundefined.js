/*
A constante "a" não recebeu o valor do objeto
ela recebeu o endereço que aonde ele está localizado
*/
const a = {name: 'Teste'}

const b = a
b.surname = 'Teste'

/*
Quando eu altero a constante "b" afeta tambem a "a"
ambas estão apontando para o mesmo endereço de objeto
*/
console.log(a)
console.log(b)

let c = 3
/*
Como está tratando de valor primitivo
a variavel "d" recebeu o valor não o endereço
*/
let d = c
d++
console.log(c)
console.log(d)