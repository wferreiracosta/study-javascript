const nome = 'Rebeca'
const concatenacao = 'Ola'+nome+'!'
const template = `
  Ola
  ${nome}!
`
console.log(concatenacao)
console.log(template)

// expressoes
console.log(`1 + 1 = ${1+1}`)

// texto = parametro da função
//Função arrow
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}`)