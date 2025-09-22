// Solicita o primeiro número e o converte para float.
let numero1 = parseFloat(prompt("Digite o primeiro número: "))

// Solicita o segundo número e o converte para float.
let numero2 = parseFloat(prompt("Digite o segundo número: "))

// Solicita o terceiro número e o converte para float.
let numero3 = parseFloat(prompt("Digite o terceiro número: "))

// Solicita o quarto número e o converte para float.
let numero4 = parseFloat(prompt("Digite o quarto número: "))

// Solicita o quinto número e o converte para float.
let numero5 = parseFloat(prompt("Digite o quinto número: "))

// Soma todos os cinco números e armazena o resultado na variável 'soma'.
let soma = numero1 + numero2 + numero3 + numero4 + numero5

// Imprime o valor da 'soma' no console do navegador para depuração.
console.log(soma)

// Seleciona um elemento HTML com o ID 'resultado' e atualiza seu conteúdo.
document.getElementById('resultado').innerHTML = `
    <p>
        Os números digitados foram ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, e sua soma é ${soma}.
    </p>
`