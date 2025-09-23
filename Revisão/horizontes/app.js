// Crie uma aplicação que receba 5 números
// e exiba a soma com a seguinte frase:
// "Os números digitados foram ..., ..., ..., ... e sua soma é ...

let numero1 = parseFloat(prompt("Digite o primeiro número: "))
let numero2 = parseFloat(prompt("Digite o segundo número: "))
let numero3 = parseFloat(prompt("Digite o terceiro número: "))
let numero4 = parseFloat(prompt("Digite o quarto número: "))
let numero5 = parseFloat(prompt("Digite o quinto número: "))

let soma = numero1 + numero2 + numero3 + numero4 + numero5

console.log(soma)

document.getElementById('resultado').innerHTML = `
<p>
    Os números digitados foram ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}, e sua soma é ${soma}.
</p>
`