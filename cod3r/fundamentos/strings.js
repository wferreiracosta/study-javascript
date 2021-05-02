const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega o caractere do espaço 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Vai no espaço 3 pega o caractere e retorna o codigo unicode
console.log(escola.indexOf('3')) // Retorna se existir o caractere na string
console.log(escola.substring(1)) // Pega apartir do espaço 1
console.log(escola.substring(0, 3)) // Pega do carctere no espaço 0 até o espaço 3 sem incluir o 3
console.log('Escola '.concat(escola)) // Concatena
console.log(escola.replace('3','e')) // Faz substituição
console.log('Ana,Carlo,Bruno'.split(',')) // Faz a separação conforme o caractere informado